(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-cadastro-prestador-cadastro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-navbar>\r\n    <ion-title>Novo registro</ion-title>\r\n  </ion-navbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n\r\n  <ion-grid>\r\n    <ion-row justify-content-around>\r\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center>\r\n        <form [formGroup]=\"regData\" (ngSubmit)=\"register()\">\r\n\r\n          <ion-item>\r\n            <ion-label floating>Nome:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>E-mail:</ion-label>\r\n            <ion-input type=\"email\" formControlName=\"login\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Senha:</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Confirma senha:</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\r\n          </ion-item>\r\n\r\n          <button margin-top ion-button type=\"submit\" [disabled]=\"!regData.valid\">Registrar</button>\r\n\r\n        </form>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrestadorCadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPageRoutingModule", function() { return PrestadorCadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro.page */ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroPage"]
    }
];
let PrestadorCadastroPageRoutingModule = class PrestadorCadastroPageRoutingModule {
};
PrestadorCadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PrestadorCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPageModule", function() { return PrestadorCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-routing.module */ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts");
/* harmony import */ var _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro.page */ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts");







let PrestadorCadastroPageModule = class PrestadorCadastroPageModule {
};
PrestadorCadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroPageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroPage"]]
    })
], PrestadorCadastroPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PrestadorCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPage", function() { return PrestadorCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PrestadorCadastroPage = class PrestadorCadastroPage {
    constructor() { }
    ngOnInit() {
    }
};
PrestadorCadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro.page.scss */ "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss")).default]
    })
], PrestadorCadastroPage);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestador-cadastro-prestador-cadastro-module-es2015.js.map