import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuLateralComponent } from './menuLateral/menu-lateral/menu-lateral.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { TextoCortadoComponent } from './textoCortado/texto-cortado/texto-cortado.component';
import { PopupMenuComponentPopover } from './textoCortado/texto-cortado/textoPropover';
import { PrestadorMenuTopoPage } from '../pages/prestador/prestadorCadastro/prestador-menu-topo/prestador-menu-topo.page';

const PAGES_COMPONENTS = [
  MensagemValidacaoComponent,
  MenuLateralComponent,
  AccordionComponent,
  TextoCortadoComponent,
  PopupMenuComponentPopover,
  PrestadorMenuTopoPage
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
