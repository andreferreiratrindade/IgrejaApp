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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-consultar-prestador-consultar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUFModalUfModalUfPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\" (click)=\"closeModal()\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>UF</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar type=\"text\"  debounce = 1\n  placeholder=\"Pesquisar\"  \n  animated (ionChange)=\"recuperaItens($event)\" #searchbar></ion-searchbar>\n<ion-list>\n    <ion-item *ngFor=\"let item of itens\" (click)=\"selecionar(item)\" detail>\n      <ion-label>{{item.nome}} / {{item.sigla}}</ion-label>\n    </ion-item>\n</ion-list>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCidadeModalCidadeModalCidadePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\" (click)=\"closeModal()\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cidades</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar type=\"text\"  debounce = 1\n  placeholder=\"Pesquisar\" #searchbar\n  animated (ionChange)=\"recuperaItens($event)\"></ion-searchbar>\n<ion-list>\n    <ion-item *ngFor=\"let item of itens\" (click)=\"selecionar(item)\" detail>\n      <ion-label>{{item}}</ion-label>\n    </ion-item>\n</ion-list>\n</ion-content>\n";
    /***/
  },

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


    __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Consultar Prestador</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <form [formGroup]=\"formulario\" (ngSubmit)=\"ConsultarPrestador()\">\n        <ion-item (click)=\"abrirModalServicos()\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Serviço</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\">{{nomeServicoSelecionado}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item (click)=\"abrirModalUF()\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>UF<ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\"> {{formulario.value.ufApresentacao}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n\n        <ion-item (click)=\"abrirModalCidade()\" [disabled]=\"!formulario.value.uf\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Cidade<ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\"> {{formulario.value.cidade}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n        <ion-item (click)=\"abrirModalIgreja()\" [disabled]=\"!formulario.value.cidade\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Igreja\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\"> {{formulario.value.nomeIgreja}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n        <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n\n          <ion-button class=\"primary\" type=\"submit\">\n            <ion-icon name=\"search-outline\" style=\"margin-right:10px;\"></ion-icon>Pesquisar\n          </ion-button>\n\n        </div>\n      </form>\n      <!-- \n      <ion-list *ngIf=\"prestadores.length > 0\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n        <ion-list-header style=\"margin-bottom: 20px;\">\n          Prestadores\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of prestadores\" detail (click)=\"detalhes(item.usuarioId)\">\n          <ion-label size=\"12\">\n            <h2>{{item.nome}}</h2>\n            <p>{{item.descricaoServicos}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list> -->\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of prestadores\" class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>{{item.nome}}</h3>\n        <ion-label size=\"12\">\n          <p>{{item.descricaoServicos}}</p>\n        </ion-label>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item (click)=\"ligarTelefone(item.telefone)\" class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-phone-alt\" style=\"padding-right: 11px;margin-left: 3px;\"></ion-icon>\n        <ion-button color=\"tertiary\" size=\"small\" type=\"button\" >{{item.telefone | maskTelefone}}</ion-button>\n      </ion-item>\n      <ion-item class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-church\" style=\"padding-right: 11px;\"></ion-icon>\n        <ion-label class=\"ion-text-wrap on-no-border\">\n          <h2>{{item.nomeIgreja}} </h2>\n          <div class=\"ion-text-end\">\n            <ion-note color=\"tertiary\" slot=\"end\" *ngIf=\"item.staMembro\">\n              membro\n            </ion-note>\n          </div>\n        </ion-label>\n\n      </ion-item>\n      <ion-item class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-map-marker-alt\" style=\"padding-right: 11px;margin-left: 7px;\"></ion-icon>\n        <ion-label class=\"ion-text-wrap on-no-border\">\n          <h2>{{item.bairro}} - {{item.cidade}} / {{item.uf}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button size=\"small\" (click)=\"detalhes(item.usuarioId)\" color=\"secondary\">\n              <ion-icon name=\"eye-outline\" style=\"margin-right:10px;\"></ion-icon> Detalhes\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button size=\"small\" (click)=\"ShareGeneric(item)\" color=\"light\">\n              <ion-icon name=\"share-social\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/UF/modal-uf/modal-uf.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/UF/modal-uf/modal-uf.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUFModalUfModalUfPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1VGL21vZGFsLXVmL21vZGFsLXVmLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/UF/modal-uf/modal-uf.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/UF/modal-uf/modal-uf.page.ts ***!
    \****************************************************/

  /*! exports provided: ModalUFPage */

  /***/
  function srcAppPagesUFModalUfModalUfPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalUFPage", function () {
      return ModalUFPage;
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


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");

    var ModalUFPage = /*#__PURE__*/function () {
      function ModalUFPage(loadingContr, toastCtrl, prestadorService, modalController, navParams) {
        _classCallCheck(this, ModalUFPage);

        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.prestadorService = prestadorService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.dominioUF = [];
        this.itens = [];
        this.dominioUF = this.navParams.data.UFs;
      }

      _createClass(ModalUFPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            _this.inputElement.setFocus();
          }, 800);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recuperaItens(null);
        }
      }, {
        key: "recuperaItens",
        value: function recuperaItens(ev) {
          var val = "";

          if (ev && ev.target) {
            val = ev.target.value;
          }

          if (val && val.trim() !== '') {
            this.itens = this.dominioUF.filter(function (item) {
              return item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.sigla.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          } else {
            this.itens = _toConsumableArray(this.dominioUF);
          }

          if (this.itens.length > 10) this.itens.length = 10;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss(null, 'cancel');
        }
      }, {
        key: "selecionar",
        value: function selecionar(item) {
          this.modalController.dismiss(item, 'success');
        }
      }]);

      return ModalUFPage;
    }();

    ModalUFPage.ctorParameters = function () {
      return [{
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__["LoadingContr"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar')], ModalUFPage.prototype, "inputElement", void 0);
    ModalUFPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-uf',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-uf.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UF/modal-uf/modal-uf.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-uf.page.scss */
      "./src/app/pages/UF/modal-uf/modal-uf.page.scss"))["default"]]
    })], ModalUFPage);
    /***/
  },

  /***/
  "./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCidadeModalCidadeModalCidadePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpZGFkZS9tb2RhbC1jaWRhZGUvbW9kYWwtY2lkYWRlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/cidade/modal-cidade/modal-cidade.page.ts ***!
    \****************************************************************/

  /*! exports provided: ModalCidadePage */

  /***/
  function srcAppPagesCidadeModalCidadeModalCidadePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCidadePage", function () {
      return ModalCidadePage;
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


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");

    var ModalCidadePage = /*#__PURE__*/function () {
      function ModalCidadePage(loadingContr, toastCtrl, prestadorService, modalController, navParams) {
        _classCallCheck(this, ModalCidadePage);

        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.prestadorService = prestadorService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.dominioCidade = [];
        this.itens = [];
        this.dominioCidade = this.navParams.data.cidades;
        this.recuperaItens(null); // this.prestadorService.RecuperaCidadePrestadorDisponiveis( this.navParams.data.uf)
        //   .then(result => {
        //     this.dominioCidade = result;
        //     this.itens = result;
        //     this.loadingContr.hideLoader();
        //   }).catch(x => {
        //     this.loadingContr.hideLoader();
        //     HandlerError.handler(x, this.toastCtrl);
        //   });
      }

      _createClass(ModalCidadePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.inputElement.setFocus();
          }, 800);
        }
      }, {
        key: "recuperaItens",
        value: function recuperaItens(ev) {
          var val = "";

          if (ev && ev.target) {
            val = ev.target.value;
          }

          if (val && val.trim() !== '') {
            this.itens = this.dominioCidade.filter(function (item) {
              return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          } else {
            this.itens = _toConsumableArray(this.dominioCidade);
          }

          this.itens = this.itens.slice(0, 10);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss(null, 'cancel');
        }
      }, {
        key: "selecionar",
        value: function selecionar(item) {
          this.modalController.dismiss(item, 'success');
        }
      }]);

      return ModalCidadePage;
    }();

    ModalCidadePage.ctorParameters = function () {
      return [{
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__["LoadingContr"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar')], ModalCidadePage.prototype, "inputElement", void 0);
    ModalCidadePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-cidade',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-cidade.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cidade/modal-cidade/modal-cidade.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-cidade.page.scss */
      "./src/app/pages/cidade/modal-cidade/modal-cidade.page.scss"))["default"]]
    })], ModalCidadePage);
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
    /* harmony import */


    var src_app_pipes_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pipes/pipes */
    "./src/app/pipes/pipes.ts");

    var PrestadorConsultarPageModule = function PrestadorConsultarPageModule() {
      _classCallCheck(this, PrestadorConsultarPageModule);
    };

    PrestadorConsultarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_pipes_pipes__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _prestador_consultar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorConsultarPageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvci1jb25zdWx0YXIvcHJlc3RhZG9yLWNvbnN1bHRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY29uc3VsdGFyL3ByZXN0YWRvci1jb25zdWx0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY29uc3VsdGFyL3ByZXN0YWRvci1jb25zdWx0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
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
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var PrestadorConsultarPage = /*#__PURE__*/function () {
      function PrestadorConsultarPage(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr, dominioServicoService, router, modalCtrl, callNumber, favoritoService, socialSharing) {
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
        this.socialSharing = socialSharing;
        this.nomeServicoSelecionado = "Todos";
        this.servicosSelecionados = [];
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'ufApresentacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.prestadores = [];
      }

      _createClass(PrestadorConsultarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loadingContr.showLoader();
          this.dominioServicoService.recuperaDominioServico().then(function (result) {
            _this3.servicos = result;

            _this3.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this3.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);
          });
          this.prestadorService.RecuperaUfPrestadorDisponiveis().then(function (result) {
            _this3.UfList = result.map(function (x) {
              return src_app_utils_constants__WEBPACK_IMPORTED_MODULE_18__["Constants"].ListagemUF.RecuperaObjetoPorUF(x);
            });

            _this3.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this3.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);
          });
        }
      }, {
        key: "buscarCidades",
        value: function buscarCidades(uf) {
          var _this4 = this;

          this.loadingContr.showLoader();
          this.formulario.controls['cidade'].setValue(null);
          this.cidadeList = [];
          this.prestadorService.RecuperaCidadePrestadorDisponiveis(uf).then(function (result) {
            _this4.cidadeList = result;

            _this4.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this4.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this4.toastCtrl);
          });
        }
      }, {
        key: "ConsultarPrestador",
        value: function ConsultarPrestador() {
          var _this5 = this;

          if (!this.formularioValido()) {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__["ToastCustom"].CustomToast(this.toastCtrl, src_app_utils_constants__WEBPACK_IMPORTED_MODULE_18__["Constants"].Mensagens.CamposObrigatorios, "danger", 4000);
            return false;
          }

          this.prestadores = [];
          this.loadingContr.showLoader();
          this.prestadorService.RecuperaPestadoresPesquisar(this.formulario.value['uf'], this.formulario.value['cidade'], this.formulario.value['bairro'], this.servicosSelecionados.map(function (y) {
            return y.servicoId;
          }), this.formulario.value.igrejaId).then(function (prestadoresResult) {
            if (!prestadoresResult || prestadoresResult.length == 0) {
              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__["ToastCustom"].CustomToast(_this5.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);

              _this5.loadingContr.hideLoader();

              return false;
            }

            var lstusuarioId = [];
            lstusuarioId = prestadoresResult.map(function (x) {
              return x.usuarioId;
            });
            _this5.prestadores = prestadoresResult;
            var lstIgrejaId = [];
            lstIgrejaId = prestadoresResult.map(function (x) {
              return x.igrejaId;
            });

            _this5.consultaMasterPrestador(lstusuarioId, lstIgrejaId).then(function () {
              _this5.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this5.toastCtrl);

              _this5.loadingContr.hideLoader();
            });
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this5.toastCtrl);

            _this5.loadingContr.hideLoader();
          });
        }
      }, {
        key: "consultaMasterPrestador",
        value: function consultaMasterPrestador(lstusuarioId, lstIgrejaId) {
          var _this6 = this;

          return new Promise(function (result, reject) {
            // Recupera igreja 
            _this6.recuperaNomeIgreja(lstIgrejaId).then(function () {
              result();
            })["catch"](function (err) {
              reject(err);
            }); // Recupera Nome 


            _this6.recuperaNomePrestadores(lstusuarioId).then(function () {
              result();
            })["catch"](function (err) {
              reject(err);
            });

            _this6.prestadores.forEach(function (x) {
              x.servicos.forEach(function (y) {
                y.nomeServico = _this6.servicos.filter(function (w) {
                  return w.servicoId == y.servicoId;
                })[0].nomeServico;
              });
              x.descricaoServicos = x.servicos.map(function (y) {
                return y.nomeServico;
              }).join(', ');
            }); // Recupera Servicos
            //this.recuperaServicosPorPrestadores(lstusuarioId);

          });
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(lstusuarioId) {
          var _this7 = this;

          return new Promise(function () {
            _this7.prestadorService.recuperaServicosPorPrestadores(lstusuarioId).then(function (servicosPorPrestador) {
              _this7.prestadores.map(function (x) {
                x.servicos = servicosPorPrestador.find(function (y) {
                  y.usuarioId == x.usuarioId;
                });
              });

              _this7.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this7.toastCtrl);

              _this7.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomePrestadores",
        value: function recuperaNomePrestadores(lstusuarioId) {
          var _this8 = this;

          return new Promise(function (result, reject) {
            _this8.usuarioService.RecuperaNomeUsuarios(lstusuarioId).then(function (usuariosResult) {
              _this8.prestadores.map(function (x) {
                x.nome = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.nome;
                x.email = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.email;
              });

              _this8.ionContent.scrollToPoint(0, 350, 800);

              result();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this8.toastCtrl);

              _this8.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomeIgreja",
        value: function recuperaNomeIgreja(lstIgrejaId) {
          var _this9 = this;

          return new Promise(function (result, reject) {
            _this9.igrejaService.RecuperaNomeIgreja(lstIgrejaId).then(function (resultIgreja) {
              _this9.prestadores.map(function (x) {
                x.nomeIgreja = resultIgreja.find(function (y) {
                  return y.data.id == x.igrejaId;
                }).data.nomeIgreja;
              });

              result();
            })["catch"](function (x) {
              reject(x);
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this9.toastCtrl);

              _this9.loadingContr.hideLoader();
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
          var _this10 = this;

          var modal = this.modalCtrl.create({
            component: _servico_modal_servicos_modal_servicos_page__WEBPACK_IMPORTED_MODULE_12__["ModalServicosPage"],
            componentProps: {
              servicos: this.servicos
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal.data) {
                _this10.servicosSelecionados = resultModal.data;
                _this10.nomeServicoSelecionado = _this10.servicosSelecionados.map(function (y) {
                  return y.nomeServico;
                }).join('; ');
              }
            });
          });
        }
      }, {
        key: "abrirModalUF",
        value: function abrirModalUF() {
          var _this11 = this;

          var modal = this.modalCtrl.create({
            component: _UF_modal_uf_modal_uf_page__WEBPACK_IMPORTED_MODULE_15__["ModalUFPage"],
            componentProps: {
              UFs: this.UfList
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal.data) {
                _this11.formulario.controls["ufApresentacao"].setValue(resultModal.data.nome + " / " + resultModal.data.sigla);

                _this11.formulario.controls["uf"].setValue(resultModal.data.sigla);

                _this11.formulario.controls["cidade"].setValue(null);

                _this11.formulario.controls["bairro"].setValue(null);

                _this11.formulario.controls["nomeIgreja"].setValue(null);

                _this11.formulario.controls["igrejaId"].setValue(null);

                _this11.buscarCidades(resultModal.data.sigla);
              }
            });
          });
        }
      }, {
        key: "abrirModalCidade",
        value: function abrirModalCidade() {
          var _this12 = this;

          var modal = this.modalCtrl.create({
            component: _cidade_modal_cidade_modal_cidade_page__WEBPACK_IMPORTED_MODULE_14__["ModalCidadePage"],
            componentProps: {
              cidades: this.cidadeList
            },
            backdropDismiss: false
          }).then(function (modal) {
            modal.present();
            modal.onWillDismiss().then(function (resultModal) {
              if (resultModal.data) {
                _this12.formulario.value.cidade = resultModal.data;
                _this12.formulario.value.bairro = null;
                _this12.formulario.value.nomeIgreja = null;
                _this12.formulario.value.igrejaId = null;
              }
            });
          });
        }
      }, {
        key: "abrirModalBairro",
        value: function abrirModalBairro() {
          var _this13 = this;

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
              if (resultModal.data) {
                _this13.formulario.value.bairro = resultModal.data;
                _this13.formulario.value.nomeIgreja = null;
                _this13.formulario.value.igrejaId = null;
              }
            });
          });
        }
      }, {
        key: "abrirModalIgreja",
        value: function abrirModalIgreja() {
          var _this14 = this;

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
              if (resultModal.data) {
                _this14.formulario.value.nomeIgreja = resultModal.data.nomeIgreja;
                _this14.formulario.value.igrejaId = resultModal.data.id;
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
          var _this15 = this;

          this.callNumber.callNumber(telefone, true).then(function () {})["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this15.toastCtrl);
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
        } // ShareGeneric(parameter){
        //     const url = this.link
        //     const text = parameter+'\n'
        //     this.socialSharing.share(text, 'MEDIUM', null, url)
        //   }

      }, {
        key: "ShareGeneric",
        value: function ShareGeneric(prestador) {
          var texto = prestador.nome + " / " + prestador.telefone;
          this.socialSharing.share(texto, null, null);
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
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_22__["SocialSharing"]
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
          var _this16 = this;

          var ref = this.db.collection("favorito").doc(usuarioId);
          var obj = [{
            prestadorUsuarioId: prestadorUsuarioId,
            usuarioId: usuarioId
          }];
          return new Promise(function (retorno, reject) {
            _this16.db.runTransaction(function (transaction) {
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
          var _this17 = this;

          var ref = this.db.collection("favorito").doc(usuarioId);
          var obj = [{
            prestadorUsuarioId: prestadorUsuarioId,
            usuarioId: usuarioId
          }];
          return new Promise(function (retorno, reject) {
            _this17.db.runTransaction(function (transaction) {
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