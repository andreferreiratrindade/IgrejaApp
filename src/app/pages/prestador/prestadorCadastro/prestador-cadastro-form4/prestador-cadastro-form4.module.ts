import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm4PageRoutingModule } from './prestador-cadastro-form4-routing.module';

import { PrestadorCadastroForm4Page } from './prestador-cadastro-form4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroForm4PageRoutingModule
  ],
  declarations: [PrestadorCadastroForm4Page]
})
export class PrestadorCadastroForm4PageModule {}
