import { Component, OnInit, ViewChild } from '@angular/core';
import { PrestadorService } from 'src/app/providers/prestador/prestador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HandlerError } from 'src/app/helpers/handlerError';
import { ToastController, LoadingController, ModalController, IonContent } from '@ionic/angular';
import { IgrejaService } from 'src/app/providers/igreja/igreja.service';
import { UsuarioService } from 'src/app/providers/usuario/usuario.service';
import { LoadingContr } from 'src/app/helpers/loadingContr';
import { DominioServicoService } from 'src/app/providers/dominioServico/dominio-servico.service';
import { Router } from '@angular/router';
import { ToastCustom } from 'src/app/helpers/toastCustom';
import { ModalServicosPage } from '../../servico/modal-servicos/modal-servicos.page';
import { ModalBairroPage } from '../../bairro/modal-bairro/modal-bairro.page';
import { ModalCidadePage } from '../../cidade/modal-cidade/modal-cidade.page';
import { ModalUFPage } from '../../UF/modal-uf/modal-uf.page';
import { ModalIgrejaPage } from '../../igreja/modal-igreja/modal-igreja.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Constants } from 'src/app/utils/constants';
import { FavoritoService } from 'src/app/providers/favorito/favorito.service';
import { Config } from 'src/app/config';
import { VisualizarPrestadorPage } from '../visualizar-prestador/visualizar-prestador.page';
import { MaskTelefonePipe } from 'src/app/pipes/mask-telefone.pipe';
import { BuscarCEPService } from 'src/app/providers/buscaCEP/buscar-cep.service';
@Component({
    selector: 'app-prestador-consultar',
    templateUrl: './prestador-consultar.page.html',
    styleUrls: ['./prestador-consultar.page.scss'],
})
export class PrestadorConsultarPage implements OnInit {
    @ViewChild(IonContent) ionContent: IonContent;
    UfList: any[];
    cidadeList: any[];
    servicos: any[];
    formulario: FormGroup;
    prestadores: any[];
    nomeServicoSelecionado: string = "Todos"
    servicosSelecionados: any[] = [];
    constructor(public prestadorService: PrestadorService,
        public toastCtrl: ToastController,
        public igrejaService: IgrejaService,
        public usuarioService: UsuarioService,
        public loadingContr: LoadingContr,
        public dominioServicoService: DominioServicoService,
        public router: Router,
        public modalCtrl: ModalController,
        private buscarCEPService: BuscarCEPService,
        private favoritoService: FavoritoService,

    ) {

        this.formulario = new FormGroup({
            'uf': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'cidade': new FormControl(),
            'bairro': new FormControl(),
            'nomeIgreja': new FormControl(),
            'igrejaId': new FormControl(),
            'ufApresentacao': new FormControl(),
        });
        this.prestadores = [];
    }

    ngOnInit() {

    }

    buscarCidades(uf: string) {
        this.loadingContr.showLoader();
        this.formulario.controls['cidade'].setValue(null);
        this.cidadeList = [];
        this.buscarCEPService.buscarMunicipiosPorUF(uf)
            .then(result => {

                this.cidadeList = result;
                this.loadingContr.hideLoader();
            }
            ).catch(err => { this.loadingContr.hideLoader(); });

    }

