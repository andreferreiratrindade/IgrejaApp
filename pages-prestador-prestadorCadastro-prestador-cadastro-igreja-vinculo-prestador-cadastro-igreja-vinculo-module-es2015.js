(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\" (click)=\"closeModal()\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>UF</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar type=\"text\"  debounce = 1\n  placeholder=\"Pesquisar\"  \n  animated (ionChange)=\"recuperaItens($event)\" #searchbar></ion-searchbar>\n<ion-list>\n    <ion-item *ngFor=\"let item of itens\" (click)=\"selecionar(item)\" detail>\n      <ion-label>{{item.nome}} / {{item.sigla}}</ion-label>\n    </ion-item>\n</ion-list>\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\" (click)=\"closeModal()\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cidades</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar type=\"text\"  debounce = 1\n  placeholder=\"Pesquisar\" #searchbar\n  animated (ionChange)=\"recuperaItens($event)\"></ion-searchbar>\n<ion-list>\n    <ion-item *ngFor=\"let item of itens\" (click)=\"selecionar(item)\" detail>\n      <ion-label>{{item}}</ion-label>\n    </ion-item>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cadastro Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar *ngIf=\"prestador.situacaoPrestador == 1\" color=\"secondary\" value=\"0.80\" buffer=\"1\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Igreja Vinculo</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <form [formGroup]=\"formulario\">\n\n        <ion-item (click)=\"abrirModalUF()\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>UF<ion-text color=\"danger\">*</ion-text>\n\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n\n                <ion-note color=\"primary\"> {{formulario.value.ufApresentacao}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n\n        <ion-item (click)=\"abrirModalCidade()\" [disabled]=\"!formulario.value.uf\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Cidade<ion-text color=\"danger\">*</ion-text>\n\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"12\">\n\n                <ion-note color=\"primary\"> {{formulario.value.cidade}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n        <ion-item (click)=\"abrirModalIgreja()\" [disabled]=\"!formulario.value.cidade\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Igreja<ion-text color=\"danger\">*</ion-text>\n\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n\n                <ion-note color=\"primary\"> {{formulario.value.nomeIgreja}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n       \n        <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n          <ion-button color=\"medium\" type=\"button\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n            clear>\n            <ion-icon name=\"chevron-back-outline\" style=\"margin-right:10px;\"></ion-icon>Voltar\n          </ion-button>\n          <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\" clear>\n            <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n            </ion-icon>\n            {{prestador.situacaoPrestador == 1 ? \"Prosseguir\" : \"Salvar\"}}\n \n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/UF/modal-uf/modal-uf.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/UF/modal-uf/modal-uf.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvVUYvbW9kYWwtdWYvbW9kYWwtdWYucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9VRi9tb2RhbC11Zi9tb2RhbC11Zi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVUYvbW9kYWwtdWYvbW9kYWwtdWYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/UF/modal-uf/modal-uf.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/UF/modal-uf/modal-uf.page.ts ***!
  \****************************************************/
/*! exports provided: ModalUFPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUFPage", function() { return ModalUFPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");





let ModalUFPage = class ModalUFPage {
    constructor(loadingContr, toastCtrl, prestadorService, modalController, navParams) {
        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.prestadorService = prestadorService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.dominioUF = [];
        this.itens = [];
        this.dominioUF = this.navParams.data.UFs;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 800);
    }
    ngOnInit() {
        this.recuperaItens(null);
    }
    recuperaItens(ev) {
        let val = "";
        if (ev && ev.target) {
            val = ev.target.value;
        }
        if (val && val.trim() !== '') {
            this.itens = this.dominioUF.filter(item => {
                return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.sigla.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            this.itens = [...this.dominioUF];
        }
    }
    closeModal() {
        this.modalController.dismiss(null, 'cancel');
    }
    selecionar(item) {
        this.modalController.dismiss(item, 'success');
    }
};
ModalUFPage.ctorParameters = () => [
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__["LoadingContr"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar')
], ModalUFPage.prototype, "inputElement", void 0);
ModalUFPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-uf',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-uf.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-uf.page.scss */ "./src/app/pages/UF/modal-uf/modal-uf.page.scss")).default]
    })
], ModalUFPage);



