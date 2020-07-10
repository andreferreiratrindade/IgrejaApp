import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Config } from './config';
import { Observable } from 'rxjs/internal/Observable';
import { observable, Subject, BehaviorSubject } from 'rxjs';
import { UsuarioService } from './providers/usuario/usuario.service';
import { FirebaseAuthService } from './providers/base-provider/firebase-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Consultar Prestador',
      url: 'prestador-consultar',
      icon: 'warning'
    },
    {
      title: 'Seja um Prestador',
      url: 'prestador-Form1',
      icon: 'warning'
    },
    
    {
      title: 'Adicione sua Igreja',
      url: 'criar-igreja',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseAuthService:FirebaseAuthService,
    private router: Router

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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
    get recuperaDadosUsuario(){
      
      return Config.RecuperaInstancia().recuperaUsuario()?? {nome:"", email:""};
  }

  get usuarioLogado(){
      return Config.RecuperaInstancia().recuperaUsuario();
  }

  logoff(){
    this.firebaseAuthService.signOut();
    this.router.navigate(['/home']);

  }
  login(){
    this.router.navigate(['sign-in']);

  }
}
