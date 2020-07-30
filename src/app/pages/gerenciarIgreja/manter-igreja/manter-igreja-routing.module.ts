import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManterIgrejaPage } from './manter-igreja.page';

const routes: Routes = [
  {
    path: '',
    component: ManterIgrejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManterIgrejaPageRoutingModule {}
