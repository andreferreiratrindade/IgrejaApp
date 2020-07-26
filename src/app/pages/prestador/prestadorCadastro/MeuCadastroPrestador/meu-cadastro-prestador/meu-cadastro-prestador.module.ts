import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuCadastroPrestadorPageRoutingModule } from './meu-cadastro-prestador-routing.module';

import { MeuCadastroPrestadorPage } from './meu-cadastro-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuCadastroPrestadorPageRoutingModule
  ],
  declarations: [MeuCadastroPrestadorPage]
})
export class MeuCadastroPrestadorPageModule {}