    ConsultarPrestador() {
        if (!this.formularioValido()) {
            ToastCustom.CustomToast(this.toastCtrl, Constants.Mensagens.CamposObrigatorios, "danger", 4000);

            return false;
        }
        this.prestadores = [];
        this.loadingContr.showLoader();

        this.prestadorService
            .RecuperaPestadoresPesquisar(
                this.formulario.value['uf']
                , this.formulario.value['cidade']
                , this.formulario.value['bairro']
                , this.servicosSelecionados.map(y => { return y.servicoId })
                , this.formulario.value.igrejaId)
            .then(prestadoresResult => {
                if (!prestadoresResult || prestadoresResult.length == 0) {
                    ToastCustom.CustomToast(this.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);
                    this.loadingContr.hideLoader();
                    return false;
                }
                let lstusuarioId = [];
                lstusuarioId = prestadoresResult.map(x => { return x.usuarioId });
                this.prestadores = prestadoresResult;

                this.usuarioService.RecuperaNomeUsuarios(lstusuarioId)
                    .then(usuariosResult => {
                        this.prestadores.map(x => {
                            x.nome = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.nome;
                            x.email = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.email;
                        });
                        this.loadingContr.hideLoader();

                        this.ionContent.scrollToPoint(0, 350, 800);

                    }).catch(x => {
                        HandlerError.handler(x, this.toastCtrl);
                        this.loadingContr.hideLoader();
                    });

                this.prestadores.forEach(x => {
                    x.descricaoServicos = x.servicos.map(y => y.nomeServico).join(', ');
                });


            }).catch(x => {
                HandlerError.handler(x, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
    }

    public detalhes(usuarioId) {
        const modal = this.modalCtrl.create({
            component: VisualizarPrestadorPage,
            componentProps: { usuarioId: usuarioId },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {

            });
        });
        // this.router.navigate(['/visualizar-prestador'], { queryParams: { usuarioId: usuarioId } });
    }

    public abrirModalServicos() {
        const modal = this.modalCtrl.create({
            component: ModalServicosPage,
            componentProps: { servicosSelecionados: this.servicosSelecionados },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.servicosSelecionados = resultModal.data;
                    this.nomeServicoSelecionado = this.servicosSelecionados.map(y => { return y.nomeServico }).join('; ');
                }

                if (this.servicosSelecionados.length == 0) {
                    this.servicosSelecionados = [];
                    this.nomeServicoSelecionado = "Todos";
                }
            });
        });
    }

    public abrirModalUF() {
        const modal = this.modalCtrl.create({
            component: ModalUFPage,
            componentProps: { UFs: Constants.ListagemUF.RecuperaListagem() },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);
                    this.formulario.controls["uf"].setValue(resultModal.data.sigla);
                    this.formulario.controls["cidade"].setValue(null);
                    this.formulario.controls["bairro"].setValue(null);
                    this.formulario.controls["nomeIgreja"].setValue(null);
                    this.formulario.controls["igrejaId"].setValue(null);
                    this.buscarCidades(resultModal.data.sigla);
                }
            });
        });
    }

    public abrirModalCidade() {
        const modal = this.modalCtrl.create({
            component: ModalCidadePage,
            componentProps: { cidades: this.cidadeList },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.value.cidade = resultModal.data;
                    this.formulario.value.bairro = null;
                    this.formulario.value.nomeIgreja = null;
                    this.formulario.value.igrejaId = null;
                }
            });
        });
    }

    public abrirModalBairro() {
        const modal = this.modalCtrl.create({
            component: ModalBairroPage,
            componentProps: { uf: this.formulario.value.uf, cidade: this.formulario.value.cidade },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.value.bairro = resultModal.data;
                    this.formulario.value.nomeIgreja = null;
                    this.formulario.value.igrejaId = null;
                }
            });
        });
    }
    public abrirModalIgreja() {
        const modal = this.modalCtrl.create({
            component: ModalIgrejaPage,
            componentProps: {
                uf: this.formulario.value.uf,
                cidade: this.formulario.value.cidade,
                bairro: this.formulario.value.bairro
            },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.value.nomeIgreja = resultModal.data.nomeIgreja;
                    this.formulario.value.igrejaId = resultModal.data.id;
                }
            });
        });
    }

    public abrirModalPrestadorDetalhes(usuarioId) {

    }
    public formularioValido(): boolean {
        return this.formulario.value.uf && this.formulario.value.cidade;
    }

    public adicionarPrestadorFavorito(usuarioId: string) {
        this.favoritoService.AdicionaPrestadorFavorito(usuarioId, Config.RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(() => { });
    }

    public removePrestadorFavorito(usuarioId: string) {
        this.favoritoService.RemovePrestadorFavorito(usuarioId, Config.RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(() => { });
    }

    public limparFiltros() {
        this.servicosSelecionados = [];
        this.nomeServicoSelecionado = "Todos";

    }
}
