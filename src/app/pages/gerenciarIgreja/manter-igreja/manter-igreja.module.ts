import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManterIgrejaPageRoutingModule } from './manter-igreja-routing.module';

import { ManterIgrejaPage } from './manter-igreja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManterIgrejaPageRoutingModule
  ],
  declarations: [ManterIgrejaPage]
})
export class ManterIgrejaPageModule {}
