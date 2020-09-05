(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-UF-modal-uf-modal-uf-module"],{

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

/***/ "./src/app/pages/UF/modal-uf/modal-uf-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/UF/modal-uf/modal-uf-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ModalUFPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUFPageRoutingModule", function() { return ModalUFPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_uf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-uf.page */ "./src/app/pages/UF/modal-uf/modal-uf.page.ts");




const routes = [
    {
        path: '',
        component: _modal_uf_page__WEBPACK_IMPORTED_MODULE_3__["ModalUFPage"]
    }
];
let ModalUFPageRoutingModule = class ModalUFPageRoutingModule {
};
ModalUFPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalUFPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/UF/modal-uf/modal-uf.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/UF/modal-uf/modal-uf.module.ts ***!
  \******************************************************/
/*! exports provided: ModalUFPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUFPageModule", function() { return ModalUFPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_uf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-uf-routing.module */ "./src/app/pages/UF/modal-uf/modal-uf-routing.module.ts");
/* harmony import */ var _modal_uf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-uf.page */ "./src/app/pages/UF/modal-uf/modal-uf.page.ts");







let ModalUFPageModule = class ModalUFPageModule {
};
ModalUFPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_uf_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalUFPageRoutingModule"]
        ],
        declarations: [_modal_uf_page__WEBPACK_IMPORTED_MODULE_6__["ModalUFPage"]]
    })
], ModalUFPageModule);



/***/ }),

/***/ "./src/app/pages/UF/modal-uf/modal-uf.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/UF/modal-uf/modal-uf.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1VGL21vZGFsLXVmL21vZGFsLXVmLnBhZ2Uuc2NzcyJ9 */");

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



/***/ })

}]);
//# sourceMappingURL=pages-UF-modal-uf-modal-uf-module-es2015.js.map