import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantemServicoPage } from './mantem-servico.page';

const routes: Routes = [
  {
    path: '',
    component: MantemServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantemServicoPageRoutingModule {}
