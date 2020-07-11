import { Component, OnInit } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-consultar-prestador-adm',
  templateUrl: './consultar-prestador-adm.page.html',
  styleUrls: ['./consultar-prestador-adm.page.scss'],
})
export class ConsultarPrestadorAdmPage implements OnInit {

  constructor(public prestadorService:PrestadorService, private igrejaService:IgrejaService) { }

  prestadores : any[] = []

  ngOnInit() {
    let usuario = Config.RecuperaInstancia().recuperaUsuario();

    this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId)
      .then(igrejaResult=>{
          this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId)
          .then(prestadoresResult=>{
            this.prestadores = prestadoresResult
          })
      })
    }
}
