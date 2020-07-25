import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from 'src/app/config';
import { HandlerError } from 'src/app/helpers/handlerError';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { Constants } from 'src/app/utils/constants';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';

@Component({
  selector: 'app-visualizar-prestador',
  templateUrl: './visualizar-prestador.page.html',
  styleUrls: ['./visualizar-prestador.page.scss'],
})
export class VisualizarPrestadorPage implements OnInit {

  prestador: any = {};
  prestadorServicos = [];
  usuario = {};
  usuarioId: string;
  constructor(public prestadorService: PrestadorService,
    public dominioServicoService: DominioServicoService,
    public loadingContr: LoadingContr,
    public ngZone: NgZone,
    public router: Router,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    public modalController: ModalController,

  ) {

    this.usuarioId = this.route.snapshot.queryParams['usuarioId'];
  }

  ngOnInit() {
    this.loadingContr.showLoader();

    this.usuarioService.RecuperaNomeUsuarios([this.usuarioId])
      .then(resultado => {

        this.usuario = resultado[0].data;
      })

    this.prestadorService.RecuperaPrestador(this.usuarioId)
      .then((result) => {
        this.prestador = result;
        this.prestador.nomeSituacaoPrestador = Constants.ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(this.prestador.situacaoPrestador);
        this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejaId]).then(result => {
          this.prestador.nomeIgreja = result[0].data.nomeIgreja;
          this.prestador.staMembro = result[0].data.staMembro;
          this.loadingContr.hideLoader();
        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });

    this.prestadorService.recuperaServicosPorPrestador(this.usuarioId)
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
      });
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }


}
