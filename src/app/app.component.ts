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
  public usuarioLogado: any ={}
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
    this.usuarioService.RecuperaUsuarioObservable().subscribe((data)=>{
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
        return retorno;
      });
    });

    this.usuarioService.recuperaUsuarioLogado().then(() => {
      
      console.log(this.paginas)
    });
  }

  /*
  get paginas() {
    
    let paginas =  this.RecuperaPaginasMenuLateral().filter(page => {
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

      // if (page.perfilInverso) {

      //   retorno = page.perfilInverso.filter(x => {
      //     let retorno = false;
      //     if (this.usuarioLogado) {
      //       let perfisDoUsuario = this.usuarioLogado.perfis

      //       if (perfisDoUsuario) {
      //         retorno = perfisDoUsuario.filter(perfis => {
      //           return perfis != x;
      //         }).length > 0;
      //       }
      //     }

      //     return retorno;
      //   }).length > 0;
      // }
      return retorno
    });
    console.log(paginas);
    return paginas;
  }*/

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
        icon: 'search'
      },
      {
        title: 'Seja um Prestador',
        url: 'dados-empresa',
        icon: 'people',
        perfilInverso: [Constants.PerfilUsuario.Prestador]
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
      ,
      {
        title: 'Meu Cadastro Prestador',
        url: 'meu-cadastro-prestador',
        icon: 'business',
        perfil: [Constants.PerfilUsuario.Prestador]
      }
      ,
      {
        title: 'Manter Serviços',
        url: 'mantem-servico',
        icon: 'business',
        perfil: [Constants.PerfilUsuario.AdministradorSistema]
      }
      
    ];
  }
}
