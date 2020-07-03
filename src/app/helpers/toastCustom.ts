import { ToastController } from '@ionic/angular/providers/toast-controller';

export  class  ToastCustom{

    public static presentToast(msg:string,  toastCtrl : ToastController){
    let toast = toastCtrl.create({
        message: msg,
        duration: 4000,
      });
      //toast.preset();
    }
}