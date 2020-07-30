import { Injectable } from '@angular/core';
import { UsuarioRepService } from 'src/app/repository/usuario/usuario-rep.service';
import { FirebaseAuthService } from '../base-provider/firebase-auth-service.service';
import { Config } from 'src/app/config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  atualizaUsuario(usuarioId: string, item:any): Promise<any> {
    return this.usuarioRepository.update(usuarioId,item);
  }

  private usuarioSubject = new Subject<any>();

  private AdicionaUsuarioLogado(obj:any){

    this.usuarioSubject.next(obj);
  }

  AdicionaPerfilAoUsuario(usuarioId: any, perfil: number) {
    return this.usuarioRepository.AdicionaPerfilAoUsuario(usuarioId, perfil);
  }
  RecuperaUsuarioPorEmail(emailAdministrador: string) {
    return this.usuarioRepository.find({elemento:"email", tipoComparacao:"==", comparacao:emailAdministrador});
  }

  constructor(public usuarioRepository: UsuarioRepService, public firebaseAutentication: FirebaseAuthService) {

  }

  AdicionarUsuario(item: any): Promise<any> {
    return this.usuarioRepository.add(item, item.usuarioId);
  }

  RecuperaNomeUsuarios(usuarios: string[]) {
    return this.usuarioRepository.find({ elemento: "usuarioId", tipoComparacao: "in", comparacao: usuarios });
  }

  RecuperaUsuarioPorUsuarioId(usuarioId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.findOne(usuarioId)
        .then(result => {

          resolve(result);
        }).catch(err => {

          reject(err);
        });
    });
  }

  RecuperaUsuarioObservable():Subject<any>{
    return this.usuarioSubject;
  }

  recuperaUsuarioLogado(): Promise<any> {
    console.log("Verifica Usuario Logado;");
    return new Promise((resolve, reject) => {

      this.firebaseAutentication.verificaUsuarioLogado().then(user => {

        if (user != null) {
          this.usuarioRepository.findOne(user.uid)
            .then(result => {
              this.AdicionaUsuarioLogado(result);
              Config.RecuperaInstancia().adicionaUsuario(result);
              resolve(result);
            });
        } else {
          this.AdicionaUsuarioLogado(null);
          Config.RecuperaInstancia().adicionaUsuario(null);
          resolve(null);
        }
      }).catch(err => {

        reject(err);
      });
    });
  }
}

