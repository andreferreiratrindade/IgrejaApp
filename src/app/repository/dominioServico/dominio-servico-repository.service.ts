import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
  providedIn: 'root'
})
export class DominioServicoRepositoryService extends BaseRepository  {

  /**
   *
   */
  constructor() {
    super();
    this._collectionName = "dominioServico";        
  }


  recuperaDominioServico():Promise<any>{
      return new Promise<any>((response, resp)=>{ this.db.collection("dominioServico").get()
      .then((result) => {

				let lst = [];
				result.forEach(function (doc) {

					lst.push({nomeServico:doc.data().nomeServico, servicoId:doc.id});
				})
				response(lst);
			})
    });
  }
}
