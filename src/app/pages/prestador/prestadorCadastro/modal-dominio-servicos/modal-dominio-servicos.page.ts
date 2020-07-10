import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonRadioGroup } from '@ionic/angular';
@Component({
  selector: 'app-modal-dominio-servicos',
  templateUrl: './modal-dominio-servicos.page.html',
  styleUrls: ['./modal-dominio-servicos.page.scss'],
})
export class ModalDominioServicosPage {

    @Input() servicos:any[];
    servicoSelecionado:string;
    @ViewChild('radioGroup') radioGroup: IonRadioGroup
  constructor(public navParams: NavParams, private modalController: ModalController ) { 
    this.servicos = this.navParams.data.servicos;
   }

   salvar(){

    let servico = this.servicos.filter(y=>y.servicoId ==  this.servicoSelecionado)[0];

    this.modalController.dismiss(
      servico, 
      'confirm'
    );
   }

   closeModal() { 
     this.modalController.dismiss(null, 'cancel'); 
   }


   radioSelect(event) {

    this.servicoSelecionado = event.detail.value;
  }
}
