import { Component } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
    template: `<ion-list interface="popover">
        <ion-list-header>{{texto}}</ion-list-header>
  </ion-list>   `
})
export class PopupMenuComponentPopover {
    texto: string
    constructor(private popoverCtrl: PopoverController,
        public navParams: NavParams) {
        this.texto = this.navParams.data.texto 
    }

    async onDismiss() {
        try {
            await this.popoverCtrl.dismiss();
        } catch (e) {
            //click more than one time popover throws error, so ignore...
        }

    }
}