import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {  UsuarioLogadoValidation } from './providers/AuthGuard/UsuarioLogadoValidation';
import { PrestadorSituacaoValidation } from './providers/AuthGuard/PrestadorSituacaoValidation';
import { PerfilValidation_AdministradorSistema } from './providers/AuthGuard/PerfilValidation_AdministradorSistema';
import { PerfilValidation_AdministradorIgreja } from './providers/AuthGuard/PerfilValidation_AdministradorIgreja';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  }
  ,
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'criar-igreja',
     canActivate: [PerfilValidation_AdministradorSistema],
    loadChildren: () => import('./pages/gerenciarIgreja/criar-igreja/criar-igreja.module').then( m => m.CriarIgrejaPageModule)
  }, 
  {
    path: 'prestador-Form1',
    canActivate: [PrestadorSituacaoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module').then( m => m.PrestadorCadastroForm1PageModule)
  }, 
  {
    path: 'prestador-consultar',
    loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
  },
  {
    path: 'prestador-Form2',
    canActivate: [PrestadorSituacaoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module').then( m => m.PrestadorCadastroForm2PageModule)
  },
  {
    path: 'prestador-Form3',
    canActivate: [PrestadorSituacaoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module').then( m => m.PrestadorCadastroForm3PageModule)
  },
  {
    path: 'prestador-cadastro-form4',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module').then( m => m.PrestadorCadastroForm4PageModule)
  },
  {
    path: 'visualizar-prestador',
    loadChildren: () => import('./pages/prestador/visualizar-prestador/visualizar-prestador.module').then( m => m.VisualizarPrestadorPageModule)
  },
  {
    path: 'consultar-prestador-adm',
    canActivate: [PerfilValidation_AdministradorIgreja],
    loadChildren: () => import('./pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module').then( m => m.ConsultarPrestadorAdmPageModule)
  },
  {
    path: 'modal-servicos',
    loadChildren: () => import('./pages/servico/modal-servicos/modal-servicos.module').then( m => m.ModalServicosPageModule)
  },
  {
    path: 'modal-cidade',
    loadChildren: () => import('./pages/cidade/modal-cidade/modal-cidade.module').then( m => m.ModalCidadePageModule)
  },
  {
    path: 'modal-bairro',
    loadChildren: () => import('./pages/bairro/modal-bairro/modal-bairro.module').then( m => m.ModalBairroPageModule)
  },
  {
    path: 'modal-uf',
    loadChildren: () => import('./pages/UF/modal-uf/modal-uf.module').then( m => m.ModalUFPageModule)
  },
  {
    path: 'modal-igreja',
    loadChildren: () => import('./pages/igreja/modal-igreja/modal-igreja.module').then( m => m.ModalIgrejaPageModule)
  },
  {
    path: 'modal-situacao-prestador',
    loadChildren: () => import('./pages/gerenciarIgreja/manterPrestadores/modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.module').then( m => m.ModalSituacaoPrestadorPageModule)
  },
  
  {
    path: 'manter-prestador',
    canActivate: [PerfilValidation_AdministradorIgreja],
    loadChildren: () => import('./pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module').then( m => m.ManterPrestadorPageModule)
  },
  {
    path: 'dados-empresa',
    canActivate: [UsuarioLogadoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module').then( m => m.DadosEmpresaPageModule)
  },
  {
    path: 'prestador-local-atendimento',
    canActivate: [UsuarioLogadoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module').then( m => m.LocalAtendimentoPageModule)
  },
  {
    path: 'prestador-cadastro-servico',
    canActivate: [UsuarioLogadoValidation],

    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module').then( m => m.PrestadorCadastroServicoPageModule)
  },
  {
    path: 'prestador-cadastro-igreja-vinculo',
    canActivate: [UsuarioLogadoValidation],

    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.module').then( m => m.PrestadorCadastroIgrejaVinculoPageModule)
  },
  {
    path: 'prestador-cadastro-finalizar',
    canActivate: [UsuarioLogadoValidation],

    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.module').then( m => m.PrestadorCadastroFinalizarPageModule)
  },
  {
    path: 'prestador-menu-topo',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-menu-topo/prestador-menu-topo.module').then( m => m.PrestadorMenuTopoPageModule)
  }








];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
