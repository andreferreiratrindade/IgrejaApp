import { Component, OnInit, NgZone } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Config } from 'src/app/config';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController } from '@ionic/angular';

import { ToastCustom } from 'src/app/helpers/toastCustom';
import { Constants } from 'src/app/utils/constants';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';

@Component({
  selector: 'app-prestador-cadastro-form3',
  templateUrl: './prestador-cadastro-form3.page.html',
  styleUrls: ['./prestador-cadastro-form3.page.scss'],
})
export class PrestadorCadastroForm3Page implements OnInit {

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
        this.prestador.nomeSituacaoPrestador = Constants.ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(this.prestador.situacaoPrestador);
        this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejas[0].igrejaId]).then(result => {
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
