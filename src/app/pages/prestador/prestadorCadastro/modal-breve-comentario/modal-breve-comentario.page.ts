import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-breve-comentario',
  templateUrl: './modal-breve-comentario.page.html',
  styleUrls: ['./modal-breve-comentario.page.scss'],
})
export class ModalBreveComentarioPage  {

  public servico:any;
  public breveDescricao:string;
  constructor(public navParams: NavParams, private modalController: ModalController) {

    this.servico = this.navParams.data.servico;
    this.breveDescricao = this.servico.breveDescricao ?? "";
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  ok() {
    
    this.modalController.dismiss({ breveDescricao: this.breveDescricao }, 'success');
  }
}
