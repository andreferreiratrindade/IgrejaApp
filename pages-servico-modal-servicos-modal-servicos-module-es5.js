function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servico-modal-servicos-modal-servicos-module"], {
  /***/
  "./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ModalServicosPageRoutingModule */

  /***/
  function srcAppPagesServicoModalServicosModalServicosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalServicosPageRoutingModule", function () {
      return ModalServicosPageRoutingModule;
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


    var _modal_servicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");

    var routes = [{
      path: '',
      component: _modal_servicos_page__WEBPACK_IMPORTED_MODULE_3__["ModalServicosPage"]
    }];

    var ModalServicosPageRoutingModule = function ModalServicosPageRoutingModule() {
      _classCallCheck(this, ModalServicosPageRoutingModule);
    };

    ModalServicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalServicosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/servico/modal-servicos/modal-servicos.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/servico/modal-servicos/modal-servicos.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ModalServicosPageModule */

  /***/
  function srcAppPagesServicoModalServicosModalServicosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalServicosPageModule", function () {
      return ModalServicosPageModule;
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


    var _modal_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-servicos-routing.module */
    "./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts");
    /* harmony import */


    var _modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");

    var ModalServicosPageModule = function ModalServicosPageModule() {
      _classCallCheck(this, ModalServicosPageModule);
    };

    ModalServicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalServicosPageRoutingModule"]],
      declarations: [_modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ModalServicosPage"]]
    })], ModalServicosPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-servico-modal-servicos-modal-servicos-module-es5.js.map