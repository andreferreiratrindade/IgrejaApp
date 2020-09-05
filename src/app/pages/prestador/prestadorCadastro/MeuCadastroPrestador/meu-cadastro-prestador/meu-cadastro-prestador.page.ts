import { Component, OnInit, NgZone } from '@angular/core';
import { HandlerError } from 'src/app/helpers/handlerError';
import { Config } from 'src/app/config';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Router } from '@angular/router';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-meu-cadastro-prestador',
  templateUrl: './meu-cadastro-prestador.page.html',
  styleUrls: ['./meu-cadastro-prestador.page.scss'],
})
export class MeuCadastroPrestadorPage implements OnInit {
  prestador: any = {};
  prestadorUsuario :any= {};
  prestadorServicos: any[] = [];
  usuario : any = {};
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
        this.prestador.descricaoSituacaoPrestador = Constants.ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(this.prestador.situacaoPrestador);
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

  public redirect(url){
    this.router.navigate([url]);
  }
}
