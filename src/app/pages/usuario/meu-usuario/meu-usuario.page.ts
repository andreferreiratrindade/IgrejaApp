import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { Constants } from 'src/app/utils/constants';
import { Config } from 'src/app/config';
import { HandlerError } from 'src/app/helpers/handlerError';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastController } from '@ionic/angular';
import { ToastCustom } from 'src/app/helpers/toastCustom';

@Component({
  selector: 'app-meu-usuario',
  templateUrl: './meu-usuario.page.html',
  styleUrls: ['./meu-usuario.page.scss'],
})
export class MeuUsuarioPage implements OnInit {
  usuario: any = {};
  perfis: any[] = [];
  constructor(
    public loadingContr: LoadingContr,
    public toastCtrl: ToastController,

    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.recuperaUsuarioLogado().then(result => {
      this.usuario = result;
      if (result.perfis) {
        this.perfis = result.perfis.map(y => { return Constants.PerfilUsuario.RecuperaDescricaoPorValor(y) });
      }

    })
  }

  salvar() {

    if (!this.usuario.nome) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toastCtrl)
      return false;
    }
    this.loadingContr.showLoader()

    this.usuarioService.atualizaUsuario(Config.RecuperaInstancia().recuperaUsuario().usuarioId, { nome: this.usuario.nome }).then(result => {
      ToastCustom.SucessoToast(this.toastCtrl);
      this.loadingContr.hideLoader()
    }).catch((error) => {
      HandlerError.handler(error, this.toastCtrl);
      this.loadingContr.hideLoader();
    });
  }

}
