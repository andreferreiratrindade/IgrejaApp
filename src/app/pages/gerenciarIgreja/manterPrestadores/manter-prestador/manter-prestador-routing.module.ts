import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManterPrestadorPage } from './manter-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: ManterPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManterPrestadorPageRoutingModule {}
