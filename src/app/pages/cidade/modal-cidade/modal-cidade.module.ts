import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCidadePageRoutingModule } from './modal-cidade-routing.module';

import { ModalCidadePage } from './modal-cidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCidadePageRoutingModule
  ],
  declarations: [ModalCidadePage]
})
export class ModalCidadePageModule {}
