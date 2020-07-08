import { Component, OnInit } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, LoadingController } from '@ionic/angular';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';

@Component({
  selector: 'app-prestador-consultar',
  templateUrl: './prestador-consultar.page.html',
  styleUrls: ['./prestador-consultar.page.scss'],
})
export class PrestadorConsultarPage implements OnInit {

  UfList: any[];
  cidadeList: any[];
  formulario: FormGroup;
  prestadores: any[];
  validation_messages = {
    'uf': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' }
    ]
  };

  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public igrejaService :IgrejaService,
    public usuarioService:UsuarioService,
    public loadingContr:LoadingContr
    ) {

    this.formulario = new FormGroup({
      'uf': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'cidade': new FormControl()
    });
    this.prestadores = [];

  }

  ngOnInit() {
    this.loadingContr.showLoader();

    this.prestadorService.RecuperaUfPrestadorDisponiveis()
      .then(result => {
        this.UfList = result;
      }).catch(x => {
        HandlerError.handler(x, this.toastCtrl);
      }).finally(()=> {
        this.loadingContr.hideLoader();
    });
  }

  buscarCidades(){
    this.loadingContr.showLoader();
    this.formulario.value['cidade']= "";
    this.prestadorService.RecuperaCidadePrestadorDisponiveis(this.formulario.value['uf'])
    .then(result => {
      this.cidadeList = result;
    }).catch(x => {
      HandlerError.handler(x, this.toastCtrl);
    }).finally(()=> {
      this.loadingContr.hideLoader();
  });
  }

  ConsultarPrestador(){
    this.loadingContr.showLoader();
    this.prestadores = [];

    this.prestadorService.RecuperaPestadoresPorCidadeEhUF(this.formulario.value['uf'], this.formulario.value['cidade'])
    .then(prestadoresResult => {
      let igrejas = [];
      igrejas = prestadoresResult.map(x=>{ return x.igrejas[0].igrejaId});

      this.igrejaService.RecuperaNomeIgreja(igrejas).then(resultIgreja=>{
        
        let usuarios = [];
        usuarios = prestadoresResult.map(x=>{return x.uid});
        this.usuarioService.RecuperaNomeUsuarios(usuarios)
        .then(usuariosResult =>{


         this.prestadores = prestadoresResult.map(x=>{
            return {
              nome: usuariosResult.find(y=>y.id==x.uid).data.nome,
              nomeIgreja: resultIgreja.find(y=>y.id==x.igrejas[0].igrejaId).data.nomeIgreja,
              cidade:x.cidade,
              uf:x.uf,
              usuarioId: x.uid,
              igrejaId:x.igrejas[0].igrejaId
            };
          });
        });

      }
      )
      
    }).catch(x => {
      HandlerError.handler(x, this.toastCtrl);
    })
    .finally(()=> {
        this.loadingContr.hideLoader();
    });
  }
}
