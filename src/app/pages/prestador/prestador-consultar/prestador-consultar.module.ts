import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorConsultarPageRoutingModule } from './prestador-consultar-routing.module';

import { PrestadorConsultarPage } from './prestador-consultar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PrestadorConsultarPageRoutingModule
  ],
  declarations: [PrestadorConsultarPage]
})
export class PrestadorConsultarPageModule {}
