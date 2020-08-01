import { Component, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { auth } from 'firebase';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ToastController } from '@ionic/angular';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.page.html',
  styleUrls: ['./novo.page.scss'],
})
export class NovoPage  {
  signUpForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email é de preenchimento obrigatório.' },
      { type: 'pattern', message: 'Email inválido.' }
    ],
    'password': [
      { type: 'required', message: 'Senha é de preenchimento obrigatório.' },
      { type: 'minlength', message: 'Senha deverá conter pelo menos 6 caracteres' }
    ],
    'nome': [
      { type: 'required', message: 'Nome é de preenchimento obrigatório.' },
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirmar Senha é de preenchimento obrigatório.' },
    ]
  };

  constructor(
    public angularFire: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone,
    private authService: FirebaseAuthService,
    public usuarioService:UsuarioService,
    public loadCtr:LoadingContr,
    public toastCtrl:ToastController
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      confirm_password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    // Get firebase authentication redirect result invoken when using signInWithRedirect()
    // signInWithRedirect() is only used when client is in web but not desktop
    this.authRedirectResult = this.authService.getRedirectResult()
    .subscribe(result => {
      if (result.user) {
        this.redirectLoggedUserToProfilePage();
      } else if (result.error) {
        this.submitError = result.error;
      }
    });
  }

  // Once the auth provider finished the authentication flow, and the auth redirect completes,
  // redirect the user to the profile page
  redirectLoggedUserToProfilePage() {
    // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
    // That's why we need to wrap the router navigation call inside an ngZone wrapper
    this.loadCtr.hideLoader()
    this.ngZone.run(() => {
      this.router.navigate(['profile']);
    });
  }

  signUpWithEmail() {

    if(!this.signUpForm.valid ){
      HandlerError.handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.",this.toastCtrl)
      return false;
    }

    this.loadCtr.showLoader();
    this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password'])
    .then(user => {
      // navigate to user profile
      let usuarioObj = {
       nome :this.signUpForm.value['nome'],
       usuarioId :user.user.uid,
       email :this.signUpForm.value['email'],
      };
      this.usuarioService.AdicionarUsuario(usuarioObj).then(x=> {
        this.loadCtr.hideLoader();
          ToastCustom.SucessoToast(this.toastCtrl);
          this.redirectLoggedUserToProfilePage();
      }).catch(error => {
          HandlerError.handler(error, this.toastCtrl);
      this.loadCtr.hideLoader();

      });
    }).catch(err => {
      HandlerError.handler(err, this.toastCtrl);
      this.loadCtr.hideLoader();
    })
  }

  facebookSignUp() {
    this.authService.signInWithFacebook()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToProfilePage();
    }).catch((error) => {
      // Handle Errors here.
    });
  }

  googleSignUp() {
    this.authService.signInWithGoogle()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToProfilePage();
    }).catch((error) => {
      // Handle Errors here.
    });
  }

  twitterSignUp() {
    this.authService.signInWithTwitter()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Twitter Access Token. You can use it to access the Twitter API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToProfilePage();
    }).catch((error) => {
      // Handle Errors here.
    });
  }
}
