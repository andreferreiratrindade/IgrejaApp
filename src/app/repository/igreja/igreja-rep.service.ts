import { Injectable } from '@angular/core';
import { IgrejaEntity } from 'src/app/entity/igrejaEntity';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class IgrejaRepService extends BaseRepository<IgrejaEntity>  {

}
