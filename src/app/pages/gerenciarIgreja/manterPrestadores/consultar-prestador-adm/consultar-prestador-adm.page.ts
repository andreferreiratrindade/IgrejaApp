import { Component, OnInit, ViewChild } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';
import { IonContent, ToastController, ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Constants } from 'src/app/utils/constants';
import { ModalSituacaoPrestadorPage } from '../modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.page';
import { ModalIgrejaPage } from 'src/app/pages/igreja/modal-igreja/modal-igreja.page';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-consultar-prestador-adm',
  templateUrl: './consultar-prestador-adm.page.html',
  styleUrls: ['./consultar-prestador-adm.page.scss'],
})
export class ConsultarPrestadorAdmPage implements OnInit {

  @ViewChild(IonContent) ionContent: IonContent;

  prestadores: any[] = [];
  formConsultarPrestadorADM: FormGroup;
  private igrejasDoAdmin: any[];
  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService,
    public usuarioService: UsuarioService,
    public loadingContr: LoadingContr,
    public dominioServicoService: DominioServicoService,
    public router: Router,
    public modalCtrl: ModalController
  ) {

    this.formConsultarPrestadorADM = new FormGroup({
      'nomeSituacaoPrestador': new FormControl(),
      'situacaoPrestador': new FormControl(),
      'nomeIgreja': new FormControl(),
      'igrejaId': new FormControl(),
    });
    this.prestadores = [];
  }

  ngOnInit() {

    this.loadingContr.showLoader();
    this.igrejaService.RecuperaIgrejaPorAdministrador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
    .then(result => {
      this.igrejasDoAdmin = result;
      this.formConsultarPrestadorADM.controls['nomeIgreja'].setValue(result[0].nomeIgreja);
      this.formConsultarPrestadorADM.controls['igrejaId'].setValue(result[0].id);
      this.loadingContr.hideLoader();
    }).catch(err => {

      this.loadingContr.hideLoader();
      HandlerError.handler(err, this.toastCtrl);
    });
    // let usuario = Config.RecuperaInstancia().recuperaUsuario();

    // this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId)
    //   .then(igrejaResult => {
    //     this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId)
    //       .then(prestadoresResult => {
    //         this.prestadores = prestadoresResult
    //       })
    //   })
  }

  ConsultarPrestador() {

    this.prestadores = [];
    this.loadingContr.showLoader();

    this.prestadorService
      .RecuperaPestadoresPesquisarPorAdministrador(
        this.formConsultarPrestadorADM.value.situacaoPrestador
        , this.formConsultarPrestadorADM.value.igrejaId
        , Config.RecuperaInstancia().recuperaUsuario().usuarioId
        , this.igrejasDoAdmin.map(x => { let obj = { igrejaId: x.id }; return obj; })
      )
      .then(prestadoresResult => {
        

        if (!prestadoresResult || prestadoresResult.length == 0) {
          ToastCustom.CustomToast(this.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);
          this.loadingContr.hideLoader();
          return false;
        }
        this.prestadores = prestadoresResult;

        this.prestadores.map(y=>{y.nomeSituacaoPrestador = Constants.ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(y.situacaoPrestador)});
        let lstusuarioId = [];
        lstusuarioId = prestadoresResult.map(x => { return x.usuarioId });
        this.recuperaNomePrestadores(lstusuarioId);

        let lstIgrejaId = [];
        lstIgrejaId = prestadoresResult.map(x => { return x.igrejaId });
        this.recuperaNomeIgreja(lstIgrejaId);

      }).catch(x => {

        HandlerError.handler(x, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }
  private recuperaNomePrestadores(lstusuarioId): Promise<any> {
    return new Promise((result, reject) => {
      this.usuarioService.RecuperaNomeUsuarios(lstusuarioId)
        .then(usuariosResult => {
          this.prestadores.map(x => {
            x.nome = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.nome;
            x.email = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.email;
          });

          this.ionContent.scrollToPoint(0, 350, 800);
          this.loadingContr.hideLoader();

        }).catch(x => {

          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  private recuperaNomeIgreja(lstIgrejaId): Promise<any> {
    return new Promise((result, reject) => {

      this.igrejaService.RecuperaNomeIgreja(lstIgrejaId)
        .then(resultIgreja => {
          this.prestadores.map(x => {
            x.nomeIgreja = resultIgreja.find(y => y.data.id == x.igrejaId).data.nomeIgreja;
          });
          this.loadingContr.hideLoader();

        }).catch(x => {
          reject(x)
          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  abrirModalSituacaoPrestador() {
    const modal = this.modalCtrl.create({
      component: ModalSituacaoPrestadorPage,
      componentProps: { situacoes: Constants.ListTipoSituacaoPrestador.RecuperaListagem().filter(y=>{return y.value!== Constants.TipoSituacaoPrestador.PrestadorEmEdicao}) },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {

        if (resultModal.data) {
          this.formConsultarPrestadorADM.controls['nomeSituacaoPrestador'].setValue(resultModal.data.descricao);
          this.formConsultarPrestadorADM.controls['situacaoPrestador'].setValue(resultModal.data.valor);
        }
      });
    });
  }

  configuracoes(item: any) {
    this.router.navigate(['/manter-prestador'], { queryParams: { prestadorUsuarioId: item } });
  }

  abrirModalIgreja() {
    const modal = this.modalCtrl.create({
      component: ModalIgrejaPage,
      componentProps: {
        igrejas: this.igrejasDoAdmin
      },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal) {
          this.formConsultarPrestadorADM.controls['nomeIgreja'].setValue(resultModal.data.nomeIgreja);
          this.formConsultarPrestadorADM.controls['igrejaId'].setValue(resultModal.data.id);
        }
      });
    });
  }
}
