import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuLateralComponent } from './menuLateral/menu-lateral/menu-lateral.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';

const PAGES_COMPONENTS = [
  MensagemValidacaoComponent,
  MenuLateralComponent,
  AccordionComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    PAGES_COMPONENTS
  ],
  exports: [
    PAGES_COMPONENTS
  ],
  entryComponents: [],
})
export class ComponentsModule { }
