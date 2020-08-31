import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBreveComentarioPageRoutingModule } from './modal-breve-comentario-routing.module';

import { ModalBreveComentarioPage } from './modal-breve-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBreveComentarioPageRoutingModule
  ],
  declarations: [ModalBreveComentarioPage]
})
export class ModalBreveComentarioPageModule {}
