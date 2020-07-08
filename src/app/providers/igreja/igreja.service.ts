import { Injectable } from '@angular/core';
import { IgrejaRepService } from 'src/app/repository/igreja/igreja-rep.service';

@Injectable({
  providedIn: 'root'
})
export class IgrejaService {


  constructor(public igrejaRepService: IgrejaRepService) { }


  AdicionarNovaIgreja(obj : any) : Promise<any>{
    return  this.igrejaRepService.add(obj,null);
  }

  RecuperaIgrejasPorCidade(cidade:string) : Promise<any[]>{
    return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
  }

  RecuperaNomeIgreja(igrejas: string[]) {
    return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
  }
}