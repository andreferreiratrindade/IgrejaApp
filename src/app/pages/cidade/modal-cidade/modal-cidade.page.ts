import { Component, OnInit } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-modal-cidade',
  templateUrl: './modal-cidade.page.html',
  styleUrls: ['./modal-cidade.page.scss'],
})
export class ModalCidadePage implements OnInit {

  private dominioCidade: any[] = [];
  uf : string;
  itens: any[] = [];
  constructor(public loadingContr: LoadingContr,
    public toastCtrl: ToastController,
    public prestadorService: PrestadorService,
    public modalController: ModalController,
    public navParams: NavParams) {

      this.loadingContr.showLoader();
    this.uf = this.navParams.data.uf
    this.prestadorService.RecuperaCidadePrestadorDisponiveis( this.navParams.data.uf)
      .then(result => {
        this.dominioCidade = result;
        this.itens = result;
        this.loadingContr.hideLoader();

      }).catch(x => {
        this.loadingContr.hideLoader();
        HandlerError.handler(x, this.toastCtrl);
      });
  }

  ngOnInit() {
  }

  recuperaItens(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.itens = this.dominioCidade.filter(item => { return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1 });
    } else {
      this.itens = this.dominioCidade;
    }
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionar(item: any) {
    this.modalController.dismiss(item, 'success');
  }

}
