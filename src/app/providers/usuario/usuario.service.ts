import { Injectable } from '@angular/core';
import { UsuarioRepService } from 'src/app/repository/usuario/usuario-rep.service';
import { UsuarioEntity } from 'src/app/entity/usuario-entity';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public usuarioRepository:UsuarioRepService) {

   }


  AdicionarUsuario(item:UsuarioEntity) : Promise<any>{
    return this.usuarioRepository.add('usuario/',item);
  }
  
}
