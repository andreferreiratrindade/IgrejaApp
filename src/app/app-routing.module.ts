import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {  UsuarioLogadoValidation } from './providers/AuthGuard/UsuarioLogadoValidation';
import { PrestadorSituacaoValidation } from './providers/AuthGuard/PrestadorSituacaoValidation';
import { PerfilValidation_AdministradorSistema } from './providers/AuthGuard/PerfilValidation_AdministradorSistema';
import { PerfilValidation_AdministradorIgreja } from './providers/AuthGuard/PerfilValidation_AdministradorIgreja';
import { TablinksPage } from './pages/tablinks/tablinks.page';
const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)

      },
      {
        path: 'Perfil',
        loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
      }
    ]
   },
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
    path: 'criar-igreja',
     canActivate: [PerfilValidation_AdministradorSistema],
    loadChildren: () => import('./pages/gerenciarIgreja/criar-igreja/criar-igreja.module').then( m => m.CriarIgrejaPageModule)
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
    path: 'meu-cadastro-prestador',
    canActivate: [UsuarioLogadoValidation],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.module').then( m => m.MeuCadastroPrestadorPageModule)
  },

  {
    path: 'mantem-servico',
    canActivate: [PerfilValidation_AdministradorSistema],
    loadChildren: () => import('./pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module').then( m => m.MantemServicoPageModule)
  },
  {
    path: 'adiciona-servico',
    canActivate: [PerfilValidation_AdministradorSistema],
    loadChildren: () => import('./pages/gerenciarIgreja/manterServicos/adiciona-servico/adiciona-servico.module').then( m => m.AdicionaServicoPageModule)
  },
  {
    path: 'modulo-prestador-home',
    loadChildren: () => import('./pages/gerenciarIgreja/moduloPrestador/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tablinks',
    loadChildren: () => import('./pages/tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },

  {
    path: 'adicionar-local-atendimento',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/adicionar-local-atendimento/adicionar-local-atendimento.module').then( m => m.AdicionarLocalAtendimentoPageModule)
  },
  {
    path: 'editar-servico',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/editar-servico/editar-servico.module').then( m => m.EditarServicoPageModule)
  },
  {
    path: 'manter-igreja',
    canActivate: [PerfilValidation_AdministradorSistema],

    loadChildren: () => import('./pages/gerenciarIgreja/manter-igreja/manter-igreja.module').then( m => m.ManterIgrejaPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/usuario/novo/novo.module').then( m => m.NovoPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    canActivate: [UsuarioLogadoValidation],

    loadChildren: () => import('./pages/usuario/meu-usuario/meu-usuario.module').then( m => m.MeuUsuarioPageModule)
  }



];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
