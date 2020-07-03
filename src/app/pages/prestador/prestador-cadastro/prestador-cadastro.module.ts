import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroPageRoutingModule } from './prestador-cadastro-routing.module';

import { PrestadorCadastroPage } from './prestador-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorCadastroPageRoutingModule
  ],
  declarations: [PrestadorCadastroPage]
})
export class PrestadorCadastroPageModule {}
