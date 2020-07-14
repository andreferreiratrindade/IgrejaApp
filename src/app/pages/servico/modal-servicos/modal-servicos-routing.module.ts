import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalServicosPage } from './modal-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalServicosPageRoutingModule {}
