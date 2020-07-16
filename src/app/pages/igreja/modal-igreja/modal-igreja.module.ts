import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIgrejaPageRoutingModule } from './modal-igreja-routing.module';

import { ModalIgrejaPage } from './modal-igreja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIgrejaPageRoutingModule
  ],
  declarations: [ModalIgrejaPage]
})
export class ModalIgrejaPageModule {}
