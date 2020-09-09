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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-MeuCadastroPrestador-meu-cadastro-prestador-meu-cadastro-prestador-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroMeuCadastroPrestadorMeuCadastroPrestadorMeuCadastroPrestadorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Meu Cadastro Prestador\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Dados Empresa</h3>\n\n\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Nome</p>\n        <h3>{{usuario.nome}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Email</p>\n        <h3>{{usuario.email}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Situação</p>\n        <h3>{{prestador.descricaoSituacaoPrestador}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Razão Social</p>\n        <h3>{{prestador.razaoSocial}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Telefone</p>\n        <h3>{{prestador.telefone}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Endereço</p>\n        <h3>{{prestador.logradouro}}, {{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"redirect('dados-empresa')\">Editar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Local Atendimento</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item *ngFor=\"let item of prestador.locaisAtendimento; let i = index\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{item.cidade}} / {{item.uf}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"redirect('prestador-local-atendimento')\">Editar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Serviços</h3>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-item *ngFor=\"let item of prestadorServicos\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{item.nomeServico}}</h2>\n        <h3>{{item.breveDescricao}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"redirect('prestador-cadastro-servico')\">Editar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Igreja Vinculo</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <h3>{{prestador.nomeIgreja}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"redirect('prestador-cadastro-igreja-vinculo')\">Editar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n";
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
  "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador-routing.module.ts":
  /*!****************************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador-routing.module.ts ***!
    \****************************************************************************************************************************************/

  /*! exports provided: MeuCadastroPrestadorPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroMeuCadastroPrestadorMeuCadastroPrestadorMeuCadastroPrestadorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuCadastroPrestadorPageRoutingModule", function () {
      return MeuCadastroPrestadorPageRoutingModule;
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


    var _meu_cadastro_prestador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./meu-cadastro-prestador.page */
    "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.ts");

    var routes = [{
      path: '',
      component: _meu_cadastro_prestador_page__WEBPACK_IMPORTED_MODULE_3__["MeuCadastroPrestadorPage"]
    }];

    var MeuCadastroPrestadorPageRoutingModule = function MeuCadastroPrestadorPageRoutingModule() {
      _classCallCheck(this, MeuCadastroPrestadorPageRoutingModule);
    };

    MeuCadastroPrestadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MeuCadastroPrestadorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.module.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.module.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: MeuCadastroPrestadorPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroMeuCadastroPrestadorMeuCadastroPrestadorMeuCadastroPrestadorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuCadastroPrestadorPageModule", function () {
      return MeuCadastroPrestadorPageModule;
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


    var _meu_cadastro_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./meu-cadastro-prestador-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador-routing.module.ts");
    /* harmony import */


    var _meu_cadastro_prestador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./meu-cadastro-prestador.page */
    "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.ts");

    var MeuCadastroPrestadorPageModule = function MeuCadastroPrestadorPageModule() {
      _classCallCheck(this, MeuCadastroPrestadorPageModule);
    };

    MeuCadastroPrestadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meu_cadastro_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeuCadastroPrestadorPageRoutingModule"]],
      declarations: [_meu_cadastro_prestador_page__WEBPACK_IMPORTED_MODULE_6__["MeuCadastroPrestadorPage"]]
    })], MeuCadastroPrestadorPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroMeuCadastroPrestadorMeuCadastroPrestadorMeuCadastroPrestadorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9NZXVDYWRhc3Ryb1ByZXN0YWRvci9tZXUtY2FkYXN0cm8tcHJlc3RhZG9yL21ldS1jYWRhc3Ryby1wcmVzdGFkb3IucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: MeuCadastroPrestadorPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroMeuCadastroPrestadorMeuCadastroPrestadorMeuCadastroPrestadorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeuCadastroPrestadorPage", function () {
      return MeuCadastroPrestadorPage;
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


    var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");

    var MeuCadastroPrestadorPage = /*#__PURE__*/function () {
      function MeuCadastroPrestadorPage(prestadorService, dominioServicoService, loadingContr, ngZone, router, usuarioService, toastCtrl, igrejaService) {
        _classCallCheck(this, MeuCadastroPrestadorPage);

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

      _createClass(MeuCadastroPrestadorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // override the route reuse strategy
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"] && evt.url == "/meu-cadastro-prestador") {
              _this.prestador = {};
              _this.prestadorUsuario = {};
              _this.prestadorServicos = [];
              _this.usuario = {};

              _this.loadingContr.showLoader();

              _this.usuario = src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario();

              _this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
                _this.prestador = result;
                _this.prestador.descricaoSituacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(_this.prestador.situacaoPrestador);

                _this.igrejaService.RecuperaNomeIgreja([_this.prestador.igrejaId]).then(function (result) {
                  _this.prestador.nomeIgreja = result[0].data.nomeIgreja;

                  _this.loadingContr.hideLoader();
                })["catch"](function (err) {
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, _this.toastCtrl);

                  _this.loadingContr.hideLoader();
                });
              })["catch"](function (err) {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, _this.toastCtrl);

                _this.loadingContr.hideLoader();
              });

              _this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
                _this.prestadorServicos = result;

                _this.dominioServicoService.recuperaDominioServico().then(function (x) {
                  _this.prestadorServicos.map(function (listItem) {
                    var _a;

                    listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                    listItem.nomeServico = x.filter(function (y) {
                      return y.servicoId == listItem.servicoId;
                    })[0].nomeServico;
                    return listItem;
                  });

                  _this.loadingContr.hideLoader();
                })["catch"](function (err) {
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, _this.toastCtrl);

                  _this.loadingContr.hideLoader();
                });
              })["catch"](function (err) {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, _this.toastCtrl);

                _this.loadingContr.hideLoader();
              }); // trick the Router into believing it's last link wasn't previously loaded


              _this.router.navigated = false; // if you need to scroll back to top, here is the right place

              window.scrollTo(0, 0);
            }
          });
        }
      }, {
        key: "redirect",
        value: function redirect(url) {
          this.router.navigate([url]);
        }
      }]);

      return MeuCadastroPrestadorPage;
    }();

    MeuCadastroPrestadorPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_8__["PrestadorService"]
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_7__["DominioServicoService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__["IgrejaService"]
      }];
    };

    MeuCadastroPrestadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meu-cadastro-prestador',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meu-cadastro-prestador.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meu-cadastro-prestador.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.page.scss"))["default"]]
    })], MeuCadastroPrestadorPage);
    /***/
  },

  /***/
  "./src/app/providers/dominioServico/dominio-servico.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/providers/dominioServico/dominio-servico.service.ts ***!
    \*********************************************************************/

  /*! exports provided: DominioServicoService */

  /***/
  function srcAppProvidersDominioServicoDominioServicoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DominioServicoService", function () {
      return DominioServicoService;
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


    var src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/dominioServico/dominio-servico-repository.service */
    "./src/app/repository/dominioServico/dominio-servico-repository.service.ts");

    var DominioServicoService = /*#__PURE__*/function () {
      function DominioServicoService(dominioServico) {
        _classCallCheck(this, DominioServicoService);

        this.dominioServico = dominioServico;
      }

      _createClass(DominioServicoService, [{
        key: "recuperaServicoAutoComplete",
        value: function recuperaServicoAutoComplete(ev) {
          return this.dominioServico.recuperaServicoAutoComplete(ev);
        }
      }, {
        key: "recuperaDominioServico",
        value: function recuperaDominioServico() {
          return this.dominioServico.recuperaDominioServico();
        }
      }, {
        key: "recuperaDominioServicoAtivo",
        value: function recuperaDominioServicoAtivo() {
          return this.dominioServico.recuperaDominioServicoAtivo();
        }
      }, {
        key: "adicionaServico",
        value: function adicionaServico(servico) {
          servico.nomeServico_insensitive = servico.nomeServico.toLowerCase();
          return this.dominioServico.add(servico, null);
        }
      }, {
        key: "excluirServico",
        value: function excluirServico(servicoId) {
          return this.dominioServico["delete"](servicoId);
        }
      }]);

      return DominioServicoService;
    }();

    DominioServicoService.ctorParameters = function () {
      return [{
        type: src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoRepositoryService"]
      }];
    };

    DominioServicoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DominioServicoService);
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
  "./src/app/repository/dominioServico/dominio-servico-repository.service.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/repository/dominioServico/dominio-servico-repository.service.ts ***!
    \*********************************************************************************/

  /*! exports provided: DominioServicoRepositoryService */

  /***/
  function srcAppRepositoryDominioServicoDominioServicoRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DominioServicoRepositoryService", function () {
      return DominioServicoRepositoryService;
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

    var DominioServicoRepositoryService = /*#__PURE__*/function (_repository_interface) {
      _inherits(DominioServicoRepositoryService, _repository_interface);

      var _super = _createSuper(DominioServicoRepositoryService);

      /**
       *
       */
      function DominioServicoRepositoryService() {
        var _this2;

        _classCallCheck(this, DominioServicoRepositoryService);

        _this2 = _super.call(this);
        _this2.servicoConverter = {
          toFirestore: function toFirestore(servico) {
            return {
              servicoId: servico.servicoId,
              nomeServico: servico.nomeServico
            };
          }
        };
        _this2._collectionName = "dominioServico";
        return _this2;
      }

      _createClass(DominioServicoRepositoryService, [{
        key: "recuperaServicoAutoComplete",
        value: function recuperaServicoAutoComplete(query) {
          var _this3 = this;

          return new Promise(function (response, resp) {
            query = query.toLowerCase();
            var endText = query + "\uF8FF";

            _this3.db.collection("dominioServico").orderBy("nomeServico_insensitive").limit(10).startAt(query).endAt(endText) // .where("nomeServico",">=",query)
            // .where("nomeServico","<=",endText)
            // .startAt(query)
            // .endAt(endText)
            .get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  nomeServico: doc.data().nomeServico,
                  servicoId: doc.id
                });
              });
              response(lst);
            })["catch"](function (err) {
              resp(err);
            });
          });
        }
      }, {
        key: "recuperaDominioServico",
        value: function recuperaDominioServico() {
          var _this4 = this;

          return new Promise(function (response, resp) {
            _this4.db.collection("dominioServico").orderBy("nomeServico").get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  nomeServico: doc.data().nomeServico,
                  servicoId: doc.id,
                  deletado: doc.data().deletado
                });
              });
              response(lst);
            });
          });
        }
      }, {
        key: "recuperaDominioServicoAtivo",
        value: function recuperaDominioServicoAtivo() {
          var _this5 = this;

          return new Promise(function (response, resp) {
            _this5.db.collection("dominioServico").where("deletado", "==", false).orderBy("nomeServico").get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  nomeServico: doc.data().nomeServico,
                  servicoId: doc.id,
                  deletado: doc.data().deletado
                });
              });
              response(lst);
            });
          });
        }
      }]);

      return DominioServicoRepositoryService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    DominioServicoRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DominioServicoRepositoryService);
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

    var IgrejaRepService = /*#__PURE__*/function (_repository_interface2) {
      _inherits(IgrejaRepService, _repository_interface2);

      var _super2 = _createSuper(IgrejaRepService);

      function IgrejaRepService() {
        var _this6;

        _classCallCheck(this, IgrejaRepService);

        _this6 = _super2.call(this);
        _this6._collectionName = "igreja";
        return _this6;
      }

      _createClass(IgrejaRepService, [{
        key: "RecuperaIgrejasPorEndereco",
        value: function RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            var query = _this7.db.collection('igreja').where("uf", "==", uf);

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
          var _this8 = this;

          var idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
          item.id = idTemp;
          item.igrejaId = idTemp;
          return new Promise(function (resolve, reject) {
            _this8.db.collection(_this8._collectionName).doc(idTemp).set(Object.assign({}, item), {
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
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.db.collection('igreja').where("administradores", "array-contains", usuarioId).get().then(function (result) {
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
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.db.collection(_this10._collectionName).get().then(function (result) {
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
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            _this11.db.collection(_this11._collectionName).doc(igrejaId).get().then(function (result) {
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
//# sourceMappingURL=pages-prestador-prestadorCadastro-MeuCadastroPrestador-meu-cadastro-prestador-meu-cadastro-prestador-module-es5.js.map