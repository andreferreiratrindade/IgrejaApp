import { Component, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController } from '@ionic/angular';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss'],
})
export class SignInPage {
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
 private returnUrl:string;
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
    public loadControl :LoadingContr,
    public toast:ToastController
  ) {
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

    // // Get firebase authentication redirect result invoken when using signInWithRedirect()
    // // signInWithRedirect() is only used when client is in web but not desktop
    // this.authRedirectResult = this.authService.getRedirectResult()
    // .subscribe(result => {
    //   if (result.user) {
    //     this.redirectLoggedUserToProfilePage();
    //   } else if (result.error) {
    //     this.submitError = result.error;
    //   }
    // });
  }

  signInWithEmail() {

    if(!this.signInForm.valid ){
      HandlerError.handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.",this.toast)
      return false;
    }

    this.loadControl.showLoader();
    this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
    .then(user => {
      
      Config.RecuperaInstancia().adicionaUsuario({usuarioId:user.user.uid});
      this.loadControl.hideLoader();

      this.router.navigate([this.returnUrl]);
    })
    .catch(error => {
       HandlerError.handler("Email ou senha incorreto(s)",this.toast);
       this.loadControl.hideLoader();
    });
  }
}
