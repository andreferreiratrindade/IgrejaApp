import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonInput, ToastController, ModalController, NavParams } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';

@Component({
  selector: 'app-modal-situacao-prestador',
  templateUrl: './modal-situacao-prestador.page.html',
  styleUrls: ['./modal-situacao-prestador.page.scss'],
})
export class ModalSituacaoPrestadorPage implements OnInit, AfterViewInit {

  private dominioSituacoes: any[] = [];
  itens: any[] = [];
  @ViewChild('searchbar') inputElement: IonInput;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams) {

    this.itens = this.navParams.data.situacoes;
      this.dominioSituacoes =this.navParams.data.situacoes; 

  }

  ngOnInit() {
  }
  ngAfterViewInit() {

    setTimeout(() => {
      this.inputElement.setFocus();
    }, 800);
  }

  recuperaItens(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.itens = this.dominioSituacoes.filter(item => { return item.toLowerCase().indexOf(val.toLowerCase()) > -1 });
    } else {
      this.itens = this.dominioSituacoes;
    }
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionar(item: any) {
    this.modalController.dismiss(item, 'success');
  }

}
