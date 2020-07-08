import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class IgrejaRepService extends BaseRepository  {


  constructor() {
    super();

    this._collectionName = "igreja";        
  }


  RecuperaIgrejasPorCidade(cidade:string):Promise<any[]>{

    return this.find({elemento:"cidade", tipoComparacao:"==", comparacao:cidade});
  }

  RecuperaNomeIgreja(igrejas: string[]) {

    // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
    return this.find({elemento:"id", tipoComparacao:"in", comparacao:igrejas});
  }
}
