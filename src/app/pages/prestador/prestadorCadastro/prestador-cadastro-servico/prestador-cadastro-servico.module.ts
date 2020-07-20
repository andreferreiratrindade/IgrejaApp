import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroServicoPageRoutingModule } from './prestador-cadastro-servico-routing.module';

import { PrestadorCadastroServicoPage } from './prestador-cadastro-servico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PrestadorCadastroServicoPageRoutingModule
  ],
  declarations: [PrestadorCadastroServicoPage]
})
export class PrestadorCadastroServicoPageModule {}
