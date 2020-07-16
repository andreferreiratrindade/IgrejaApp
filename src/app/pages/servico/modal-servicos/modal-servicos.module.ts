import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalServicosPageRoutingModule } from './modal-servicos-routing.module';

import { ModalServicosPage } from './modal-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalServicosPageRoutingModule
  ],
  declarations: [ModalServicosPage]
})
export class ModalServicosPageModule {}
