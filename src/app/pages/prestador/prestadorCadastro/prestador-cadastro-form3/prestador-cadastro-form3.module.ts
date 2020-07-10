import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm3PageRoutingModule } from './prestador-cadastro-form3-routing.module';

import { PrestadorCadastroForm3Page } from './prestador-cadastro-form3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroForm3PageRoutingModule
  ],
  declarations: [PrestadorCadastroForm3Page]
})
export class PrestadorCadastroForm3PageModule {}
