import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-local-atendimento',
  templateUrl: './local-atendimento.page.html',
  styleUrls: ['./local-atendimento.page.scss'],
})
export class LocalAtendimentoPage implements OnInit {
  formulario: FormGroup;
  locaisAtendimentos: any[] = [];
  cidades: string[];
  ngZone: any;
  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public loadingContr: LoadingContr,
    public router: Router,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public buscarCEPService: BuscarCEPService
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
        this.locaisAtendimentos = result.locaisAtendimento;
        this.loadingContr.hideLoader();
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

  }

  public validaAdicionarLocalAtendimento() {
    let valido = true;
    let mensagem = "";

    let obj = { valido: true, mensagem: "" };
    if (!this.formulario.value.cidade || !this.formulario.value.uf) {
      obj.valido = false;
      obj.mensagem = Constants.Mensagens.CamposObrigatorios;
      return obj;
    }

    if (this.locaisAtendimentos && this.locaisAtendimentos
      .filter(y => { return y.uf == this.formulario.value.uf && y.cidade == this.formulario.value.cidade; }).length > 0) {
      obj.valido = false;
      obj.mensagem = "Local de atendimento já foi adicionado.";
      return obj;
    }

    return obj;
  }

  public adicionarLocalAtendimento() {
    let validacao = this.validaAdicionarLocalAtendimento()
    if (!validacao.valido) {
      HandlerError.handler(validacao.mensagem, this.toastCtrl);
      return false;
    }
    let localAtendimento = { uf: this.formulario.value.uf, cidade: this.formulario.value.cidade };
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

  async excluirButtonClick(item) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja excluir registro?',
      buttons: [
        {
          text: 'Não',
        }, {
          text: 'Sim',
          handler: () => {
            this.excluirLocalizacao(item)
          }
        }
      ]
    });
    await alert.present();

  }

  private excluirLocalizacao(item: any) {

    this.loadingContr.showLoader();

    this.prestadorService
      .ExcluirLocalAtendimento(Config.RecuperaInstancia()
        .recuperaUsuario().usuarioId, item)
      .then((result) => {
        this.locaisAtendimentos = this.locaisAtendimentos.filter(y => { return y.cidade != item.cidade && y.uf != item.uf });
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public prosseguir() {

    this.loadingContr.showLoader();
    let obj = { situacaoPrestador: Constants.TipoSituacaoPrestador.CadastroServicos };

    this.prestadorService
      .AtualizaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);

        this.router.navigate(['prestador-cadastro-servico']);

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public abrirModalUF() {
    const modal = this.modalCtrl.create({
      component: ModalUFPage,
      backdropDismiss: false,
      componentProps: { UFs: Constants.ListagemUF.RecuperaListagem() },

    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal.data) {

          this.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);
          this.formulario.controls["uf"].setValue(resultModal.data.sigla);
          this.loadingContr.showLoader();
          this.buscarCEPService.buscarMunicipiosPorUF(resultModal.data.sigla)
            .then(result => {

              this.cidades = result;
              this.loadingContr.hideLoader();
            }
            ).catch(err => { this.loadingContr.hideLoader(); });
        }
      });
    });
  }

  public abrirModalCidade() {
    const modal = this.modalCtrl.create({
      component: ModalCidadePage,
      componentProps: { cidades: this.cidades },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal.data) {
          this.formulario.controls["cidade"].setValue(resultModal.data);
        }
      });
    });
  }

  public voltar(){
    this.router.navigate(['dados-empresa']);
  }

}
