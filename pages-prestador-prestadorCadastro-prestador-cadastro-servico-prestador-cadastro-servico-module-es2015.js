(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cadastro Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar *ngIf=\"prestador.SituacaoPrestador == 1\" color=\"secondary\" value=\"0.60\" buffer=\"0.80\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-card-header>\n      <div class=\"ion-text-end\">\n        <ion-button color=\"primary\" (click)=\"abreModalSelecionaServico()\">\n          <ion-icon name=\"add-outline\" style=\"margin-right:10px;\"></ion-icon>Novo\n        </ion-button>\n      </div>\n      <ion-card-title>Serviços</ion-card-title>\n      \n    </ion-card-header>\n    <ion-card-content>\n\n\n        <ion-item *ngFor=\"let item of prestadorServicos\" class=\"ion-no-border\" button detail=\"false\"\n          (click)=\"servicoOpcoes(item)\">\n          <ion-label class=\"ion-text-wrap \"><h3>{{item.nomeServico}}</h3> <p>{{item.breveDescricao}}</p></ion-label>\n          <ion-icon slot=\"end\" color=\"primary\" name=\"ellipsis-vertical\"></ion-icon>\n\n        </ion-item>\n\n\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"medium\" type=\"button\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n          clear>\n          <ion-icon name=\"chevron-back-outline\" style=\"margin-right:10px;\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\" clear>\n          <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n          </ion-icon>\n          {{prestador.SituacaoPrestador == 1 ? \"Prosseguir\" : \"Salvar\"}}\n\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/helpers/handlerError.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/handlerError.ts ***!
  \*****************************************/
/*! exports provided: HandlerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerError", function() { return HandlerError; });
/* harmony import */ var _toastCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastCustom */ "./src/app/helpers/toastCustom.ts");

class HandlerError {
    static handler(err, toastCtrl) {
        var data = err;
        let message = data.error ? data.error.message : data;
        _toastCustom__WEBPACK_IMPORTED_MODULE_0__["ToastCustom"].errorToast(message, toastCtrl);
    }
}


/***/ }),

/***/ "./src/app/helpers/toastCustom.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/toastCustom.ts ***!
  \****************************************/
/*! exports provided: ToastCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastCustom", function() { return ToastCustom; });
class ToastCustom {
    static errorToast(msg, toastCtrl) {
        this.CustomToast(toastCtrl, msg, "danger", 4000);
    }
    static SucessoToast(toastCtrl) {
        this.CustomToast(toastCtrl, "Operação realizada com sucesso.", "success", 4000);
    }
    static CustomToast(toastCtrl, message, color, duration) {
        toastCtrl.create({
            message: message,
            duration: duration,
            color: color
        }).then(x => {
            x.present();
        });
    }
}


/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PrestadorCadastroServicoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPageRoutingModule", function() { return PrestadorCadastroServicoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro-servico.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroServicoPage"]
    }
];
let PrestadorCadastroServicoPageRoutingModule = class PrestadorCadastroServicoPageRoutingModule {
};
PrestadorCadastroServicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroServicoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PrestadorCadastroServicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPageModule", function() { return PrestadorCadastroServicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-servico-routing.module */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts");
/* harmony import */ var _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro-servico.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes */ "./src/app/pipes/pipes.ts");









let PrestadorCadastroServicoPageModule = class PrestadorCadastroServicoPageModule {
};
PrestadorCadastroServicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            src_app_pipes_pipes__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroServicoPageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroServicoPage"]]
    })
], PrestadorCadastroServicoPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8tc2Vydmljby9wcmVzdGFkb3ItY2FkYXN0cm8tc2Vydmljby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAiLCJpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PrestadorCadastroServicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPage", function() { return PrestadorCadastroServicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/servico/modal-servicos/modal-servicos.page */ "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/sortBy/sort-by.pipe */ "./src/app/pipes/sortBy/sort-by.pipe.ts");
/* harmony import */ var src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/confirmAlert */ "./src/app/helpers/confirmAlert.ts");
/* harmony import */ var _modal_breve_comentario_modal_breve_comentario_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal-breve-comentario/modal-breve-comentario.page */ "./src/app/pages/prestador/prestadorCadastro/modal-breve-comentario/modal-breve-comentario.page.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");















