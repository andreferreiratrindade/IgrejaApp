import { Component, OnInit } from '@angular/core';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Constants } from 'src/app/utils/constants';
import { ModalUFPage } from 'src/app/pages/UF/modal-uf/modal-uf.page';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
import { ModalCidadePage } from 'src/app/pages/cidade/modal-cidade/modal-cidade.page';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adicionar-local-atendimento',
  templateUrl: './adicionar-local-atendimento.page.html',
  styleUrls: ['./adicionar-local-atendimento.page.scss'],
})
export class AdicionarLocalAtendimentoPage implements OnInit {
  formulario: any = {};
  cidades: string[];

  constructor(public prestadorService: PrestadorService,
    public toastCtrl: ToastController,
    public loadingContr: LoadingContr,
    public router: Router,
    public modalCtrl: ModalController,
    public buscarCEPService: BuscarCEPService
  ) {
   
  }
  ngOnInit() {
  }

  
  public abrirModalUF() {
    const modal = this.modalCtrl.create({
      component: ModalUFPage,
      backdropDismiss: false,
      componentProps: { UFs: Constants.ListagemUF.RecuperaListagem() },

    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal.data) {

          this.formulario.ufApresentacao=resultModal.data.nome + " / " + resultModal.data.sigla;
          this.formulario.uf=resultModal.data.sigla;
          this.loadingContr.showLoader();
          this.buscarCEPService.buscarMunicipiosPorUF(resultModal.data.sigla)
            .then(result => {

              this.cidades = result;
              this.loadingContr.hideLoader();
            }
            ).catch(err => { this.loadingContr.hideLoader(); });
        }
      });
    });
  }

  public abrirModalCidade() {
    const modal = this.modalCtrl.create({
      component: ModalCidadePage,
      componentProps: { cidades: this.cidades },
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(resultModal => {
        if (resultModal.data) {
          this.formulario.cidade=resultModal.data;
        }
      });
    });
  }

  closeModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  adicionarLocalAtendimento() {
    this.modalCtrl.dismiss(this.formulario, 'success');
  }

}
