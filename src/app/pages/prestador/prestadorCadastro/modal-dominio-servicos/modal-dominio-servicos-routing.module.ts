import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDominioServicosPage } from './modal-dominio-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDominioServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDominioServicosPageRoutingModule {}
