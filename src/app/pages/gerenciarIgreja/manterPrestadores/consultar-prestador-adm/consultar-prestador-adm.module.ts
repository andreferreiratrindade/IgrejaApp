import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPrestadorAdmPageRoutingModule } from './consultar-prestador-adm-routing.module';

import { ConsultarPrestadorAdmPage } from './consultar-prestador-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPrestadorAdmPageRoutingModule
  ],
  declarations: [ConsultarPrestadorAdmPage]
})
export class ConsultarPrestadorAdmPageModule {}
