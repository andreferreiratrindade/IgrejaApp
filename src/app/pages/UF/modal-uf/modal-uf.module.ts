import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalUFPageRoutingModule } from './modal-uf-routing.module';

import { ModalUFPage } from './modal-uf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalUFPageRoutingModule
  ],
  declarations: [ModalUFPage]
})
export class ModalUFPageModule {}
