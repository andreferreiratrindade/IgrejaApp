import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorConsultarPage } from './prestador-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorConsultarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorConsultarPageRoutingModule {}
