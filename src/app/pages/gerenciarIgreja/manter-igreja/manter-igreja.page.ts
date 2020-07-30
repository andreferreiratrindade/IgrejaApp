import { Component, OnInit } from '@angular/core';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { CriarIgrejaPage } from '../criar-igreja/criar-igreja.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-manter-igreja',
  templateUrl: './manter-igreja.page.html',
  styleUrls: ['./manter-igreja.page.scss'],
})
export class ManterIgrejaPage implements OnInit {

  igrejas : any[] = [];
  dominioIgrejas : any[] = [];
  constructor(public igrejaService:IgrejaService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.igrejaService.RecuperaTodasAsIgrejas().then(result=>{
      this.igrejas = result;
      this.dominioIgrejas = result;
    })
  }
  recuperaItens(ev: any) {
    let val = "";
    if(ev &&  ev.target){
      val =  ev.target.value;
    } 
    if ( val && val.trim() !== '') {
      this.igrejas = this.dominioIgrejas.filter(item => { 
          return item.nomeIgreja.toLowerCase().indexOf(val.toLowerCase()) > -1 });
    } else {
      this.igrejas = [...this.dominioIgrejas];
    }
    if(this.igrejas.length > 10)this.igrejas.length = 10;
  }

  public adicionarNovaIgreja(){
    const modal = this.modalCtrl.create({
      component: CriarIgrejaPage,
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        this.ngOnInit();
      }); 
    });
  }
}
