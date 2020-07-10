import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { UsuarioService } from '../usuario/usuario.service';
import { Config } from 'src/app/config';
import { PrestadorService } from '../prestador/prestador.service';
import { Constants } from 'src/app/utils/constants';


@Injectable({ providedIn: 'root' })
export class PrestadorSituacaoRedirect implements CanActivate {
    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private loadingControll: LoadingContr,
        private prestadorService: PrestadorService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.loadingControll.showLoader();

        return this.usuarioService.recuperaUsuarioLogado().then(x => {

            if (x == null && !Config.RecuperaInstancia().recuperaUsuario()) {
                this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
            } else {
                this.prestadorService
                    .RecuperaPrestador(Config.RecuperaInstancia().recuperaUsuario().usuarioId)
                    .then(result => {
                        debugger
                        let redirectStr = "";
                        switch (result.situacaoPrestador) {
                            case Constants.TipoSituacaoPrestador.Form1:
                                redirectStr = "prestador-Form1"
                                break;
                            case Constants.TipoSituacaoPrestador.Form2:
                                redirectStr = "prestador-Form2"
                                break;

                            case Constants.TipoSituacaoPrestador.Form3:
                                redirectStr = "prestador-Form3"
                                break;
                            default:
                                break;
                        }
                        this.loadingControll.hideLoader();

                        this.router.navigate([redirectStr]);
                    });
            }
            return true;
        }).catch(() => { this.loadingControll.showLoader(); return true; });
    }
}