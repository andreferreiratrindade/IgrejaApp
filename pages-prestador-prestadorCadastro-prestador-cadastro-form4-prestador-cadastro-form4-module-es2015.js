(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-form4-prestador-cadastro-form4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Confirmar Dados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm4PageRoutingModule", function() { return PrestadorCadastroForm4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_form4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro-form4.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_form4_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroForm4Page"]
    }
];
let PrestadorCadastroForm4PageRoutingModule = class PrestadorCadastroForm4PageRoutingModule {
};
PrestadorCadastroForm4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroForm4PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm4PageModule", function() { return PrestadorCadastroForm4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_form4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-form4-routing.module */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4-routing.module.ts");
/* harmony import */ var _prestador_cadastro_form4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro-form4.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.ts");







let PrestadorCadastroForm4PageModule = class PrestadorCadastroForm4PageModule {
};
PrestadorCadastroForm4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_form4_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroForm4PageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_form4_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm4Page"]]
    })
], PrestadorCadastroForm4PageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8tZm9ybTQvcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm00LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm4Page", function() { return PrestadorCadastroForm4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PrestadorCadastroForm4Page = class PrestadorCadastroForm4Page {
    constructor() { }
    ngOnInit() {
    }
};
PrestadorCadastroForm4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-form4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-form4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-form4.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.page.scss")).default]
    })
], PrestadorCadastroForm4Page);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-form4-prestador-cadastro-form4-module-es2015.js.map