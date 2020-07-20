import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalAtendimentoPageRoutingModule } from './local-atendimento-routing.module';

import { LocalAtendimentoPage } from './local-atendimento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    LocalAtendimentoPageRoutingModule
  ],
  declarations: [LocalAtendimentoPage]
})
export class LocalAtendimentoPageModule {}
