import { Component, OnInit } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, LoadingController } from '@ionic/angular';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { Router } from '@angular/router';
import { ToastCustom } from 'src/app/helpers/toastCustom';

@Component({
  selector: 'app-prestador-consultar',
  templateUrl: './prestador-consultar.page.html',
  styleUrls: ['./prestador-consultar.page.scss'],
})
export class PrestadorConsultarPage implements OnInit {

  UfList: any[];
  cidadeList: any[];
  servicos: any[];
  formulario: FormGroup;
  prestadores: any[];
  validation_messages = {
    'uf': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' }
    ],
    'servicoId': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' }
    ]
  };

  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public igrejaService: IgrejaService,
    public usuarioService: UsuarioService,
    public loadingContr: LoadingContr,
    public dominioServicoService: DominioServicoService,
    public router:Router
  ) {

    this.formulario = new FormGroup({
      'uf': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'cidade': new FormControl(),
      'servicoId': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this.prestadores = [];

  }

  ngOnInit() {
    this.loadingContr.showLoader();

    this.prestadorService.RecuperaUfPrestadorDisponiveis()
      .then(result => {
        this.UfList = result;
        this.loadingContr.hideLoader();

      }).catch(x => {
        this.loadingContr.hideLoader();
        HandlerError.handler(x, this.toastCtrl);
      });

    this.dominioServicoService.recuperaDominioServico()
      .then(result => {
        this.servicos = result;
        this.loadingContr.hideLoader();

      }).catch(x => {
        this.loadingContr.hideLoader();
        HandlerError.handler(x, this.toastCtrl);
      });
  }

  buscarCidades() {
    this.loadingContr.showLoader();
    this.formulario.value['cidade'] = "";
    this.prestadorService.RecuperaCidadePrestadorDisponiveis(this.formulario.value['uf'])
      .then(result => {
        this.cidadeList = result;
        this.loadingContr.hideLoader();
      }).catch(x => {
        this.loadingContr.hideLoader();
        HandlerError.handler(x, this.toastCtrl);
      });
  }

  ConsultarPrestador() {
    this.loadingContr.showLoader();
    this.prestadores = [];

    this.prestadorService
      .RecuperaPestadoresPorCidadeEhUFEhServico(this.formulario.value['uf']
        , this.formulario.value['cidade']
        , this.formulario.value['servicoId'])
      .then(prestadoresResult => {

        if(!prestadoresResult){
          ToastCustom.CustomToast(this.toastCtrl,"Nenhum prestador encontrado.","danger",4000);
          this.loadingContr.hideLoader();
          return false;
        }
        let lstusuarioId = [];
        lstusuarioId = prestadoresResult.map(x => { return x.usuarioId });
        this.prestadores = prestadoresResult;

        let lstIgrejaId = [];
        lstIgrejaId = prestadoresResult.map(x => { return x.igrejas[0].igrejaId });

        this.consultaMasterPrestador(lstusuarioId,lstIgrejaId).then(() => {
          this.loadingContr.hideLoader();

        }).catch(x => {
          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });

      }).catch(x => {
        HandlerError.handler(x, this.toastCtrl);
        this.loadingContr.hideLoader();
      });
  }

  private consultaMasterPrestador(lstusuarioId, lstIgrejaId): Promise<any> {
    return new Promise<any>((result, reject) => {
      // Recupera igreja 
      this.recuperaNomeIgreja(lstIgrejaId);

      // Recupera Nome 
      this.recuperaNomePrestadores(lstusuarioId);

      // Recupera Servicos
      //this.recuperaServicosPorPrestadores(lstusuarioId);
    });
  }


  private recuperaServicosPorPrestadores(lstusuarioId): Promise<any> {
    return new Promise(() => {
      this.prestadorService.recuperaServicosPorPrestadores(lstusuarioId)
        .then(servicosPorPrestador => {
          this.prestadores.map(x => {
            x.servicos = servicosPorPrestador.find(y => { y.usuarioId == x.usuarioId });
          })
          this.loadingContr.hideLoader();

        }).catch(x => {
          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  private recuperaNomePrestadores(lstusuarioId): Promise<any> {
    return new Promise(() => {
      this.usuarioService.RecuperaNomeUsuarios(lstusuarioId)
        .then(usuariosResult => {
          this.prestadores.map(x => {
            x.nome = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.nome;
            x.email = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.email;
          });
          this.loadingContr.hideLoader();
        }).catch(x => {
          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  private recuperaNomeIgreja(lstIgrejaId): Promise<any> {
    return new Promise(() => {
      this.igrejaService.RecuperaNomeIgreja(lstIgrejaId)
        .then(resultIgreja => {
          this.prestadores.map(x => {
            x.nomeIgreja = resultIgreja.find(y => y.data.id == x.igrejas[0].igrejaId).data.nomeIgreja;
          });
        }).catch(x => {
          HandlerError.handler(x, this.toastCtrl);
          this.loadingContr.hideLoader();
        });
    });
  }

  public detalhes(usuarioId){
    this.router.navigate(['/visualizar-prestador'], { queryParams: { usuarioId: usuarioId } });
  }
}
