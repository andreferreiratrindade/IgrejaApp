function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGerenciarIgrejaManterServicosMantemServicoMantemServicoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Mantem Serviços\n      </ion-title>\n    </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Adicionar Serviço</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label position=\"floating\">Serviço<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"nomeServico\" autofocus clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"primary\" (click)=\"salvar()\">\n          <ion-icon name=\"add-outline\" style=\"margin-right:10px;\"></ion-icon>Novo\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Serviços</ion-card-title>\n      <ion-searchbar type=\"text\" debounce=1 placeholder=\"Pesquisar\" animated #searchbar\n        (ionChange)=\"recuperaServicos($event)\" animated></ion-searchbar>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-list style=\"margin-top: 20px;\">\n        <ion-item *ngFor=\"let item of servicos\" class=\"ion-no-border\" button detail=\"false\"\n          (click)=\"excluirServico(item.servicoId)\">\n          <ion-icon *ngIf=\"!item.deletado\" slot=\"end\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n          <ion-label>{{item.nomeServico}}<p>{{item.deletado?\"deletado\":\"\"}}</p></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
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
  "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MantemServicoPageRoutingModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterServicosMantemServicoMantemServicoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MantemServicoPageRoutingModule", function () {
      return MantemServicoPageRoutingModule;
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


    var _mantem_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mantem-servico.page */
    "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts");

    var routes = [{
      path: '',
      component: _mantem_servico_page__WEBPACK_IMPORTED_MODULE_3__["MantemServicoPage"]
    }];

    var MantemServicoPageRoutingModule = function MantemServicoPageRoutingModule() {
      _classCallCheck(this, MantemServicoPageRoutingModule);
    };

    MantemServicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MantemServicoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: MantemServicoPageModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterServicosMantemServicoMantemServicoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MantemServicoPageModule", function () {
      return MantemServicoPageModule;
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


    var _mantem_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mantem-servico-routing.module */
    "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts");
    /* harmony import */


    var _mantem_servico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mantem-servico.page */
    "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts");

    var MantemServicoPageModule = function MantemServicoPageModule() {
      _classCallCheck(this, MantemServicoPageModule);
    };

    MantemServicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mantem_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__["MantemServicoPageRoutingModule"]],
      declarations: [_mantem_servico_page__WEBPACK_IMPORTED_MODULE_6__["MantemServicoPage"]]
    })], MantemServicoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGerenciarIgrejaManterServicosMantemServicoMantemServicoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclNlcnZpY29zL21hbnRlbS1zZXJ2aWNvL21hbnRlbS1zZXJ2aWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclNlcnZpY29zL21hbnRlbS1zZXJ2aWNvL21hbnRlbS1zZXJ2aWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXJlbmNpYXJJZ3JlamEvbWFudGVyU2Vydmljb3MvbWFudGVtLXNlcnZpY28vbWFudGVtLXNlcnZpY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: MantemServicoPage */

  /***/
  function srcAppPagesGerenciarIgrejaManterServicosMantemServicoMantemServicoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MantemServicoPage", function () {
      return MantemServicoPage;
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


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var _adiciona_servico_adiciona_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../adiciona-servico/adiciona-servico.page */
    "./src/app/pages/gerenciarIgreja/manterServicos/adiciona-servico/adiciona-servico.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");

    var MantemServicoPage = /*#__PURE__*/function () {
      function MantemServicoPage(servicoService, modalCtrl, loadingContr, toastCtrl) {
        _classCallCheck(this, MantemServicoPage);

        this.servicoService = servicoService;
        this.modalCtrl = modalCtrl;
        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.servicos = [];
        this.dominioServicos = [];
      }

      _createClass(MantemServicoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.servicoService.recuperaDominioServico().then(function (result) {
            _this.servicos = result;
            _this.dominioServicos = result;
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this2 = this;

          if (!this.nomeServico) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
          }

          this.servicoService.recuperaDominioServico().then(function (result) {
            _this2.loadingContr.showLoader();

            if (result.filter(function (x) {
              return x.nomeServico == _this2.nomeServico;
            }).length > 0) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler("Serviço já cadastrado.", _this2.toastCtrl);

              _this2.loadingContr.hideLoader();

              return false;
            } else {
              _this2.servicoService.adicionaServico({
                nomeServico: _this2.nomeServico,
                deletado: false
              }).then(function (result) {
                _this2.nomeServico = null;
                src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_7__["ToastCustom"].SucessoToast(_this2.toastCtrl);

                _this2.ngOnInit();

                _this2.loadingContr.hideLoader();
              })["catch"](function (error) {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(error, _this2.toastCtrl);

                _this2.loadingContr.hideLoader();
              });
            }
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(error, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }, {
        key: "abreModalSelecionaServico",
        value: function abreModalSelecionaServico() {
          var modal = this.modalCtrl.create({
            component: _adiciona_servico_adiciona_servico_page__WEBPACK_IMPORTED_MODULE_3__["AdicionaServicoPage"],
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {});
          });
        }
      }, {
        key: "recuperaServicos",
        value: function recuperaServicos(ev) {
          var val = "";

          if (ev && ev.target) {
            val = ev.target.value;
          }

          if (val && val.trim() !== '') {
            this.servicos = this.dominioServicos.filter(function (item) {
              return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          } else {
            this.servicos = _toConsumableArray(this.dominioServicos);
          }

          if (this.servicos.length > 10) this.servicos.length = 10;
        }
      }, {
        key: "excluirServico",
        value: function excluirServico(servicoId) {
          var _this3 = this;

          this.servicoService.excluirServico(servicoId).then(function (result) {
            _this3.ngOnInit();
          });
        }
      }]);

      return MantemServicoPage;
    }();

    MantemServicoPage.ctorParameters = function () {
      return [{
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    MantemServicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mantem-servico',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mantem-servico.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mantem-servico.page.scss */
      "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss"))["default"]]
    })], MantemServicoPage);
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
        var _this4;

        _classCallCheck(this, DominioServicoRepositoryService);

        _this4 = _super.call(this);
        _this4.servicoConverter = {
          toFirestore: function toFirestore(servico) {
            return {
              servicoId: servico.servicoId,
              nomeServico: servico.nomeServico
            };
          }
        };
        _this4._collectionName = "dominioServico";
        return _this4;
      }

      _createClass(DominioServicoRepositoryService, [{
        key: "recuperaServicoAutoComplete",
        value: function recuperaServicoAutoComplete(query) {
          var _this5 = this;

          return new Promise(function (response, resp) {
            var endText = query + "\uF8FF";

            _this5.db.collection("dominioServico").orderBy("nomeServico").limit(10).where("nomeServico", ">=", query).where("nomeServico", "<=", endText) // .startAt(query)
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
          var _this6 = this;

          return new Promise(function (response, resp) {
            _this6.db.collection("dominioServico").orderBy("nomeServico").get().then(function (result) {
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
          var _this7 = this;

          return new Promise(function (response, resp) {
            _this7.db.collection("dominioServico").where("deletado", "==", false).orderBy("nomeServico").get().then(function (result) {
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
//# sourceMappingURL=pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module-es5.js.map