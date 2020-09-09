import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { Router } from '@angular/router';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { HandlerError } from 'src/app/helpers/handlerError';

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.page.html',
  styleUrls: ['./esqueci-minha-senha.page.scss'],
})
export class EsqueciMinhaSenhaPage implements OnInit {

  
  email = '';
  password = '';
  error = '';
  username = '';
  constructor(
    public angularFire: AngularFireAuth,
    public toast: ToastController,
    public router: Router,
    public loadingContr: LoadingContr,

  ) { }

  ngOnInit() {
  }

  recover() {
    if( this.email.trim()== ''){
      HandlerError.handler("E-mail é de preenchimento obrigatório.", this.toast);
      return false;
    }

    this.loadingContr.showLoader();
    this.angularFire.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        ToastCustom.CustomToast(this.toast,'Reset de senha enviada para seu e-mail, favor verificar.','primary',5000);
        this.loadingContr.hideLoader();
        this.router.navigateByUrl('/login');
      })
    .catch(err => {
      // err.
      HandlerError.handler("E-mail não encontrado.", this.toast);
      this.loadingContr.hideLoader();
    });
  }

}
