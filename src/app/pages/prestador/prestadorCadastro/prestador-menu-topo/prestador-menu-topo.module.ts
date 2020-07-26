import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestadorMenuTopoPageRoutingModule } from './prestador-menu-topo-routing.module';

import { PrestadorMenuTopoPage } from './prestador-menu-topo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestadorMenuTopoPageRoutingModule
  ],
  declarations: [PrestadorMenuTopoPage]
})
export class PrestadorMenuTopoPageModule {}
