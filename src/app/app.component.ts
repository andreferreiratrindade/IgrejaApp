import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Config } from './config';
import { UsuarioService } from './providers/usuario/usuario.service';
import { FirebaseAuthService } from './providers/base-provider/firebase-auth-service.service';
import { Router } from '@angular/router';
import { Constants } from './utils/constants';
import { appVersion } from 'src/environments/appVersion';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public version = appVersion.version;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseAuthService: FirebaseAuthService,
    private router: Router,
    private usuarioService: UsuarioService

  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    
    this.usuarioService.recuperaUsuarioLogado().then(()=>{
    });
  }

  get paginas() {
    return  this.RecuperaPaginasMenuLateral().filter(page => {
      let retorno = true;
      if (page.perfil) {
        retorno = page.perfil.filter(x => {
          let retorno = false;
          if (this.usuarioLogado) {
            let perfisDoUsuario = this.usuarioLogado.perfis

            if (perfisDoUsuario) {
              retorno = perfisDoUsuario.filter(perfis => {
                return perfis == x;
              }).length > 0;
            }

          }
          return retorno;
        }).length > 0;
      }
      return retorno
    });
    console.log(this.paginas);
  }

  get recuperaDadosUsuario() {

    return Config.RecuperaInstancia().recuperaUsuario() ?? { nome: "", email: "" };
  }

  get usuarioLogado() {
    return Config.RecuperaInstancia().recuperaUsuario();
  }



  logoff() {
    this.firebaseAuthService.signOut();
    this.router.navigate(['/home']);
  }
  login() {
    this.router.navigate(['sign-in']);

  }

  RecuperaPaginasMenuLateral(){
    return [
      {
        title: 'Consultar Prestador',
        url: 'prestador-consultar',
        icon: 'search'
      },
      {
        title: 'Seja um Prestador',
        url: 'prestador-Form1',
        icon: 'people'
      },
  
      {
        title: 'Adicionar Igreja',
        url: 'criar-igreja',
        icon: 'business',
        perfil: [Constants.PerfilUsuario.AdministradorSistema]
      }
      ,
      {
        title: 'Manter Prestadores',
        url: 'consultar-prestador-adm',
        icon: 'business',
        perfil: [Constants.PerfilUsuario.AdministradorIgreja]
      }
    ];
  }
}
