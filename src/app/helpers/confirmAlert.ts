import { AlertController } from '@ionic/angular/providers/alert-controller';
export class ConfirmAlert {

    constructor() {

    }

    public async confirmationAlert(alertController:AlertController,message: string): Promise<boolean> {
        let resolveFunction: (confirm: boolean) => void;
        const promise = new Promise<boolean>(resolve => {
            resolveFunction = resolve;
        });
        const alert = await alertController.create({
            header: 'Atenção',
            message,
            buttons: [
                {
                    text: 'Não',
                    handler: () => resolveFunction(false)
                },
                {
                    text: 'Sim',
                    handler: () => resolveFunction(true)
                }
            ]
        });
        await alert.present();
        alert.onDidDismiss().then(() => {
            // this update will happen after "alert" dismiss and within the scope of the HomePage component. 
          });
        return promise;
    }

    public async InputAlert(alertController:AlertController,message: string): Promise<any> {
        let resolveFunction: (obj: any) => void;
        const promise = new Promise<string>(resolve => {
            resolveFunction = resolve;
        });
        const alert = await alertController.create({
            // header: 'Atenção',
            message,
            inputs: [
                {
                    name: 'input1',
                    type: 'text',
                    placeholder: ''
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => resolveFunction({ok:false})
                },
                {
                    text: 'Salvar',
                    handler: (alertData) => resolveFunction({ok:true,text:alertData.input1})
                }
            ]
        });


        await alert.present();
        alert.onDidDismiss().then(() => {
            // this update will happen after "alert" dismiss and within the scope of the HomePage component. 
          });
        return promise;
    }


}