import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { PopupMenuComponentPopover } from './textoPropover';

@Component({
  selector: 'app-texto-cortado',
  templateUrl: './texto-cortado.component.html',
  styleUrls: ['./texto-cortado.component.scss'],
})
export class TextoCortadoComponent implements OnInit {

  @Input() texto : any
  @Input() qtdCaracteres : any
  textoCortado:string
  constructor(public popoverController: PopoverController) { 

  }

  ngOnInit() {
    this.textoCortado = this.texto.substring(0,this.qtdCaracteres)
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:PopupMenuComponentPopover,
      componentProps:{texto:this.texto},
      translucent: true,
      event: ev
    });
    return await popover.present();
  }
}
