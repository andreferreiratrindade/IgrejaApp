import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManterPrestadorPageRoutingModule } from './manter-prestador-routing.module';

import { ManterPrestadorPage } from './manter-prestador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    ManterPrestadorPageRoutingModule
  ],
  declarations: [ManterPrestadorPage]
})
export class ManterPrestadorPageModule {}
