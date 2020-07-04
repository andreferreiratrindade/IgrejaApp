import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'prestador-consultar',
    loadChildren: () => import('./pages/prestador/prestador-consultar/prestador-consultar.module').then( m => m.PrestadorConsultarPageModule)
  },
  {
    path: 'prestador-cadastro',
    loadChildren: () => import('./pages/prestador/prestador-cadastro/prestador-cadastro.module').then( m => m.PrestadorCadastroPageModule)
  },
  {
    path: 'prestador-cadastro-email',
    loadChildren: () => import('./pages/prestador/prestador-cadastro-email/prestador-cadastro-email.module').then( m => m.PrestadorCadastroEmailPageModule)
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
  },  {
    path: 'criar-igreja',
    loadChildren: () => import('./pages/gerenciarIgreja/criar-igreja/criar-igreja.module').then( m => m.CriarIgrejaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
