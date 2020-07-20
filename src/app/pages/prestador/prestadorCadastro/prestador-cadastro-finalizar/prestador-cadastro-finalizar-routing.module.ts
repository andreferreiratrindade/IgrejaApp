import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroFinalizarPage } from './prestador-cadastro-finalizar.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroFinalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroFinalizarPageRoutingModule {}
