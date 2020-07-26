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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Manter Prestadores\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <form [formGroup]=\"formConsultarPrestadorADM\" (ngSubmit)=\"ConsultarPrestador()\">\n\n        <ion-item (click)=\"abrirModalIgreja()\" detail>\n          <ion-label>Igreja\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formConsultarPrestadorADM.value.nomeIgreja}}</ion-note>\n        </ion-item>\n        <ion-item (click)=\"abrirModalSituacaoPrestador()\" detail>\n          <ion-label>Situação Prestador\n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\"> {{formConsultarPrestadorADM.value.nomeSituacaoPrestador}}</ion-note>\n        </ion-item>\n        <ion-button class=\"primary\" type=\"submit\" expand=\"block\">Pesquisar</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of prestadores\" class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>{{item.nome}} </h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item class=\"ion-no-border\">\n      <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.nomeIgreja}} </h2>\n      </ion-label>\n      <ion-note color=\"tertiary\" slot=\"end\" *ngIf=\"item.staMembro\">\n        membro\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"golf-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.bairro}} - {{item.cidade}} / {{item.uf}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.nomeSituacaoPrestador}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"configuracoes(item.usuarioId)\">Configurações</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>";
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
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPageRoutingModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageRoutingModule", function () {
      return ConsultarPrestadorAdmPageRoutingModule;
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


    var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consultar-prestador-adm.page */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");

    var routes = [{
      path: '',
      component: _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__["ConsultarPrestadorAdmPage"]
    }];

    var ConsultarPrestadorAdmPageRoutingModule = function ConsultarPrestadorAdmPageRoutingModule() {
      _classCallCheck(this, ConsultarPrestadorAdmPageRoutingModule);
    };

    ConsultarPrestadorAdmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsultarPrestadorAdmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPageModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageModule", function () {
      return ConsultarPrestadorAdmPageModule;
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


    var _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./consultar-prestador-adm-routing.module */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts");
    /* harmony import */


    var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consultar-prestador-adm.page */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ConsultarPrestadorAdmPageModule = function ConsultarPrestadorAdmPageModule() {
      _classCallCheck(this, ConsultarPrestadorAdmPageModule);
    };

    ConsultarPrestadorAdmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultarPrestadorAdmPageRoutingModule"]],
      declarations: [_consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPrestadorAdmPage"]]
    })], ConsultarPrestadorAdmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXJQcmVzdGFkb3Jlcy9jb25zdWx0YXItcHJlc3RhZG9yLWFkbS9jb25zdWx0YXItcHJlc3RhZG9yLWFkbS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPage */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPage", function () {
      return ConsultarPrestadorAdmPage;
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


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var _modalSituacaoPrestador_modal_situacao_prestador_modal_situacao_prestador_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.page */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.page.ts");
    /* harmony import */


    var src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/pages/igreja/modal-igreja/modal-igreja.page */
    "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");

    var ConsultarPrestadorAdmPage = /*#__PURE__*/function () {
      function ConsultarPrestadorAdmPage(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr, dominioServicoService, router, modalCtrl, callNumber) {
        var _this = this;

        _classCallCheck(this, ConsultarPrestadorAdmPage);

        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.usuarioService = usuarioService;
        this.loadingContr = loadingContr;
        this.dominioServicoService = dominioServicoService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.callNumber = callNumber;
        this.prestadores = [];
        this.formConsultarPrestadorADM = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
          'nomeSituacaoPrestador': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
          'situacaoPrestador': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
          'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
          'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]()
        });
        this.prestadores = [];
        this.igrejaService.RecuperaIgrejaPorAdministrador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
          _this.igrejasDoAdmin = result;
          loadingContr.hideLoader();
        })["catch"](function (err) {
          loadingContr.hideLoader();
          console.log(err);
        });
      }

      _createClass(ConsultarPrestadorAdmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// let usuario = Config.RecuperaInstancia().recuperaUsuario();
          // this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId)
          //   .then(igrejaResult => {
          //     this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId)
          //       .then(prestadoresResult => {
          //         this.prestadores = prestadoresResult
          //       })
          //   })
        }
      }, {
        key: "ConsultarPrestador",
        value: function ConsultarPrestador() {
          var _this2 = this;

          this.prestadores = [];
          this.loadingContr.showLoader();
          this.prestadorService.RecuperaPestadoresPesquisarPorAdministrador(this.formConsultarPrestadorADM.value.situacaoPrestador, this.formConsultarPrestadorADM.value.igrejaId, src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, this.igrejasDoAdmin.map(function (x) {
            var obj = {
              igrejaId: x.id
            };
            return obj;
          })).then(function (prestadoresResult) {
            if (!prestadoresResult || prestadoresResult.length == 0) {
              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_15__["ToastCustom"].CustomToast(_this2.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);

              _this2.loadingContr.hideLoader();

              return false;
            }

            _this2.prestadores = prestadoresResult;

            _this2.prestadores.map(function (y) {
              y.nomeSituacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(y.situacaoPrestador);
            });

            var lstusuarioId = [];
            lstusuarioId = prestadoresResult.map(function (x) {
              return x.usuarioId;
            });

            _this2.recuperaNomePrestadores(lstusuarioId);

            var lstIgrejaId = [];
            lstIgrejaId = prestadoresResult.map(function (x) {
              return x.igrejaId;
            });

            _this2.recuperaNomeIgreja(lstIgrejaId);
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_16__["HandlerError"].handler(x, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }, {
        key: "recuperaNomePrestadores",
        value: function recuperaNomePrestadores(lstusuarioId) {
          var _this3 = this;

          return new Promise(function (result, reject) {
            _this3.usuarioService.RecuperaNomeUsuarios(lstusuarioId).then(function (usuariosResult) {
              _this3.prestadores.map(function (x) {
                x.nome = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.nome;
                x.email = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.email;
              });

              _this3.ionContent.scrollToPoint(0, 350, 800);

              _this3.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_16__["HandlerError"].handler(x, _this3.toastCtrl);

              _this3.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomeIgreja",
        value: function recuperaNomeIgreja(lstIgrejaId) {
          var _this4 = this;

          return new Promise(function (result, reject) {
            _this4.igrejaService.RecuperaNomeIgreja(lstIgrejaId).then(function (resultIgreja) {
              _this4.prestadores.map(function (x) {
                x.nomeIgreja = resultIgreja.find(function (y) {
                  return y.data.id == x.igrejaId;
                }).data.nomeIgreja;
              });

              _this4.loadingContr.hideLoader();
            })["catch"](function (x) {
              reject(x);
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_16__["HandlerError"].handler(x, _this4.toastCtrl);

              _this4.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "abrirModalSituacaoPrestador",
        value: function abrirModalSituacaoPrestador() {
          var _this5 = this;

          var modal = this.modalCtrl.create({
            component: _modalSituacaoPrestador_modal_situacao_prestador_modal_situacao_prestador_page__WEBPACK_IMPORTED_MODULE_13__["ModalSituacaoPrestadorPage"],
            componentProps: {
              situacoes: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].ListTipoSituacaoPrestador.RecuperaListagem()
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this5.formConsultarPrestadorADM.controls['nomeSituacaoPrestador'].setValue(resultModal.data.descricao);

                _this5.formConsultarPrestadorADM.controls['situacaoPrestador'].setValue(resultModal.data.valor);
              }
            });
          });
        }
      }, {
        key: "configuracoes",
        value: function configuracoes(item) {
          this.router.navigate(['/manter-prestador'], {
            queryParams: {
              prestadorUsuarioId: item
            }
          });
        }
      }, {
        key: "abrirModalIgreja",
        value: function abrirModalIgreja() {
          var _this6 = this;

          var modal = this.modalCtrl.create({
            component: src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_14__["ModalIgrejaPage"],
            componentProps: {
              igrejas: this.igrejasDoAdmin
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal) {
                _this6.formConsultarPrestadorADM.controls['nomeIgreja'].setValue(resultModal.data.nomeIgreja);

                _this6.formConsultarPrestadorADM.controls['igrejaId'].setValue(resultModal.data.id);
              }
            });
          });
        }
      }]);

      return ConsultarPrestadorAdmPage;
    }();

    ConsultarPrestadorAdmPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__["IgrejaService"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"]
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__["DominioServicoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], ConsultarPrestadorAdmPage.prototype, "ionContent", void 0);
    ConsultarPrestadorAdmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consultar-prestador-adm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./consultar-prestador-adm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./consultar-prestador-adm.page.scss */
      "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss"))["default"]]
    })], ConsultarPrestadorAdmPage);
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
        key: "RecuperaIgrejaPorAdministrador",
        value: function RecuperaIgrejaPorAdministrador(usuarioId) {
          return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
        }
      }, {
        key: "AdicionarNovaIgreja",
        value: function AdicionarNovaIgreja(obj) {
          return this.igrejaRepService.add(obj, null);
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
        var _this7;

        _classCallCheck(this, DominioServicoRepositoryService);

        _this7 = _super.call(this);
        _this7.servicoConverter = {
          toFirestore: function toFirestore(servico) {
            return {
              servicoId: servico.servicoId,
              nomeServico: servico.nomeServico
            };
          }
        };
        _this7._collectionName = "dominioServico";
        return _this7;
      }

      _createClass(DominioServicoRepositoryService, [{
        key: "recuperaServicoAutoComplete",
        value: function recuperaServicoAutoComplete(query) {
          var _this8 = this;

          return new Promise(function (response, resp) {
            var endText = query + "\uF8FF";

            _this8.db.collection("dominioServico").orderBy("nomeServico").limit(10).where("nomeServico", ">=", query).where("nomeServico", "<=", endText) // .startAt(query)
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
          var _this9 = this;

          return new Promise(function (response, resp) {
            _this9.db.collection("dominioServico").get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  nomeServico: doc.data().nomeServico,
                  servicoId: doc.id
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
        var _this10;

        _classCallCheck(this, IgrejaRepService);

        _this10 = _super2.call(this);
        _this10._collectionName = "igreja";
        return _this10;
      }

      _createClass(IgrejaRepService, [{
        key: "RecuperaIgrejasPorEndereco",
        value: function RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            var query = _this11.db.collection('igreja').where("uf", "==", uf);

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
        key: "RecuperaIgrejaPorAdministrador",
        value: function RecuperaIgrejaPorAdministrador(usuarioId) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            _this12.db.collection('igreja').where("administradores", "array-contains", {
              usuarioId: usuarioId
            }).get().then(function (result) {
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
      }]);

      return IgrejaRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IgrejaRepService);
    /***/
  }
}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module-es5.js.map