function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-novo-novo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/novo/novo.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/novo/novo.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioNovoNovoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Cadastre-se</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpWithEmail()\">\n\n        <ion-item>\n          <ion-label position=\"floating\">Nome<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"text\" formControlName=\"nome\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position=\"floating\">Email<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\">\n          </ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position=\"floating\">Senha<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Confirmar Senha<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n        </ion-item>\n        <div class=\"ion-text-center\" style=\"margin-top: 20px;\">\n          <ion-button type=\"submit\" color=\"primary\" size=\"10\">Cadastrar</ion-button>\n        </div>\n        <div class=\"ion-text-center\" style=\"margin-top: 20px;\">\n          <ion-label class=\"\">ou</ion-label>\n        </div>\n        <div class=\"ion-text-center\" style=\"margin-top: 20px;\">\n\n          <ion-button color=\"light\" [routerLink]=\"['/sign-in']\" routerDirection=\"root\">\n            Já possui login?\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
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
          console.log(message);

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
  "./src/app/pages/usuario/novo/novo-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/usuario/novo/novo-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: NovoPageRoutingModule */

  /***/
  function srcAppPagesUsuarioNovoNovoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NovoPageRoutingModule", function () {
      return NovoPageRoutingModule;
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


    var _novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./novo.page */
    "./src/app/pages/usuario/novo/novo.page.ts");

    var routes = [{
      path: '',
      component: _novo_page__WEBPACK_IMPORTED_MODULE_3__["NovoPage"]
    }];

    var NovoPageRoutingModule = function NovoPageRoutingModule() {
      _classCallCheck(this, NovoPageRoutingModule);
    };

    NovoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NovoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/novo/novo.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/usuario/novo/novo.module.ts ***!
    \***************************************************/

  /*! exports provided: NovoPageModule */

  /***/
  function srcAppPagesUsuarioNovoNovoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NovoPageModule", function () {
      return NovoPageModule;
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


    var _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./novo-routing.module */
    "./src/app/pages/usuario/novo/novo-routing.module.ts");
    /* harmony import */


    var _novo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./novo.page */
    "./src/app/pages/usuario/novo/novo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var NovoPageModule = function NovoPageModule() {
      _classCallCheck(this, NovoPageModule);
    };

    NovoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovoPageRoutingModule"]],
      declarations: [_novo_page__WEBPACK_IMPORTED_MODULE_6__["NovoPage"]]
    })], NovoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/usuario/novo/novo.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/usuario/novo/novo.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsuarioNovoNovoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvdXN1YXJpby9ub3ZvL25vdm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL25vdm8vbm92by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXN1YXJpby9ub3ZvL25vdm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/novo/novo.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/usuario/novo/novo.page.ts ***!
    \*************************************************/

  /*! exports provided: NovoPage */

  /***/
  function srcAppPagesUsuarioNovoNovoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NovoPage", function () {
      return NovoPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");

    var NovoPage = /*#__PURE__*/function () {
      function NovoPage(angularFire, router, ngZone, authService, usuarioService, loadCtr, toastCtrl) {
        var _this = this;

        _classCallCheck(this, NovoPage);

        this.angularFire = angularFire;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.usuarioService = usuarioService;
        this.loadCtr = loadCtr;
        this.toastCtrl = toastCtrl;
        this.validation_messages = {
          'email': [{
            type: 'required',
            message: 'Email é de preenchimento obrigatório.'
          }, {
            type: 'pattern',
            message: 'Email inválido.'
          }],
          'password': [{
            type: 'required',
            message: 'Senha é de preenchimento obrigatório.'
          }, {
            type: 'minlength',
            message: 'Senha deverá conter pelo menos 6 caracteres'
          }],
          'nome': [{
            type: 'required',
            message: 'Nome é de preenchimento obrigatório.'
          }],
          'confirm_password': [{
            type: 'required',
            message: 'Confirmar Senha é de preenchimento obrigatório.'
          }]
        };
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
          confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
          nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
        }); // Get firebase authentication redirect result invoken when using signInWithRedirect()
        // signInWithRedirect() is only used when client is in web but not desktop

        this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
          if (result.user) {
            _this.redirectLoggedUserToProfilePage();
          } else if (result.error) {
            _this.submitError = result.error;
          }
        });
      } // Once the auth provider finished the authentication flow, and the auth redirect completes,
      // redirect the user to the profile page


      _createClass(NovoPage, [{
        key: "redirectLoggedUserToProfilePage",
        value: function redirectLoggedUserToProfilePage() {
          var _this2 = this;

          // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
          // That's why we need to wrap the router navigation call inside an ngZone wrapper
          this.loadCtr.hideLoader();
          this.ngZone.run(function () {
            _this2.router.navigate(['profile']);
          });
        }
      }, {
        key: "signUpWithEmail",
        value: function signUpWithEmail() {
          var _this3 = this;

          if (!this.signUpForm.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_10__["HandlerError"].handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.", this.toastCtrl);
            return false;
          }

          this.loadCtr.showLoader();
          this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password']).then(function (user) {
            // navigate to user profile
            var usuarioObj = {
              nome: _this3.signUpForm.value['nome'],
              usuarioId: user.user.uid,
              email: _this3.signUpForm.value['email']
            };

            _this3.usuarioService.AdicionarUsuario(usuarioObj).then(function (x) {
              _this3.loadCtr.hideLoader();

              _this3.signUpForm.reset();

              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].SucessoToast(_this3.toastCtrl);

              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_10__["HandlerError"].handler(error, _this3.toastCtrl);

              _this3.loadCtr.hideLoader();
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_10__["HandlerError"].handler(err, _this3.toastCtrl);

            _this3.loadCtr.hideLoader();
          });
        }
      }, {
        key: "facebookSignUp",
        value: function facebookSignUp() {
          var _this4 = this;

          this.authService.signInWithFacebook().then(function (result) {
            if (result.additionalUserInfo) {
              _this4.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this4.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {// Handle Errors here.
          });
        }
      }, {
        key: "googleSignUp",
        value: function googleSignUp() {
          var _this5 = this;

          this.authService.signInWithGoogle().then(function (result) {
            if (result.additionalUserInfo) {
              _this5.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Google Access Token. You can use it to access the Google API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this5.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {// Handle Errors here.
          });
        }
      }, {
        key: "twitterSignUp",
        value: function twitterSignUp() {
          var _this6 = this;

          this.authService.signInWithTwitter().then(function (result) {
            if (result.additionalUserInfo) {
              _this6.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Twitter Access Token. You can use it to access the Twitter API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this6.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {// Handle Errors here.
          });
        }
      }]);

      return NovoPage;
    }();

    NovoPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_7__["LoadingContr"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
      }];
    };

    NovoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-novo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./novo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/novo/novo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./novo.page.scss */
      "./src/app/pages/usuario/novo/novo.page.scss"))["default"]]
    })], NovoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-usuario-novo-novo-module-es5.js.map