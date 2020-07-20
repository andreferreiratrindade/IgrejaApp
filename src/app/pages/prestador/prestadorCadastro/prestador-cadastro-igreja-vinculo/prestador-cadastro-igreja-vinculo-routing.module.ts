import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorCadastroIgrejaVinculoPage } from './prestador-cadastro-igreja-vinculo.page';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroIgrejaVinculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadorCadastroIgrejaVinculoPageRoutingModule {}
