import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';

@Component({
  selector: 'app-prestador-cadastro-form1',
  templateUrl: './prestador-cadastro-form1.page.html',
  styleUrls: ['./prestador-cadastro-form1.page.scss'],
})
export class PrestadorCadastroForm1Page implements OnInit {
  ngOnInit(): void {
    
  }
  form1: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validation_messages = {
    'cnpcnpj': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'telefone': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'estadoOrigem': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'cidadeOrigem': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'igrejaVinculo': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ],
    'staMembro': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
    ]
  };
      
  constructor(public fireBaseService: FirebaseAuthService ) {
      
  }

}
