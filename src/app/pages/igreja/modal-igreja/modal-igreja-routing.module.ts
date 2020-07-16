import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIgrejaPage } from './modal-igreja.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIgrejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIgrejaPageRoutingModule {}
