import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSituacaoPrestadorPageRoutingModule } from './modal-situacao-prestador-routing.module';

import { ModalSituacaoPrestadorPage } from './modal-situacao-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSituacaoPrestadorPageRoutingModule
  ],
  declarations: [ModalSituacaoPrestadorPage]
})
export class ModalSituacaoPrestadorPageModule {}
