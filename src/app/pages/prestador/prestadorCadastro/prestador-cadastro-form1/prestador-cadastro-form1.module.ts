import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroForm1PageRoutingModule } from './prestador-cadastro-form1-routing.module';

import { PrestadorCadastroForm1Page } from './prestador-cadastro-form1.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrestadorCadastroForm1Page,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PrestadorCadastroForm1PageRoutingModule
  ],
  declarations: [PrestadorCadastroForm1Page]
})
export class PrestadorCadastroForm1PageModule {}
