import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDominioServicosPageRoutingModule } from './modal-dominio-servicos-routing.module';

import { ModalDominioServicosPage } from './modal-dominio-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDominioServicosPageRoutingModule
  ],
  declarations: [ModalDominioServicosPage]
})
export class ModalDominioServicosPageModule {}
