import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ToastController, ModalController, IonInput } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-adiciona-servico',
  templateUrl: './adiciona-servico.page.html',
  styleUrls: ['./adiciona-servico.page.scss'],
})
export class AdicionaServicoPage implements OnInit, AfterViewInit {

  @ViewChild('nomeServico') nomeServico: IonInput;

  constructor(public servicoService: DominioServicoService,
    public toastCtrl: ToastController,
    public loadingContr: LoadingContr,
    public modalController:ModalController) {


  }

  ngOnInit() {
  }

  public salvar() {
    if (!this.nomeServico) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl);
      return false;
    }

    this.loadingContr.showLoader();

    this.servicoService.recuperaDominioServico().then(result => {

      if (result.filter(x => x.nomeServico == this.nomeServico).length > 0) {
        HandlerError.handler("Serviço já cadastrado.", this.toastCtrl);
        return false;
      } else {
        this.servicoService.adicionaServico({nomeServico:this.nomeServico.value})
          .then(result => {
            ToastCustom.SucessoToast(this.toastCtrl);
          }).catch((error) => {
            HandlerError.handler(error, this.toastCtrl);
            this.loadingContr.hideLoader();
          });
      }
      this.loadingContr.hideLoader();
    })
      .catch((error) => {
        HandlerError.handler(error, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }
  
  ngAfterViewInit() {

    setTimeout(() => {
      this.nomeServico.setFocus();
    }, 800);
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

}
