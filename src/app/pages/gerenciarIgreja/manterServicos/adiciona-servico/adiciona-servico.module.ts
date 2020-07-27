import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionaServicoPageRoutingModule } from './adiciona-servico-routing.module';

import { AdicionaServicoPage } from './adiciona-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionaServicoPageRoutingModule
  ],
  declarations: [AdicionaServicoPage]
})
export class AdicionaServicoPageModule {}
