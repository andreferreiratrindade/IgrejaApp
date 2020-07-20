(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Igreja Vinculo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <form [formGroup]=\"formulario\" >\n\n        <ion-item (click)=\"abrirModalUF()\" detail>\n          <ion-label>UF<ion-text color=\"danger\">*</ion-text>\n\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formulario.value.ufApresentacao}}</ion-note>\n\n        </ion-item>\n\n        <ion-item (click)=\"abrirModalCidade()\" detail [disabled]=\"!formulario.value.uf\">\n          <ion-label>Cidade<ion-text color=\"danger\">*</ion-text>\n\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formulario.value.cidade}}</ion-note>\n\n        </ion-item>\n        <ion-item (click)=\"abrirModalIgreja()\" detail [disabled]=\"!formulario.value.cidade\">\n          <ion-label>Igreja<ion-text color=\"danger\">*</ion-text>\n\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formulario.value.nomeIgreja}}</ion-note>\n\n        </ion-item>\n        <ion-item>\n          <ion-label>Membro da Igreja vinculada</ion-label>\n          <ion-toggle  name=\"staMembro\" formControlName=\"staMembro\" \n            [disabled]=\"!formulario.value.igrejaId\"></ion-toggle>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button class=\"default\" type=\"button\"  (click)=\"voltar()\">Voltar</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button class=\"success\" type=\"button\" (click)=\"prosseguir()\">Prosseguir</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo-routing.module.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo-routing.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: PrestadorCadastroIgrejaVinculoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroIgrejaVinculoPageRoutingModule", function() { return PrestadorCadastroIgrejaVinculoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_igreja_vinculo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro-igreja-vinculo.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_igreja_vinculo_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroIgrejaVinculoPage"]
    }
];
let PrestadorCadastroIgrejaVinculoPageRoutingModule = class PrestadorCadastroIgrejaVinculoPageRoutingModule {
};
PrestadorCadastroIgrejaVinculoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroIgrejaVinculoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.module.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PrestadorCadastroIgrejaVinculoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroIgrejaVinculoPageModule", function() { return PrestadorCadastroIgrejaVinculoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_igreja_vinculo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-igreja-vinculo-routing.module */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo-routing.module.ts");
/* harmony import */ var _prestador_cadastro_igreja_vinculo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro-igreja-vinculo.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PrestadorCadastroIgrejaVinculoPageModule = class PrestadorCadastroIgrejaVinculoPageModule {
};
PrestadorCadastroIgrejaVinculoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_igreja_vinculo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroIgrejaVinculoPageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_igreja_vinculo_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroIgrejaVinculoPage"]]
    })
], PrestadorCadastroIgrejaVinculoPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8taWdyZWphLXZpbmN1bG8vcHJlc3RhZG9yLWNhZGFzdHJvLWlncmVqYS12aW5jdWxvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PrestadorCadastroIgrejaVinculoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroIgrejaVinculoPage", function() { return PrestadorCadastroIgrejaVinculoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/igreja/modal-igreja/modal-igreja.page */ "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");
/* harmony import */ var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/buscaCEP/buscar-cep.service */ "./src/app/providers/buscaCEP/buscar-cep.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_pages_cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/cidade/modal-cidade/modal-cidade.page */ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");
/* harmony import */ var src_app_pages_UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/UF/modal-uf/modal-uf.page */ "./src/app/pages/UF/modal-uf/modal-uf.page.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");















let PrestadorCadastroIgrejaVinculoPage = class PrestadorCadastroIgrejaVinculoPage {
    constructor(prestadorService, toastCtrl, loadingContr, router, modalCtrl, alertController, buscarCEPService) {
        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.loadingContr = loadingContr;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.buscarCEPService = buscarCEPService;
        this.locaisAtendimentos = [];
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            'ufApresentacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            'staMembro': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ]))
        });
        this.formulario.controls["staMembro"].setValue(true);
    }
    ngOnInit() {
    }
    abrirModalIgreja() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_2__["ModalIgrejaPage"],
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
                    this.formulario.controls["nomeIgreja"].setValue(resultModal.data.nomeIgreja);
                    this.formulario.controls["igrejaId"].setValue(resultModal.data.id);
                }
            });
        });
    }
    abrirModalUF() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_10__["ModalUFPage"],
            backdropDismiss: false,
            componentProps: { UFs: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ListagemUF.RecuperaListagem() },
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);
                    this.formulario.controls["uf"].setValue(resultModal.data.sigla);
                    this.formulario.controls["cidade"].setValue(null);
                    this.formulario.controls["nomeIgreja"].setValue(null);
                    this.formulario.controls["igrejaId"].setValue(null);
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
            component: src_app_pages_cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_9__["ModalCidadePage"],
            componentProps: { cidades: this.cidades },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formulario.controls["cidade"].setValue(resultModal.data);
                    this.formulario.controls["nomeIgreja"].setValue(null);
                    this.formulario.controls["igrejaId"].setValue(null);
                }
            });
        });
    }
    prosseguir() {
        if (!this.formulario.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_14__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
        }
        this.loadingContr.showLoader();
        let obj = {
            situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.FinalizarCadastro,
            igrejaId: this.formulario.value.igrejaId,
            staMembro: this.formulario.value.staMembro
        };
        this.prestadorService
            .AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_12__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_13__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.router.navigate(['prestador-cadastro-finalizar']);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_14__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
};
PrestadorCadastroIgrejaVinculoPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_5__["LoadingContr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_3__["BuscarCEPService"] }
];
PrestadorCadastroIgrejaVinculoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-igreja-vinculo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-igreja-vinculo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-igreja-vinculo.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.scss")).default]
    })
], PrestadorCadastroIgrejaVinculoPage);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module-es2015.js.map