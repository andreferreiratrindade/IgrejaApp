import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastController, ModalController, NavParams, IonInput } from '@ionic/angular';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { HandlerError } from 'src/app/helpers/handlerError';
import { SortByPipe } from 'src/app/pipes/sortBy/sort-by.pipe';

@Component({
  selector: 'app-modal-cidade',
  templateUrl: './modal-cidade.page.html',
  styleUrls: ['./modal-cidade.page.scss'],
})
export class ModalCidadePage implements OnInit, AfterViewInit {

  private dominioCidade: any[] = [];
  uf : string;
  itens: any[] = [];
  @ViewChild('searchbar') inputElement: IonInput;

  constructor(public loadingContr: LoadingContr,
    public toastCtrl: ToastController,
    public prestadorService: PrestadorService,
    public modalController: ModalController,
    public sortBy : SortByPipe,
    public navParams: NavParams) {

    this.dominioCidade = this.navParams.data.cidades.sort();

    this.recuperaItens(null);
  }

  ngOnInit() {
  }
  ngAfterViewInit() {

    setTimeout(() => {
      this.inputElement.setFocus();
    }, 800);
  }

  recuperaItens(ev: any) {
    let val = "";
    if(ev &&  ev.target){
      val =  ev.target.value;
    } 
    if (val && val.trim() !== '') {
      this.itens = this.dominioCidade.filter(item => { return item.toLowerCase().indexOf(val.toLowerCase()) > -1 });

    } else {
      this.itens = [...this.dominioCidade];
    }

    this.itens = this.itens.slice(0,10);
  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionar(item: any) {
    this.modalController.dismiss(item, 'success');
  }

}
