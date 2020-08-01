import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { ToastController, NavParams } from '@ionic/angular';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-manter-prestador',
  templateUrl: './manter-prestador.page.html',
  styleUrls: ['./manter-prestador.page.scss'],
})
export class ManterPrestadorPage implements OnInit {

  situacoesPrestador: any[];

  prestador: any = {};
  prestadorUsuario: any = {};
  prestadorServicos: any[] = [];

  constructor(public prestadorService: PrestadorService,
    public dominioServicoService: DominioServicoService,
    public loadingContr: LoadingContr,
    public router: Router,
    public usuarioService: UsuarioService,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.prestador = { usuarioId: params['prestadorUsuarioId'] };

      this.loadingContr.showLoader();
      this.situacoesPrestador = Constants.ListTipoSituacaoPrestador.RecuperaListagem();

      this.prestadorService.RecuperaPrestador(this.prestador.usuarioId)
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


      this.prestadorService.recuperaServicosPorPrestador(this.prestador.usuarioId)
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

      this.usuarioService.RecuperaUsuarioPorUsuarioId(this.prestador.usuarioId)
        .then(result => {
          this.prestador.nome = result.nome;
          this.prestador.email = result.email;
        }).catch(err => {
          HandlerError.handler(err, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  atualizarPrestador() {
    this.loadingContr.showLoader();
    let obj = { situacaoPrestador: this.prestador.situacaoPrestador };

    this.prestadorService
      .AtualizaPrestador(this.prestador.usuarioId, obj).then(() => {
        this.loadingContr.hideLoader();
        ToastCustom.SucessoToast(this.toastCtrl);
      }).catch(err => {
        HandlerError.handler(err, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  public voltar() {

  }
}
