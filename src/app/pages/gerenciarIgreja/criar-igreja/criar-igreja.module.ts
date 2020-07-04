import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarIgrejaPageRoutingModule } from './criar-igreja-routing.module';

import { CriarIgrejaPage } from './criar-igreja.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: CriarIgrejaPage,
  }
];
@NgModule({

    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ComponentsModule,
      IonicModule,
      RouterModule.forChild(routes),
  
  ],
  declarations: [CriarIgrejaPage]
})
export class CriarIgrejaPageModule {}
