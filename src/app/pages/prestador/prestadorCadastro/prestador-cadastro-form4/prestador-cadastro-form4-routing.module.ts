import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroForm4Page } from './prestador-cadastro-form4.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroForm4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroForm4PageRoutingModule {}
