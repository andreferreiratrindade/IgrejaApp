import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSituacaoPrestadorPage } from './modal-situacao-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSituacaoPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSituacaoPrestadorPageRoutingModule {}
