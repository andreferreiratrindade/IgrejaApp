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
  public usuarioLogado: any = {}
  public paginas: any[] = [];
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
    this.usuarioService.RecuperaUsuarioObservable().subscribe((data) => {
      this.usuarioLogado = data;

      this.paginas = this.RecuperaPaginasMenuLateral().filter(page => {
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
        
        if (page.perfilInverso) {


          if(this.usuarioLogado &&  this.usuarioLogado.perfis){
            retorno = this.usuarioLogado.perfis.filter(pfUser => {return page.perfilInverso.includes(Number(pfUser))}).length == 0;
          }
        }
        return retorno;
      });
    });

    this.usuarioService.recuperaUsuarioLogado().then(() => {

    });
  }

  

  get recuperaDadosUsuario() {

    return Config.RecuperaInstancia().recuperaUsuario() ?? { nome: "", email: "" };
  }


  logoff() {
    this.firebaseAuthService.signOut();
    this.usuarioService.recuperaUsuarioLogado();
    this.router.navigate(['/home']);
  }
  login() {
    this.router.navigate(['sign-in']);

  }

  RecuperaPaginasMenuLateral() {
    return [
      {
        title: 'Consultar Prestador',
        url: 'prestador-consultar',
        icon: 'fas fa-search'
      },
      {
        title: 'Seja um Prestador',
        url: 'dados-empresa',
        icon: 'fas fa-toolbox',
        perfilInverso: [Constants.PerfilUsuario.Prestador, Constants.PerfilUsuario.AdministradorSistema, Constants.PerfilUsuario.AdministradorIgreja]
      },

      {
        title: 'Manter Igreja',
        url: 'manter-igreja',
        icon: 'fas fa-church',
        perfil: [Constants.PerfilUsuario.AdministradorSistema]
      }
      ,
      {
        title: 'Manter Prestadores',
        url: 'consultar-prestador-adm',
        icon: 'fas fa-tools',
        perfil: [Constants.PerfilUsuario.AdministradorIgreja]
      }
      ,
      {
        title: 'Meu Cadastro Prestador',
        url: 'meu-cadastro-prestador',
        icon: 'fas fa-tools',
        perfil: [Constants.PerfilUsuario.Prestador]
      }
      ,
      {
        title: 'Manter Serviços',
        url: 'mantem-servico',
        icon: 'fas fa-tools',
        perfil: [Constants.PerfilUsuario.AdministradorSistema]
      }

    ];
  }
}
