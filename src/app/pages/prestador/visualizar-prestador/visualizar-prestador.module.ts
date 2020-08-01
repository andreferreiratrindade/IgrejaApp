import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarPrestadorPageRoutingModule } from './visualizar-prestador-routing.module';

import { VisualizarPrestadorPage } from './visualizar-prestador.page';
import { PipesModule } from 'src/app/pipes/pipes';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PipesModule,

    VisualizarPrestadorPageRoutingModule
  ],
  declarations: [VisualizarPrestadorPage]
})
export class VisualizarPrestadorPageModule {}
