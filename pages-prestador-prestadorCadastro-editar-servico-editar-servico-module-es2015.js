(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-editar-servico-editar-servico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>editarServico</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditarServicoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarServicoPageRoutingModule", function() { return EditarServicoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-servico.page */ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.ts");




const routes = [
    {
        path: '',
        component: _editar_servico_page__WEBPACK_IMPORTED_MODULE_3__["EditarServicoPage"]
    }
];
let EditarServicoPageRoutingModule = class EditarServicoPageRoutingModule {
};
EditarServicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarServicoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditarServicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarServicoPageModule", function() { return EditarServicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editar_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-servico-routing.module */ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico-routing.module.ts");
/* harmony import */ var _editar_servico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-servico.page */ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.ts");







let EditarServicoPageModule = class EditarServicoPageModule {
};
EditarServicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarServicoPageRoutingModule"]
        ],
        declarations: [_editar_servico_page__WEBPACK_IMPORTED_MODULE_6__["EditarServicoPage"]]
    })
], EditarServicoPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9lZGl0YXItc2Vydmljby9lZGl0YXItc2Vydmljby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditarServicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarServicoPage", function() { return EditarServicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EditarServicoPage = class EditarServicoPage {
    constructor() { }
    ngOnInit() {
    }
};
EditarServicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-servico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-servico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-servico.page.scss */ "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.page.scss")).default]
    })
], EditarServicoPage);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-editar-servico-editar-servico-module-es2015.js.map