import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarServicoPage } from './editar-servico.page';

const routes: Routes = [
  {
    path: '',
    component: EditarServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarServicoPageRoutingModule {}
