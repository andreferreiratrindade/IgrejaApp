import { Component, OnInit } from '@angular/core';
import { ModalIgrejaPage } from 'src/app/pages/igreja/modal-igreja/modal-igreja.page';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalCidadePage } from 'src/app/pages/cidade/modal-cidade/modal-cidade.page';
import { ModalUFPage } from 'src/app/pages/UF/modal-uf/modal-uf.page';
import { Constants } from 'src/app/utils/constants';
import { Config } from 'src/app/config';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-prestador-cadastro-igreja-vinculo',
  templateUrl: './prestador-cadastro-igreja-vinculo.page.html',
  styleUrls: ['./prestador-cadastro-igreja-vinculo.page.scss'],
})
export class PrestadorCadastroIgrejaVinculoPage implements OnInit {

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
      ])),
      'ufApresentacao': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'cidade': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'igrejaId': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'nomeIgreja': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'staMembro': new FormControl('', Validators.compose([
        Validators.required
      ]))

    });

    this.formulario.controls["staMembro"].setValue(true);
  }

  ngOnInit() {
  }

  public abrirModalIgreja() {
    const modal = this.modalCtrl.create({
      component: ModalIgrejaPage,
      componentProps: {
        uf: this.formulario.value.uf,
        cidade: this.formulario.value.cidade,
        bairro: this.formulario.value.bairro
      },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal) {
          this.formulario.controls["nomeIgreja"].setValue(resultModal.data.nomeIgreja);
          this.formulario.controls["igrejaId"].setValue(resultModal.data.id);
        }
      });
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
          this.formulario.controls["cidade"].setValue(null);
          this.formulario.controls["nomeIgreja"].setValue(null);
          this.formulario.controls["igrejaId"].setValue(null);

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
          this.formulario.controls["nomeIgreja"].setValue(null);
          this.formulario.controls["igrejaId"].setValue(null);
        }
      });
    });
  }

  public prosseguir() {

    if (!this.formulario.valid) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl);
      return false;
    }
    this.loadingContr.showLoader();
    let obj = {
      situacaoPrestador: Constants.TipoSituacaoPrestador.FinalizarCadastro
      , igrejaId: this.formulario.value.igrejaId
      , staMembro: this.formulario.value.staMembro
    };

    this.prestadorService
      .AtualizaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
        this.router.navigate(['prestador-cadastro-finalizar']);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }
}
