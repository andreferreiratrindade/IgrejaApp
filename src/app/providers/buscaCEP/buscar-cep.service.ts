import { Injectable } from '@angular/core';
import { BaseProvider } from '../base-provider/base-provider';

@Injectable()
export class BuscarCEPService {

  constructor(public baseProvider: BaseProvider) { }

  buscarCEP(cep: string): Promise<any> {
    return this.baseProvider.apiGet("https://viacep.com.br/ws/" + cep + "/json/");
  }

  RecuperaEnderecoCompleto(item: any): string {
    return item.logradouro + ", " + item.bairro + " - " + item.cidade + "/" + item.uf + " - " + item.cep;
  }

  buscarMunicipiosPorUF(uf: string): Promise<any[]> {
    return new Promise<any[]>((result, reject) => {
      this.baseProvider.apiGet("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios")
        .then(retornoApi => {
          
          let list =    retornoApi.map(x=>{return x.nome});
          result(list);
        }).catch(err => {
          reject(err);
        })
    });
  }
}
