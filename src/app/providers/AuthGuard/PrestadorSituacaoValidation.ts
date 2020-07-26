import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { UsuarioService } from '../usuario/usuario.service';
import { Config } from 'src/app/config';
import { PrestadorService } from '../prestador/prestador.service';
import { Constants } from 'src/app/utils/constants';
import { ToastController } from '@ionic/angular';
import { ToastCustom } from 'src/app/helpers/toastCustom';


@Injectable({ providedIn: 'root' })
export class PrestadorSituacaoValidation implements CanActivate {
    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private loadingControll: LoadingContr,
        private prestadorService: PrestadorService,
        private toast: ToastController
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.loadingControll.showLoader();
        return this.usuarioService.recuperaUsuarioLogado().then(x => {
            if (x == null && !Config.RecuperaInstancia().recuperaUsuario()) {
                this.loadingControll.hideLoader();

                this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
            } else {
                this.prestadorService
                    .RecuperaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
                    .then(result => {

                        let redirectStr = "home";
                        let situacaoPrestador = 0;
                        if (result) {
                            situacaoPrestador = result.situacaoPrestador
                        }
                        switch (situacaoPrestador) {
                            case Constants.TipoSituacaoPrestador.CadastroDadosEmpresa:
                                redirectStr = "dados-empresa"
                                break;
                            case Constants.TipoSituacaoPrestador.PrestadorEmEdicao:
                                redirectStr = "dados-empresa"
                                break;
                            case Constants.TipoSituacaoPrestador.PendenteAutorizacao:
                                ToastCustom.CustomToast(this.toast, "Anteção. Existe uma solicitação de aprovação deste prestador para o adiministrador da igreja."
                                    , "danger", 5000);
                                redirectStr = "visualizar-prestador"
                                break;
                            default:
                                redirectStr = "visualizar-prestador"
                                break;
                        }
                        this.loadingControll.hideLoader();
                        this.router.navigate([redirectStr], { queryParams: { usuarioId: Config.RecuperaInstancia().recuperaUsuario().usuarioId } });
                    });
            }
            return true;
        }).catch(() => { this.loadingControll.hideLoader(); return true; });
    }
}