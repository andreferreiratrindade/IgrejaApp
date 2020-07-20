function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n     Cadastre-se\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-up-content\">\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Nome<ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"text\" formControlName=\"nome\" clearInput autocapitalize=\"off\" ></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.nome\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'nome'\" ></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Email<ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.email\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'email'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Senha<ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.password\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'password'\"></app-mensagem-validacao>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Confirmar Senha<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.confirm_password\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'confirm_password'\"></app-mensagem-validacao>\n\n    </ion-list>\n\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" >Cadastrar</ion-button>\n\n    <ion-row class=\"sign-in-btn-wrapper\">\n      <ion-button class=\"sign-in-btn\" fill=\"clear\" [routerLink]=\"['/sign-in']\" routerDirection=\"root\">\n        Já possui login?\n      </ion-button>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
    \*************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppPagesSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/pages/sign-up/sign-up.page.ts");
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
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]
    }];

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-up-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-up-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-up-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-up-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-up-content .sign-up-btn {\n  margin: 16px 0px;\n}\n.sign-up-content .sign-in-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-up-content .sign-in-btn-wrapper .sign-in-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURHSTtFQUNBLGtCQUFBO0FDREo7QURNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0pOO0FEU0U7RUFDRSxnQkFBQTtBQ1BKO0FEVUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDUko7QURVSTtFQUNFLGtCQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tdXAtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG5cbiAgLnNpZ24tdXAtYnRuIHtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuICB9XG5cbiAgLnNpZ24taW4tYnRuLXdyYXBwZXIge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zaWduLWluLWJ0biB7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIuc2lnbi11cC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG59XG4uc2lnbi11cC1jb250ZW50IC5hdXRoLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbn1cbi5zaWduLXVwLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLm9wdGlvbnMtZGl2aWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWduLXVwLWNvbnRlbnQgLmlucHV0cy1saXN0IC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLnNpZ24tdXAtY29udGVudCAuc2lnbi11cC1idG4ge1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuLnNpZ24tdXAtY29udGVudCAuc2lnbi1pbi1idG4td3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lnbi11cC1jb250ZW50IC5zaWduLWluLWJ0bi13cmFwcGVyIC5zaWduLWluLWJ0biB7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
    \***********************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppPagesSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(angularFire, router, ngZone, authService, usuarioService, loadCtr, toastCtrl) {
        var _this = this;

        _classCallCheck(this, SignUpPage);

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


      _createClass(SignUpPage, [{
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

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
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

    SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/pages/sign-up/sign-up.page.scss"))["default"]]
    })], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map