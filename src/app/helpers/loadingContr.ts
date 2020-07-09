import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoadingContr {


  isLoading = false;

  public static getLoadingContent(): any {

    return { content: 'Processando.' }
  }
  /**
   *
   */
  constructor(public loadingController: LoadingController) {

  }

  async showLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  // Hide the loader if already created otherwise return error
  async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}