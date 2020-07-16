import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBairroPageRoutingModule } from './modal-bairro-routing.module';

import { ModalBairroPage } from './modal-bairro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBairroPageRoutingModule
  ],
  declarations: [ModalBairroPage]
})
export class ModalBairroPageModule {}
