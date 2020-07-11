import { Injectable } from '@angular/core';
import { PrestadorRepServiceService } from 'src/app/repository/prestador/prestador-rep-service.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {
  recuperaPrestadoresPorIgreja(igrejaId: any):Promise<any[]>   {
    return this.prestadorRepService.recuperaPrestadoresPorIgreja(igrejaId);
  }
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

  RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado: string, cidadeSelecionado: string, servicoId : string):Promise<any[]> {
    return this.prestadorRepService.RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado,cidadeSelecionado, servicoId);
  }
  RecuperaCidadePrestadorDisponiveis(ufSelecionado: string) {
    return this.prestadorRepService.RecuperaCidadePrestadorDisponiveis(ufSelecionado);

  }

  recuperaServicosPorPrestador(usuarioId: any):Promise<any[]> {
    return this.prestadorRepService.recuperaServicosPorPrestador(usuarioId);
  }
  recuperaServicosPorPrestadores(usuarioId: any[]):Promise<any[]> {
    return this.prestadorRepService.recuperaServicosPorPrestadores(usuarioId);
  }

}
