import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroEmailPageRoutingModule } from './prestador-cadastro-email-routing.module';

import { PrestadorCadastroEmailPage } from './prestador-cadastro-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroEmailPageRoutingModule
  ],
  declarations: [PrestadorCadastroEmailPage]
})
export class PrestadorCadastroEmailPageModule {}
