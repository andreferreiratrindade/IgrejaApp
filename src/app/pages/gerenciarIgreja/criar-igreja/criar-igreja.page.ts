import { Component, OnInit, NgZone } from '@angular/core';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastCustom } from 'src/app/helpers/toastCustom';

@Component({
  selector: 'app-criar-igreja',
  templateUrl: './criar-igreja.page.html',
  styleUrls: ['./criar-igreja.page.scss'],
})
export class CriarIgrejaPage implements OnInit {

  private igrejaEntity: any
  public formData: FormGroup;
  public enderecoParte1:string;
  public enderecoParte2:string;
  validation_messages = {
    'nomeIgreja': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'cep': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ]
  };
  constructor(public buscarCEPService: BuscarCEPService,
    public igrejaService: IgrejaService,
    public router: Router,
    public toastCtrl: ToastController,
    private ngZone: NgZone,
    private usuarioService: UsuarioService,
    public loadingControll:LoadingContr
  ) {

    this.formData = new FormGroup({
      'cep': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'nomeIgreja': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ngOnInit() {
    
  }

  buscarEnderecoPorCEP() {

    this.igrejaEntity = {};
    if(!this.formData.value['cep'] || this.formData.value['cep'].length != "8"){
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }
    this.loadingControll.showLoader();


    this.buscarCEPService.buscarCEP(this.formData.value['cep']).then(x => {
  
      if (x && !x.erro) {
        this.igrejaEntity.cidade = x.localidade;
        this.igrejaEntity.bairro = x.bairro;
        this.igrejaEntity.uf = x.uf;
        this.igrejaEntity.logradouro = x.logradouro;
        this.igrejaEntity.cep = x.cep;
        this.enderecoParte1 = x.logradouro + ", " + x.bairro;
        this.enderecoParte2 = x.localidade + "/" +x.uf;
        this.loadingControll.hideLoader();
      }else{
        this.loadingControll.hideLoader()
        HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      }

    }).catch(x => {
      this.loadingControll.hideLoader();
      HandlerError.handler(x, this.toastCtrl);
    });

  }

  salvarIgreja() {
    if (!this.igrejaEntity || !this.igrejaEntity.cidade) {
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }

    if(!this.formData.valid ){
      HandlerError.handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.",this.toastCtrl)
      return false;
    }

    this.loadingControll.showLoader()
    
    this.igrejaEntity.nomeIgreja = this.formData.value['nomeIgreja'];
    this.igrejaEntity.administradores = [{usuarioId:Config.RecuperaInstancia().recuperaUsuario().usuarioId}];
    this.igrejaService.AdicionarNovaIgreja(this.igrejaEntity).then(x => {
      this.loadingControll.hideLoader();

      ToastCustom.SucessoToast(this.toastCtrl);

    }).catch((error) => {
      HandlerError.handler(error, this.toastCtrl);
      this.loadingControll.hideLoader();

    });  
  }
}
