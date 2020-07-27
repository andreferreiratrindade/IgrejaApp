import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ToastController, ModalController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-adiciona-servico',
  templateUrl: './adiciona-servico.page.html',
  styleUrls: ['./adiciona-servico.page.scss'],
})
export class AdicionaServicoPage implements OnInit {

  formulario: FormGroup;
  constructor(public servicoService: DominioServicoService,
    public toastCtrl: ToastController,
    public loadingContr: LoadingContr,
    public modalController:ModalController) {

    this.formulario = new FormGroup({
      'nomeServico': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ngOnInit() {
  }

  public salvar() {
    if (!this.formulario.valid) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl);
      return false;
    }

    this.loadingContr.showLoader();

    this.servicoService.recuperaDominioServico().then(result => {

      if (result.filter(x => x.nomeServico == this.formulario.value.nomeServico).length > 0) {
        HandlerError.handler("Serviço já cadastrado.", this.toastCtrl);
        return false;
      } else {
        this.servicoService.adicionaServico(this.formulario.value.nomeServico)
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

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

}
