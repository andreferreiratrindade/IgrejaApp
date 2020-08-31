import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class IgrejaRepService extends BaseRepository {

  constructor() {
    super();

    this._collectionName = "igreja";
  }

  RecuperaIgrejasPorEndereco(uf: string, cidade: string, bairro: string): Promise<any[]> {
    return new Promise<any>((resolve, reject) => {
      let query = this.db.collection('igreja')
        .where("uf", "==", uf);

      if (cidade) {
        query = query.where("cidade", "==", cidade)
      }

      if (bairro) {
        query = query.where("bairro", "==", bairro)
      }

      query.get()
        .then((result) => {

          let lst = [];
          result.forEach(function (doc) {

            lst.push(doc.data());

          });
          resolve(lst)
        })
        .catch((err) => {
          reject(err);
        });
    });

  }

  AdicionaNovaIgreja(item: any, id: string): Promise<any> {

		let idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
    item.id = idTemp;
    item.igrejaId = idTemp;
		return new Promise((resolve, reject) => {
			this.db.collection(this._collectionName)
				.doc(idTemp)
				.set({ ...item }, {merge: true})
				.then((obj: any) => {
					resolve(obj);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}


  RecuperaIgrejaPorAdministrador(usuarioId): Promise<any[]> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('igreja')
        .where("administradores", "array-contains", usuarioId)
        .get()
        .then((result) => {
          let lst = [];
          result.forEach(function (doc) {

            lst.push(doc.data());

          });
          resolve(lst)
        })
        .catch((err) => {
          reject(err);
        });
    });

  }

  RecuperaIgrejasPorCidade(cidade: string): Promise<any[]> {

    return this.find({ elemento: "cidade", tipoComparacao: "==", comparacao: cidade });
  }

  RecuperaNomeIgreja(igrejas: string[]): Promise<any[]> {

    // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
    return this.find({ elemento: "id", tipoComparacao: "in", comparacao: igrejas });
  }

  RecuperaTodasAsIgrejas(): Promise<any[]> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this._collectionName)
        .get()
        .then((result) => {
          let lst = [];
          result.forEach(function (doc) {
            lst.push(doc.data());
          });
          resolve(lst)
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  RecuperaIgrejaPorIgrejaId(igrejaId : string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this._collectionName).doc(igrejaId)
        .get()
        .then((result) => {

          resolve(result.data());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
