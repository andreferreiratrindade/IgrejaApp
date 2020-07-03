import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HandlerError } from 'src/app/helpers/handlerError';
import { NavController, NavParams, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { LoadingContr } from 'src/app/helpers/loadingContr';
@Component({
  selector: 'app-prestador-cadastro-email',
  templateUrl: './prestador-cadastro-email.page.html',
  styleUrls: ['./prestador-cadastro-email.page.scss'],
})
export class PrestadorCadastroEmailPage  {
  private regData: FormGroup;
  // private loginProvider :LoginProvider;

  constructor( 
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    public toastCtrl : ToastController,
    public storage: Storage,
    public formBuilder: FormBuilder) { 

    this.regData = this.formBuilder.group({
      name: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });


  }

  
  register() {
    // let loader = this.loadingController
    //                 .create(LoadingContr.getLoadingContent());  
    // loader.present();

   
      /*.then((data: any) => {
        if(data.ok){
          this.loginProvider.saveData(data.obj);
          this.navCtrl.setRoot(MeuIgrejaPage);  
        } 
        loader.dismiss();

      })
      .catch(e => {
        HandlerError.handler(loader,e, this.toastCtrl);
      })*/
  }
}

