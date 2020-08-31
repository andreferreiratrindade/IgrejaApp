import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBreveComentarioPage } from './modal-breve-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBreveComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBreveComentarioPageRoutingModule {}
