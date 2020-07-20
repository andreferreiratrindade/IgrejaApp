import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalAtendimentoPage } from './local-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: LocalAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalAtendimentoPageRoutingModule {}
