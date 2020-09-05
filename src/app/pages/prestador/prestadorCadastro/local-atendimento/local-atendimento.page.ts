import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalCidadePage } from 'src/app/pages/cidade/modal-cidade/modal-cidade.page';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ModalUFPage } from 'src/app/pages/UF/modal-uf/modal-uf.page';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { Config } from 'src/app/config';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { Constants } from 'src/app/utils/constants';
import { constants } from 'buffer';
import { AdicionarLocalAtendimentoPage } from '../adicionar-local-atendimento/adicionar-local-atendimento.page';
import { ConfirmAlert } from 'src/app/helpers/confirmAlert';

@Component({
  selector: 'app-local-atendimento',
  templateUrl: './local-atendimento.page.html',
  styleUrls: ['./local-atendimento.page.scss'],
})
export class LocalAtendimentoPage implements OnInit {
  formulario: FormGroup;
  locaisAtendimentos: any[] = [];
  cidades: string[];
  prestador: any = {};
  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public loadingContr: LoadingContr,
    public router: Router,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public buscarCEPService: BuscarCEPService,
    public confirmAlert: ConfirmAlert,
    private _cdr: ChangeDetectorRef

  ) {

    this.formulario = new FormGroup({
      'uf': new FormControl('', Validators.compose([
        Validators.required
      ])), 'ufApresentacao': new FormControl('', Validators.compose([
        Validators.required
      ])),

      'cidade': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
    this.loadingContr.showLoader();
    let usuarioId = Config.RecuperaInstancia().recuperaUsuario().usuarioId;
    this.prestadorService.RecuperaPrestador(usuarioId)
      .then((result) => {
        this.prestador = result;
        this.locaisAtendimentos = result.locaisAtendimento;
        this.loadingContr.hideLoader();
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

  }

  public validaAdicionarLocalAtendimento(localAtendimento: any) {

    let obj = { valido: true, mensagem: "" };
    if (!localAtendimento.cidade || !localAtendimento.uf) {
      obj.valido = false;
      obj.mensagem = Constants.Mensagens.CamposObrigatorios;
      return obj;
    }

    if (this.locaisAtendimentos && this.locaisAtendimentos
      .filter(y => { return y.uf == localAtendimento.uf && y.cidade == localAtendimento.cidade; }).length > 0) {
      obj.valido = false;
      obj.mensagem = "Local de atendimento já foi adicionado.";
      return obj;
    }

    return obj;
  }


  excluirButtonClick(item) {

    this.confirmAlert.confirmationAlert(this.alertController,
      'Deseja excluir local de atendimento <strong>' + item.cidade + " / " + item.uf + '</strong>?'
    ).then(result => {
      if (result) {
        if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
          const result = this.confirmAlert.confirmationAlert(this.alertController,
            'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?'
          ).then(result => {
            if (result) {
              this.excluirLocalizacao(item);
            }
          });
        } else {
          this.excluirLocalizacao(item);
        }
      }
    });
  }

  private excluirLocalizacao(item: any) {
    this.loadingContr.showLoader();

    this.prestadorService
      .ExcluirLocalAtendimento(Config.RecuperaInstancia()
        .recuperaUsuario().usuarioId, item)
      .then((result) => {
        this.locaisAtendimentos = this.locaisAtendimentos.filter(y => { return y.cidade == item.cidade && y.uf == item.uf });
        this._cdr.detectChanges();

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public ExcluirLocalAtendimento() {

  }

  public prosseguir() {

    if (this.locaisAtendimentos.length == 0) {
      HandlerError.handler("Favor informar local de atendimento.", this.toastCtrl);
      return false;
    }
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      this.router.navigate(['meu-cadastro-prestador']);
    } else {
      this.router.navigate(['prestador-cadastro-servico']);
    }
  }


  public voltar() {
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      this.router.navigate(['meu-cadastro-prestador']);
    } else {

      this.router.navigate(['dados-empresa']);
    }
  }

  public abreModalSelecionarLocalAtendimento() {

    const modal = this.modalCtrl.create({
      component: AdicionarLocalAtendimentoPage,
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal.data) {
          let localAtendimento = { uf: resultModal.data.uf, cidade: resultModal.data.cidade };
          let msg = this.validaAdicionarLocalAtendimento(localAtendimento)
          if (!msg.valido) {
            HandlerError.handler(msg.mensagem, this.toastCtrl);
            return false;
          }
          if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
            const result = this.confirmAlert.confirmationAlert(this.alertController,
              'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?'
            ).then(result => {
              if (result) {
                this.adicionaLocalAtendimento(localAtendimento);
              }
            });
          } else {
            this.adicionaLocalAtendimento(localAtendimento);
          }
        }
      });
    });
  }

  public adicionaLocalAtendimento(localAtendimento: any) {
    this.loadingContr.showLoader();
    this.prestadorService.AdicionaLocalAtendimento(localAtendimento, Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then(() => {
        if (!this.locaisAtendimentos) {
          this.locaisAtendimentos = [];
        }
        this.locaisAtendimentos.push(localAtendimento);
        this.formulario.reset();
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

}
