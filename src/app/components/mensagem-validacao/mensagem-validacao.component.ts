import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-validacao',
  templateUrl: './mensagem-validacao.component.html',
  styleUrls: ['./mensagem-validacao.component.scss'],
})
export class MensagemValidacaoComponent  {

  @Input() form : any
  @Input() nomeCampo:any
  @Input() validation_messages_object:any
  constructor() { }



}
