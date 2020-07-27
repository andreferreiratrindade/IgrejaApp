import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionaServicoPage } from './adiciona-servico.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionaServicoPageRoutingModule {}
