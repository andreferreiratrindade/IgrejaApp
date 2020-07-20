import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroServicoPage } from './prestador-cadastro-servico.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroServicoPageRoutingModule {}
