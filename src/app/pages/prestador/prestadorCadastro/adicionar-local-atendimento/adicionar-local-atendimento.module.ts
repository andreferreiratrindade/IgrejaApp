import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarLocalAtendimentoPageRoutingModule } from './adicionar-local-atendimento-routing.module';

import { AdicionarLocalAtendimentoPage } from './adicionar-local-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarLocalAtendimentoPageRoutingModule
  ],
  declarations: [AdicionarLocalAtendimentoPage]
})
export class AdicionarLocalAtendimentoPageModule {}
