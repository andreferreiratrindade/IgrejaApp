(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-form2-prestador-cadastro-form2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Prestador - Serviços\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <ion-card (click)=\"expandItem(item)\" *ngFor=\"let item of prestadorServicos\">\n    <ion-card-header>\n      <ion-card-title>{{item.nomeServico}} </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-textarea placeholder=\"Insira uma breve descrição aqui...\" [(ngModel)]=\"item.breveDescricao\"></ion-textarea>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"button\" color=\"danger\" (click)=\"excluirButtonClick(item)\">Excluir</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button type=\"button\"  (click)=\"salvarBreveDescricao(item)\">Salvar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\" (click)=\"abreModalSelecionaServico()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar > \n    <ion-button class=\"success\" type=\"button\" expand=\"block\" (click)=\"Prosseguir()\"  >Prosseguir</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm2PageRoutingModule", function() { return PrestadorCadastroForm2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_form2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro-form2.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_form2_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroForm2Page"]
    }
];
let PrestadorCadastroForm2PageRoutingModule = class PrestadorCadastroForm2PageRoutingModule {
};
PrestadorCadastroForm2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroForm2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm2PageModule", function() { return PrestadorCadastroForm2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_form2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-form2-routing.module */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2-routing.module.ts");
/* harmony import */ var _prestador_cadastro_form2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro-form2.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PrestadorCadastroForm2PageModule = class PrestadorCadastroForm2PageModule {
};
PrestadorCadastroForm2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_form2_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroForm2PageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_form2_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm2Page"]]
    })
], PrestadorCadastroForm2PageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8tZm9ybTIvcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm2Page", function() { return PrestadorCadastroForm2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/servico/modal-servicos/modal-servicos.page */ "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");











let PrestadorCadastroForm2Page = class PrestadorCadastroForm2Page {
    constructor(dominioServicoService, loadingContr, prestadorService, modalCtrl, toastCtrl, alertController, ngZone, router) {
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.prestadorService = prestadorService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.router = router;
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(result => {
            this.prestadorServicos = result;
            this.dominioServicoService.recuperaDominioServico().then(x => {
                this.dominioServicos = x;
                this.prestadorServicos.map((listItem) => {
                    var _a;
                    listItem.expanded = false;
                    listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                    listItem.nomeServico = x.filter(y => y.servicoId == listItem.servicoId)[0].nomeServico;
                    return listItem;
                });
                this.loadingContr.hideLoader();
                if (this.prestadorServicos.length == 0) {
                    this.abreModalSelecionaServico();
                }
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    abreModalSelecionaServico() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_10__["ModalServicosPage"],
            componentProps: { servicos: this.dominioServicos },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                this.servicoAdicionado = resultModal.data;
                if (this.servicoAdicionado) {
                    this.loadingContr.showLoader();
                    this.prestadorService
                        .AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia()
                        .recuperaUsuario().usuarioId, {
                        servicoId: this.servicoAdicionado.servicoId,
                        usuarioId: src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia()
                            .recuperaUsuario().usuarioId
                    })
                        .then((result) => {
                        this.prestadorServicos.push(this.servicoAdicionado);
                        this.loadingContr.hideLoader();
                        src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].SucessoToast(this.toastCtrl);
                    }).catch(err => {
                        src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
                        this.loadingContr.hideLoader();
                    });
                }
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    salvarBreveDescricao(item) {
        let servico = { servicoId: item.servicoId, breveDescricao: item.breveDescricao };
        this.prestadorService
            .AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia()
            .recuperaUsuario().usuarioId, servico)
            .then((result) => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    excluirServico(item) {
        this.loadingContr.showLoader();
        this.prestadorService
            .ExcluirServico(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia()
            .recuperaUsuario().usuarioId, item.servicoId)
            .then((result) => {
            this.prestadorServicos = this.prestadorServicos.filter(y => y.servicoId != item.servicoId);
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
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
                            this.excluirServico(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Prosseguir() {
        if (this.prestadorServicos.length == 0) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].CustomToast(this.toastCtrl, "Favor adicionar serviço, antes de continuar", "danger", 4000);
            return false;
        }
        this.loadingContr.showLoader();
        let obj = { situacaoPrestador: 2 };
        this.prestadorService
            .AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.ngZone.run(() => {
                this.router.navigate(['prestador-Form3']);
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
};
PrestadorCadastroForm2Page.ctorParameters = () => [
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
PrestadorCadastroForm2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-form2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-form2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-form2.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.page.scss")).default]
    })
], PrestadorCadastroForm2Page);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-form2-prestador-cadastro-form2-module-es2015.js.map