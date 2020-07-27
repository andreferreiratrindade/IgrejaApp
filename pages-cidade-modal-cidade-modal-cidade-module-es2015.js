(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cidade-modal-cidade-modal-cidade-module"],{

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

/***/ "./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ModalCidadePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCidadePageRoutingModule", function() { return ModalCidadePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_cidade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-cidade.page */ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");




const routes = [
    {
        path: '',
        component: _modal_cidade_page__WEBPACK_IMPORTED_MODULE_3__["ModalCidadePage"]
    }
];
let ModalCidadePageRoutingModule = class ModalCidadePageRoutingModule {
};
ModalCidadePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalCidadePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cidade/modal-cidade/modal-cidade.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.module.ts ***!
  \******************************************************************/
/*! exports provided: ModalCidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCidadePageModule", function() { return ModalCidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_cidade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-cidade-routing.module */ "./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts");
/* harmony import */ var _modal_cidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-cidade.page */ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");







let ModalCidadePageModule = class ModalCidadePageModule {
};
ModalCidadePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_cidade_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCidadePageRoutingModule"]
        ],
        declarations: [_modal_cidade_page__WEBPACK_IMPORTED_MODULE_6__["ModalCidadePage"]]
    })
], ModalCidadePageModule);



/***/ }),

/***/ "./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpZGFkZS9tb2RhbC1jaWRhZGUvbW9kYWwtY2lkYWRlLnBhZ2Uuc2NzcyJ9 */");

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





let ModalCidadePage = class ModalCidadePage {
    constructor(loadingContr, toastCtrl, prestadorService, modalController, navParams) {
        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.prestadorService = prestadorService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.dominioCidade = [];
        this.itens = [];
        this.dominioCidade = this.navParams.data.cidades;
        this.recuperaItens(null);
        // this.prestadorService.RecuperaCidadePrestadorDisponiveis( this.navParams.data.uf)
        //   .then(result => {
        //     this.dominioCidade = result;
        //     this.itens = result;
        //     this.loadingContr.hideLoader();
        //   }).catch(x => {
        //     this.loadingContr.hideLoader();
        //     HandlerError.handler(x, this.toastCtrl);
        //   });
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



/***/ })

}]);
//# sourceMappingURL=pages-cidade-modal-cidade-modal-cidade-module-es2015.js.map