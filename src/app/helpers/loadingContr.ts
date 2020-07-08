import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export  class LoadingContr {

    public static  getLoadingContent():any{

        return {content:'Processando.'}
    }
    /**
     *
     */
    constructor(public loadingController:LoadingController) {
            
    }
    
     showLoader() {

        this.loadingController.create({
          message: 'Processando...'
        }).then((res) => {
          res.present();
        });
    
      }
    
      // Hide the loader if already created otherwise return error
      hideLoader() {
    
        this.loadingController.dismiss().then((res) => {
          console.log('Loading dismissed!', res);
        }).catch((error) => {
          console.log('error', error);
        });
      }
}