import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { ToastController, ModalController, NavParams, IonInput } from '@ionic/angular';
import { HandlerError } from 'src/app/helpers/handlerError';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { SortByPipe } from 'src/app/pipes/sortBy/sort-by.pipe';

@Component({
  selector: 'app-modal-servicos',
  templateUrl: './modal-servicos.page.html',
  styleUrls: ['./modal-servicos.page.scss'],
})
export class ModalServicosPage implements OnInit {

  private dominioServicos: any[] = [];
  servicos: any[] = [];
  servicosSelecionados: any[] = [];
  nomeServico: string = null
  @ViewChild('searchbar') inputElement: IonInput;

  constructor(
    public toast: ToastController,
    public loadControl: LoadingContr,
    public modalController: ModalController,
    public navParams: NavParams,
    public sortBy: SortByPipe,
    private dominioServicoService: DominioServicoService) {
    
    this.servicosSelecionados = this.navParams.data.servicosSelecionados;
  }

  ngOnInit() {
    this.recuperaServicos(null);

  }

  recuperaServicos(ev: any) {

    debugger
    let val = "";
    if (ev && ev.target) {
      val = ev.target.value;
    }
    if (val && val.trim() !== '') {
      this.dominioServicoService.recuperaServicoAutoComplete(val)
        .then(result => {
          this.servicos = result;
          this.atualizaListagemServicosSelecionados()
          if (this.servicos.length == 0) {
            ToastCustom.CustomToast(this.toast, "Nenhum serviço encontrado.", "warning", 4000);
          }
        });
    } else {
      this.servicos = [];
    }

    this.nomeServico = val;




  }

  atualizaListagemServicosSelecionados(){
    this.servicos = this.servicos.filter(x => { return this.servicosSelecionados.filter(y => y.servicoId == x.servicoId).length == 0 });

  }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  selecionarServico(item: any) {

    this.servicosSelecionados.push(item);
    this.atualizaListagemServicosSelecionados()

  }

  removeServico(item: any) {
    let index = this.servicosSelecionados.findIndex(y => y.servicoId == item.servicoId); //find index in your array
    this.servicosSelecionados.splice(index, 1);//remove element from array

    let obj = {
      target:
        { value: this.nomeServico }
    };
    this.recuperaServicos(obj);
  }

  ok() {
    this.modalController.dismiss(this.servicosSelecionados, 'success');
  }
}
