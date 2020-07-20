import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroFinalizarPageRoutingModule } from './prestador-cadastro-finalizar-routing.module';

import { PrestadorCadastroFinalizarPage } from './prestador-cadastro-finalizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroFinalizarPageRoutingModule
  ],
  declarations: [PrestadorCadastroFinalizarPage]
})
export class PrestadorCadastroFinalizarPageModule {}
