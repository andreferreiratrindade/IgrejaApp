import { Component, OnInit } from '@angular/core';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { AdicionaServicoPage } from '../adiciona-servico/adiciona-servico.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mantem-servico',
  templateUrl: './mantem-servico.page.html',
  styleUrls: ['./mantem-servico.page.scss'],
})
export class MantemServicoPage implements OnInit {

  servicos: any[] = [];
  constructor(public servicoService: DominioServicoService,
    public modalCtrl: ModalController) { }

  ngOnInit() {

    this.servicoService.recuperaDominioServico().then(result => {
      this.servicos = result;
    });
  }

  public abreModalSelecionaServico() {
    const modal = this.modalCtrl.create({
      component: AdicionaServicoPage,
      backdropDismiss: false,
    }).then((modal) => {
      modal.present();

      modal.onWillDismiss().then(resultModal => {

      });
    });
  }
}
