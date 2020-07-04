import { Injectable } from '@angular/core';
import { UsuarioEntity } from 'src/app/entity/usuario-entity';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepService extends BaseRepository<UsuarioEntity>  {

}
