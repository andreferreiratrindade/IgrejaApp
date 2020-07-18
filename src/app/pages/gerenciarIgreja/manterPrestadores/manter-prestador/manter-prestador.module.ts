import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManterPrestadorPageRoutingModule } from './manter-prestador-routing.module';

import { ManterPrestadorPage } from './manter-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManterPrestadorPageRoutingModule
  ],
  declarations: [ManterPrestadorPage]
})
export class ManterPrestadorPageModule {}