/***/ }),

/***/ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvY2lkYWRlL21vZGFsLWNpZGFkZS9tb2RhbC1jaWRhZGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaWRhZGUvbW9kYWwtY2lkYWRlL21vZGFsLWNpZGFkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2lkYWRlL21vZGFsLWNpZGFkZS9tb2RhbC1jaWRhZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts ***!
  \****************************************************************/
/*! exports provided: ModalCidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCidadePage", function() { return ModalCidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/sortBy/sort-by.pipe */ "./src/app/pipes/sortBy/sort-by.pipe.ts");






let ModalCidadePage = class ModalCidadePage {
    constructor(loadingContr, toastCtrl, prestadorService, modalController, sortBy, navParams) {
        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.prestadorService = prestadorService;
        this.modalController = modalController;
        this.sortBy = sortBy;
        this.navParams = navParams;
        this.dominioCidade = [];
        this.itens = [];
        this.dominioCidade = this.navParams.data.cidades.sort();
        this.recuperaItens(null);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 800);
    }
    recuperaItens(ev) {
        let val = "";
        if (ev && ev.target) {
            val = ev.target.value;
        }
        if (val && val.trim() !== '') {
            this.itens = this.dominioCidade.filter(item => { return item.toLowerCase().indexOf(val.toLowerCase()) > -1; });
        }
        else {
            this.itens = [...this.dominioCidade];
        }
        this.itens = this.itens.slice(0, 10);
    }
    closeModal() {
        this.modalController.dismiss(null, 'cancel');
    }
    selecionar(item) {
        this.modalController.dismiss(item, 'success');
    }
};
ModalCidadePage.ctorParameters = () => [
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__["LoadingContr"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_5__["SortByPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar')
], ModalCidadePage.prototype, "inputElement", void 0);
ModalCidadePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-cidade',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-cidade.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-cidade.page.scss */ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss")).default]
    })
], ModalCidadePage);



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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1pZ3JlamEtdmluY3Vsby9wcmVzdGFkb3ItY2FkYXN0cm8taWdyZWphLXZpbmN1bG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLWlncmVqYS12aW5jdWxvL3ByZXN0YWRvci1jYWRhc3Ryby1pZ3JlamEtdmluY3Vsby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1pZ3JlamEtdmluY3Vsby9wcmVzdGFkb3ItY2FkYXN0cm8taWdyZWphLXZpbmN1bG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

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
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/helpers/confirmAlert */ "./src/app/helpers/confirmAlert.ts");

















