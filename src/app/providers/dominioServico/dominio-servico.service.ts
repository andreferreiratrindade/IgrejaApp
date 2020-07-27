import { Injectable } from '@angular/core';
import { DominioServicoRepositoryService } from 'src/app/repository/dominioServico/dominio-servico-repository.service';

@Injectable({
  providedIn: 'root'
})
export class DominioServicoService {
  recuperaServicoAutoComplete(ev: string) {
     return this.dominioServico.recuperaServicoAutoComplete(ev);
  }

  constructor(public dominioServico: DominioServicoRepositoryService) { }

  public recuperaDominioServico() : Promise<any>{
    
    return this.dominioServico.recuperaDominioServico();
  }

  public adicionaServico(servico:any){
    return this.dominioServico.add(servico,null);
  }
}
