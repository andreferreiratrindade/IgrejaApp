import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantemServicoPageRoutingModule } from './mantem-servico-routing.module';

import { MantemServicoPage } from './mantem-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantemServicoPageRoutingModule
  ],
  declarations: [MantemServicoPage]
})
export class MantemServicoPageModule {}
