import { Component, OnInit, NgZone } from '@angular/core';
import { HandlerError } from 'src/app/helpers/handlerError';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { ToastController, AlertController } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Router } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { Config } from 'src/app/config';
import { Constants } from 'src/app/utils/constants';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ConfirmAlert } from 'src/app/helpers/confirmAlert';

@Component({
  selector: 'app-dados-empresa',
  templateUrl: './dados-empresa.page.html',
  styleUrls: ['./dados-empresa.page.scss'],
})
export class DadosEmpresaPage implements OnInit {

  formulario: FormGroup;
  prestador: any = {}

  validation_messages = {
    'telefone': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'igrejaId': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'cep': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'razaoSocial': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ]
  };

  constructor(public usuarioService: UsuarioService,
    public router: Router,
    public toastCtrl: ToastController,
    private ngZone: NgZone,
    public prestadorService: PrestadorService,
    public buscarCEPService: BuscarCEPService,
    public loadingContr: LoadingContr,
    public confirmAlert: ConfirmAlert,
    public alertController: AlertController
  ) {

    this.formulario = new FormGroup({

      'telefone': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'cep': new FormControl('', Validators.compose([
        Validators.required
      ])), 'uf': new FormControl('', Validators.compose([
        Validators.required
      ])), 'cidade': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'bairro': new FormControl('', Validators.compose([
        Validators.required
      ])), 'logradouro': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'razaoSocial': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ngOnInit() {

    this.prestadorService.RecuperaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then((result) => {
        this.prestador = result;
        debugger
        if (result) {

          this.formulario.controls['telefone'].setValue(result.telefone);
          this.formulario.controls['cep'].setValue(result.cep);
          this.formulario.controls['uf'].setValue(result.uf);
          this.formulario.controls['cidade'].setValue(result.cidade);
          this.formulario.controls['bairro'].setValue(result.bairro);
          this.formulario.controls['logradouro'].setValue(result.logradouro);
          this.formulario.controls['razaoSocial'].setValue(result.razaoSocial);
        } else {
          this.prestador = {};
          this.prestador.situacaoPrestador = Constants.TipoSituacaoPrestador.PrestadorEmEdicao;
        }
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

  }

  buscarEnderecoPorCEP() {
    if (!this.formulario.value['cep'] || this.formulario.value['cep'].toString().length != "8") {
      this.formulario.value.cidade = null;
      this.formulario.value.bairro = null;
      this.formulario.value.uf = null;
      this.formulario.value.logradouro = null;

      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }

    this.loadingContr.showLoader();

    this.buscarCEPService.buscarCEP(this.formulario.value['cep']).then(x => {
      if (x && !x.erro) {
        this.formulario.controls["cidade"].setValue(x.localidade);
        this.formulario.controls["bairro"].setValue(x.bairro);
        this.formulario.controls["uf"].setValue(x.uf);
        this.formulario.controls["logradouro"].setValue(x.logradouro);

      } else {
        HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      }

      this.loadingContr.hideLoader()

    }).catch(x => {
      this.loadingContr.hideLoader()
      HandlerError.handler(x, this.toastCtrl);
    })
  }

  prosseguir() {
    if (!this.formulario.value.cidade) {
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl)
      return false;
    }

    if (!this.formulario.valid) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl)
      return false;
    }

    // Caso situação do prestador serja diferente de Em edição, sistema deverá alertar usuário sobre a alteração da situação
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      const result = this.confirmAlert.confirmationAlert(this.alertController,
        'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?'
      ).then(result => {
        if (result) {
          this.atualizaSituacaoPrestador(Constants.TipoSituacaoPrestador.PendenteAutorizacao, 'meu-cadastro-prestador');
        }
      });
    } else {
      this.atualizaSituacaoPrestador(Constants.TipoSituacaoPrestador.PrestadorEmEdicao, 'prestador-local-atendimento');
    }
  }

  public atualizaSituacaoPrestador(situacaoPrestador: number, redirectURL: string) {

    this.loadingContr.showLoader()
    let obj = this.formulario.value;
    obj.usuarioId = Config.RecuperaInstancia().recuperaUsuario().usuarioId
    obj.situacaoPrestador = situacaoPrestador;

    if (this.prestador) {
      obj.situacaoPrestador = this.prestador.situacaoPrestador;
    }

    this.prestadorService.AdicionarNovoPrestador(obj)
      .then(() => {
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
        this.ngZone.run(() => {
          this.router.navigate([redirectURL]);
        });
      })
      .catch((error) => {
        HandlerError.handler(error, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public voltar() {
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      this.router.navigate(['meu-cadastro-prestador']);
    }
  }
}
