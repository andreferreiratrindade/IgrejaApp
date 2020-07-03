import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorConsultarPageRoutingModule } from './prestador-consultar-routing.module';

import { PrestadorConsultarPage } from './prestador-consultar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorConsultarPageRoutingModule
  ],
  declarations: [PrestadorConsultarPage]
})
export class PrestadorConsultarPageModule {}
