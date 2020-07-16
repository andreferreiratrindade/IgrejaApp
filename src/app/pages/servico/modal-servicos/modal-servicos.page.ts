import { Component, OnInit } from '@angular/core';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { HandlerError } from 'src/app/helpers/handlerError';
import { LoadingContr } from 'src/app/helpers/loadingContr';

@Component({
    selector: 'app-modal-servicos',
    templateUrl: './modal-servicos.page.html',
    styleUrls: ['./modal-servicos.page.scss'],
})
export class ModalServicosPage implements OnInit {

    private dominioServicos: any[] = [];
    servicos: any[] = [];
    constructor(
        public toast: ToastController,
        public loadControl: LoadingContr,
        public modalController: ModalController,
        public navParams : NavParams) {

                this.dominioServicos = this.navParams.data.servicos;
                this.servicos = this.dominioServicos 
         }

    ngOnInit() {
    }
    recuperaServicos(ev: any) {
        const val = ev.target.value;
        if (val && val.trim() !== '') {
                this.servicos = this.dominioServicos.filter(item=>{return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1});
        }else{
               this.servicos = this.dominioServicos;
        }
    }

    closeModal() {
        this.modalController.dismiss(null, 'cancel');
    }

    selecionarServico(item:any){
        this.modalController.dismiss(item, 'success');
    }
}
