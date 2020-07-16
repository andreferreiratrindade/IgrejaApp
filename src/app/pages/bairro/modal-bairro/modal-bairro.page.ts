import { Component, OnInit } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-modal-bairro',
  templateUrl: './modal-bairro.page.html',
  styleUrls: ['./modal-bairro.page.scss'],
})
export class ModalBairroPage implements OnInit {

  private dominioBairro: any[] = []
  uf: string
  cidade: string
  itens: any[] = []
  constructor(public loadingContr: LoadingContr,
    public toastCtrl: ToastController,
    public prestadorService: PrestadorService,
    public modalController: ModalController,
    public navParams: NavParams) {

    this.uf = this.navParams.data.uf;
    this.cidade = this.navParams.data.cidade;
    this.loadingContr.showLoader();
    this.prestadorService.RecuperaBairroPrestadorDisponiveis(this.navParams.data.uf, this.navParams.data.cidade)
      .then(result => {
        this.dominioBairro = result;
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
      this.itens = this.dominioBairro.filter(item => { return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1 });
    } else {
      this.itens = this.dominioBairro;
    }
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionar(item: any) {
    this.modalController.dismiss(item, 'success');
  }

}