import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroPage } from './prestador-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroPage
  },  {
    path: 'prestador-cadastro-form1',
    loadChildren: () => import('../prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module').then( m => m.PrestadorCadastroForm1PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroPageRoutingModule {}
