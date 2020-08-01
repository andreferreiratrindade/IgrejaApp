import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoPageRoutingModule } from './novo-routing.module';

import { NovoPage } from './novo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    NovoPageRoutingModule
  ],
  declarations: [NovoPage]
})
export class NovoPageModule {}
