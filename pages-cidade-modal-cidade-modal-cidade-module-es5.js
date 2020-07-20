function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cidade-modal-cidade-modal-cidade-module"], {
  /***/
  "./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalCidadePageRoutingModule */

  /***/
  function srcAppPagesCidadeModalCidadeModalCidadeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCidadePageRoutingModule", function () {
      return ModalCidadePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modal_cidade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-cidade.page */
    "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");

    var routes = [{
      path: '',
      component: _modal_cidade_page__WEBPACK_IMPORTED_MODULE_3__["ModalCidadePage"]
    }];

    var ModalCidadePageRoutingModule = function ModalCidadePageRoutingModule() {
      _classCallCheck(this, ModalCidadePageRoutingModule);
    };

    ModalCidadePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalCidadePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cidade/modal-cidade/modal-cidade.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.module.ts ***!
    \******************************************************************/

  /*! exports provided: ModalCidadePageModule */

  /***/
  function srcAppPagesCidadeModalCidadeModalCidadeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCidadePageModule", function () {
      return ModalCidadePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_cidade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-cidade-routing.module */
    "./src/app/pages/cidade/modal-cidade/modal-cidade-routing.module.ts");
    /* harmony import */


    var _modal_cidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-cidade.page */
    "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");

    var ModalCidadePageModule = function ModalCidadePageModule() {
      _classCallCheck(this, ModalCidadePageModule);
    };

    ModalCidadePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_cidade_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCidadePageRoutingModule"]],
      declarations: [_modal_cidade_page__WEBPACK_IMPORTED_MODULE_6__["ModalCidadePage"]]
    })], ModalCidadePageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-cidade-modal-cidade-modal-cidade-module-es5.js.map