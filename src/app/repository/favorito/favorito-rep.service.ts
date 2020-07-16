import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class FavoritoRepService extends BaseRepository {
  AdicionaPrestadorFavorito(prestadorUsuarioId: string, usuarioId: any): Promise<any> {
    let ref = this.db.collection("favorito").doc(usuarioId)
    let obj = [{prestadorUsuarioId : prestadorUsuarioId, usuarioId:usuarioId}];
  
    return new Promise<any>((retorno, reject) => {
    this.db.runTransaction(transaction => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(ref).then(doc => {

            let favorito = doc.data();
            if (!favorito.prestadores) {
              favorito.prestadores = [obj];
                transaction.set(ref, favorito);
            } else {
                favorito.prestadores = favorito.prestadores.filter(y => { return y.prestadorUsuarioId != prestadorUsuarioId });
                favorito.prestadores.push(obj);
                transaction.update(ref, favorito);
            }
        });
    }).then(function () {
        retorno()
    }).catch(function (error) {
        reject(error)
    });
});
}

RemovePrestadorFavorito(prestadorUsuarioId: string, usuarioId: any): Promise<any> {
  let ref = this.db.collection("favorito").doc(usuarioId)
  let obj = [{prestadorUsuarioId : prestadorUsuarioId, usuarioId:usuarioId}];

  return new Promise<any>((retorno, reject) => {
      this.db.runTransaction(transaction => {
          // This code may get re-run multiple times if there are conflicts.
          return transaction.get(ref).then(doc => {
              let prestadores = []
              prestadores = doc.data().prestadores;
              prestadores = prestadores.filter(y => { return y.prestadorUsuarioId != prestadorUsuarioId });
              transaction.update(ref, { prestadores: prestadores });
          });
      }).then(function () {
          retorno()
      }).catch(function (error) {
          reject(error)
      });
  });
}

  constructor() { super(); }
}
