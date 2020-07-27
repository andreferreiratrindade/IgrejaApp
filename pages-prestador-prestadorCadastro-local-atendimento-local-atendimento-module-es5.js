function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroLocalAtendimentoLocalAtendimentoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cadastro Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-progress-bar color=\"secondary\" value=\"0.40\" buffer=\"0.60\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Locais de Atendimento</ion-card-title>\n      <ion-button color=\"primary\"(click)=\"abreModalSelecionarLocalAtendimento()\"><ion-icon name=\"add-outline\"></ion-icon> Novo</ion-button>\n\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list style=\"margin-top: 20px;\">\n        <ion-item *ngFor=\"let item of locaisAtendimentos; let i = index\" class=\"ion-no-border\" button detail=\"false\"  (click)=\"excluirButtonClick(item)\" >\n          <ion-icon slot=\"end\"  name=\"trash-outline\" color=\"danger\"></ion-icon>\n          <ion-label class=\"ion-text-wrap\">{{item.cidade}} / {{item.uf}}</ion-label>\n    \n        </ion-item>\n      </ion-list>\n  \n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"medium\" type=\"button\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n          clear>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\" clear>Prosseguir <ion-icon name=\"checkmark\">\n          </ion-icon>\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
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
  "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: LocalAtendimentoPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroLocalAtendimentoLocalAtendimentoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPageRoutingModule", function () {
      return LocalAtendimentoPageRoutingModule;
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


    var _local_atendimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./local-atendimento.page */
    "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts");

    var routes = [{
      path: '',
      component: _local_atendimento_page__WEBPACK_IMPORTED_MODULE_3__["LocalAtendimentoPage"]
    }];

    var LocalAtendimentoPageRoutingModule = function LocalAtendimentoPageRoutingModule() {
      _classCallCheck(this, LocalAtendimentoPageRoutingModule);
    };

    LocalAtendimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LocalAtendimentoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: LocalAtendimentoPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroLocalAtendimentoLocalAtendimentoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPageModule", function () {
      return LocalAtendimentoPageModule;
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


    var _local_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./local-atendimento-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento-routing.module.ts");
    /* harmony import */


    var _local_atendimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./local-atendimento.page */
    "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var LocalAtendimentoPageModule = function LocalAtendimentoPageModule() {
      _classCallCheck(this, LocalAtendimentoPageModule);
    };

    LocalAtendimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _local_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocalAtendimentoPageRoutingModule"]],
      declarations: [_local_atendimento_page__WEBPACK_IMPORTED_MODULE_6__["LocalAtendimentoPage"]]
    })], LocalAtendimentoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroLocalAtendimentoLocalAtendimentoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9sb2NhbC1hdGVuZGltZW50by9sb2NhbC1hdGVuZGltZW50by5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: LocalAtendimentoPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroLocalAtendimentoLocalAtendimentoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalAtendimentoPage", function () {
      return LocalAtendimentoPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var _adicionar_local_atendimento_adicionar_local_atendimento_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../adicionar-local-atendimento/adicionar-local-atendimento.page */
    "./src/app/pages/prestador/prestadorCadastro/adicionar-local-atendimento/adicionar-local-atendimento.page.ts");

    var LocalAtendimentoPage = /*#__PURE__*/function () {
      function LocalAtendimentoPage(prestadorService, toastCtrl, loadingContr, router, modalCtrl, alertController, buscarCEPService) {
        _classCallCheck(this, LocalAtendimentoPage);

        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.loadingContr = loadingContr;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.buscarCEPService = buscarCEPService;
        this.locaisAtendimentos = [];
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          'ufApresentacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      _createClass(LocalAtendimentoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          var usuarioId = src_app_config__WEBPACK_IMPORTED_MODULE_8__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId;
          this.prestadorService.RecuperaPrestador(usuarioId).then(function (result) {
            _this.locaisAtendimentos = result.locaisAtendimento;

            if (_this.locaisAtendimentos.length == 0) {
              _this.abreModalSelecionarLocalAtendimento();
            }

            _this.loadingContr.hideLoader();
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "validaAdicionarLocalAtendimento",
        value: function validaAdicionarLocalAtendimento(localAtendimento) {
          var valido = true;
          var mensagem = "";
          var obj = {
            valido: true,
            mensagem: ""
          };

          if (!localAtendimento.cidade || !localAtendimento.uf) {
            obj.valido = false;
            obj.mensagem = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios;
            return obj;
          }

          if (this.locaisAtendimentos && this.locaisAtendimentos.filter(function (y) {
            return y.uf == localAtendimento.uf && y.cidade == localAtendimento.cidade;
          }).length > 0) {
            obj.valido = false;
            obj.mensagem = "Local de atendimento já foi adicionado.";
            return obj;
          }

          return obj;
        }
      }, {
        key: "excluirButtonClick",
        value: function excluirButtonClick(item) {
          var _this2 = this;

          this.alertController.create({
            header: 'Atenção',
            message: 'Deseja excluir registro?',
            buttons: [{
              text: 'Não'
            }, {
              text: 'Sim',
              handler: function handler() {
                _this2.excluirLocalizacao(item);
              }
            }]
          }).then(function (result) {
            result.present();
          });
        }
      }, {
        key: "excluirLocalizacao",
        value: function excluirLocalizacao(item) {
          var _this3 = this;

          this.loadingContr.showLoader();
          this.prestadorService.ExcluirLocalAtendimento(src_app_config__WEBPACK_IMPORTED_MODULE_8__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, item).then(function (result) {
            var locais = _this3.locaisAtendimentos.filter(function (y) {
              return y.cidade != item.cidade || y.uf != item.uf;
            });

            _this3.locaisAtendimentos = null;
            _this3.locaisAtendimentos = locais;

            _this3.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(_this3.toastCtrl);
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler(err, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }, {
        key: "prosseguir",
        value: function prosseguir() {
          var _this4 = this;

          if (this.locaisAtendimentos.length == 0) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler("Favor informar local de atendimento.", this.toastCtrl);
            return false;
          }

          this.loadingContr.showLoader();
          var obj = {
            situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.CadastroServicos
          };
          this.prestadorService.AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_8__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(function () {
            _this4.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(_this4.toastCtrl);

            _this4.router.navigate(['prestador-cadastro-servico']);
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler(err, _this4.toastCtrl);

            _this4.loadingContr.hideLoader();
          });
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.router.navigate(['dados-empresa']);
        }
      }, {
        key: "abreModalSelecionarLocalAtendimento",
        value: function abreModalSelecionarLocalAtendimento() {
          var _this5 = this;

          var modal = this.modalCtrl.create({
            component: _adicionar_local_atendimento_adicionar_local_atendimento_page__WEBPACK_IMPORTED_MODULE_12__["AdicionarLocalAtendimentoPage"],
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal.data) {
                var localAtendimento = {
                  uf: resultModal.data.uf,
                  cidade: resultModal.data.cidade
                };

                var msg = _this5.validaAdicionarLocalAtendimento(localAtendimento);

                if (!msg.valido) {
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler(msg.mensagem, _this5.toastCtrl);
                  return false;
                }

                _this5.loadingContr.showLoader();

                _this5.prestadorService.AdicionaLocalAtendimento(localAtendimento, src_app_config__WEBPACK_IMPORTED_MODULE_8__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function () {
                  if (!_this5.locaisAtendimentos) {
                    _this5.locaisAtendimentos = [];
                  }

                  _this5.locaisAtendimentos.push(localAtendimento);

                  _this5.formulario.reset();

                  _this5.loadingContr.hideLoader();

                  src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(_this5.toastCtrl);
                })["catch"](function (err) {
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_9__["HandlerError"].handler(err, _this5.toastCtrl);

                  _this5.loadingContr.hideLoader();
                });
              }
            });
          });
        }
      }]);

      return LocalAtendimentoPage;
    }();

    LocalAtendimentoPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_7__["BuscarCEPService"]
      }];
    };

    LocalAtendimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-local-atendimento',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./local-atendimento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./local-atendimento.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.page.scss"))["default"]]
    })], LocalAtendimentoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module-es5.js.map