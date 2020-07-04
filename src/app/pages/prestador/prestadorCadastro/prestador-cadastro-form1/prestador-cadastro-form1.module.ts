import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm1PageRoutingModule } from './prestador-cadastro-form1-routing.module';

import { PrestadorCadastroForm1Page } from './prestador-cadastro-form1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroForm1PageRoutingModule
  ],
  declarations: [PrestadorCadastroForm1Page]
})
export class PrestadorCadastroForm1PageModule {}
