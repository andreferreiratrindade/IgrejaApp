import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/AuthGuard/AuthGuard';

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module').then( m => m.PrestadorCadastroForm1PageModule)
  }, 
  {
    path: 'prestador-consultar',
    loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
  }
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
