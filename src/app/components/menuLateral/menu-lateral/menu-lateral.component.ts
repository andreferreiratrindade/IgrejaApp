import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { Config } from 'src/app/config';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { config } from 'process';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {
  public selectedIndex = 0;

  usuario: any;
  public appPages = [
    {
      title: 'Seja um Prestador',
      url: 'sign-up',
      icon: 'warning'
    },
    {
      title: 'Adicione sua Igreja',
      url: 'criar-igreja',
      icon: 'warning'
    }
  ];
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    if (!Config.RecuperaInstancia()) {
      this.usuarioService.recuperaUsuarioLogado().then(usuario => {
        if (usuario) {
          this.usuario = usuario;
        }
      });
    }
  }
}
