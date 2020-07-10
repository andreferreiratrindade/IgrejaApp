import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroForm2Page } from './prestador-cadastro-form2.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroForm2PageRoutingModule {}
