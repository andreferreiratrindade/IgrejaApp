import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCidadePage } from './modal-cidade.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCidadePageRoutingModule {}
