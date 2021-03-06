import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { HandlerError } from 'src/app/helpers/handlerError';
import { Config } from 'src/app/config';
import { ModalServicosPage } from 'src/app/pages/servico/modal-servicos/modal-servicos.page';
import { AlertController, ToastController, ModalController, ActionSheetController } from '@ionic/angular';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Router } from '@angular/router';
import { SortByPipe } from 'src/app/pipes/sortBy/sort-by.pipe';
import { ConfirmAlert } from 'src/app/helpers/confirmAlert';
import { ModalBreveComentarioPage } from '../modal-breve-comentario/modal-breve-comentario.page';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-prestador-cadastro-servico',
  templateUrl: './prestador-cadastro-servico.page.html',
  styleUrls: ['./prestador-cadastro-servico.page.scss'],
})
export class PrestadorCadastroServicoPage implements OnInit {


  dominioServicos: any[];
  prestadorServicos: any[];
  prestador: any = {};
  constructor(public dominioServicoService: DominioServicoService,
    public loadingContr: LoadingContr,
    public prestadorService: PrestadorService,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private ngZone: NgZone,
    public router: Router,
    public sortBy: SortByPipe,
    public actionSheetCtrl: ActionSheetController,
    public confirmAlert: ConfirmAlert,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadingContr.showLoader()

    this.prestadorService.RecuperaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then((result) => {
        this.prestador = result;
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });


    this.prestadorService.recuperaServicosPorPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then(result => {
        this.prestadorServicos = result;
        this.dominioServicoService.recuperaDominioServico().then(x => {
          this.dominioServicos = x;
          this.prestadorServicos.map((listItem) => {
            listItem.expanded = false;

            listItem.breveDescricao = listItem.breveDescricao ?? "";
            listItem.nomeServico = x.filter(y => y.servicoId == listItem.servicoId)[0].nomeServico;
            return listItem;
          });
          this.ordenaServicos();

          this.loadingContr.hideLoader();
        });

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      })
  }

  abreModalSelecionaServico() {

    let servicos = this.dominioServicos.filter(x => {
      return this.prestadorServicos.filter(y => { return y.servicoId == x.servicoId }).length == 0
    });

    const modal = this.modalCtrl.create({
      component: ModalServicosPage,
      componentProps: { servicos: servicos.filter(x => { return !x.deletado }) },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();

      modal.onWillDismiss().then(resultModal => {
        if (!resultModal.data) {
          return false;
        }
        if (resultModal.data.length > 0) {

          if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
            const result = this.confirmAlert.confirmationAlert(this.alertController,
              'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?'
            ).then(result => {
              if (result) {
                this.adicionaServico(resultModal.data);
              }
            });
          } else {
            this.adicionaServico(resultModal.data);
          }
        }
      });
    }).catch(err => {
      HandlerError.handler(err, this.toastCtrl);
      this.loadingContr.hideLoader();
    });
  }

  public adicionaServico(obj: [any]) {
    ToastCustom.SucessoToast(this.toastCtrl);

    obj.forEach(element => {
      this.prestadorServicos.push(element);
      this.prestadorService
        .AdicionaServicoAoPrestador(Config.RecuperaInstancia()
          .recuperaUsuario().usuarioId, {
          servicoId: element.servicoId,
          nomeServico:element.nomeServico,
          usuarioId: Config.RecuperaInstancia()
            .recuperaUsuario().usuarioId

        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        })
    });
    this.ordenaServicos();
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
        this._cdr.detectChanges();

        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

  }

  async servicoOpcoes(item) {

    const actionSheet = await this.actionSheetCtrl.create({
      header: item.nomeServico,
      buttons: [
        {
          text: 'Breve comentário',

          handler: () => {
            const modal = this.modalCtrl.create({
              component: ModalBreveComentarioPage,
              componentProps: { servico: item },
              backdropDismiss: false,
            }).then((modal) => {
              modal.present();

              modal.onWillDismiss().then(resultModal => {

                if (resultModal.data) {
                  item.breveDescricao = resultModal.data.breveDescricao ?? "";
                  if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
                    const result = this.confirmAlert.confirmationAlert(this.alertController,
                      'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?'
                    ).then(result => {
                      if (result) {
                        this.salvarBreveDescricao(item);
                      }
                    });
                  } else {
                    this.salvarBreveDescricao(item);
                  }
                }
              });
            });
          }
        },
        {
          text: 'Remover',
          role: 'destructive',

          handler: () => {
            const result = this.confirmAlert.confirmationAlert(this.alertController,
              'Deseja excluir o serviço <strong>' + item.nomeServico + '</strong>?'

            ).then(result => {
              if (result) {

                this.excluirServico(item);
              }
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    await actionSheet.present();
  }



  prosseguir() {
    if (this.prestadorServicos.length == 0) {
      ToastCustom.CustomToast(this.toastCtrl, "Favor adicionar serviço, antes de continuar", "danger", 4000);
      return false;
    }
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      this.router.navigate(['meu-cadastro-prestador']);
    } else {
      this.router.navigate(['prestador-cadastro-igreja-vinculo']);
    }
  }
  public voltar() {
    if (this.prestador.situacaoPrestador != Constants.TipoSituacaoPrestador.PrestadorEmEdicao) {
      this.router.navigate(['meu-cadastro-prestador']);
    } else {

      this.router.navigate(['prestador-local-atendimento']);
    }
  }

  public editarServico(item: any) {

  }

  public ordenaServicos() {
    this.sortBy.transform(this.prestadorServicos, "nomeServico");
  }
}
