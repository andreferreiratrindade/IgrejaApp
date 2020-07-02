function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-cadastro-email-prestador-cadastro-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroEmailPrestadorCadastroEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>prestador-cadastro-email</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: PrestadorCadastroEmailPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroEmailPrestadorCadastroEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroEmailPageRoutingModule", function () {
      return PrestadorCadastroEmailPageRoutingModule;
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


    var _prestador_cadastro_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro-email.page */
    "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_email_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroEmailPage"]
    }];

    var PrestadorCadastroEmailPageRoutingModule = function PrestadorCadastroEmailPageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroEmailPageRoutingModule);
    };

    PrestadorCadastroEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PrestadorCadastroEmailPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroEmailPrestadorCadastroEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroEmailPageModule", function () {
      return PrestadorCadastroEmailPageModule;
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


    var _prestador_cadastro_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-email-routing.module */
    "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro-email.page */
    "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.ts");

    var PrestadorCadastroEmailPageModule = function PrestadorCadastroEmailPageModule() {
      _classCallCheck(this, PrestadorCadastroEmailPageModule);
    };

    PrestadorCadastroEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroEmailPageRoutingModule"]],
      declarations: [_prestador_cadastro_email_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroEmailPage"]]
    })], PrestadorCadastroEmailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroEmailPrestadorCadastroEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY2FkYXN0cm8tZW1haWwvcHJlc3RhZG9yLWNhZGFzdHJvLWVtYWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PrestadorCadastroEmailPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroEmailPrestadorCadastroEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroEmailPage", function () {
      return PrestadorCadastroEmailPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PrestadorCadastroEmailPage = /*#__PURE__*/function () {
      // private loginProvider :LoginProvider;
      function PrestadorCadastroEmailPage(navCtrl, navParams, menuCtrl, loadingController, toastCtrl, storage, formBuilder) {
        _classCallCheck(this, PrestadorCadastroEmailPage);

        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.regData = this.formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(PrestadorCadastroEmailPage, [{
        key: "register",
        value: function register() {// let loader = this.loadingController
          //                 .create(LoadingContr.getLoadingContent());  
          // loader.present();

          /*.then((data: any) => {
            if(data.ok){
              this.loginProvider.saveData(data.obj);
              this.navCtrl.setRoot(MeuIgrejaPage);
            }
            loader.dismiss();
              })
          .catch(e => {
            HandlerError.handler(loader,e, this.toastCtrl);
          })*/
        }
      }]);

      return PrestadorCadastroEmailPage;
    }();

    PrestadorCadastroEmailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: Storage
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    PrestadorCadastroEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro-email',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro-email.page.scss */
      "./src/app/pages/prestador/prestador-cadastro-email/prestador-cadastro-email.page.scss"))["default"]]
    })], PrestadorCadastroEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestador-cadastro-email-prestador-cadastro-email-module-es5.js.map