import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { Router } from '@angular/router';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, ModalController } from '@ionic/angular';
import { Config } from 'src/app/config';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Constants } from 'src/app/utils/constants';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ModalIgrejaPage } from 'src/app/pages/igreja/modal-igreja/modal-igreja.page';

@Component({
  selector: 'app-prestador-cadastro-form1',
  templateUrl: './prestador-cadastro-form1.page.html',
  styleUrls: ['./prestador-cadastro-form1.page.scss'],
})
export class PrestadorCadastroForm1Page implements OnInit {

  igrejas: any[]
  form1: FormGroup;
  authRedirectResult: Subscription;
  prestador: any = {}
  StaMembro: boolean;

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
    public igrejaService: IgrejaService,
    public router: Router,
    public toastCtrl: ToastController,
    private ngZone: NgZone,
    public prestadorService: PrestadorService,
    public buscarCEPService: BuscarCEPService,
    public loadingContr: LoadingContr,
    public modalCtrl :ModalController
  ) {

    this.form1 = new FormGroup({
     
      'telefone': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'cep': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'razaoSocial': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'igrejaId': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'nomeIgreja': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'staMembro': new FormControl({value:false}, Validators.compose([
      ]))
    });
    this.igrejas = [];
    this.form1.controls['staMembro'].setValue(true);
  }

  ngOnInit() {

  }

  buscarEnderecoPorCEP() {
    if(!this.form1.value['cep'] || this.form1.value['cep'].toString().length != "8"){
      this.prestador.cidade = null;
      this.prestador.bairro = null;
      this.prestador.uf = null;
      this.prestador.logradouro = null;

      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      return false;
    }

    this.loadingContr.showLoader();

    this.buscarCEPService.buscarCEP(this.form1.value['cep']).then(x => {


      
      if (x && !x.erro) {
        this.prestador.cidade = x.localidade;
        this.prestador.bairro = x.bairro;
        this.prestador.uf = x.uf;
        this.prestador.logradouro = x.logradouro;
        this.prestador.cep = x.cep;

        this.igrejaService.RecuperaIgrejasPorCidade(this.prestador.cidade).then(x => {

          if (x && x.length > 0) {

            this.igrejas = x.map(map => {
              return { id: map.id, nomeIgreja: map.data.nomeIgreja }
            });
          } else {
            this.igrejas = [];
            HandlerError.handler("Nenhuma igreja encontrada para localidade informada.", this.toastCtrl);
          }
          this.loadingContr.hideLoader();
        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
      } else {
        this.igrejas = [];
        HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
      }

    }).catch(x => {
      this.igrejas = [];
      this.loadingContr.hideLoader()
      HandlerError.handler(x, this.toastCtrl);
    })
  }

  SalvarForm1() {

    if (!this.prestador || !this.prestador.cidade) {
      HandlerError.handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl)
      return false;
    }

    if (!this.form1.valid) {
      HandlerError.handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.", this.toastCtrl)
      return false;
    }
    this.loadingContr.showLoader()
    this.prestador.igrejas = [{ igrejaId: this.form1.value['igrejaId'], staMembro: this.form1.value['staMembro'] }];
    this.prestador.usuarioId = Config.RecuperaInstancia().recuperaUsuario().usuarioId;
    this.prestador.situacaoPrestador = 2;
    let obj = this.MontaPrestadorParaSalvar(this.prestador, this.form1);

    this.prestadorService.AdicionarNovoPrestador(obj)
      .then(() => {
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
        this.ngZone.run(() => {
          this.router.navigate(['prestador-Form2']);
        });
      })
      .catch((error) => {
        HandlerError.handler(error, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  MontaPrestadorParaSalvar(prestador: any, formulario: any) {
    let obj = prestador;
    obj.telefone = formulario.value['telefone'];
    obj.razaoSocial = formulario.value['razaoSocial'];
    return obj;
  }
  updateToggleSet(obj:any){
    console.log(this.form1.value['staMembro'].value);
  }

  public abrirModalIgreja() {
    const modal = this.modalCtrl.create({
        component: ModalIgrejaPage,
        componentProps: { 
                            uf: this.prestador.uf, 
                            cidade: this.prestador.cidade,
                            bairro:this.prestador.bairro 
                        },
        backdropDismiss: false,
    }).then((modal) => {
        modal.present();
        modal.onWillDismiss().then(resultModal => {
            if (resultModal) {
              
              this.form1.controls['nomeIgreja'].setValue(resultModal.data.nomeIgreja);
              this.form1.controls['igrejaId'].setValue(resultModal.data.id);
                // this.form1.value.nomeIgreja = resultModal.data.nomeIgreja;
                // this.form1.value.igrejaId = resultModal.data.id;
            }
        });
    });
}
}
