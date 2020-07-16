import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalUFPage } from './modal-uf.page';

const routes: Routes = [
  {
    path: '',
    component: ModalUFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalUFPageRoutingModule {}
