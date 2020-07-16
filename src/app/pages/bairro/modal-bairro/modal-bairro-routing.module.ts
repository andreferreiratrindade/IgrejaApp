import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBairroPage } from './modal-bairro.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBairroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBairroPageRoutingModule {}
