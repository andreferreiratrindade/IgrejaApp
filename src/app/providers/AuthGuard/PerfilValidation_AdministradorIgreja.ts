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
export class PerfilValidation_AdministradorIgreja implements CanActivate {
    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private loadingControll: LoadingContr,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.loadingControll.showLoader();
        return this.usuarioService.recuperaUsuarioLogado().then(x => {
            this.loadingControll.hideLoader();
            if (x == null && !Config.RecuperaInstancia().recuperaUsuario()) {

                this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
            } else {
               let perfisUsuario = Config.RecuperaInstancia().recuperaUsuario().perfis;
                    
               if(!perfisUsuario ||  perfisUsuario.filter(x=>{return x == Constants.PerfilUsuario.AdministradorIgreja}).length == 0){
                
                this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
               }
            }
            return true;
        }).catch(() => { this.loadingControll.hideLoader(); return true; });
    }
}