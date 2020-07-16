import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastController, ModalController, NavParams, IonInput } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';

@Component({
  selector: 'app-modal-igreja',
  templateUrl: './modal-igreja.page.html',
  styleUrls: ['./modal-igreja.page.scss'],
})
export class ModalIgrejaPage implements OnInit , AfterViewInit {

  itens : any[] = [];
  dominioIgrejas: any[] = [];
  @ViewChild('searchbar') inputElement: IonInput;

  constructor(public loadingContr: LoadingContr,
    public toastCtrl: ToastController,
    public igrejaService:IgrejaService,
    public modalController: ModalController,
    public navParams: NavParams) { 
      loadingContr.showLoader();
      this.igrejaService.RecuperaIgrejasPorEndereco(
          this.navParams.data.uf,
          this.navParams.data.cidade,
          this.navParams.data.bairro).then(result=>{
            this.itens = result;
            this.dominioIgrejas = result;
            loadingContr.hideLoader();
          }).catch(err=>{

            loadingContr.hideLoader();
            console.log(err);
          });

    }

  ngOnInit() {
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.inputElement.setFocus();
    }, 800);
  }


recuperaItens(ev: any) {
  const val = ev.target.value;
  if (val && val.trim() !== '') {
    this.itens = this.dominioIgrejas.filter(item => { return item.nomeIgreja.toLowerCase().indexOf(val.toLowerCase()) > -1 });
  } else {
    this.itens = this.dominioIgrejas;
  }
}

closeModal() {
  this.modalController.dismiss(null, 'cancel');
}

selecionar(item: any) {
  this.modalController.dismiss(item, 'success');
}

}