import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroForm1Page } from './prestador-cadastro-form1.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroForm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroForm1PageRoutingModule {}
