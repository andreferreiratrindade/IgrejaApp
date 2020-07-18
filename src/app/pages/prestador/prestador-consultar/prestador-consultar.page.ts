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
    validation_messages = {
        'uf': [
            { type: 'required', message: 'Campo de preenchimento obrigatório.' }
        ],
        'servicoId': [
            { type: 'required', message: 'Campo de preenchimento obrigatório.' }
        ]
    };

    constructor(public prestadorService: PrestadorService,
        public toastCtrl: ToastController,
        public igrejaService: IgrejaService,
        public usuarioService: UsuarioService,
        public loadingContr: LoadingContr,
        public dominioServicoService: DominioServicoService,
        public router: Router,
        public modalCtrl: ModalController,
        private callNumber: CallNumber,
        private favoritoService: FavoritoService
    ) {

        this.formulario = new FormGroup({
            'uf': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'cidade': new FormControl(),
            'bairro': new FormControl(),
            'nomeServico': new FormControl(),
            'nomeIgreja': new FormControl(),
            'igrejaId': new FormControl(),
        });
        this.prestadores = [];
    }

    ngOnInit() {
        this.loadingContr.showLoader();

        this.dominioServicoService.recuperaDominioServico()
            .then(result => {
                this.servicos = result;
                this.loadingContr.hideLoader();

            }).catch(x => {
                this.loadingContr.hideLoader();
                HandlerError.handler(x, this.toastCtrl);
            });
    }

    buscarCidades() {
        this.loadingContr.showLoader();
        this.formulario.value['cidade'] = "";
        this.prestadorService.RecuperaCidadePrestadorDisponiveis(this.formulario.value['uf'])
            .then(result => {
                this.cidadeList = result;
                this.loadingContr.hideLoader();
            }).catch(x => {
                this.loadingContr.hideLoader();
                HandlerError.handler(x, this.toastCtrl);
            });
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
                , this.formulario.value['servicoId']
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

                let lstIgrejaId = [];
                lstIgrejaId = prestadoresResult.map(x => { return x.igrejas[0].igrejaId });

                this.consultaMasterPrestador(lstusuarioId, lstIgrejaId).then(() => {
                    this.loadingContr.hideLoader();

                }).catch(x => {
                    HandlerError.handler(x, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });

            }).catch(x => {
                HandlerError.handler(x, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
    }

    private consultaMasterPrestador(lstusuarioId, lstIgrejaId): Promise<any> {
        return new Promise<any>((result, reject) => {
            // Recupera igreja 
            this.recuperaNomeIgreja(lstIgrejaId).then(() => { result() }).catch(err => { reject(err) });

            // Recupera Nome 
            this.recuperaNomePrestadores(lstusuarioId).then(() => { result() }).catch(err => { reject(err) });

            // Recupera Servicos
            //this.recuperaServicosPorPrestadores(lstusuarioId);
        });
    }


    private recuperaServicosPorPrestadores(lstusuarioId): Promise<any> {
        return new Promise(() => {
            this.prestadorService.recuperaServicosPorPrestadores(lstusuarioId)
                .then(servicosPorPrestador => {
                    this.prestadores.map(x => {
                        x.servicos = servicosPorPrestador.find(y => { y.usuarioId == x.usuarioId });
                    })
                    this.loadingContr.hideLoader();

                }).catch(x => {
                    HandlerError.handler(x, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
        });
    }

    private recuperaNomePrestadores(lstusuarioId): Promise<any> {
        return new Promise((result, reject) => {
            this.usuarioService.RecuperaNomeUsuarios(lstusuarioId)
                .then(usuariosResult => {
                    this.prestadores.map(x => {
                        x.nome = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.nome;
                        x.email = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.email;
                    });

                    this.ionContent.scrollToPoint(0, 350, 800);
                    result();
                }).catch(x => {

                    HandlerError.handler(x, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
        });
    }

    private recuperaNomeIgreja(lstIgrejaId): Promise<any> {
        return new Promise((result, reject) => {

            this.igrejaService.RecuperaNomeIgreja(lstIgrejaId)
                .then(resultIgreja => {
                    this.prestadores.map(x => {
                        x.nomeIgreja = resultIgreja.find(y => y.data.id == x.igrejas[0].igrejaId).data.nomeIgreja;
                        x.staMembro = x.igrejas[0].staMembro;
                    });
                    result()
                }).catch(x => {
                    reject(x)
                    HandlerError.handler(x, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
        });
    }

    public detalhes(usuarioId) {
        this.router.navigate(['/visualizar-prestador'], { queryParams: { usuarioId: usuarioId } });
    }

    public abrirModalServicos() {
        const modal = this.modalCtrl.create({
            component: ModalServicosPage,
            componentProps: { servicos: this.servicos },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {

                if (resultModal) {
                    this.formulario.value.nomeServico = resultModal.data.nomeServico;
                    this.formulario.value.servicoId = resultModal.data.servicoId;
                }
            });
        });
    }

    public abrirModalUF() {
        const modal = this.modalCtrl.create({
            component: ModalUFPage,
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal) {
                    this.formulario.value.uf = resultModal.data;
                    this.formulario.value.cidade = null;
                    this.formulario.value.bairro = null;
                    this.formulario.value.nomeIgreja = null;
                    this.formulario.value.igrejaId = null;
                }
            });
        });
    }

    public abrirModalCidade() {
        const modal = this.modalCtrl.create({
            component: ModalCidadePage,
            componentProps: { uf: this.formulario.value.uf },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal) {
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
                if (resultModal) {
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
                if (resultModal) {
                    this.formulario.value.nomeIgreja = resultModal.data.nomeIgreja;
                    this.formulario.value.igrejaId = resultModal.data.id;
                }
            });
        });
    }
    public formularioValido(): boolean {
        return this.formulario.value.uf && this.formulario.value.cidade;
    }

    public ligarTelefone(telefone: any) {
        this.callNumber.callNumber(telefone, true).then(() => {


        }).catch(x => {
            HandlerError.handler(x, this.toastCtrl);
        });
    }
    public adicionarPrestadorFavorito(usuarioId: string) {
        this.favoritoService.AdicionaPrestadorFavorito(usuarioId, Config.RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(() => { });
    }

    public removePrestadorFavorito(usuarioId: string) {
        this.favoritoService.RemovePrestadorFavorito(usuarioId, Config.RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(() => { });
    }
}
