import { Component, OnInit, NgZone } from '@angular/core';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Config } from 'src/app/config';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { ModalDominioServicosPage } from '../modal-dominio-servicos/modal-dominio-servicos.page';
import { ModalDominioServicosPageModule } from '../modal-dominio-servicos/modal-dominio-servicos.module';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { Constants } from 'src/app/utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestador-cadastro-form2',
  templateUrl: './prestador-cadastro-form2.page.html',
  styleUrls: ['./prestador-cadastro-form2.page.scss'],
})
export class PrestadorCadastroForm2Page implements OnInit {

  dominioServicos: any[];
  prestadorServicos: any[];
  servicoAdicionado: any;
  constructor(public dominioServicoService: DominioServicoService,
    public loadingContr: LoadingContr,
    public prestadorService: PrestadorService,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private ngZone: NgZone,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadingContr.showLoader()

    this.prestadorService.recuperaServicosPorPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then(result => {
        this.prestadorServicos = result;
        this.dominioServicoService.recuperaDominioServico().then(x => {

          this.prestadorServicos.map((listItem) => {
            listItem.expanded = false;

            listItem.breveDescricao = listItem.breveDescricao ?? "";
            listItem.nomeServico = x.filter(y => y.servicoId == listItem.servicoId)[0].nomeServico;
            return listItem;
          });
          this.loadingContr.hideLoader();
        });

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      })
  }

  recuperaListagemDominioService() {

    this.loadingContr.showLoader()

    this.dominioServicoService.recuperaDominioServico().then(x => {
      this.dominioServicos = x;
      this.loadingContr.hideLoader();
    }).catch(err => {
      HandlerError.handler(err, this.toastCtrl);
      this.loadingContr.hideLoader();
    })
  }

  abreModalSelecionaServico() {
    this.loadingContr.showLoader()

    this.dominioServicoService.recuperaDominioServico().then(x => {
      this.loadingContr.hideLoader();
      const modal = this.modalCtrl.create({
        component: ModalDominioServicosPage,
        componentProps: { servicos: x },
        backdropDismiss: false,
      }).then((modal) => {
        modal.present();

        modal.onWillDismiss().then(resultModal => {
          this.loadingContr.showLoader();
          this.servicoAdicionado = resultModal.data;
          if (resultModal) {
            this.prestadorService
              .AdicionaServicoAoPrestador(Config.RecuperaInstancia()
                .recuperaUsuario().usuarioId, {
                servicoId: this.servicoAdicionado.servicoId,
                usuarioId: Config.RecuperaInstancia()
                  .recuperaUsuario().usuarioId
              })
              .then((result) => {
                this.servicoAdicionado.expanded = false;
                this.prestadorServicos.push(this.servicoAdicionado);
                this.loadingContr.hideLoader();
                ToastCustom.SucessoToast(this.toastCtrl);

              }).catch(err => {
                HandlerError.handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
              })
          }
        });
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      })
    }).catch(err => {
      HandlerError.handler(err, this.toastCtrl);
      this.loadingContr.hideLoader();
    })
  }

  expandItem(item): void {

    if (item.expanded) {
      item.expanded = false;
    } else {
      this.prestadorServicos.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  salvarBreveDescricao(item) {
    let servico = { servicoId: item.servicoId, breveDescricao: item.breveDescricao };
    this.prestadorService
      .AdicionaServicoAoPrestador(Config.RecuperaInstancia()
        .recuperaUsuario().usuarioId, servico)
      .then((result) => {
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  excluirServico(item) {
    this.loadingContr.showLoader();

    this.prestadorService
      .ExcluirServico(Config.RecuperaInstancia()
        .recuperaUsuario().usuarioId, item.servicoId)
      .then((result) => {

        this.prestadorServicos = this.prestadorServicos.filter(y => y.servicoId != item.servicoId);
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
          text: 'Okay',
          handler: () => {
            this.excluirServico(item)
          }
        }
      ]
    });
    await alert.present();

  }

  Prosseguir() {
    if(this.prestadorServicos.length == 0){
      ToastCustom.CustomToast(this.toastCtrl,"Favor adicionar serviço, antes de continuar" , "danger", 4000);
      return false;
    }

    this.loadingContr.showLoader();
    let obj = { situacaoPrestador: Constants.TipoSituacaoPrestador.Form3 };

    this.prestadorService
      .AtualizaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
        this.ngZone.run(() => {
          this.router.navigate(['prestador-Form3']);
        });
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }
}
