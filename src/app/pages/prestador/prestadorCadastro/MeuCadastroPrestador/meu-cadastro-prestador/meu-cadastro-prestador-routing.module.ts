import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuCadastroPrestadorPage } from './meu-cadastro-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: MeuCadastroPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuCadastroPrestadorPageRoutingModule {}
