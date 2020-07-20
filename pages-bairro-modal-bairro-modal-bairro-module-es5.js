function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bairro-modal-bairro-modal-bairro-module"], {
  /***/
  "./src/app/pages/bairro/modal-bairro/modal-bairro-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/bairro/modal-bairro/modal-bairro-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalBairroPageRoutingModule */

  /***/
  function srcAppPagesBairroModalBairroModalBairroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBairroPageRoutingModule", function () {
      return ModalBairroPageRoutingModule;
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


    var _modal_bairro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-bairro.page */
    "./src/app/pages/bairro/modal-bairro/modal-bairro.page.ts");

    var routes = [{
      path: '',
      component: _modal_bairro_page__WEBPACK_IMPORTED_MODULE_3__["ModalBairroPage"]
    }];

    var ModalBairroPageRoutingModule = function ModalBairroPageRoutingModule() {
      _classCallCheck(this, ModalBairroPageRoutingModule);
    };

    ModalBairroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalBairroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bairro/modal-bairro/modal-bairro.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/bairro/modal-bairro/modal-bairro.module.ts ***!
    \******************************************************************/

  /*! exports provided: ModalBairroPageModule */

  /***/
  function srcAppPagesBairroModalBairroModalBairroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBairroPageModule", function () {
      return ModalBairroPageModule;
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


    var _modal_bairro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-bairro-routing.module */
    "./src/app/pages/bairro/modal-bairro/modal-bairro-routing.module.ts");
    /* harmony import */


    var _modal_bairro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-bairro.page */
    "./src/app/pages/bairro/modal-bairro/modal-bairro.page.ts");

    var ModalBairroPageModule = function ModalBairroPageModule() {
      _classCallCheck(this, ModalBairroPageModule);
    };

    ModalBairroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_bairro_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalBairroPageRoutingModule"]],
      declarations: [_modal_bairro_page__WEBPACK_IMPORTED_MODULE_6__["ModalBairroPage"]]
    })], ModalBairroPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-bairro-modal-bairro-modal-bairro-module-es5.js.map