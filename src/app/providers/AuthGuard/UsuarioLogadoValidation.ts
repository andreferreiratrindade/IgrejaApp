import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { UsuarioService } from '../usuario/usuario.service';
import { Config } from 'src/app/config';


@Injectable({ providedIn: 'root' })
export class UsuarioLogadoValidation implements CanActivate {
    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private loadingControll : LoadingContr
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.loadingControll.showLoader();
       return  this.usuarioService.recuperaUsuarioLogado().then(x => {
           
            this.loadingControll.hideLoader();
                if(x==null && !Config.RecuperaInstancia().recuperaUsuario()){
                    this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
                }
                return true;
          }).catch(()=> { this.loadingControll.showLoader(); return true;});
    }
}