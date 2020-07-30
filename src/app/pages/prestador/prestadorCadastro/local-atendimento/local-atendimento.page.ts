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
import { AdicionarLocalAtendimentoPage } from '../adicionar-local-atendimento/adicionar-local-atendimento.page';

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

        if (!this.locaisAtendimentos || this.locaisAtendimentos.length == 0) {
          this.abreModalSelecionarLocalAtendimento();
        }
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

  }

  public validaAdicionarLocalAtendimento(localAtendimento: any) {
    let valido = true;
    let mensagem = "";

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

    this.excluirLocalizacao(item);
    this.alertController.create({
      header: 'Atenção',
      message: 'Deseja excluir registro?',
      buttons: [
        {
          text: 'Não',
        }, {
          text: 'Sim',
          handler: () => {
            //this.excluirLocalizacao(item)
          }
        }
      ]
    }).then(result => { result.present().then(tt => { console.log('Teste') }) });

  }

  private excluirLocalizacao(item: any) {

    let index = this.locaisAtendimentos.findIndex(y => y.cidade == item.cidade && y.uf == item.uf); //find index in your array
    this.locaisAtendimentos.splice(index, 1);//remove element from array

    this.loadingContr.showLoader();

    this.prestadorService
      .ExcluirLocalAtendimento(Config.RecuperaInstancia()
        .recuperaUsuario().usuarioId, item)
      .then((result) => {

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public prosseguir() {

    if (this.locaisAtendimentos.length == 0) {
      HandlerError.handler("Favor informar local de atendimento.", this.toastCtrl);
      return false;
    }

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


  public voltar() {
    this.router.navigate(['dados-empresa']);
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
      });
    });
  }

}
