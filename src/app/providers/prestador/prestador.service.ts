import { Injectable } from '@angular/core';
import { PrestadorRepServiceService } from 'src/app/repository/prestador/prestador-rep-service.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  
  /**
   *
   */
  constructor(public prestadorRepService:PrestadorRepServiceService) {
  

  }

  RecuperaUfPrestadorDisponiveis():Promise<any[]> {
    return this.prestadorRepService.recuperaUfPrestadorDisponiveis();
  }
  AdicionarNovoPrestador(prestador: any):Promise<any> {
    return this.prestadorRepService.AdicionaPrestador(prestador);
  }

  RecuperaPestadoresPorCidadeEhUF(ufSelecionado: string, cidadeSelecionado: string):Promise<any[]> {
    return this.prestadorRepService.RecuperaPestadoresPorCidadeEhUF(ufSelecionado,cidadeSelecionado);
  }
  RecuperaCidadePrestadorDisponiveis(ufSelecionado: string) {
    return this.prestadorRepService.RecuperaCidadePrestadorDisponiveis(ufSelecionado);

  }

}
