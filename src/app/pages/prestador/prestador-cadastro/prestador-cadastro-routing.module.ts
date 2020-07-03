import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroPage } from './prestador-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroPageRoutingModule {}
