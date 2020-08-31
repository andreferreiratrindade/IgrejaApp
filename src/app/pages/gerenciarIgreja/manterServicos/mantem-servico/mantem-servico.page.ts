import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { AdicionaServicoPage } from '../adiciona-servico/adiciona-servico.page';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { HandlerError } from 'src/app/helpers/handlerError';
import { Constants } from 'src/app/utils/constants';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ConfirmAlert } from 'src/app/helpers/confirmAlert';

@Component({
  selector: 'app-mantem-servico',
  templateUrl: './mantem-servico.page.html',
  styleUrls: ['./mantem-servico.page.scss'],
})
export class MantemServicoPage implements OnInit {

  nomeServico: string
  servicos: any[] = [];
  dominioServicos: any[] = [];

  constructor(public servicoService: DominioServicoService,
    public modalCtrl: ModalController,
    public loadingContr: LoadingContr,
    public confirmAlert: ConfirmAlert,
    public alertController: AlertController,
    private _cdr: ChangeDetectorRef,
    public toastCtrl: ToastController) { }

  ngOnInit() {

    this.servicoService.recuperaDominioServico().then(result => {
      this.servicos = result;
      this.dominioServicos = result;
    });
  }

  public salvar() {
    if (!this.nomeServico) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl);
      return false;
    }
    this.servicoService.recuperaDominioServico().then(result => {
      this.loadingContr.showLoader();
      if (result.filter(x => x.nomeServico == this.nomeServico).length > 0) {
        HandlerError.handler("Serviço já cadastrado.", this.toastCtrl);
        this.loadingContr.hideLoader();

        return false;
      } else {

        this.servicoService.adicionaServico({ nomeServico: this.nomeServico, deletado: false })
          .then(result => {
            this.nomeServico = null;
            ToastCustom.SucessoToast(this.toastCtrl);
            this.ngOnInit();
            this.loadingContr.hideLoader();

          }).catch((error) => {
            HandlerError.handler(error, this.toastCtrl);
            this.loadingContr.hideLoader();
          });
      }
    })
      .catch((error) => {
        HandlerError.handler(error, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public abreModalSelecionaServico() {
    const modal = this.modalCtrl.create({
      component: AdicionaServicoPage,
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();

      modal.onWillDismiss().then(resultModal => {

      });
    });
  }

  public recuperaServicos(ev: any) {
    let val = "";
    if (ev && ev.target) {
      val = ev.target.value;
    }
    if (val && val.trim() !== '') {
      this.servicos = this.dominioServicos.filter(item => {
        return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1
      });
    } else {
      this.servicos = [...this.dominioServicos];
    }
    if (this.servicos.length > 10) this.servicos.length = 10;
  }

  public excluirServicoConfirm(item: any) {

    const result = this.confirmAlert.confirmationAlert(this.alertController,
      'Deseja excluir o serviço <strong>' + item.nomeServico + '</strong>?'
    ).then(result => {
      if (result) {
        this.excluirServico(item.servicoId);
      }
    });
  }

  public excluirServico(servicoId: string) {
    this.loadingContr.showLoader();

    this.servicoService.excluirServico(servicoId).then(result => {
      this._cdr.detectChanges();

      this.loadingContr.hideLoader();
      ToastCustom.SucessoToast(this.toastCtrl);
      this.ngOnInit();
    }).catch(err => {
      HandlerError.handler(err, this.toastCtrl);
      this.loadingContr.hideLoader();
    });

  }

}
