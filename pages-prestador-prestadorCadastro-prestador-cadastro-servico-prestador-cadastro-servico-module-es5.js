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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroPrestadorCadastroServicoPrestadorCadastroServicoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cadastro Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar color=\"secondary\" value=\"0.60\" buffer=\"0.80\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Serviços</ion-card-title>\n      <div class=\"ion-text-end\">\n        <ion-button color=\"primary\" (click)=\"abreModalSelecionaServico()\">\n          <ion-icon name=\"add-outline\" style=\"margin-right:10px;\"></ion-icon>Novo\n        </ion-button>\n      </div>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-list style=\"margin-top: 20px;\">\n        <ion-item *ngFor=\"let item of prestadorServicos\" class=\"ion-no-border\" button detail=\"false\"\n          (click)=\"editarServico(item)\">\n          <ion-icon slot=\"end\" color=\"primary\" name=\"create-outline\"></ion-icon>\n          <ion-label>{{item.nomeServico}}</ion-label>\n          <ion-label>{{item.breveDescricao}}</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"medium\" type=\"button\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n          clear>\n          <ion-icon name=\"chevron-back-outline\" style=\"margin-right:10px;\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\" clear>\n          <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n          </ion-icon>\n          Prosseguir\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
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
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: PrestadorCadastroServicoPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroServicoPrestadorCadastroServicoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPageRoutingModule", function () {
      return PrestadorCadastroServicoPageRoutingModule;
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


    var _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro-servico.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroServicoPage"]
    }];

    var PrestadorCadastroServicoPageRoutingModule = function PrestadorCadastroServicoPageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroServicoPageRoutingModule);
    };

    PrestadorCadastroServicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroServicoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: PrestadorCadastroServicoPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroServicoPrestadorCadastroServicoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPageModule", function () {
      return PrestadorCadastroServicoPageModule;
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


    var _prestador_cadastro_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-servico-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro-servico.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PrestadorCadastroServicoPageModule = function PrestadorCadastroServicoPageModule() {
      _classCallCheck(this, PrestadorCadastroServicoPageModule);
    };

    PrestadorCadastroServicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroServicoPageRoutingModule"]],
      declarations: [_prestador_cadastro_servico_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroServicoPage"]]
    })], PrestadorCadastroServicoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroServicoPrestadorCadastroServicoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvL3ByZXN0YWRvci1jYWRhc3Ryby1zZXJ2aWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLXNlcnZpY28vcHJlc3RhZG9yLWNhZGFzdHJvLXNlcnZpY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: PrestadorCadastroServicoPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroServicoPrestadorCadastroServicoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroServicoPage", function () {
      return PrestadorCadastroServicoPage;
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


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/pages/servico/modal-servicos/modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrestadorCadastroServicoPage = /*#__PURE__*/function () {
      function PrestadorCadastroServicoPage(dominioServicoService, loadingContr, prestadorService, modalCtrl, toastCtrl, alertController, ngZone, router) {
        _classCallCheck(this, PrestadorCadastroServicoPage);

        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.prestadorService = prestadorService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.router = router;
      }

      _createClass(PrestadorCadastroServicoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
            _this.prestadorServicos = result;

            _this.dominioServicoService.recuperaDominioServico().then(function (x) {
              _this.dominioServicos = x;

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

              if (_this.prestadorServicos.length == 0) {
                _this.abreModalSelecionaServico();
              }
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "abreModalSelecionaServico",
        value: function abreModalSelecionaServico() {
          var _this2 = this;

          var servicos = this.dominioServicos.filter(function (x) {
            return _this2.prestadorServicos.filter(function (y) {
              return y.servicoId == x.servicoId;
            }).length == 0;
          });
          var modal = this.modalCtrl.create({
            component: src_app_pages_servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ModalServicosPage"],
            componentProps: {
              servicos: servicos.filter(function (x) {
                return !x.deletado;
              })
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              _this2.servicoAdicionado = resultModal.data;

              if (_this2.servicoAdicionado) {
                _this2.loadingContr.showLoader();

                _this2.prestadorService.AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, {
                  servicoId: _this2.servicoAdicionado.servicoId,
                  usuarioId: src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId
                }).then(function (result) {
                  _this2.prestadorServicos.push(_this2.servicoAdicionado);

                  _this2.loadingContr.hideLoader();

                  src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(_this2.toastCtrl);
                })["catch"](function (err) {
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this2.toastCtrl);

                  _this2.loadingContr.hideLoader();
                });
              }
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }, {
        key: "salvarBreveDescricao",
        value: function salvarBreveDescricao(item) {
          var _this3 = this;

          var servico = {
            servicoId: item.servicoId,
            breveDescricao: item.breveDescricao
          };
          this.prestadorService.AdicionaServicoAoPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, servico).then(function (result) {
            _this3.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(_this3.toastCtrl);
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }, {
        key: "excluirServico",
        value: function excluirServico(item) {
          var _this4 = this;

          this.loadingContr.showLoader();
          this.prestadorService.ExcluirServico(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, item.servicoId).then(function (result) {
            _this4.prestadorServicos = _this4.prestadorServicos.filter(function (y) {
              return y.servicoId != item.servicoId;
            });

            _this4.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(_this4.toastCtrl);
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this4.toastCtrl);

            _this4.loadingContr.hideLoader();
          });
        }
      }, {
        key: "excluirButtonClick",
        value: function excluirButtonClick(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Atenção',
                      message: 'Deseja excluir registro?',
                      buttons: [{
                        text: 'Não'
                      }, {
                        text: 'Sim',
                        handler: function handler() {
                          _this5.excluirServico(item);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "prosseguir",
        value: function prosseguir() {
          var _this6 = this;

          if (this.prestadorServicos.length == 0) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].CustomToast(this.toastCtrl, "Favor adicionar serviço, antes de continuar", "danger", 4000);
            return false;
          }

          this.loadingContr.showLoader();
          var obj = {
            situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao
          };
          this.prestadorService.AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(function () {
            _this6.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_2__["ToastCustom"].SucessoToast(_this6.toastCtrl);

            _this6.ngZone.run(function () {
              _this6.router.navigate(['prestador-cadastro-igreja-vinculo']);
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(err, _this6.toastCtrl);

            _this6.loadingContr.hideLoader();
          });
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.router.navigate(['prestador-local-atendimento']);
        }
      }, {
        key: "editarServico",
        value: function editarServico(item) {}
      }]);

      return PrestadorCadastroServicoPage;
    }();

    PrestadorCadastroServicoPage.ctorParameters = function () {
      return [{
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_8__["DominioServicoService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__["LoadingContr"]
      }, {
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }];
    };

    PrestadorCadastroServicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro-servico',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro-servico.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro-servico.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.page.scss"))["default"]]
    })], PrestadorCadastroServicoPage);
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
          var _this10 = this;

          return new Promise(function (response, resp) {
            _this10.db.collection("dominioServico").where("deletado", "==", false).get().then(function (result) {
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
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module-es5.js.map