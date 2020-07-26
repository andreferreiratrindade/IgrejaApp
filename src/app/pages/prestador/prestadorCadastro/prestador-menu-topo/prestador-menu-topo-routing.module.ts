import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorMenuTopoPage } from './prestador-menu-topo.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorMenuTopoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorMenuTopoPageRoutingModule {}
