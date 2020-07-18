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
  private igrejasDoAdmin : any[];
  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService,
    public usuarioService: UsuarioService,
    public loadingContr: LoadingContr,
    public dominioServicoService: DominioServicoService,
    public router: Router,
    public modalCtrl: ModalController,
    private callNumber: CallNumber
  ) {

    this.formConsultarPrestadorADM = new FormGroup({
      'nomeSituacaoPrestador': new FormControl(),
      'situacaoPrestador': new FormControl(),
      'nomeIgreja': new FormControl(),
      'igrejaId': new FormControl(),
    });
    this.prestadores = [];

    this.igrejaService.RecuperaIgrejaPorAdministrador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
    .then(result => {
      this.igrejasDoAdmin= result;
      loadingContr.hideLoader();
    }).catch(err => {

      loadingContr.hideLoader();
      console.log(err);
    });
  }




  ngOnInit() {
    // let usuario = Config.RecuperaInstancia().recuperaUsuario();

    // this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId)
    //   .then(igrejaResult => {
    //     this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId)
    //       .then(prestadoresResult => {
    //         this.prestadores = prestadoresResult
    //       })
    //   })
  }

  ConsultarPrestador(){
  
  this.prestadores = [];
  this.loadingContr.showLoader();

  this.prestadorService
      .RecuperaPestadoresPesquisarPorAdministrador(
          this.formConsultarPrestadorADM.value.situacaoPrestador
          , this.formConsultarPrestadorADM.value.igrejaId
          ,  Config.RecuperaInstancia().recuperaUsuario().usuarioId
          , this.igrejasDoAdmin.map(x=>{let obj = {igrejaId : x.id}; return obj;})
         )
      .then(prestadoresResult => {
          if (!prestadoresResult || prestadoresResult.length == 0) {
              ToastCustom.CustomToast(this.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);
              this.loadingContr.hideLoader();
              return false;
          }
          let lstusuarioId = [];
          lstusuarioId = prestadoresResult.map(x => { return x.usuarioId });
          this.prestadores = prestadoresResult;

          let lstIgrejaId = [];
          lstIgrejaId = prestadoresResult.map(x => { return x.igrejas[0].igrejaId });

          // this.consultaMasterPrestador(lstusuarioId, lstIgrejaId).then(() => {
          //     this.loadingContr.hideLoader();

          // }).catch(x => {
          //     HandlerError.handler(x, this.toastCtrl);
          //     this.loadingContr.hideLoader();
          // });

      }).catch(x => {

          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
      });
}

  abrirModalSituacaoPrestador(){
      const modal = this.modalCtrl.create({
          component: ModalSituacaoPrestadorPage,
          componentProps: { situacoes: Constants.ListTipoSituacaoPrestador.RecuperaListagem() },
          backdropDismiss: false,
      }).then((modal) => {
          modal.present();
          modal.onWillDismiss().then(resultModal => {

              if (resultModal) {
                this.formConsultarPrestadorADM.controls['nomeSituacaoPrestador'].setValue(resultModal.data.descricao);
                this.formConsultarPrestadorADM.controls['situacaoPrestador'].setValue(resultModal.data.valor);
              }
          });
      });
  }

  configuracoes(item:any){
    this.router.navigate(['/manter-prestador'], { queryParams: { prestadorUsuarioId: item.usuarioId } });
  }

  abrirModalIgreja(){
    const modal = this.modalCtrl.create({
      component: ModalIgrejaPage,
      componentProps: {
          igrejas : this.igrejasDoAdmin
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
