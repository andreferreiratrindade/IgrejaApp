import { Injectable } from '@angular/core';
import { UsuarioRepService } from 'src/app/repository/usuario/usuario-rep.service';
import { FirebaseAuthService } from '../base-provider/firebase-auth-service.service';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 

  constructor(public usuarioRepository:UsuarioRepService, public firebaseAutentication :FirebaseAuthService) {

   }

  AdicionarUsuario(item:any) : Promise<any>{
    return this.usuarioRepository.add(item,item.uid);
  }

  RecuperaNomeUsuarios(usuarios: string[]) {
    return this.usuarioRepository.find({elemento:"id", tipoComparacao:"in", comparacao:usuarios});
  }

  recuperaUsuarioLogado():Promise<any>{
    return new Promise((resolve, reject) => {
      
      this.firebaseAutentication.verificaUsuarioLogado().then(user=>{

      if(user!=null){
        this.usuarioRepository.findOne(user.uid)
        .then(result=>{
            Config.adicionaUsuario(result);
             resolve(result);
        });
      }else{
        Config.adicionaUsuario(null);
      resolve(null);
      }
    });
  });
  }
}
