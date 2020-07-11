import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPrestadorAdmPage } from './consultar-prestador-adm.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPrestadorAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPrestadorAdmPageRoutingModule {}
