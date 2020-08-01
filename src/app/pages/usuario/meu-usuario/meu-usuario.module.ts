import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuUsuarioPageRoutingModule } from './meu-usuario-routing.module';

import { MeuUsuarioPage } from './meu-usuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    MeuUsuarioPageRoutingModule
  ],
  declarations: [MeuUsuarioPage]
})
export class MeuUsuarioPageModule {}
