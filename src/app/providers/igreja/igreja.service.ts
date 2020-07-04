import { Injectable } from '@angular/core';
import { IgrejaRepService } from 'src/app/repository/igreja/igreja-rep.service';
import { IgrejaEntity } from 'src/app/entity/igrejaEntity';

@Injectable({
  providedIn: 'root'
})
export class IgrejaService {

  constructor(public igrejaRepService: IgrejaRepService) { }


  AdicionarNovaIgreja(obj : IgrejaEntity) : Promise<any>{
    return  this.igrejaRepService.add("igreja/",obj);
  }
}
