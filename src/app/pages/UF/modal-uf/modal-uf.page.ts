import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, ModalController, IonInput } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';

@Component({
  selector: 'app-modal-uf',
  templateUrl: './modal-uf.page.html',
  styleUrls: ['./modal-uf.page.scss'],
})
export class ModalUFPage implements OnInit, AfterViewInit {

  private dominioUF: any[] = [];
  itens: any[] = [];
  @ViewChild('searchbar') inputElement: IonInput;

  constructor(public loadingContr: LoadingContr,
    public toastCtrl: ToastController,
    public prestadorService: PrestadorService,
    public modalController: ModalController) {
    this.loadingContr.showLoader();
    this.prestadorService.RecuperaUfPrestadorDisponiveis()
      .then(result => {
        this.dominioUF = result;
        this.itens = result;
        this.loadingContr.hideLoader();

      }).catch(x => {
        this.loadingContr.hideLoader();
        HandlerError.handler(x, this.toastCtrl);
      });

  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.inputElement.setFocus();
    }, 800);
  }

  ngOnInit() {
  }



  recuperaItens(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.itens = this.dominioUF.filter(item => { return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1 });
    } else {
      this.itens = this.dominioUF;
    }
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionar(item: any) {
    this.modalController.dismiss(item, 'success');
  }

}
