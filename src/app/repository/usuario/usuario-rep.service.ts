import { Injectable } from '@angular/core';

import { BaseRepository } from '../repository-interface/Repository-Base';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepService extends BaseRepository {

  AdicionaPerfilAoUsuario(usuarioId: any, perfil: number) {
    let ref = this.db.collection("usuario").doc(usuarioId)
    let ob = [perfil]
    return new Promise<any>((retorno, reject) => {
      this.db.runTransaction(transaction => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(ref).then(doc => {

          let usuario = doc.data();
          if (!usuario.perfis) {
            usuario.perfis = [perfil];
            transaction.set(ref, usuario);
          } else {
            usuario.perfis = usuario.perfis.filter(y => { return y != perfil });
            usuario.perfis.push(perfil);
            transaction.update(ref, usuario);
          }
        });
      }).then(function () {
        retorno()
      }).catch(function (error) {
        reject(error)
      });
    });
  }

  constructor() {
    super();
    this._collectionName = "usuario";
  }
}
