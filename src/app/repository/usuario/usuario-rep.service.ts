import { Injectable } from '@angular/core';

import { BaseRepository } from '../repository-interface/Repository-Base';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepService extends BaseRepository  {


    constructor() {
      super();
      this._collectionName = "usuario";        
    }
}
