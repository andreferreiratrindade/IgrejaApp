function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-consultar-prestador-consultar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Consultar Prestador\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n\n    <form [formGroup]=\"formulario\" (ngSubmit)=\"ConsultarPrestador()\">\n      <ion-item (click)=\"abrirModalServicos()\" detail>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Serviço</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-note color=\"primary\">{{formulario.value.nomeServico}}</ion-note>\n              <ion-note color=\"primary\" *ngIf=\"!formulario.value.nomeServico\">Todos</ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item (click)=\"abrirModalUF()\" detail>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>UF<ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-note color=\"primary\"> {{formulario.value.ufApresentacao}}</ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item (click)=\"abrirModalCidade()\" detail [disabled]=\"!formulario.value.uf\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Cidade<ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-note color=\"primary\"> {{formulario.value.cidade}}</ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item (click)=\"abrirModalIgreja()\" detail [disabled]=\"!formulario.value.cidade\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Igreja\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-note color=\"primary\"> {{formulario.value.nomeIgreja}}</ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-button class=\"primary\" type=\"submit\" expand=\"block\">Pesquisar</ion-button>\n\n    </form>\n\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of prestadores\"  class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>{{item.nome}} </h3>\n\n\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-item (click)=\"ligarTelefone(item.telefone)\">\n      <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n      <ion-label color=\"primary\" class=\"ion-no-border\">\n        <h2>{{item.telefone}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"ion-no-border\">\n      <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.nomeIgreja}} </h2>\n      </ion-label>\n      <ion-note color=\"tertiary\" slot=\"end\" *ngIf=\"item.staMembro\">\n        membro\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"golf-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.bairro}} - {{item.cidade}} / {{item.uf}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"detalhes(item.usuarioId)\">Detalhes</ion-button>\n        </ion-col>\n        <!-- <ion-col size=\"4\">\n            <ion-button size=\"small\" (click)=\"compartilhar()\" >\n              <ion-icon name=\"share-social\"></ion-icon></ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n\n            <ion-button size=\"small\" (click)=\"adicionarFavorito(item.usuarioId)\" fill=\"outline\">\n              <ion-icon name=\"star-outline\"></ion-icon></ion-button>\n          </ion-col> -->\n      </ion-row>\n    </ion-grid>\n    <!-- </ion-card-content> -->\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PrestadorConsultarPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPageRoutingModule", function () {
      return PrestadorConsultarPageRoutingModule;
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


    var _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-consultar.page */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts");

    var routes = [{
      path: '',
      component: _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorConsultarPage"]
    }];

    var PrestadorConsultarPageRoutingModule = function PrestadorConsultarPageRoutingModule() {
      _classCallCheck(this, PrestadorConsultarPageRoutingModule);
    };

    PrestadorConsultarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorConsultarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PrestadorConsultarPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPageModule", function () {
      return PrestadorConsultarPageModule;
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


    var _prestador_consultar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-consultar-routing.module */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts");
    /* harmony import */


    var _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-consultar.page */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PrestadorConsultarPageModule = function PrestadorConsultarPageModule() {
      _classCallCheck(this, PrestadorConsultarPageModule);
    };

    PrestadorConsultarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_consultar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorConsultarPageRoutingModule"]],
      declarations: [_prestador_consultar_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorConsultarPage"]]
    })], PrestadorConsultarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY29uc3VsdGFyL3ByZXN0YWRvci1jb25zdWx0YXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: PrestadorConsultarPage */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPage", function () {
      return PrestadorConsultarPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var _servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../servico/modal-servicos/modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");
    /* harmony import */


    var _bairro_modal_bairro_modal_bairro_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../bairro/modal-bairro/modal-bairro.page */
    "./src/app/pages/bairro/modal-bairro/modal-bairro.page.ts");
    /* harmony import */


    var _cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../cidade/modal-cidade/modal-cidade.page */
    "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts");
    /* harmony import */


    var _UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../UF/modal-uf/modal-uf.page */
    "./src/app/pages/UF/modal-uf/modal-uf.page.ts");
    /* harmony import */


    var _igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../igreja/modal-igreja/modal-igreja.page */
    "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_providers_favorito_favorito_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/providers/favorito/favorito.service */
    "./src/app/providers/favorito/favorito.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _visualizar_prestador_visualizar_prestador_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../visualizar-prestador/visualizar-prestador.page */
    "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.ts");

    var PrestadorConsultarPage = /*#__PURE__*/function () {
      function PrestadorConsultarPage(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr, dominioServicoService, router, modalCtrl, callNumber, favoritoService) {
        _classCallCheck(this, PrestadorConsultarPage);

        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.usuarioService = usuarioService;
        this.loadingContr = loadingContr;
        this.dominioServicoService = dominioServicoService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.callNumber = callNumber;
        this.favoritoService = favoritoService;
        this.validation_messages = {
          'uf': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'servicoId': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'nomeServico': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'ufApresentacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.prestadores = [];
      }

      _createClass(PrestadorConsultarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.dominioServicoService.recuperaDominioServico().then(function (result) {
            _this.servicos = result;

            _this.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this.toastCtrl);
          });
          this.prestadorService.RecuperaUfPrestadorDisponiveis().then(function (result) {
            _this.UfList = result.map(function (x) {
              return src_app_utils_constants__WEBPACK_IMPORTED_MODULE_18__["Constants"].ListagemUF.RecuperaObjetoPorUF(x);
            });

            _this.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this.toastCtrl);
          });
        }
      }, {
        key: "buscarCidades",
        value: function buscarCidades(uf) {
          var _this2 = this;

          this.loadingContr.showLoader();
          this.formulario.controls['cidade'].setValue(null);
          this.cidadeList = [];
          this.prestadorService.RecuperaCidadePrestadorDisponiveis(uf).then(function (result) {
            _this2.cidadeList = result;

            _this2.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this2.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this2.toastCtrl);
          });
        }
      }, {
        key: "ConsultarPrestador",
        value: function ConsultarPrestador() {
          var _this3 = this;

          if (!this.formularioValido()) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__["ToastCustom"].CustomToast(this.toastCtrl, src_app_utils_constants__WEBPACK_IMPORTED_MODULE_18__["Constants"].Mensagens.CamposObrigatorios, "danger", 4000);
            return false;
          }

          this.prestadores = [];
          this.loadingContr.showLoader();
          this.prestadorService.RecuperaPestadoresPesquisar(this.formulario.value['uf'], this.formulario.value['cidade'], this.formulario.value['bairro'], this.formulario.value['servicoId'], this.formulario.value.igrejaId).then(function (prestadoresResult) {
            if (!prestadoresResult || prestadoresResult.length == 0) {
              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__["ToastCustom"].CustomToast(_this3.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);

              _this3.loadingContr.hideLoader();

              return false;
            }

            var lstusuarioId = [];
            lstusuarioId = prestadoresResult.map(function (x) {
              return x.usuarioId;
            });
            _this3.prestadores = prestadoresResult;
            var lstIgrejaId = [];
            lstIgrejaId = prestadoresResult.map(function (x) {
              return x.igrejaId;
            });

            _this3.consultaMasterPrestador(lstusuarioId, lstIgrejaId).then(function () {
              _this3.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);

              _this3.loadingContr.hideLoader();
            });
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }, {
        key: "consultaMasterPrestador",
        value: function consultaMasterPrestador(lstusuarioId, lstIgrejaId) {
          var _this4 = this;

          return new Promise(function (result, reject) {
            // Recupera igreja 
            _this4.recuperaNomeIgreja(lstIgrejaId).then(function () {
              result();
            })["catch"](function (err) {
              reject(err);
            }); // Recupera Nome 


            _this4.recuperaNomePrestadores(lstusuarioId).then(function () {
              result();
            })["catch"](function (err) {
              reject(err);
            }); // Recupera Servicos
            //this.recuperaServicosPorPrestadores(lstusuarioId);

          });
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(lstusuarioId) {
          var _this5 = this;

          return new Promise(function () {
            _this5.prestadorService.recuperaServicosPorPrestadores(lstusuarioId).then(function (servicosPorPrestador) {
              _this5.prestadores.map(function (x) {
                x.servicos = servicosPorPrestador.find(function (y) {
                  y.usuarioId == x.usuarioId;
                });
              });

              _this5.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this5.toastCtrl);

              _this5.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomePrestadores",
        value: function recuperaNomePrestadores(lstusuarioId) {
          var _this6 = this;

          return new Promise(function (result, reject) {
            _this6.usuarioService.RecuperaNomeUsuarios(lstusuarioId).then(function (usuariosResult) {
              _this6.prestadores.map(function (x) {
                x.nome = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.nome;
                x.email = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.email;
              });

              _this6.ionContent.scrollToPoint(0, 350, 800);

              result();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this6.toastCtrl);

              _this6.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomeIgreja",
        value: function recuperaNomeIgreja(lstIgrejaId) {
          var _this7 = this;

          return new Promise(function (result, reject) {
            _this7.igrejaService.RecuperaNomeIgreja(lstIgrejaId).then(function (resultIgreja) {
              _this7.prestadores.map(function (x) {
                x.nomeIgreja = resultIgreja.find(function (y) {
                  return y.data.id == x.igrejaId;
                }).data.nomeIgreja;
              });

              result();
            })["catch"](function (x) {
              reject(x);
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this7.toastCtrl);

              _this7.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "detalhes",
        value: function detalhes(usuarioId) {
          var modal = this.modalCtrl.create({
            component: _visualizar_prestador_visualizar_prestador_page__WEBPACK_IMPORTED_MODULE_21__["VisualizarPrestadorPage"],
            componentProps: {
              usuarioId: usuarioId
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {});
          }); // this.router.navigate(['/visualizar-prestador'], { queryParams: { usuarioId: usuarioId } });
        }
      }, {
        key: "abrirModalServicos",
        value: function abrirModalServicos() {
          var _this8 = this;

          var modal = this.modalCtrl.create({
            component: _servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_12__["ModalServicosPage"],
            componentProps: {
              servicos: this.servicos
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this8.formulario.value.nomeServico = resultModal.data.nomeServico;
                _this8.formulario.value.servicoId = resultModal.data.servicoId;
              }
            });
          });
        }
      }, {
        key: "abrirModalUF",
        value: function abrirModalUF() {
          var _this9 = this;

          var modal = this.modalCtrl.create({
            component: _UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_15__["ModalUFPage"],
            componentProps: {
              UFs: this.UfList
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this9.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);

                _this9.formulario.controls["uf"].setValue(resultModal.data.sigla);

                _this9.formulario.controls["cidade"].setValue(null);

                _this9.formulario.controls["bairro"].setValue(null);

                _this9.formulario.controls["nomeIgreja"].setValue(null);

                _this9.formulario.controls["igrejaId"].setValue(null);

                _this9.buscarCidades(resultModal.data.sigla);
              }
            });
          });
        }
      }, {
        key: "abrirModalCidade",
        value: function abrirModalCidade() {
          var _this10 = this;

          var modal = this.modalCtrl.create({
            component: _cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_14__["ModalCidadePage"],
            componentProps: {
              cidades: this.cidadeList
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this10.formulario.value.cidade = resultModal.data;
                _this10.formulario.value.bairro = null;
                _this10.formulario.value.nomeIgreja = null;
                _this10.formulario.value.igrejaId = null;
              }
            });
          });
        }
      }, {
        key: "abrirModalBairro",
        value: function abrirModalBairro() {
          var _this11 = this;

          var modal = this.modalCtrl.create({
            component: _bairro_modal_bairro_modal_bairro_page__WEBPACK_IMPORTED_MODULE_13__["ModalBairroPage"],
            componentProps: {
              uf: this.formulario.value.uf,
              cidade: this.formulario.value.cidade
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this11.formulario.value.bairro = resultModal.data;
                _this11.formulario.value.nomeIgreja = null;
                _this11.formulario.value.igrejaId = null;
              }
            });
          });
        }
      }, {
        key: "abrirModalIgreja",
        value: function abrirModalIgreja() {
          var _this12 = this;

          var modal = this.modalCtrl.create({
            component: _igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_16__["ModalIgrejaPage"],
            componentProps: {
              uf: this.formulario.value.uf,
              cidade: this.formulario.value.cidade,
              bairro: this.formulario.value.bairro
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this12.formulario.value.nomeIgreja = resultModal.data.nomeIgreja;
                _this12.formulario.value.igrejaId = resultModal.data.id;
              }
            });
          });
        }
      }, {
        key: "abrirModalPrestadorDetalhes",
        value: function abrirModalPrestadorDetalhes(usuarioId) {}
      }, {
        key: "formularioValido",
        value: function formularioValido() {
          return this.formulario.value.uf && this.formulario.value.cidade;
        }
      }, {
        key: "ligarTelefone",
        value: function ligarTelefone(telefone) {
          var _this13 = this;

          this.callNumber.callNumber(telefone, true).then(function () {})["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this13.toastCtrl);
          });
        }
      }, {
        key: "adicionarPrestadorFavorito",
        value: function adicionarPrestadorFavorito(usuarioId) {
          this.favoritoService.AdicionaPrestadorFavorito(usuarioId, src_app_config__WEBPACK_IMPORTED_MODULE_20__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function () {});
        }
      }, {
        key: "removePrestadorFavorito",
        value: function removePrestadorFavorito(usuarioId) {
          this.favoritoService.RemovePrestadorFavorito(usuarioId, src_app_config__WEBPACK_IMPORTED_MODULE_20__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function () {});
        }
      }]);

      return PrestadorConsultarPage;
    }();

    PrestadorConsultarPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__["IgrejaService"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"]
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__["DominioServicoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"]
      }, {
        type: src_app_providers_favorito_favorito_service__WEBPACK_IMPORTED_MODULE_19__["FavoritoService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])], PrestadorConsultarPage.prototype, "ionContent", void 0);
    PrestadorConsultarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-consultar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-consultar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-consultar.page.scss */
      "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss"))["default"]]
    })], PrestadorConsultarPage);
    /***/
  },

  /***/
  "./src/app/providers/favorito/favorito.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/providers/favorito/favorito.service.ts ***!
    \********************************************************/

  /*! exports provided: FavoritoService */

  /***/
  function srcAppProvidersFavoritoFavoritoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritoService", function () {
      return FavoritoService;
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


    var src_app_repository_favorito_favorito_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/favorito/favorito-rep.service */
    "./src/app/repository/favorito/favorito-rep.service.ts");

    var FavoritoService = /*#__PURE__*/function () {
      function FavoritoService(favoritoRepService) {
        _classCallCheck(this, FavoritoService);

        this.favoritoRepService = favoritoRepService;
      }

      _createClass(FavoritoService, [{
        key: "AdicionaPrestadorFavorito",
        value: function AdicionaPrestadorFavorito(prestadorUsuarioId, usuarioId) {
          return this.favoritoRepService.AdicionaPrestadorFavorito(prestadorUsuarioId, usuarioId);
        }
      }, {
        key: "RemovePrestadorFavorito",
        value: function RemovePrestadorFavorito(prestadorUsuarioId, usuarioId) {
          return this.favoritoRepService.RemovePrestadorFavorito(prestadorUsuarioId, usuarioId);
        }
      }]);

      return FavoritoService;
    }();

    FavoritoService.ctorParameters = function () {
      return [{
        type: src_app_repository_favorito_favorito_rep_service__WEBPACK_IMPORTED_MODULE_2__["FavoritoRepService"]
      }];
    };

    FavoritoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FavoritoService);
    /***/
  },

  /***/
  "./src/app/repository/favorito/favorito-rep.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/repository/favorito/favorito-rep.service.ts ***!
    \*************************************************************/

  /*! exports provided: FavoritoRepService */

  /***/
  function srcAppRepositoryFavoritoFavoritoRepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritoRepService", function () {
      return FavoritoRepService;
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

    var FavoritoRepService = /*#__PURE__*/function (_repository_interface) {
      _inherits(FavoritoRepService, _repository_interface);

      var _super = _createSuper(FavoritoRepService);

      _createClass(FavoritoRepService, [{
        key: "AdicionaPrestadorFavorito",
        value: function AdicionaPrestadorFavorito(prestadorUsuarioId, usuarioId) {
          var _this14 = this;

          var ref = this.db.collection("favorito").doc(usuarioId);
          var obj = [{
            prestadorUsuarioId: prestadorUsuarioId,
            usuarioId: usuarioId
          }];
          return new Promise(function (retorno, reject) {
            _this14.db.runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(ref).then(function (doc) {
                var favorito = doc.data();

                if (!favorito.prestadores) {
                  favorito.prestadores = [obj];
                  transaction.set(ref, favorito);
                } else {
                  favorito.prestadores = favorito.prestadores.filter(function (y) {
                    return y.prestadorUsuarioId != prestadorUsuarioId;
                  });
                  favorito.prestadores.push(obj);
                  transaction.update(ref, favorito);
                }
              });
            }).then(function () {
              retorno();
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "RemovePrestadorFavorito",
        value: function RemovePrestadorFavorito(prestadorUsuarioId, usuarioId) {
          var _this15 = this;

          var ref = this.db.collection("favorito").doc(usuarioId);
          var obj = [{
            prestadorUsuarioId: prestadorUsuarioId,
            usuarioId: usuarioId
          }];
          return new Promise(function (retorno, reject) {
            _this15.db.runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(ref).then(function (doc) {
                var prestadores = [];
                prestadores = doc.data().prestadores;
                prestadores = prestadores.filter(function (y) {
                  return y.prestadorUsuarioId != prestadorUsuarioId;
                });
                transaction.update(ref, {
                  prestadores: prestadores
                });
              });
            }).then(function () {
              retorno();
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }]);

      function FavoritoRepService() {
        _classCallCheck(this, FavoritoRepService);

        return _super.call(this);
      }

      return FavoritoRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    FavoritoRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FavoritoRepService);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestador-consultar-prestador-consultar-module-es5.js.map