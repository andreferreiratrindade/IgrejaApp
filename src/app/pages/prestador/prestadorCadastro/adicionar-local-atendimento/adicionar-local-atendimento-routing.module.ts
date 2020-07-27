import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarLocalAtendimentoPage } from './adicionar-local-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarLocalAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarLocalAtendimentoPageRoutingModule {}
