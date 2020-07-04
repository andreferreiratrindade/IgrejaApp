import { Component, OnInit, NgZone } from '@angular/core';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { IgrejaEntity } from 'src/app/entity/igrejaEntity';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { Config } from 'src/app/config';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';

@Component({
  selector: 'app-criar-igreja',
  templateUrl: './criar-igreja.page.html',
  styleUrls: ['./criar-igreja.page.scss'],
})
export class CriarIgrejaPage implements OnInit {

  private enderecoCompleto : string
  private igrejaEntity : IgrejaEntity
  public formData: FormGroup;

  validation_messages = {
    'nomeIgreja': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'cep': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ]
  };
  constructor(public buscarCEPService : BuscarCEPService,
      public igrejaService:IgrejaService,
      public router: Router,
      private ngZone: NgZone,
      public fireBaseService: FirebaseAuthService 
    ) {
      this.igrejaEntity = new IgrejaEntity();


      this.formData = new FormGroup({
        'cep': new FormControl('', Validators.compose([
          Validators.required
        ])),
        'nomeIgreja': new FormControl('', Validators.compose([
          Validators.required
        ]))
      });
   }

  ngOnInit() {
    
  }

  buscarEnderecoPorCEP(){

    this.buscarCEPService.buscarCEP(this.formData.value['cep']).then(x=>{

      this.igrejaEntity.cidade = x.localidade;
      this.igrejaEntity.bairro = x.bairro;
      this.igrejaEntity.uf = x.uf;
      this.igrejaEntity.logradouro = x.logradouro;
      this.igrejaEntity.cep = x.cep;

      this.enderecoCompleto = this.igrejaEntity.RecuperaEnderecoCompleto();

    }).catch(x=>{
      this.igrejaEntity = new IgrejaEntity(); 
        this.enderecoCompleto = "CEP não encontrado."
    });
  }

  salvarIgreja(){

    this.igrejaEntity.nomeIgreja = this.formData.value['nomeIgreja'];
    this.igrejaService.AdicionarNovaIgreja( this.igrejaEntity).then(x=>{
          

    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }

}
