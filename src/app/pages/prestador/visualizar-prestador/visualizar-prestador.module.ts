import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarPrestadorPageRoutingModule } from './visualizar-prestador-routing.module';

import { VisualizarPrestadorPage } from './visualizar-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarPrestadorPageRoutingModule
  ],
  declarations: [VisualizarPrestadorPage]
})
export class VisualizarPrestadorPageModule {}
