import { Injectable } from '@angular/core';
import { BaseProvider } from '../base-provider/base-provider';

@Injectable()
export class BuscarCEPService {

  constructor(public baseProvider: BaseProvider) { }

  buscarCEP(cep:string):Promise<any>{
       return this.baseProvider.apiGet("https://viacep.com.br/ws/"+cep+"/json/");
  }

}