let PrestadorCadastroServicoPage = class PrestadorCadastroServicoPage {
    constructor(dominioServicoService, loadingContr, prestadorService, modalCtrl, toastCtrl, alertController, ngZone, router, sortBy, actionSheetCtrl, confirmAlert, _cdr) {
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.prestadorService = prestadorService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.router = router;
        this.sortBy = sortBy;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confirmAlert = confirmAlert;
        this._cdr = _cdr;
        this.prestador = {};
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then((result) => {
            this.prestador = result;
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
        this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
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
                this.ordenaServicos();
                this.loadingContr.hideLoader();
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    abreModalSelecionaServico() {
        let servicos = this.dominioServicos.filter(x => {
            return this.prestadorServicos.filter(y => { return y.servicoId == x.servicoId; }).length == 0;
        });
        const modal = this.modalCtrl.create({
            component: src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_5__["ModalServicosPage"],
            componentProps: { servicos: servicos.filter(x => { return !x.deletado; }) },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (!resultModal.data) {
                    return false;
                }
                if (resultModal.data.length > 0) {
                    src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(this.toastCtrl);
                    resultModal.data.forEach(element => {
                        this.prestadorServicos.push(element);
                        this.prestadorService
                            .AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia()
                            .recuperaUsuario().usuarioId, {
                            servicoId: element.servicoId,
                            usuarioId: src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia()
                                .recuperaUsuario().usuarioId
                        }).catch(err => {
                            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
                            this.loadingContr.hideLoader();
                        });
                    });
                    this.ordenaServicos();
                }
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    salvarBreveDescricao(item) {
        let servico = { servicoId: item.servicoId, breveDescricao: item.breveDescricao };
        this.prestadorService
            .AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia()
            .recuperaUsuario().usuarioId, servico)
            .then((result) => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    excluirServico(item) {
        this.loadingContr.showLoader();
        this.prestadorService
            .ExcluirServico(src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia()
            .recuperaUsuario().usuarioId, item.servicoId)
            .then((result) => {
            this.prestadorServicos = this.prestadorServicos.filter(y => y.servicoId != item.servicoId);
            this._cdr.detectChanges();
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_3__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    servicoOpcoes(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: item.nomeServico,
                buttons: [
                    {
                        text: 'Breve comentário',
                        handler: () => {
                            const modal = this.modalCtrl.create({
                                component: _modal_breve_comentario_modal_breve_comentario_page__WEBPACK_IMPORTED_MODULE_13__["ModalBreveComentarioPage"],
                                componentProps: { servico: item },
                                backdropDismiss: false,
                            }).then((modal) => {
                                modal.present();
                                modal.onWillDismiss().then(resultModal => {
                                    var _a;
                                    if (resultModal.data) {
                                        item.breveDescricao = (_a = resultModal.data.breveDescricao) !== null && _a !== void 0 ? _a : "";
                                        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_14__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
                                            const result = this.confirmAlert.confirmationAlert(this.alertController, 'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?').then(result => {
                                                if (result) {
                                                    this.salvarBreveDescricao(item);
                                                }
                                            });
                                        }
                                        else {
                                            this.salvarBreveDescricao(item);
                                        }
                                    }
                                });
                            });
                        }
                    },
                    {
                        text: 'Remover',
                        role: 'destructive',
                        handler: () => {
                            const result = this.confirmAlert.confirmationAlert(this.alertController, 'Deseja excluir o serviço <strong>' + item.nomeServico + '</strong>?').then(result => {
                                if (result) {
                                    this.excluirServico(item);
                                }
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    prosseguir() {
        if (this.prestadorServicos.length == 0) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].CustomToast(this.toastCtrl, "Favor adicionar serviço, antes de continuar", "danger", 4000);
            return false;
        }
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_14__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            this.router.navigate(['meu-cadastro-prestador']);
        }
        else {
            this.router.navigate(['prestador-cadastro-igreja-vinculo']);
        }
    }
    voltar() {
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_14__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            this.router.navigate(['meu-cadastro-prestador']);
        }
        else {
            this.router.navigate(['prestador-local-atendimento']);
        }
    }
    editarServico(item) {
    }
    ordenaServicos() {
        this.sortBy.transform(this.prestadorServicos, "nomeServico");
    }
};
PrestadorCadastroServicoPage.ctorParameters = () => [
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_7__["DominioServicoService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_9__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_11__["SortByPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_12__["ConfirmAlert"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PrestadorCadastroServicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-servico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-servico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-servico.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss")).default]
    })
], PrestadorCadastroServicoPage);



/***/ }),

/***/ "./src/app/providers/dominioServico/dominio-servico.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/providers/dominioServico/dominio-servico.service.ts ***!
  \*********************************************************************/
/*! exports provided: DominioServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoService", function() { return DominioServicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/dominioServico/dominio-servico-repository.service */ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts");



let DominioServicoService = class DominioServicoService {
    constructor(dominioServico) {
        this.dominioServico = dominioServico;
    }
    recuperaServicoAutoComplete(ev) {
        return this.dominioServico.recuperaServicoAutoComplete(ev);
    }
    recuperaDominioServico() {
        return this.dominioServico.recuperaDominioServico();
    }
    recuperaDominioServicoAtivo() {
        return this.dominioServico.recuperaDominioServicoAtivo();
    }
    adicionaServico(servico) {
        return this.dominioServico.add(servico, null);
    }
    excluirServico(servicoId) {
        return this.dominioServico.delete(servicoId);
    }
};
DominioServicoService.ctorParameters = () => [
    { type: src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoRepositoryService"] }
];
DominioServicoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoService);



/***/ }),

/***/ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/repository/dominioServico/dominio-servico-repository.service.ts ***!
  \*********************************************************************************/
/*! exports provided: DominioServicoRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoRepositoryService", function() { return DominioServicoRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let DominioServicoRepositoryService = class DominioServicoRepositoryService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    /**
     *
     */
    constructor() {
        super();
        this.servicoConverter = {
            toFirestore: function (servico) {
                return { servicoId: servico.servicoId,
                    nomeServico: servico.nomeServico };
            }
        };
        this._collectionName = "dominioServico";
    }
    recuperaServicoAutoComplete(query) {
        return new Promise((response, resp) => {
            const endText = query + '\uf8ff';
            this.db.collection("dominioServico")
                .orderBy("nomeServico")
                .limit(10)
                .where("nomeServico", ">=", query)
                .where("nomeServico", "<=", endText)
                // .startAt(query)
                // .endAt(endText)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id });
                });
                response(lst);
            })
                .catch((err) => {
                resp(err);
            });
        });
    }
    recuperaDominioServico() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico").orderBy("nomeServico").get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
    recuperaDominioServicoAtivo() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico")
                .where("deletado", "==", false)
                .orderBy("nomeServico")
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
};
DominioServicoRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoRepositoryService);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module-es2015.js.map