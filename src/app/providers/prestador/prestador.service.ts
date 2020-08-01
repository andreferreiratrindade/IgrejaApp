import { Injectable } from '@angular/core';
import { PrestadorRepServiceService } from 'src/app/repository/prestador/prestador-rep-service.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {
  AdicionaLocalAtendimento(localidade: any, usuarioId: string) {
    return this.prestadorRepService.AdicionaLocalAtendimento(localidade, usuarioId);
  }
  
  ExcluirLocalAtendimento( usuarioId: string,localidade: any) {
    return this.prestadorRepService.ExcluirLocalAtendimento(usuarioId, localidade);
  }
  RecuperaPestadoresPesquisarPorAdministrador(situacaoPrestador: string, igrejaId: string, usuarioId: string, igrejasDoAdmin: any[]): Promise<any[]> {
    return this.prestadorRepService.RecuperaPestadoresPesquisarPorAdministrador(situacaoPrestador, igrejaId, usuarioId, igrejasDoAdmin);

  }
  recuperaPrestadoresPorIgreja(igrejaId: any): Promise<any[]> {
    return this.prestadorRepService.recuperaPrestadoresPorIgreja(igrejaId);
  }
  AtualizaPrestador(usuarioId: any, obj: any): Promise<any> {
    return this.prestadorRepService.AtualizaPrestador(usuarioId, obj);
  }
  ExcluirServico(usuarioId: any, servicoId: any): Promise<any> {
    return this.prestadorRepService.ExcluirServico(usuarioId, servicoId);

  }
  AdicionaServicoAoPrestador(usuarioId: any, servico: any): Promise<any> {
    return this.prestadorRepService.AdicionaServicoAoPrestador(usuarioId, servico);
  }

  constructor(public prestadorRepService: PrestadorRepServiceService) {

  }

  RecuperaPrestador(usuarioId: string): Promise<any> {

    return this.prestadorRepService.RecuperaPrestador(usuarioId);
  }

  RecuperaBairroPrestadorDisponiveis(uf: string, cidade: string): Promise<any[]> {
    return this.prestadorRepService.RecuperaBairroPrestadorDisponiveis(uf, cidade);
  }

  RecuperaUfPrestadorDisponiveis(): Promise<any[]> {
    return this.prestadorRepService.recuperaUfPrestadorDisponiveis();
  }
  AdicionarNovoPrestador(prestador: any): Promise<any> {

    return this.prestadorRepService.AdicionaPrestador(prestador);
  }

  RecuperaPestadoresPesquisar(ufSelecionado: string, cidadeSelecionado: string
    , bairro: string, servicoId: string[]
    , igrejaId: string): Promise<any[]> {
    return this.prestadorRepService.RecuperaPestadoresPesquisar(ufSelecionado, cidadeSelecionado, bairro, servicoId, igrejaId);
  }
  RecuperaCidadePrestadorDisponiveis(ufSelecionado: string) {
    return this.prestadorRepService.RecuperaCidadePrestadorDisponiveis(ufSelecionado);

  }

  recuperaServicosPorPrestador(usuarioId: any): Promise<any[]> {
    return this.prestadorRepService.recuperaServicosPorPrestador(usuarioId);
  }
  recuperaServicosPorPrestadores(usuarioId: any[]): Promise<any[]> {
    return this.prestadorRepService.recuperaServicosPorPrestadores(usuarioId);
  }

}
