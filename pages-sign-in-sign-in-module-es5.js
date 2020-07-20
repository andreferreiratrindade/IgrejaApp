function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-in-content\">\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signInWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"email\"  formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.email\" [form]=\"signInForm\"\n      [nomeCampo]=\"'email'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Senha <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"password\"  formControlName=\"password\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.password\" [form]=\"signInForm\"\n      [nomeCampo]=\"'password'\"></app-mensagem-validacao>\n    </ion-list>\n\n    <ion-button class=\"sign-in-btn\" type=\"submit\" expand=\"block\">Entrar</ion-button>\n\n    <ion-row class=\"sign-up-btn-wrapper\">\n      <ion-button class=\"sign-up-btn\" fill=\"clear\" [routerLink]=\"['/sign-up']\" routerDirection=\"root\">\n        Cadastre-se\n      </ion-button>\n    </ion-row>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sign-in/sign-in.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
    \*************************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppPagesSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/sign-in/sign-in.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]
    }];

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sign-in/sign-in.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-in-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-in-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-in-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-in-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-in-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-in-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-in-content .sign-in-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-up-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-in-content .sign-up-btn-wrapper .sign-up-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURHSTtFQUNBLGtCQUFBO0FDREo7QURNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0pOO0FEU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1BSO0FEWUU7RUFDRSxnQkFBQTtBQ1ZKO0FEYUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURhSTtFQUNFLGtCQUFBO0FDWE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24taW4tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWduLWluLWJ0biB7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgfVxuXG4gIC5zaWduLXVwLWJ0bi13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2lnbi11cC1idG4ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnNpZ24taW4tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnNpZ24taW4tY29udGVudCAuYXV0aC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4uc2lnbi1pbi1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5vcHRpb25zLWRpdmlkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi1pbi1jb250ZW50IC5pbnB1dHMtbGlzdCAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5zaWduLWluLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ24taW4tY29udGVudCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbn1cbi5zaWduLWluLWNvbnRlbnQgLnNpZ24taW4tYnRuIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbi5zaWduLWluLWNvbnRlbnQgLnNpZ24tdXAtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZ24taW4tY29udGVudCAuc2lnbi11cC1idG4td3JhcHBlciAuc2lnbi11cC1idG4ge1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/sign-in/sign-in.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
    \***********************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppPagesSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");

    var SignInPage = /*#__PURE__*/function () {
      function SignInPage(angularFire, router, route, authService, loadControl, usuarioService, toast) {
        _classCallCheck(this, SignInPage);

        this.angularFire = angularFire;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.loadControl = loadControl;
        this.usuarioService = usuarioService;
        this.toast = toast;
        this.validation_messages = {
          'email': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }, {
            type: 'pattern',
            message: 'Favor inserir email válido.'
          }],
          'password': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }, {
            type: 'minlength',
            message: 'Senha deve ter no minimo 6 caracteres.'
          }]
        };
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.authService.signOut();
      }

      _createClass(SignInPage, [{
        key: "signInWithEmail",
        value: function signInWithEmail() {
          var _this = this;

          if (!this.signInForm.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.", this.toast);
            return false;
          }

          this.loadControl.showLoader();
          this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password']).then(function (user) {
            _this.usuarioService.RecuperaUsuarioPorUsuarioId(user.user.uid).then(function (usuario) {
              src_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].RecuperaInstancia().adicionaUsuario(usuario);

              _this.loadControl.hideLoader();

              _this.router.navigate([_this.returnUrl]);
            })["catch"](function (error) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Email ou senha incorreto(s)", _this.toast);

              _this.loadControl.hideLoader();
            });
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Email ou senha incorreto(s)", _this.toast);

            _this.loadControl.hideLoader();
          });
        }
      }]);

      return SignInPage;
    }();

    SignInPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }];
    };

    SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/pages/sign-in/sign-in.page.scss"))["default"]]
    })], SignInPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es5.js.map