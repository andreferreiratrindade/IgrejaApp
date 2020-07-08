import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';
import { Constants } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PrestadorRepServiceService extends BaseRepository {

  RecuperaPestadoresPorCidadeEhUF(ufSelecionado: string, cidadeSelecionado: string):Promise<any[]> {
    return new Promise((resolve, reject) => {
     var query =  this.db.collectionGroup("prestador")
        .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.Form2)
        .where("uf", "==", ufSelecionado)
        if(cidadeSelecionado){
          query.where("cidade", "==", cidadeSelecionado)
        }
        query.get().then(result => {
          let lst = [];
          result.forEach(function (doc) {           
            lst.push(doc.data());
          });
          resolve(lst)
        });
    });
  }

  RecuperaCidadePrestadorDisponiveis(ufSelecionado: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.collectionGroup("prestador")
        .where("uf", "==", ufSelecionado)
        .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.Form2)
        .get().then(result => {

          let lst = [];
          result.forEach(function (doc) {
            console.log(doc.data());
            if (!lst.includes(doc.data().cidade)) {
              lst.push(doc.data().cidade);
            }
          });
          resolve(lst)
        });
    });
  }

  recuperaUfPrestadorDisponiveis(): Promise<any[]> {

    return new Promise((resolve, reject) => {
      this.db.collectionGroup("prestador")
        .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.Form2)
        .get().then(result => {
          let lst = [];
          result.forEach(function (doc) {
            console.log(doc.data());
            if (!lst.includes(doc.data().uf)) {
              lst.push(doc.data().uf);
            }
          });
          resolve(lst)
        });
    });
  }

  AdicionaPrestador(prestador: any): Promise<any> {
    return this.db.collection("usuario").doc(prestador.uid).collection("prestador").doc().set({ ...prestador });
  }
}
