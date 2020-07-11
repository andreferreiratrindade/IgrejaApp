import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/AuthGuard/AuthGuard';
import { PrestadorSituacaoRedirect } from './providers/AuthGuard/PrestadorSituacaoRedirect';
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
     canActivate: [AuthGuard],
    loadChildren: () => import('./pages/gerenciarIgreja/criar-igreja/criar-igreja.module').then( m => m.CriarIgrejaPageModule)
  }, 
  {
    path: 'prestador-Form1',
    canActivate: [PrestadorSituacaoRedirect],
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
    canActivate: [PrestadorSituacaoRedirect],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module').then( m => m.PrestadorCadastroForm2PageModule)
  },
  {
    path: 'prestador-Form3',
    canActivate: [PrestadorSituacaoRedirect],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module').then( m => m.PrestadorCadastroForm3PageModule)
  },
  {
    path: 'prestador-cadastro-form4',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module').then( m => m.PrestadorCadastroForm4PageModule)
  },
  {
    path: 'modal-dominio-servicos',
    loadChildren: () => import('./pages/prestador/prestadorCadastro/modal-dominio-servicos/modal-dominio-servicos.module').then( m => m.ModalDominioServicosPageModule)
  },
  {
    path: 'visualizar-prestador',
    loadChildren: () => import('./pages/prestador/visualizar-prestador/visualizar-prestador.module').then( m => m.VisualizarPrestadorPageModule)
  },
  {
    path: 'consultar-prestador-adm',
    loadChildren: () => import('./pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module').then( m => m.ConsultarPrestadorAdmPageModule)
  }




];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
