import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, NavController } from '@ionic/angular';
import { Config } from 'src/app/config';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
  private returnUrl: string;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
      { type: 'pattern', message: 'Favor inserir email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Campo de preenchimento obrigatório.' },
      { type: 'minlength', message: 'Senha deve ter no minimo 6 caracteres.' }
    ]
  };

  constructor(
    public angularFire: AngularFireAuth,
    public router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    public loadControl: LoadingContr,
    public usuarioService: UsuarioService,
    public toast: ToastController
  ) {

  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signInWithEmail() {

    if (!this.signInForm.valid) {
      HandlerError.handler(Constants.Mensagens.CamposObrigatorios, this.toast)
      return false;
    }

    this.loadControl.showLoader();
    this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
      .then(user => {
        this.signInForm.reset();
        this.usuarioService.recuperaUsuarioLogado();
        this.loadControl.hideLoader();
        this.router.navigate([this.returnUrl], { skipLocationChange: true });
        
      })
      .catch(error => {
        HandlerError.handler("Email ou senha incorreto(s)", this.toast);
        this.loadControl.hideLoader();
      });
  }
}
