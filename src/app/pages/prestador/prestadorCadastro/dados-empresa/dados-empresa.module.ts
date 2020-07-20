import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEmpresaPageRoutingModule } from './dados-empresa-routing.module';

import { DadosEmpresaPage } from './dados-empresa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    DadosEmpresaPageRoutingModule
  ],
  declarations: [DadosEmpresaPage]
})
export class DadosEmpresaPageModule {}
