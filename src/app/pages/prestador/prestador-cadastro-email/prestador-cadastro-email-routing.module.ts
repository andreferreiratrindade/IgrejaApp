import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroEmailPage } from './prestador-cadastro-email.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroEmailPageRoutingModule {}
