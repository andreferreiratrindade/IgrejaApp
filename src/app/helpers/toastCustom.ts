import { ToastController } from '@ionic/angular/providers/toast-controller';

export  class  ToastCustom{

    public static errorToast(msg:string,  toastCtrl : ToastController){
     
      this.CustomToast(toastCtrl, msg,"danger",4000);
    }

    public static SucessoToast(toastCtrl : ToastController){

      this.CustomToast(toastCtrl, "Operação realizada com sucesso.","success",4000);
    }

    public static CustomToast(toastCtrl : ToastController, message:string, color:string, duration:any){
      toastCtrl.create({
        message: message,
        duration: duration,
        color:color
      }).then(x=>{

        x.present();
      });
    }
}