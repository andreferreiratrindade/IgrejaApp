import { Component, OnInit, NgZone } from '@angular/core';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-criar-igreja',
  templateUrl: './criar-igreja.page.html',
  styleUrls: ['./criar-igreja.page.scss'],
})
export class CriarIgrejaPage implements OnInit {

  private igrejaEntity: any = {}
  public formData: FormGroup;
  public enderecoParte1: string;
  public enderecoParte2: string;
  validation_messages = {
    'nomeIgreja': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'cep': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ], 'nomeAdministrador': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ], 'administradorUsuarioId': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ]
  };
  constructor(public buscarCEPService: BuscarCEPService,
    public igrejaService: IgrejaService,
    public router: Router,
    public toastCtrl: ToastController,
    public loadingControll: LoadingContr,
    public ngZone: NgZone,
    public usuarioService: UsuarioService,
  ) {

    this.formData = new FormGroup({
      'cep': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'nomeIgreja': new FormControl('', Validators.compose([
        Validators.required
      ])), 'logradouro': new FormControl('', Validators.compose([
        Validators.required
      ])), 'bairro': new FormControl('', Validators.compose([
        Validators.required
      ])), 'uf': new FormControl('', Validators.compose([
        Validators.required
      ])), 'cidade': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'emailAdministrador': new FormControl('', Validators.compose([
        Validators.required
      ])), 'nomeAdministrador': new FormControl('', Validators.compose([
        Validators.required
      ])), 'administradorUsuarioId': new FormControl('', Validators.compose([
        Validators.required
      ])),


    });

  }

  ngOnInit() {

  }

  buscarEnderecoPorCEP() {

    this.formData.controls['cidade'].setValue(null);
    this.formData.controls['bairro'].setValue(null);
    this.formData.controls['uf'].setValue(null);
    this.formData.controls['logradouro'].setValue(null);

    if (!this.formData.value.cep || this.formData.value.cep.toString().length != "8") {
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }
    this.loadingControll.showLoader();


    this.buscarCEPService.buscarCEP(this.formData.value.cep).then(x => {

      if (x && !x.erro) {
        this.formData.controls['cidade'].setValue(x.localidade);
        this.formData.controls['bairro'].setValue(x.bairro);
        this.formData.controls['uf'].setValue(x.uf);
        this.formData.controls['logradouro'].setValue(x.logradouro);

        this.loadingControll.hideLoader();
      } else {
        this.loadingControll.hideLoader()
        HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      }

    }).catch(x => {
      this.loadingControll.hideLoader();
      HandlerError.handler(x, this.toastCtrl);
    });

  }

  salvarIgreja() {
    if (!this.formData.value.cidade) {
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }

    if (!this.formData.valid) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl)
      return false;
    }

    this.loadingControll.showLoader()

    this.igrejaEntity = this.formData.value;
    this.igrejaEntity.administradores = [this.formData.value.administradorUsuarioId];
    this.igrejaService.AdicionarNovaIgreja(this.igrejaEntity).then(() => {

      this.usuarioService
        .AdicionaPerfilAoUsuario(this.formData.value.administradorUsuarioId, Constants.PerfilUsuario.AdministradorIgreja)
        .then(() => {
          ToastCustom.SucessoToast(this.toastCtrl);
          this.loadingControll.hideLoader();
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
        }).catch((error) => {
          HandlerError.handler(error, this.toastCtrl);
          this.loadingControll.hideLoader();

        });

    }).catch((error) => {
      HandlerError.handler(error, this.toastCtrl);
      this.loadingControll.hideLoader();

    });
  }

  buscarUsuarioAdministradorIgreja() {
    this.loadingControll.showLoader();

    this.usuarioService.RecuperaUsuarioPorEmail(this.formData.value.emailAdministrador).then(result => {
      if (result.length > 0) {
        this.formData.controls['administradorUsuarioId'].setValue(result[0].data.usuarioId);
        this.formData.controls['emailAdministrador'].setValue(result[0].data.email);
        this.formData.controls['nomeAdministrador'].setValue(result[0].data.nome);
      } else {
        HandlerError.handler("Nenhum usuário encontrado com este e-mail.", this.toastCtrl);
      }
      this.loadingControll.hideLoader();

    }).catch((error) => {
      HandlerError.handler(error, this.toastCtrl);
      this.loadingControll.hideLoader();

    });
  }
}
