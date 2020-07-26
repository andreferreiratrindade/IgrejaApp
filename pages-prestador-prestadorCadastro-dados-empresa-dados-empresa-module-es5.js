function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroDadosEmpresaDadosEmpresaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Dados da Empresa\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <form [formGroup]=\"formulario\">\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Razão Social <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n\n        <ion-input type=\"text\" formControlName=\"razaoSocial\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Telefone<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n\n        <ion-input type=\"number\" [brmasker]=\"{phone: true}\" formControlName=\"telefone\" clearInput autocapitalize=\"off\">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Cep<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"number\" maxlength=\"8\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n\n\n      <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarEnderecoPorCEP()\" size=\"6\">\n        <ion-label>Buscar Endereço</ion-label>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-chip>\n      <ion-item class=\"input-item\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"formulario.value.logradouro\">\n          <p>{{formulario.value.logradouro}}, {{formulario.value.bairro}} - {{formulario.value.cidade}} /\n            {{formulario.value.uf}}</p>\n        </ion-label>\n      </ion-item>\n    </form>\n    </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-align-self-end\">\n          <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\">Prosseguir</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
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
  "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DadosEmpresaPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroDadosEmpresaDadosEmpresaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DadosEmpresaPageRoutingModule", function () {
      return DadosEmpresaPageRoutingModule;
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


    var _dados_empresa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dados-empresa.page */
    "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts");

    var routes = [{
      path: '',
      component: _dados_empresa_page__WEBPACK_IMPORTED_MODULE_3__["DadosEmpresaPage"]
    }];

    var DadosEmpresaPageRoutingModule = function DadosEmpresaPageRoutingModule() {
      _classCallCheck(this, DadosEmpresaPageRoutingModule);
    };

    DadosEmpresaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DadosEmpresaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DadosEmpresaPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroDadosEmpresaDadosEmpresaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DadosEmpresaPageModule", function () {
      return DadosEmpresaPageModule;
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


    var _dados_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dados-empresa-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts");
    /* harmony import */


    var _dados_empresa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dados-empresa.page */
    "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var DadosEmpresaPageModule = function DadosEmpresaPageModule() {
      _classCallCheck(this, DadosEmpresaPageModule);
    };

    DadosEmpresaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dados_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DadosEmpresaPageRoutingModule"]],
      declarations: [_dados_empresa_page__WEBPACK_IMPORTED_MODULE_6__["DadosEmpresaPage"]]
    })], DadosEmpresaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroDadosEmpresaDadosEmpresaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9kYWRvcy1lbXByZXNhL2RhZG9zLWVtcHJlc2EucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts ***!
    \***************************************************************************************/

  /*! exports provided: DadosEmpresaPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroDadosEmpresaDadosEmpresaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DadosEmpresaPage", function () {
      return DadosEmpresaPage;
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


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var DadosEmpresaPage = /*#__PURE__*/function () {
      function DadosEmpresaPage(usuarioService, router, toastCtrl, ngZone, prestadorService, buscarCEPService, loadingContr) {
        var _this = this;

        _classCallCheck(this, DadosEmpresaPage);

        this.usuarioService = usuarioService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.prestadorService = prestadorService;
        this.buscarCEPService = buscarCEPService;
        this.loadingContr = loadingContr;
        this.prestador = {};
        this.validation_messages = {
          'telefone': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'igrejaId': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'cep': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'razaoSocial': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'logradouro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'razaoSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
        this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
          _this.prestador = result;

          if (result) {
            _this.formulario.controls['telefone'].setValue(result.telefone);

            _this.formulario.controls['cep'].setValue(result.cep);

            _this.formulario.controls['uf'].setValue(result.uf);

            _this.formulario.controls['cidade'].setValue(result.cidade);

            _this.formulario.controls['bairro'].setValue(result.bairro);

            _this.formulario.controls['logradouro'].setValue(result.logradouro);

            _this.formulario.controls['razaoSocial'].setValue(result.razaoSocial);
          }
        })["catch"](function (err) {
          src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, _this.toastCtrl);

          _this.loadingContr.hideLoader();
        });
      }

      _createClass(DadosEmpresaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarEnderecoPorCEP",
        value: function buscarEnderecoPorCEP() {
          var _this2 = this;

          if (!this.formulario.value['cep'] || this.formulario.value['cep'].toString().length != "8") {
            this.formulario.value.cidade = null;
            this.formulario.value.bairro = null;
            this.formulario.value.uf = null;
            this.formulario.value.logradouro = null;
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          this.loadingContr.showLoader();
          this.buscarCEPService.buscarCEP(this.formulario.value['cep']).then(function (x) {
            if (x && !x.erro) {
              _this2.formulario.controls["cidade"].setValue(x.localidade);

              _this2.formulario.controls["bairro"].setValue(x.bairro);

              _this2.formulario.controls["uf"].setValue(x.uf);

              _this2.formulario.controls["logradouro"].setValue(x.logradouro);
            } else {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", _this2.toastCtrl);
            }

            _this2.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this2.igrejas = [];

            _this2.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(x, _this2.toastCtrl);
          });
        }
      }, {
        key: "prosseguir",
        value: function prosseguir() {
          var _this3 = this;

          if (!this.formulario.value.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          if (!this.formulario.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
          }

          this.loadingContr.showLoader();
          var obj = this.formulario.value;
          obj.usuarioId = src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId;
          obj.situacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.CadastroLocalAtendimento;
          this.prestadorService.AdicionarNovoPrestador(obj).then(function () {
            _this3.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(_this3.toastCtrl);

            _this3.ngZone.run(function () {
              _this3.router.navigate(['prestador-local-atendimento']);
            });
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(error, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }]);

      return DadosEmpresaPage;
    }();

    DadosEmpresaPage.ctorParameters = function () {
      return [{
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"]
      }, {
        type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__["BuscarCEPService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"]
      }];
    };

    DadosEmpresaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dados-empresa',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dados-empresa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dados-empresa.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss"))["default"]]
    })], DadosEmpresaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module-es5.js.map