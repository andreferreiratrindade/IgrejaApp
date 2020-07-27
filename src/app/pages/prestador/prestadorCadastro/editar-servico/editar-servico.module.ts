import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServicoPageRoutingModule } from './editar-servico-routing.module';

import { EditarServicoPage } from './editar-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarServicoPageRoutingModule
  ],
  declarations: [EditarServicoPage]
})
export class EditarServicoPageModule {}
