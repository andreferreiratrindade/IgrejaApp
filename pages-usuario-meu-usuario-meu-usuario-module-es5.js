function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-meu-usuario-meu-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/meu-usuario/meu-usuario.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/meu-usuario/meu-usuario.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioMeuUsuarioMeuUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Meu Perfil</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Nome <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n\n        <ion-input type=\"text\" [(ngModel)]=\"usuario.nome\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Email \n        </ion-label>\n\n        <ion-input type=\"text\" [(ngModel)]=\"usuario.email\" disabled clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <!-- <ion-item class=\"input-item\">\n        <p>{{usuario.email}}</p>\n      </ion-item> -->\n\n      <ion-item *ngIf=\"perfis.length > 0\">\n        <ion-label position=\"floating\" disabled>Perfil\n        </ion-label>\n        <span *ngFor=\"let perfil of perfis\" type=\"text\"  disabled clearInput autocapitalize=\"off\">\n          {{perfil}}\n        </span>\n        \n      </ion-item>\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"success\" type=\"button\" (click)=\"salvar()\" clear>\n          <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n          </ion-icon>\n          Salvar\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/helpers/handlerError.ts":
  /*!*****************************************!*\
    !*** ./src/app/helpers/handlerError.ts ***!
    \*****************************************/

  /*! exports provided: HandlerError */

  /***/
  function srcAppHelpersHandlerErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandlerError", function () {
      return HandlerError;
    });
    /* harmony import */


    var _toastCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var HandlerError = /*#__PURE__*/function () {
      function HandlerError() {
        _classCallCheck(this, HandlerError);
      }

      _createClass(HandlerError, null, [{
        key: "handler",
        value: function handler(err, toastCtrl) {
          var data = err;
          var message = data.error ? data.error.message : data;

          _toastCustom__WEBPACK_IMPORTED_MODULE_0__["ToastCustom"].errorToast(message, toastCtrl);
        }
      }]);

      return HandlerError;
    }();
    /***/

  },

  /***/
  "./src/app/helpers/toastCustom.ts":
  /*!****************************************!*\
    !*** ./src/app/helpers/toastCustom.ts ***!
    \****************************************/

  /*! exports provided: ToastCustom */

  /***/
  function srcAppHelpersToastCustomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastCustom", function () {
      return ToastCustom;
    });

    var ToastCustom = /*#__PURE__*/function () {
      function ToastCustom() {
        _classCallCheck(this, ToastCustom);
      }

      _createClass(ToastCustom, null, [{
        key: "errorToast",
        value: function errorToast(msg, toastCtrl) {
          this.CustomToast(toastCtrl, msg, "danger", 4000);
        }
      }, {
        key: "SucessoToast",
        value: function SucessoToast(toastCtrl) {
          this.CustomToast(toastCtrl, "Operação realizada com sucesso.", "success", 4000);
        }
      }, {
        key: "CustomToast",
        value: function CustomToast(toastCtrl, message, color, duration) {
          toastCtrl.create({
            message: message,
            duration: duration,
            color: color
          }).then(function (x) {
            x.present();
          });
        }
      }]);

      return ToastCustom;
    }();
    /***/

  },

  /***/
  "./src/app/pages/usuario/meu-usuario/meu-usuario-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/usuario/meu-usuario/meu-usuario-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: MeuUsuarioPageRoutingModule */

  /***/
  function srcAppPagesUsuarioMeuUsuarioMeuUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuUsuarioPageRoutingModule", function () {
      return MeuUsuarioPageRoutingModule;
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


    var _meu_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./meu-usuario.page */
    "./src/app/pages/usuario/meu-usuario/meu-usuario.page.ts");

    var routes = [{
      path: '',
      component: _meu_usuario_page__WEBPACK_IMPORTED_MODULE_3__["MeuUsuarioPage"]
    }];

    var MeuUsuarioPageRoutingModule = function MeuUsuarioPageRoutingModule() {
      _classCallCheck(this, MeuUsuarioPageRoutingModule);
    };

    MeuUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MeuUsuarioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/meu-usuario/meu-usuario.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/usuario/meu-usuario/meu-usuario.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MeuUsuarioPageModule */

  /***/
  function srcAppPagesUsuarioMeuUsuarioMeuUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuUsuarioPageModule", function () {
      return MeuUsuarioPageModule;
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


    var _meu_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./meu-usuario-routing.module */
    "./src/app/pages/usuario/meu-usuario/meu-usuario-routing.module.ts");
    /* harmony import */


    var _meu_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./meu-usuario.page */
    "./src/app/pages/usuario/meu-usuario/meu-usuario.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var MeuUsuarioPageModule = function MeuUsuarioPageModule() {
      _classCallCheck(this, MeuUsuarioPageModule);
    };

    MeuUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meu_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeuUsuarioPageRoutingModule"]],
      declarations: [_meu_usuario_page__WEBPACK_IMPORTED_MODULE_6__["MeuUsuarioPage"]]
    })], MeuUsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/meu-usuario/meu-usuario.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/usuario/meu-usuario/meu-usuario.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsuarioMeuUsuarioMeuUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvdXN1YXJpby9tZXUtdXN1YXJpby9tZXUtdXN1YXJpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vbWV1LXVzdWFyaW8vbWV1LXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vbWV1LXVzdWFyaW8vbWV1LXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/meu-usuario/meu-usuario.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/usuario/meu-usuario/meu-usuario.page.ts ***!
    \***************************************************************/

  /*! exports provided: MeuUsuarioPage */

  /***/
  function srcAppPagesUsuarioMeuUsuarioMeuUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuUsuarioPage", function () {
      return MeuUsuarioPage;
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


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var MeuUsuarioPage = /*#__PURE__*/function () {
      function MeuUsuarioPage(loadingContr, toastCtrl, usuarioService, route) {
        _classCallCheck(this, MeuUsuarioPage);

        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.usuarioService = usuarioService;
        this.route = route;
        this.usuario = {};
        this.perfis = [];
      }

      _createClass(MeuUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.usuarioService.recuperaUsuarioLogado().then(function (result) {
              _this.usuario = result;
              debugger;

              if (result.perfis) {
                _this.perfis = result.perfis.map(function (y) {
                  return src_app_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PerfilUsuario.RecuperaDescricaoPorValor(y);
                });
              }
            });
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this2 = this;

          if (!this.usuario.nome) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
          }

          this.loadingContr.showLoader();
          this.usuarioService.atualizaUsuario(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, {
            nome: this.usuario.nome
          }).then(function (result) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_9__["ToastCustom"].SucessoToast(_this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(error, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }]);

      return MeuUsuarioPage;
    }();

    MeuUsuarioPage.ctorParameters = function () {
      return [{
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__["LoadingContr"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MeuUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meu-usuario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meu-usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/meu-usuario/meu-usuario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meu-usuario.page.scss */
      "./src/app/pages/usuario/meu-usuario/meu-usuario.page.scss"))["default"]]
    })], MeuUsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-usuario-meu-usuario-meu-usuario-module-es5.js.map