let PrestadorCadastroIgrejaVinculoPage = class PrestadorCadastroIgrejaVinculoPage {
    constructor(prestadorService, toastCtrl, loadingContr, router, modalCtrl, igrejaService, buscarCEPService, confirmAlert, alertController) {
        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.loadingContr = loadingContr;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.igrejaService = igrejaService;
        this.buscarCEPService = buscarCEPService;
        this.confirmAlert = confirmAlert;
        this.alertController = alertController;
        this.locaisAtendimentos = [];
        this.prestador = {};
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
            ]))
        });
    }
    ngOnInit() {
        this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_12__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(resultPrestador => {
            this.prestador = resultPrestador;
            this.igrejaService.RecuperaNomeIgreja([resultPrestador.igrejaId])
                .then(resultIgreja => {
                let igreja = resultIgreja[0];
                if (igreja) {
                    this.formulario.controls['uf'].setValue(igreja.data.uf);
                    this.formulario.controls['cidade'].setValue(igreja.data.cidade);
                    this.formulario.controls['nomeIgreja'].setValue(igreja.data.nomeIgreja);
                    this.formulario.controls['igrejaId'].setValue(igreja.id);
                    this.formulario.controls['ufApresentacao'].setValue(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ListagemUF.RecuperaDescricaoPorUF(igreja.data.uf));
                }
            });
        });
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
                if (resultModal.data) {
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
        // Caso situação do prestador serja diferente de Em edição, sistema deverá alertar usuário sobre a alteração da situação
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            const result = this.confirmAlert.confirmationAlert(this.alertController, 'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?').then(result => {
                if (result) {
                    this.atualizaSituacaoPrestador(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao, 'meu-cadastro-prestador');
                }
            });
        }
        else {
            this.atualizaSituacaoPrestador(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao, 'prestador-cadastro-finalizar');
        }
    }
    atualizaSituacaoPrestador(situacaoPrestador, redirectURL) {
        this.loadingContr.showLoader();
        let obj = {
            igrejaId: this.formulario.value.igrejaId,
            situacaoPrestador: situacaoPrestador
        };
        this.prestadorService
            .AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_12__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_13__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.router.navigate([redirectURL]);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_14__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    voltar() {
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            this.router.navigate(['meu-cadastro-prestador']);
        }
        else {
            this.router.navigate(['prestador-cadastro-servico']);
        }
    }
};
PrestadorCadastroIgrejaVinculoPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_5__["LoadingContr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_15__["IgrejaService"] },
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_3__["BuscarCEPService"] },
    { type: src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_16__["ConfirmAlert"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PrestadorCadastroIgrejaVinculoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-igreja-vinculo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-igreja-vinculo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-igreja-vinculo.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.page.scss")).default]
    })
], PrestadorCadastroIgrejaVinculoPage);



/***/ }),

/***/ "./src/app/providers/igreja/igreja.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/igreja/igreja.service.ts ***!
  \****************************************************/
/*! exports provided: IgrejaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaService", function() { return IgrejaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/igreja/igreja-rep.service */ "./src/app/repository/igreja/igreja-rep.service.ts");



let IgrejaService = class IgrejaService {
    constructor(igrejaRepService) {
        this.igrejaRepService = igrejaRepService;
    }
    RecuperaTodasAsIgrejas() {
        return this.igrejaRepService.RecuperaTodasAsIgrejas();
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return this.igrejaRepService.RecuperaIgrejaPorIgrejaId(igrejaId);
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
    }
    AdicionarNovaIgreja(obj) {
        return this.igrejaRepService.AdicionaNovaIgreja(obj, obj.igrejaId);
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return this.igrejaRepService.RecuperaIgrejasPorEndereco(uf, cidade, bairro);
    }
    RecuperaNomeIgreja(igrejas) {
        return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
    }
};
IgrejaService.ctorParameters = () => [
    { type: src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__["IgrejaRepService"] }
];
IgrejaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaService);



/***/ }),

/***/ "./src/app/repository/igreja/igreja-rep.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/repository/igreja/igreja-rep.service.ts ***!
  \*********************************************************/
/*! exports provided: IgrejaRepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaRepService", function() { return IgrejaRepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let IgrejaRepService = class IgrejaRepService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    constructor() {
        super();
        this._collectionName = "igreja";
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return new Promise((resolve, reject) => {
            let query = this.db.collection('igreja')
                .where("uf", "==", uf);
            if (cidade) {
                query = query.where("cidade", "==", cidade);
            }
            if (bairro) {
                query = query.where("bairro", "==", bairro);
            }
            query.get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    AdicionaNovaIgreja(item, id) {
        let idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
        item.id = idTemp;
        item.igrejaId = idTemp;
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .doc(idTemp)
                .set(Object.assign({}, item), { merge: true })
                .then((obj) => {
                resolve(obj);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return new Promise((resolve, reject) => {
            this.db.collection('igreja')
                .where("administradores", "array-contains", usuarioId)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.find({ elemento: "cidade", tipoComparacao: "==", comparacao: cidade });
    }
    RecuperaNomeIgreja(igrejas) {
        // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
        return this.find({ elemento: "id", tipoComparacao: "in", comparacao: igrejas });
    }
    RecuperaTodasAsIgrejas() {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName).doc(igrejaId)
                .get()
                .then((result) => {
                resolve(result.data());
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
};
IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaRepService);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module-es2015.js.map