import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarPrestadorPage } from './visualizar-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarPrestadorPageRoutingModule {}
