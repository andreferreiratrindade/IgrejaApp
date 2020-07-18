import { ToastCustom } from './toastCustom';
import { ToastController } from '@ionic/angular/providers/toast-controller';
export class HandlerError {

    public static handler(err: any, toastCtrl: ToastController) {
        var data = err;
        let message = data.error ? data.error.message : data;
        
        console.log(message);
        ToastCustom.errorToast(message, toastCtrl);
    }
}