import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm2PageRoutingModule } from './prestador-cadastro-form2-routing.module';

import { PrestadorCadastroForm2Page } from './prestador-cadastro-form2.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PrestadorCadastroForm2PageRoutingModule
  ],
  declarations: [PrestadorCadastroForm2Page]
})
export class PrestadorCadastroForm2PageModule {}
