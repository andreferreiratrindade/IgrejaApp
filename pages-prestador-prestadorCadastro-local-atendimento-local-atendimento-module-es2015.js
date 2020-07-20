(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Local Atendimento\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <form [formGroup]=\"formulario\" (ngSubmit)=\"adicionarLocalAtendimento()\">\n\n        <ion-item (click)=\"abrirModalUF()\" detail>\n          <ion-label>UF<ion-text color=\"danger\">*</ion-text>\n\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formulario.value.ufApresentacao}}</ion-note>\n\n        </ion-item>\n\n        <ion-item (click)=\"abrirModalCidade()\" detail [disabled]=\"!formulario.value.uf\">\n          <ion-label>Cidade<ion-text color=\"danger\">*</ion-text>\n\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formulario.value.cidade}}</ion-note>\n\n        </ion-item>\n\n        <ion-button class=\"primary\" type=\"submit\" expand=\"block\">Adicionar</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of locaisAtendimentos; let i = index\"  class=\"ion-no-border\">\n    <ion-card-header>\n      <ion-card-title>\n        <h3>{{i+1}}. {{item.cidade}} / {{item.uf}} </h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"excluirButtonClick(item)\" color=\"danger\">Excluir</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button class=\"default\" type=\"button\"  (click)=\"voltar()\">Voltar</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button class=\"success\" type=\"button\" (click)=\"prosseguir()\">Prosseguir</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LocalAtendimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPageRoutingModule", function() { return LocalAtendimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_atendimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-atendimento.page */ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts");




const routes = [
    {
        path: '',
        component: _local_atendimento_page__WEBPACK_IMPORTED_MODULE_3__["LocalAtendimentoPage"]
    }
];
let LocalAtendimentoPageRoutingModule = class LocalAtendimentoPageRoutingModule {
};
LocalAtendimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocalAtendimentoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: LocalAtendimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPageModule", function() { return LocalAtendimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _local_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-atendimento-routing.module */ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts");
/* harmony import */ var _local_atendimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-atendimento.page */ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let LocalAtendimentoPageModule = class LocalAtendimentoPageModule {
};
LocalAtendimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _local_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocalAtendimentoPageRoutingModule"]
        ],
        declarations: [_local_atendimento_page__WEBPACK_IMPORTED_MODULE_6__["LocalAtendimentoPage"]]
    })
], LocalAtendimentoPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9sb2NhbC1hdGVuZGltZW50by9sb2NhbC1hdGVuZGltZW50by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: LocalAtendimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPage", function() { return LocalAtendimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pages_cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/cidade/modal-cidade/modal-cidade.page */ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_pages_UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/UF/modal-uf/modal-uf.page */ "./src/app/pages/UF/modal-uf/modal-uf.page.ts");
/* harmony import */ var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/buscaCEP/buscar-cep.service */ "./src/app/providers/buscaCEP/buscar-cep.service.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");














let LocalAtendimentoPage = class LocalAtendimentoPage {
    constructor(prestadorService, toastCtrl, loadingContr, router, modalCtrl, alertController, buscarCEPService) {
        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.loadingContr = loadingContr;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.buscarCEPService = buscarCEPService;
        this.locaisAtendimentos = [];
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'ufApresentacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then((result) => {
            this.locaisAtendimentos = result.locaisAtendimento;
            this.loadingContr.hideLoader();
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    validaAdicionarLocalAtendimento() {
        let valido = true;
        let mensagem = "";
        let obj = { valido: true, mensagem: "" };
        if (!this.formulario.value.cidade || !this.formulario.value.uf) {
            obj.valido = false;
            obj.mensagem = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].Mensagens.CamposObrigatorios;
            return obj;
        }
        if (this.locaisAtendimentos && this.locaisAtendimentos
            .filter(y => { return y.uf == this.formulario.value.uf && y.cidade == this.formulario.value.cidade; }).length > 0) {
            obj.valido = false;
            obj.mensagem = "Local de atendimento já foi adicionado.";
            return obj;
        }
        return obj;
    }
    adicionarLocalAtendimento() {
        let validacao = this.validaAdicionarLocalAtendimento();
        if (!validacao.valido) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(validacao.mensagem, this.toastCtrl);
            return false;
        }
        let localAtendimento = { uf: this.formulario.value.uf, cidade: this.formulario.value.cidade };
        this.loadingContr.showLoader();
        this.prestadorService.AdicionaLocalAtendimento(localAtendimento, src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(() => {
            if (!this.locaisAtendimentos) {
                this.locaisAtendimentos = [];
            }
            this.locaisAtendimentos.push(localAtendimento);
            this.formulario.reset();
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    excluirButtonClick(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção',
                message: 'Deseja excluir registro?',
                buttons: [
                    {
                        text: 'Não',
                    }, {
                        text: 'Sim',
                        handler: () => {
                            this.excluirLocalizacao(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    excluirLocalizacao(item) {
        this.loadingContr.showLoader();
        this.prestadorService
            .ExcluirLocalAtendimento(src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia()
            .recuperaUsuario().usuarioId, item)
            .then((result) => {
            this.locaisAtendimentos = this.locaisAtendimentos.filter(y => { return y.cidade != item.cidade && y.uf != item.uf; });
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    prosseguir() {
        this.loadingContr.showLoader();
        let obj = { situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].TipoSituacaoPrestador.CadastroServicos };
        this.prestadorService
            .AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.router.navigate(['prestador-cadastro-servico']);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    abrirModalUF() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_8__["ModalUFPage"],
            backdropDismiss: false,
            componentProps: { UFs: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].ListagemUF.RecuperaListagem() },
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);
                    this.formulario.controls["uf"].setValue(resultModal.data.sigla);
                    this.loadingContr.showLoader();
                    this.buscarCEPService.buscarMunicipiosPorUF(resultModal.data.sigla)
                        .then(result => {
                        this.cidades = result;
                        this.loadingContr.hideLoader();
                    }).catch(err => { this.loadingContr.hideLoader(); });
                }
            });
        });
    }
    abrirModalCidade() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_2__["ModalCidadePage"],
            componentProps: { cidades: this.cidades },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.controls["cidade"].setValue(resultModal.data);
                }
            });
        });
    }
};
LocalAtendimentoPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_5__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__["LoadingContr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__["BuscarCEPService"] }
];
LocalAtendimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-local-atendimento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./local-atendimento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./local-atendimento.page.scss */ "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss")).default]
    })
], LocalAtendimentoPage);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module-es2015.js.map