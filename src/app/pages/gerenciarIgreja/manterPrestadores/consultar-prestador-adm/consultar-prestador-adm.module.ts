import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPrestadorAdmPageRoutingModule } from './consultar-prestador-adm-routing.module';

import { ConsultarPrestadorAdmPage } from './consultar-prestador-adm.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    ConsultarPrestadorAdmPageRoutingModule
  ],
  declarations: [ConsultarPrestadorAdmPage]
})
export class ConsultarPrestadorAdmPageModule {}
