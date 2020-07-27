import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { TextoCortadoComponent } from './textoCortado/texto-cortado/texto-cortado.component';
import { PopupMenuComponentPopover } from './textoCortado/texto-cortado/textoPropover';
import { TablinksPage } from '../pages/tablinks/tablinks.page';

const PAGES_COMPONENTS = [
  MensagemValidacaoComponent,
  AccordionComponent,
  TextoCortadoComponent,
  PopupMenuComponentPopover,
  TablinksPage
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
