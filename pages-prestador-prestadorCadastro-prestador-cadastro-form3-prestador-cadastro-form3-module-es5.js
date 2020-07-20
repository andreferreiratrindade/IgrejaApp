function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-form3-prestador-cadastro-form3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm3PrestadorCadastroForm3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Prestador - Finalizar\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Dados Iniciais\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Nome</p>\n        <h3>{{usuario.nome}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Email</p>\n        <h3>{{usuario.email}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Razão Social</p>\n        <h3>{{prestador.razaoSocial}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Telefone</p>\n        <h3>{{prestador.telefone}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Endereço</p>\n        <h3>{{prestador.logradouro}}, {{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Igreja Vinculo</p>\n        <h3>{{prestador.nomeIgreja}}</h3>\n        <h3>{{prestador.staMembro}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Serviços\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of prestadorServicos\">\n      <ion-label class=\"ion-text-wrap\">\n        <h1>{{item.nomeServico}}</h1>\n        <h3>{{item.breveDescricao}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-button class=\"btn-success\" type=\"button\" expand=\"block\" (click)=\"finalizar()\">Finalizar</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3-routing.module.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3-routing.module.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm3PageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm3PrestadorCadastroForm3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm3PageRoutingModule", function () {
      return PrestadorCadastroForm3PageRoutingModule;
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


    var _prestador_cadastro_form3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro-form3.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_form3_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroForm3Page"]
    }];

    var PrestadorCadastroForm3PageRoutingModule = function PrestadorCadastroForm3PageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroForm3PageRoutingModule);
    };

    PrestadorCadastroForm3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroForm3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm3PageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm3PrestadorCadastroForm3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm3PageModule", function () {
      return PrestadorCadastroForm3PageModule;
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


    var _prestador_cadastro_form3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-form3-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_form3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro-form3.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.ts");

    var PrestadorCadastroForm3PageModule = function PrestadorCadastroForm3PageModule() {
      _classCallCheck(this, PrestadorCadastroForm3PageModule);
    };

    PrestadorCadastroForm3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_form3_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroForm3PageRoutingModule"]],
      declarations: [_prestador_cadastro_form3_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm3Page"]]
    })], PrestadorCadastroForm3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm3PrestadorCadastroForm3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8tZm9ybTMvcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm3Page */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm3PrestadorCadastroForm3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm3Page", function () {
      return PrestadorCadastroForm3Page;
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


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");

    var PrestadorCadastroForm3Page = /*#__PURE__*/function () {
      function PrestadorCadastroForm3Page(prestadorService, dominioServicoService, loadingContr, ngZone, router, usuarioService, toastCtrl, igrejaService) {
        _classCallCheck(this, PrestadorCadastroForm3Page);

        this.prestadorService = prestadorService;
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.ngZone = ngZone;
        this.router = router;
        this.usuarioService = usuarioService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.prestador = {};
        this.prestadorUsuario = {};
        this.prestadorServicos = [];
        this.usuario = {};
      }

      _createClass(PrestadorCadastroForm3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.usuario = src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario();
          this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
            _this.prestador = result;
            _this.prestador.nomeSituacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(_this.prestador.situacaoPrestador);

            _this.igrejaService.RecuperaNomeIgreja([_this.prestador.igrejas[0].igrejaId]).then(function (result) {
              _this.prestador.nomeIgreja = result[0].data.nomeIgreja;
              _this.prestador.staMembro = result[0].data.staMembro;

              _this.loadingContr.hideLoader();
            })["catch"](function (err) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(err, _this.toastCtrl);

              _this.loadingContr.hideLoader();
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
          this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
            _this.prestadorServicos = result;

            _this.dominioServicoService.recuperaDominioServico().then(function (x) {
              _this.prestadorServicos.map(function (listItem) {
                var _a;

                listItem.expanded = false;
                listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                listItem.nomeServico = x.filter(function (y) {
                  return y.servicoId == listItem.servicoId;
                })[0].nomeServico;
                return listItem;
              });

              _this.loadingContr.hideLoader();
            })["catch"](function (err) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(err, _this.toastCtrl);

              _this.loadingContr.hideLoader();
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          var _this2 = this;

          this.loadingContr.showLoader();
          var obj = {
            situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao
          };
          this.prestadorService.AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(function () {
            _this2.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_8__["ToastCustom"].CustomToast(_this2.toastCtrl, "Operação realizadao com sucesso. Sua solicitação foi encaminhada para o administrador da igreja.", "success", 5000);

            _this2.ngZone.run(function () {
              _this2.router.navigate(['home']);
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_6__["HandlerError"].handler(err, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }]);

      return PrestadorCadastroForm3Page;
    }();

    PrestadorCadastroForm3Page.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"]
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_4__["DominioServicoService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_5__["LoadingContr"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_12__["IgrejaService"]
      }];
    };

    PrestadorCadastroForm3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro-form3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro-form3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro-form3.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.page.scss"))["default"]]
    })], PrestadorCadastroForm3Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-form3-prestador-cadastro-form3-module-es5.js.map