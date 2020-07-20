import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosEmpresaPage } from './dados-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: DadosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosEmpresaPageRoutingModule {}
