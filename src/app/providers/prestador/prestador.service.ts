import { Injectable } from '@angular/core';
import { PrestadorRepServiceService } from 'src/app/repository/prestador/prestador-rep-service.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {
  AtualizaPrestador(usuarioId: any, obj: any):Promise<any> {
     return this.prestadorRepService.AtualizaPrestador(usuarioId,obj);
  }
  ExcluirServico(usuarioId: any, servicoId: any):Promise<any> {
    return this.prestadorRepService.ExcluirServico(usuarioId, servicoId);

  }
AdicionaServicoAoPrestador(usuarioId: any, servico: any):Promise<any> {
  return this.prestadorRepService.AdicionaServicoAoPrestador(usuarioId, servico);
  }

  constructor(public prestadorRepService:PrestadorRepServiceService) {
  

  }

  RecuperaPrestador(usuarioId:string):Promise<any>{

    return this.prestadorRepService.RecuperaPrestador(usuarioId);
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

  recuperaServicosPorPrestador(usuarioId: any):Promise<any[]> {
    return this.prestadorRepService.recuperaServicosPorPrestador(usuarioId);
  }

}
