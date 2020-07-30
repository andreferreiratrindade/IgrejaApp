import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  itens : any[] = [];
  constructor() { 
    this.itens = this.RecuperaPaginasMenuLateral();
  }

  ngOnInit() {
    this.itens = this.RecuperaPaginasMenuLateral();
  }

  RecuperaPaginasMenuLateral() {
    return [
      {
        tab: 'prestador-consultar',
        descricao: 'Prestadores',
        icon: 'search-sharp'
      },
      {
        tab: 'profile',
        descricao: 'Meu Perfil',
        icon: 'person',
      }
    ];
  }

}
