import { Injectable } from '@angular/core';
import { IgrejaRepService } from 'src/app/repository/igreja/igreja-rep.service';

@Injectable({
  providedIn: 'root'
})
export class IgrejaService {
  RecuperaTodasAsIgrejas() : Promise<any[]>{
    return this.igrejaRepService.RecuperaTodasAsIgrejas();
  }

  RecuperaIgrejaPorIgrejaId(igrejaId : string): Promise<any>{
    return this.igrejaRepService.RecuperaIgrejaPorIgrejaId(igrejaId);
  }


  constructor(public igrejaRepService: IgrejaRepService) { }


  RecuperaIgrejaPorAdministrador(usuarioId:any):Promise<any[]>{
    return  this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);

  }

  AdicionarNovaIgreja(obj : any) : Promise<any>{
    return  this.igrejaRepService.AdicionaNovaIgreja(obj, obj.igrejaId);
  }

  RecuperaIgrejasPorCidade(cidade:string) : Promise<any[]>{
    return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
  }
  
  RecuperaIgrejasPorEndereco(uf:string, cidade:string, bairro:string) : Promise<any[]>{
    return this.igrejaRepService.RecuperaIgrejasPorEndereco(uf,cidade,bairro);
  }

  RecuperaNomeIgreja(igrejas: string[]) {
    return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
  }
}
