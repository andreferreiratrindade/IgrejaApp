import { ToastController } from '@ionic/angular/providers/toast-controller';

export  class  ToastCustom{

    public static errorToast(msg:string,  toastCtrl : ToastController){
     toastCtrl.create({
        message: msg,
        duration: 4000,
        color:"danger"
      }).then(x=>{
        x.present();
      });
    }

    public static SucessoToast(toastCtrl : ToastController){
      toastCtrl.create({
        message: "Operação realizada com sucesso.",
        duration: 4000,
        color:"success"
      }).then(x=>{

        x.present();
      });
    }
}