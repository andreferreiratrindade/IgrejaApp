import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorCadastroIgrejaVinculoPageRoutingModule } from './prestador-cadastro-igreja-vinculo-routing.module';

import { PrestadorCadastroIgrejaVinculoPage } from './prestador-cadastro-igreja-vinculo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    PrestadorCadastroIgrejaVinculoPageRoutingModule
  ],
  declarations: [PrestadorCadastroIgrejaVinculoPage]
})
export class PrestadorCadastroIgrejaVinculoPageModule {}
