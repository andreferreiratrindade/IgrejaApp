import { Component, OnInit, NgZone } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { Config } from 'src/app/config';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { HandlerError } from 'src/app/helpers/handlerError';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { Router } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';

@Component({
  selector: 'app-prestador-cadastro-finalizar',
  templateUrl: './prestador-cadastro-finalizar.page.html',
  styleUrls: ['./prestador-cadastro-finalizar.page.scss'],
})
export class PrestadorCadastroFinalizarPage implements OnInit {

  prestador: any = {};
  prestadorUsuario = {};
  prestadorServicos = [];
  usuario = {};
  constructor(public prestadorService: PrestadorService,
    public dominioServicoService: DominioServicoService,
    public loadingContr: LoadingContr,
    public ngZone: NgZone,
    public router: Router,
    public usuarioService: UsuarioService,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService) { }

  ngOnInit() {
    this.loadingContr.showLoader();

    this.usuario = Config.RecuperaInstancia().recuperaUsuario();

    this.prestadorService.RecuperaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
      .then((result) => {
        this.prestador = result;
        this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejaId]).then(result => {
          this.prestador.nomeIgreja = result[0].data.nomeIgreja;
          this.loadingContr.hideLoader();
        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        });

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });


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
        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        });

      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  finalizar() {
    this.loadingContr.showLoader();
    let obj = { situacaoPrestador: Constants.TipoSituacaoPrestador.PendenteAutorizacao };

    this.prestadorService
      .AtualizaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {

        this.loadingContr.hideLoader();
        ToastCustom.CustomToast(this.toastCtrl, "Operação realizadao com sucesso. Sua solicitação foi encaminhada para o administrador da igreja.", "success", 5000);

        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }
}
