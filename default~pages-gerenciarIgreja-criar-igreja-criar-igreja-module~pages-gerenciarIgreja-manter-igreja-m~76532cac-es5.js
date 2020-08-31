function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-gerenciarIgreja-criar-igreja-criar-igreja-module~pages-gerenciarIgreja-manter-igreja-m~76532cac"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\" (click)=\"closeModal()\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngIf=\"igrejaId\">Mantem Igreja</ion-card-title>\n      <ion-card-title *ngIf=\"!igrejaId\">Adicionar Igreja</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"formData\" (ngSubmit)=\"salvarIgreja()\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Nome Igreja <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"text\" formControlName=\"nomeIgreja\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n        <app-mensagem-validacao [validation_messages_object]=\"validation_messages.nomeIgreja\" [form]=\"formData\"\n          [nomeCampo]=\"'nomeIgreja'\"></app-mensagem-validacao>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Cep <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n        <div class=\"ion-text-center\">\n          <ion-button color=\"primary\" size=\"small\" (click)=\"buscarEnderecoPorCEP()\">\n            <ion-icon name=\"search-outline\" style=\"margin-right: 10px;\"></ion-icon>\n            <ion-label>Buscar Endereço</ion-label>\n          </ion-button>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"ion-text-wrap\" *ngIf=\"formData.value.logradouro\">\n            <p>{{formData.value.logradouro}}, {{formData.value.bairro}} - {{formData.value.cidade}} /\n              {{formData.value.uf}}</p>\n          </ion-label>\n\n          <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cep\" [form]=\"formData\"\n            [nomeCampo]=\"'cep'\"></app-mensagem-validacao>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">Email do administrador da igreja <ion-text\n              color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"emailAdministrador\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n        <div class=\"ion-text-center\">\n          <ion-button color=\"primary\" size=\"small\" (click)=\"buscarUsuarioAdministradorIgreja()\">\n            <ion-icon name=\"search-outline\" style=\"margin-right: 10px;\"></ion-icon>\n            <ion-label>Buscar Administrador</ion-label>\n          </ion-button>\n        </div>\n        <ion-item class=\"input-item\">\n          <ion-label class=\"ion-text-wrap\" *ngIf=\"formData.value.administradorUsuarioId\">\n            <p>{{formData.value.emailAdministrador}}</p>\n            <p>{{formData.value.nomeAdministrador}}</p>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n          <ion-button color=\"success\" type=\"submit\" clear>\n            <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n            </ion-icon>\n            Salvar\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
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
  "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL2NyaWFyLWlncmVqYS9jcmlhci1pZ3JlamEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nZXJlbmNpYXJJZ3JlamEvY3JpYXItaWdyZWphL2NyaWFyLWlncmVqYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL2NyaWFyLWlncmVqYS9jcmlhci1pZ3JlamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts ***!
    \*************************************************************************/

  /*! exports provided: CriarIgrejaPage */

  /***/
  function srcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarIgrejaPage", function () {
      return CriarIgrejaPage;
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


    var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");

    var CriarIgrejaPage = /*#__PURE__*/function () {
      function CriarIgrejaPage(buscarCEPService, igrejaService, router, toastCtrl, loadingControll, ngZone, usuarioService, modalController, navParams) {
        _classCallCheck(this, CriarIgrejaPage);

        this.buscarCEPService = buscarCEPService;
        this.igrejaService = igrejaService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingControll = loadingControll;
        this.ngZone = ngZone;
        this.usuarioService = usuarioService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.igrejaEntity = {};
        this.validation_messages = {
          'nomeIgreja': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'cep': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'nomeAdministrador': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'administradorUsuarioId': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'logradouro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'emailAdministrador': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'nomeAdministrador': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'administradorUsuarioId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
        this.igrejaId = this.navParams.data.igrejaId;
      }

      _createClass(CriarIgrejaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.igrejaId) {
            this.igrejaService.RecuperaIgrejaPorIgrejaId(this.igrejaId).then(function (result) {
              _this.formData.controls['administradorUsuarioId'].setValue(result.administradorUsuarioId);

              _this.formData.controls['bairro'].setValue(result.bairro);

              _this.formData.controls['cep'].setValue(result.cep);

              _this.formData.controls['cidade'].setValue(result.cidade);

              _this.formData.controls['emailAdministrador'].setValue(result.emailAdministrador);

              _this.formData.controls['logradouro'].setValue(result.logradouro);

              _this.formData.controls['uf'].setValue(result.uf);

              _this.formData.controls['nomeAdministrador'].setValue(result.nomeAdministrador);

              _this.formData.controls['nomeIgreja'].setValue(result.nomeIgreja);
            })["catch"](function (error) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this.toastCtrl);

              _this.loadingControll.hideLoader();
            });
          }
        }
      }, {
        key: "buscarEnderecoPorCEP",
        value: function buscarEnderecoPorCEP() {
          var _this2 = this;

          this.formData.controls['cidade'].setValue(null);
          this.formData.controls['bairro'].setValue(null);
          this.formData.controls['uf'].setValue(null);
          this.formData.controls['logradouro'].setValue(null);

          if (!this.formData.value.cep || this.formData.value.cep.toString().length != "8") {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          this.loadingControll.showLoader();
          this.buscarCEPService.buscarCEP(this.formData.value.cep).then(function (x) {
            if (x && !x.erro) {
              _this2.formData.controls['cidade'].setValue(x.localidade);

              _this2.formData.controls['bairro'].setValue(x.bairro);

              _this2.formData.controls['uf'].setValue(x.uf);

              _this2.formData.controls['logradouro'].setValue(x.logradouro);

              _this2.loadingControll.hideLoader();
            } else {
              _this2.loadingControll.hideLoader();

              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", _this2.toastCtrl);
            }
          })["catch"](function (x) {
            _this2.loadingControll.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(x, _this2.toastCtrl);
          });
        }
      }, {
        key: "salvarIgreja",
        value: function salvarIgreja() {
          var _this3 = this;

          if (!this.formData.value.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          if (!this.formData.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
          }

          this.loadingControll.showLoader();
          this.igrejaEntity = this.formData.value;
          this.igrejaEntity.administradores = [this.formData.value.administradorUsuarioId];
          this.igrejaService.AdicionarNovaIgreja(this.igrejaEntity).then(function () {
            _this3.usuarioService.AdicionaPerfilAoUsuario(_this3.formData.value.administradorUsuarioId, src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PerfilUsuario.AdministradorIgreja).then(function () {
              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(_this3.toastCtrl);

              _this3.loadingControll.hideLoader();

              _this3.closeModal();
            })["catch"](function (error) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this3.toastCtrl);

              _this3.loadingControll.hideLoader();
            });
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this3.toastCtrl);

            _this3.loadingControll.hideLoader();
          });
        }
      }, {
        key: "buscarUsuarioAdministradorIgreja",
        value: function buscarUsuarioAdministradorIgreja() {
          var _this4 = this;

          this.loadingControll.showLoader();
          this.usuarioService.RecuperaUsuarioPorEmail(this.formData.value.emailAdministrador).then(function (result) {
            if (result.length > 0) {
              _this4.formData.controls['administradorUsuarioId'].setValue(result[0].data.usuarioId);

              _this4.formData.controls['emailAdministrador'].setValue(result[0].data.email);

              _this4.formData.controls['nomeAdministrador'].setValue(result[0].data.nome);
            } else {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Nenhum usuário encontrado com este e-mail.", _this4.toastCtrl);
            }

            _this4.loadingControll.hideLoader();
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this4.toastCtrl);

            _this4.loadingControll.hideLoader();
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss(null, 'cancel');
        }
      }]);

      return CriarIgrejaPage;
    }();

    CriarIgrejaPage.ctorParameters = function () {
      return [{
        type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__["BuscarCEPService"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__["IgrejaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__["LoadingContr"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]
      }];
    };

    CriarIgrejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-criar-igreja',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./criar-igreja.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./criar-igreja.page.scss */
      "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss"))["default"]]
    })], CriarIgrejaPage);
    /***/
  },

  /***/
  "./src/app/providers/igreja/igreja.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/providers/igreja/igreja.service.ts ***!
    \****************************************************/

  /*! exports provided: IgrejaService */

  /***/
  function srcAppProvidersIgrejaIgrejaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgrejaService", function () {
      return IgrejaService;
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


    var src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/igreja/igreja-rep.service */
    "./src/app/repository/igreja/igreja-rep.service.ts");

    var IgrejaService = /*#__PURE__*/function () {
      function IgrejaService(igrejaRepService) {
        _classCallCheck(this, IgrejaService);

        this.igrejaRepService = igrejaRepService;
      }

      _createClass(IgrejaService, [{
        key: "RecuperaTodasAsIgrejas",
        value: function RecuperaTodasAsIgrejas() {
          return this.igrejaRepService.RecuperaTodasAsIgrejas();
        }
      }, {
        key: "RecuperaIgrejaPorIgrejaId",
        value: function RecuperaIgrejaPorIgrejaId(igrejaId) {
          return this.igrejaRepService.RecuperaIgrejaPorIgrejaId(igrejaId);
        }
      }, {
        key: "RecuperaIgrejaPorAdministrador",
        value: function RecuperaIgrejaPorAdministrador(usuarioId) {
          return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
        }
      }, {
        key: "AdicionarNovaIgreja",
        value: function AdicionarNovaIgreja(obj) {
          return this.igrejaRepService.AdicionaNovaIgreja(obj, obj.igrejaId);
        }
      }, {
        key: "RecuperaIgrejasPorCidade",
        value: function RecuperaIgrejasPorCidade(cidade) {
          return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
        }
      }, {
        key: "RecuperaIgrejasPorEndereco",
        value: function RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
          return this.igrejaRepService.RecuperaIgrejasPorEndereco(uf, cidade, bairro);
        }
      }, {
        key: "RecuperaNomeIgreja",
        value: function RecuperaNomeIgreja(igrejas) {
          return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
        }
      }]);

      return IgrejaService;
    }();

    IgrejaService.ctorParameters = function () {
      return [{
        type: src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__["IgrejaRepService"]
      }];
    };

    IgrejaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IgrejaService);
    /***/
  },

  /***/
  "./src/app/repository/igreja/igreja-rep.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/repository/igreja/igreja-rep.service.ts ***!
    \*********************************************************/

  /*! exports provided: IgrejaRepService */

  /***/
  function srcAppRepositoryIgrejaIgrejaRepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgrejaRepService", function () {
      return IgrejaRepService;
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


    var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../repository-interface/Repository-Base */
    "./src/app/repository/repository-interface/Repository-Base.ts");

    var IgrejaRepService = /*#__PURE__*/function (_repository_interface) {
      _inherits(IgrejaRepService, _repository_interface);

      var _super = _createSuper(IgrejaRepService);

      function IgrejaRepService() {
        var _this5;

        _classCallCheck(this, IgrejaRepService);

        _this5 = _super.call(this);
        _this5._collectionName = "igreja";
        return _this5;
      }

      _createClass(IgrejaRepService, [{
        key: "RecuperaIgrejasPorEndereco",
        value: function RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            var query = _this6.db.collection('igreja').where("uf", "==", uf);

            if (cidade) {
              query = query.where("cidade", "==", cidade);
            }

            if (bairro) {
              query = query.where("bairro", "==", bairro);
            }

            query.get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AdicionaNovaIgreja",
        value: function AdicionaNovaIgreja(item, id) {
          var _this7 = this;

          var idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
          item.id = idTemp;
          item.igrejaId = idTemp;
          return new Promise(function (resolve, reject) {
            _this7.db.collection(_this7._collectionName).doc(idTemp).set(Object.assign({}, item), {
              merge: true
            }).then(function (obj) {
              resolve(obj);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "RecuperaIgrejaPorAdministrador",
        value: function RecuperaIgrejaPorAdministrador(usuarioId) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            _this8.db.collection('igreja').where("administradores", "array-contains", usuarioId).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaIgrejasPorCidade",
        value: function RecuperaIgrejasPorCidade(cidade) {
          return this.find({
            elemento: "cidade",
            tipoComparacao: "==",
            comparacao: cidade
          });
        }
      }, {
        key: "RecuperaNomeIgreja",
        value: function RecuperaNomeIgreja(igrejas) {
          // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
          return this.find({
            elemento: "id",
            tipoComparacao: "in",
            comparacao: igrejas
          });
        }
      }, {
        key: "RecuperaTodasAsIgrejas",
        value: function RecuperaTodasAsIgrejas() {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.db.collection(_this9._collectionName).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaIgrejaPorIgrejaId",
        value: function RecuperaIgrejaPorIgrejaId(igrejaId) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.db.collection(_this10._collectionName).doc(igrejaId).get().then(function (result) {
              resolve(result.data());
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return IgrejaRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IgrejaRepService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-gerenciarIgreja-criar-igreja-criar-igreja-module~pages-gerenciarIgreja-manter-igreja-m~76532cac-es5.js.map