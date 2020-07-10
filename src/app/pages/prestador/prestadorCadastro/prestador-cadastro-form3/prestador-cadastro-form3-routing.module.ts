import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroForm3Page } from './prestador-cadastro-form3.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroForm3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroForm3PageRoutingModule {}
