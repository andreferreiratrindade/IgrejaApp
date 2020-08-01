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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" menuId=\"mainContent\" side=\"start\">\n      <ion-header>\n        <ion-toolbar color=\"default\">\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n\n          <span *ngIf=\"usuarioLogado\">\n            <ion-list-header>\n              <h3>\n                {{recuperaDadosUsuario.nome.split(' ')[0]}}</h3>\n            </ion-list-header>\n            <ion-note>{{recuperaDadosUsuario.email}}</ion-note>\n\n            <ion-chip color=\"tertiary\" (click)=\"logoff()\" slot=\"close\" routerDirection=\"root\"\n              routerLink=\"prestador-consultar\" size=\"6\">\n              <ion-label>Sair</ion-label>\n              <ion-icon name=\"log-out-outline\"></ion-icon>\n            </ion-chip>\n          </span>\n\n          <ion-menu-toggle *ngFor=\"let p of paginas\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"p.url\" detail=\"false\">\n              <ion-icon style=\"padding-right: 15px;\" class=\"{{p.icon}}\" ></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n            \n          </ion-menu-toggle>\n\n        </ion-list>\n        <ion-footer class=\"ion-no-border\">\n          <ion-toolbar>\n            <ion-label>{{ version }}</ion-label>\n          </ion-toolbar>\n        </ion-footer>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\">\n\n      <app-tablinks></app-tablinks>\n\n    </ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccordionAccordionAccordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #wrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMensagemValidacaoMensagemValidacaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"error-container\">\n  <ng-container *ngFor=\"let validation of validation_messages_object\">\n    <div class=\"error-message\" *ngIf=\"form.get(nomeCampo).hasError(validation.type) && (form.get(nomeCampo).dirty || form.get(nomeCampo).touched)\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <span>{{ validation.message }}</span>\n    </div>\n  </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/textoCortado/texto-cortado/texto-cortado.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/textoCortado/texto-cortado/texto-cortado.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTextoCortadoTextoCortadoTextoCortadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"end\" *ngIf=\"texto.length > qtdCaracteres\">\n <h3>{{textoCortado}}...</h3> \n  <ion-button (click)=presentPopover($event) interface=\"popover\">\n    <ion-icon name=\"eye-outline\" color=\"dark\"></ion-icon>\n  </ion-button>\n</ion-buttons>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tablinks/tablinks.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tablinks/tablinks.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTablinksTablinksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" >\n    <ion-tab-button [tab]=\"item.tab\" *ngFor=\"let item of itens\">\n      <ion-icon [name]=\"item.icon\"></ion-icon>\n      <ion-label>{{item.descricao}}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./providers/AuthGuard/UsuarioLogadoValidation */
    "./src/app/providers/AuthGuard/UsuarioLogadoValidation.ts");
    /* harmony import */


    var _providers_AuthGuard_PerfilValidation_AdministradorSistema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./providers/AuthGuard/PerfilValidation_AdministradorSistema */
    "./src/app/providers/AuthGuard/PerfilValidation_AdministradorSistema.ts");
    /* harmony import */


    var _providers_AuthGuard_PerfilValidation_AdministradorIgreja__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./providers/AuthGuard/PerfilValidation_AdministradorIgreja */
    "./src/app/providers/AuthGuard/PerfilValidation_AdministradorIgreja.ts");
    /* harmony import */


    var _pages_tablinks_tablinks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/tablinks/tablinks.page */
    "./src/app/pages/tablinks/tablinks.page.ts");

    var routes = [{
      path: 'tablinks',
      component: _pages_tablinks_tablinks_page__WEBPACK_IMPORTED_MODULE_6__["TablinksPage"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
          [__webpack_require__.e("default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"), __webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
          "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
            return m.PrestadorConsultarPageModule;
          });
        }
      }, {
        path: 'Perfil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
          [__webpack_require__.e("default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"), __webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
          "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
            return m.PrestadorConsultarPageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ./folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }, {
      path: 'criar-igreja',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorSistema__WEBPACK_IMPORTED_MODULE_4__["PerfilValidation_AdministradorSistema"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-criar-igreja-criar-igreja-module */
        [__webpack_require__.e("default~pages-gerenciarIgreja-criar-igreja-criar-igreja-module~pages-gerenciarIgreja-manter-igreja-m~76532cac"), __webpack_require__.e("pages-gerenciarIgreja-criar-igreja-criar-igreja-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/criar-igreja/criar-igreja.module */
        "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts")).then(function (m) {
          return m.CriarIgrejaPageModule;
        });
      }
    }, {
      path: 'prestador-consultar',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
        [__webpack_require__.e("default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"), __webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
        "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
          return m.PrestadorConsultarPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
        [__webpack_require__.e("default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"), __webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
        "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
          return m.PrestadorConsultarPageModule;
        });
      }
    }, {
      path: 'visualizar-prestador',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-visualizar-prestador-visualizar-prestador-module */
        [__webpack_require__.e("default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"), __webpack_require__.e("pages-prestador-visualizar-prestador-visualizar-prestador-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/visualizar-prestador/visualizar-prestador.module */
        "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.module.ts")).then(function (m) {
          return m.VisualizarPrestadorPageModule;
        });
      }
    }, {
      path: 'consultar-prestador-adm',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorIgreja__WEBPACK_IMPORTED_MODULE_5__["PerfilValidation_AdministradorIgreja"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module */
        "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts")).then(function (m) {
          return m.ConsultarPrestadorAdmPageModule;
        });
      }
    }, {
      path: 'modal-servicos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-servico-modal-servicos-modal-servicos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-servico-modal-servicos-modal-servicos-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/servico/modal-servicos/modal-servicos.module */
        "./src/app/pages/servico/modal-servicos/modal-servicos.module.ts")).then(function (m) {
          return m.ModalServicosPageModule;
        });
      }
    }, {
      path: 'modal-cidade',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cidade-modal-cidade-modal-cidade-module */
        "pages-cidade-modal-cidade-modal-cidade-module").then(__webpack_require__.bind(null,
        /*! ./pages/cidade/modal-cidade/modal-cidade.module */
        "./src/app/pages/cidade/modal-cidade/modal-cidade.module.ts")).then(function (m) {
          return m.ModalCidadePageModule;
        });
      }
    }, {
      path: 'modal-bairro',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-bairro-modal-bairro-modal-bairro-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-bairro-modal-bairro-modal-bairro-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/bairro/modal-bairro/modal-bairro.module */
        "./src/app/pages/bairro/modal-bairro/modal-bairro.module.ts")).then(function (m) {
          return m.ModalBairroPageModule;
        });
      }
    }, {
      path: 'modal-uf',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-UF-modal-uf-modal-uf-module */
        "pages-UF-modal-uf-modal-uf-module").then(__webpack_require__.bind(null,
        /*! ./pages/UF/modal-uf/modal-uf.module */
        "./src/app/pages/UF/modal-uf/modal-uf.module.ts")).then(function (m) {
          return m.ModalUFPageModule;
        });
      }
    }, {
      path: 'modal-igreja',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-igreja-modal-igreja-modal-igreja-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-igreja-modal-igreja-modal-igreja-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/igreja/modal-igreja/modal-igreja.module */
        "./src/app/pages/igreja/modal-igreja/modal-igreja.module.ts")).then(function (m) {
          return m.ModalIgrejaPageModule;
        });
      }
    }, {
      path: 'modal-situacao-prestador',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manterPrestadores-modalSituacaoPrestador-modal-situacao-prestador-modal-situacao-prestador-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-manterPrestadores-modalSituacaoPrestador-modal-situacao-prestador-modal-situacao-prestador-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterPrestadores/modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.module */
        "./src/app/pages/gerenciarIgreja/manterPrestadores/modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.module.ts")).then(function (m) {
          return m.ModalSituacaoPrestadorPageModule;
        });
      }
    }, {
      path: 'manter-prestador',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorIgreja__WEBPACK_IMPORTED_MODULE_5__["PerfilValidation_AdministradorIgreja"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module */
        "pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module").then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module */
        "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module.ts")).then(function (m) {
          return m.ManterPrestadorPageModule;
        });
      }
    }, {
      path: 'dados-empresa',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module */
        "pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module */
        "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module.ts")).then(function (m) {
          return m.DadosEmpresaPageModule;
        });
      }
    }, {
      path: 'prestador-local-atendimento',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module */
        [__webpack_require__.e("default~pages-prestador-prestadorCadastro-adicionar-local-atendimento-adicionar-local-atendimento-mo~e78cd7bd"), __webpack_require__.e("pages-prestador-prestadorCadastro-local-atendimento-local-atendimento-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module */
        "./src/app/pages/prestador/prestadorCadastro/local-atendimento/local-atendimento.module.ts")).then(function (m) {
          return m.LocalAtendimentoPageModule;
        });
      }
    }, {
      path: 'prestador-cadastro-servico',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-prestador-cadastro-servico-prestador-cadastro-servico-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-servico/prestador-cadastro-servico.module.ts")).then(function (m) {
          return m.PrestadorCadastroServicoPageModule;
        });
      }
    }, {
      path: 'prestador-cadastro-igreja-vinculo',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-prestador-cadastro-igreja-vinculo-prestador-cadastro-igreja-vinculo-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-igreja-vinculo/prestador-cadastro-igreja-vinculo.module.ts")).then(function (m) {
          return m.PrestadorCadastroIgrejaVinculoPageModule;
        });
      }
    }, {
      path: 'prestador-cadastro-finalizar',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-finalizar-prestador-cadastro-finalizar-module */
        "pages-prestador-prestadorCadastro-prestador-cadastro-finalizar-prestador-cadastro-finalizar-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.module.ts")).then(function (m) {
          return m.PrestadorCadastroFinalizarPageModule;
        });
      }
    }, {
      path: 'meu-cadastro-prestador',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestador-prestadorCadastro-MeuCadastroPrestador-meu-cadastro-prestador-meu-cadastro-prestador-module */
        "pages-prestador-prestadorCadastro-MeuCadastroPrestador-meu-cadastro-prestador-meu-cadastro-prestador-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.module */
        "./src/app/pages/prestador/prestadorCadastro/MeuCadastroPrestador/meu-cadastro-prestador/meu-cadastro-prestador.module.ts")).then(function (m) {
          return m.MeuCadastroPrestadorPageModule;
        });
      }
    }, {
      path: 'mantem-servico',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorSistema__WEBPACK_IMPORTED_MODULE_4__["PerfilValidation_AdministradorSistema"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module */
        "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module.ts")).then(function (m) {
          return m.MantemServicoPageModule;
        });
      }
    }, {
      path: 'adiciona-servico',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorSistema__WEBPACK_IMPORTED_MODULE_4__["PerfilValidation_AdministradorSistema"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manterServicos-adiciona-servico-adiciona-servico-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-manterServicos-adiciona-servico-adiciona-servico-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterServicos/adiciona-servico/adiciona-servico.module */
        "./src/app/pages/gerenciarIgreja/manterServicos/adiciona-servico/adiciona-servico.module.ts")).then(function (m) {
          return m.AdicionaServicoPageModule;
        });
      }
    }, {
      path: 'modulo-prestador-home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-gerenciarIgreja-moduloPrestador-home-home-module */
        "pages-gerenciarIgreja-moduloPrestador-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/moduloPrestador/home/home.module */
        "./src/app/pages/gerenciarIgreja/moduloPrestador/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'tablinks',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tablinks-tablinks-module */
        "pages-tablinks-tablinks-module").then(__webpack_require__.bind(null,
        /*! ./pages/tablinks/tablinks.module */
        "./src/app/pages/tablinks/tablinks.module.ts")).then(function (m) {
          return m.TablinksPageModule;
        });
      }
    }, {
      path: 'adicionar-local-atendimento',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-adicionar-local-atendimento-adicionar-local-atendimento-module */
        [__webpack_require__.e("default~pages-prestador-prestadorCadastro-adicionar-local-atendimento-adicionar-local-atendimento-mo~e78cd7bd"), __webpack_require__.e("pages-prestador-prestadorCadastro-adicionar-local-atendimento-adicionar-local-atendimento-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/adicionar-local-atendimento/adicionar-local-atendimento.module */
        "./src/app/pages/prestador/prestadorCadastro/adicionar-local-atendimento/adicionar-local-atendimento.module.ts")).then(function (m) {
          return m.AdicionarLocalAtendimentoPageModule;
        });
      }
    }, {
      path: 'editar-servico',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestador-prestadorCadastro-editar-servico-editar-servico-module */
        "pages-prestador-prestadorCadastro-editar-servico-editar-servico-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/editar-servico/editar-servico.module */
        "./src/app/pages/prestador/prestadorCadastro/editar-servico/editar-servico.module.ts")).then(function (m) {
          return m.EditarServicoPageModule;
        });
      }
    }, {
      path: 'manter-igreja',
      canActivate: [_providers_AuthGuard_PerfilValidation_AdministradorSistema__WEBPACK_IMPORTED_MODULE_4__["PerfilValidation_AdministradorSistema"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manter-igreja-manter-igreja-module */
        [__webpack_require__.e("default~pages-gerenciarIgreja-criar-igreja-criar-igreja-module~pages-gerenciarIgreja-manter-igreja-m~76532cac"), __webpack_require__.e("pages-gerenciarIgreja-manter-igreja-manter-igreja-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manter-igreja/manter-igreja.module */
        "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.module.ts")).then(function (m) {
          return m.ManterIgrejaPageModule;
        });
      }
    }, {
      path: 'sign-up',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-usuario-novo-novo-module */
        "pages-usuario-novo-novo-module").then(__webpack_require__.bind(null,
        /*! ./pages/usuario/novo/novo.module */
        "./src/app/pages/usuario/novo/novo.module.ts")).then(function (m) {
          return m.NovoPageModule;
        });
      }
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-usuario-login-login-module */
        "pages-usuario-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/usuario/login/login.module */
        "./src/app/pages/usuario/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'profile',
      canActivate: [_providers_AuthGuard_UsuarioLogadoValidation__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogadoValidation"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-usuario-meu-usuario-meu-usuario-module */
        "pages-usuario-meu-usuario-meu-usuario-module").then(__webpack_require__.bind(null,
        /*! ./pages/usuario/meu-usuario/meu-usuario.module */
        "./src/app/pages/usuario/meu-usuario/meu-usuario.module.ts")).then(function (m) {
          return m.MeuUsuarioPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat;\n}\n\n.marginRight10px {\n  --margin-right:10px;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-card-content {\n  padding-left: 0px !important;\n}\n\ncard-content-ios {\n  --padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNEQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsNEJBQUE7QUNKRjs7QURPQTtFQUNFLDhCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4ubWFyZ2luUmlnaHQxMHB4e1xuICAtLW1hcmdpbi1yaWdodDoxMHB4O1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5jYXJkLWNvbnRlbnQtaW9ze1xuICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cblxufVxuXG5cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5tYXJnaW5SaWdodDEwcHgge1xuICAtLW1hcmdpbi1yaWdodDoxMHB4O1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5jYXJkLWNvbnRlbnQtaW9zIHtcbiAgLS1wYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config */
    "./src/app/config.ts");
    /* harmony import */


    var _providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_environments_appVersion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/appVersion */
    "./src/environments/appVersion.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, firebaseAuthService, router, usuarioService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.selectedIndex = 0;
        this.version = src_environments_appVersion__WEBPACK_IMPORTED_MODULE_10__["appVersion"].version;
        this.usuarioLogado = {};
        this.paginas = [];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.usuarioService.RecuperaUsuarioObservable().subscribe(function (data) {
            _this2.usuarioLogado = data;
            _this2.paginas = _this2.RecuperaPaginasMenuLateral().filter(function (page) {
              var retorno = true;

              if (page.perfil) {
                retorno = page.perfil.filter(function (x) {
                  var retorno = false;

                  if (_this2.usuarioLogado) {
                    var perfisDoUsuario = _this2.usuarioLogado.perfis;

                    if (perfisDoUsuario) {
                      retorno = perfisDoUsuario.filter(function (perfis) {
                        return perfis == x;
                      }).length > 0;
                    }
                  }

                  return retorno;
                }).length > 0;
              }

              if (page.perfilInverso) {
                if (_this2.usuarioLogado && _this2.usuarioLogado.perfis) {
                  retorno = _this2.usuarioLogado.perfis.filter(function (pfUser) {
                    return page.perfilInverso.includes(Number(pfUser));
                  }).length == 0;
                }
              }

              return retorno;
            });
          });
          this.usuarioService.recuperaUsuarioLogado().then(function () {
            console.log(_this2.paginas);
          });
        }
        /*
        get paginas() {
          
          let paginas =  this.RecuperaPaginasMenuLateral().filter(page => {
            let retorno = true;
            if (page.perfil) {
              retorno = page.perfil.filter(x => {
                let retorno = false;
                if (this.usuarioLogado) {
                  let perfisDoUsuario = this.usuarioLogado.perfis
                     if (perfisDoUsuario) {
                    retorno = perfisDoUsuario.filter(perfis => {
                      return perfis == x;
                    }).length > 0;
                  }
                }
                return retorno;
              }).length > 0;
            }
               // if (page.perfilInverso) {
               //   retorno = page.perfilInverso.filter(x => {
            //     let retorno = false;
            //     if (this.usuarioLogado) {
            //       let perfisDoUsuario = this.usuarioLogado.perfis
               //       if (perfisDoUsuario) {
            //         retorno = perfisDoUsuario.filter(perfis => {
            //           return perfis != x;
            //         }).length > 0;
            //       }
            //     }
               //     return retorno;
            //   }).length > 0;
            // }
            return retorno
          });
          console.log(paginas);
          return paginas;
        }*/

      }, {
        key: "logoff",
        value: function logoff() {
          this.firebaseAuthService.signOut();
          this.usuarioService.recuperaUsuarioLogado();
          this.router.navigate(['/home']);
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['sign-in']);
        }
      }, {
        key: "RecuperaPaginasMenuLateral",
        value: function RecuperaPaginasMenuLateral() {
          return [{
            title: 'Consultar Prestador',
            url: 'prestador-consultar',
            icon: 'fas fa-search'
          }, {
            title: 'Seja um Prestador',
            url: 'dados-empresa',
            icon: 'fas fa-toolbox',
            perfilInverso: [_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.Prestador, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.AdministradorSistema, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.AdministradorIgreja]
          }, {
            title: 'Manter Igreja',
            url: 'manter-igreja',
            icon: 'fas fa-church',
            perfil: [_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.AdministradorSistema]
          }, {
            title: 'Manter Prestadores',
            url: 'consultar-prestador-adm',
            icon: 'fas fa-tools',
            perfil: [_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.AdministradorIgreja]
          }, {
            title: 'Meu Cadastro Prestador',
            url: 'meu-cadastro-prestador',
            icon: 'fas fa-tools',
            perfil: [_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.Prestador]
          }, {
            title: 'Manter Serviços',
            url: 'mantem-servico',
            icon: 'fas fa-tools',
            perfil: [_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PerfilUsuario.AdministradorSistema]
          }];
        }
      }, {
        key: "recuperaDadosUsuario",
        get: function get() {
          var _a;

          return (_a = _config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) !== null && _a !== void 0 ? _a : {
            nome: "",
            email: ""
          };
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _providers_base_provider_base_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./providers/base-provider/base-provider */
    "./src/app/providers/base-provider/base-provider.ts");
    /* harmony import */


    var _providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _pipes_pipes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/pipes */
    "./src/app/pipes/pipes.ts");
    /* harmony import */


    var _pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pipes/sortBy/sort-by.pipe */
    "./src/app/pipes/sortBy/sort-by.pipe.ts");

    firebase_app__WEBPACK_IMPORTED_MODULE_19__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'ios'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"], _pipes_pipes__WEBPACK_IMPORTED_MODULE_22__["PipesModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_15__["BuscarCEPService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__["CallNumber"], _providers_base_provider_base_provider__WEBPACK_IMPORTED_MODULE_14__["BaseProvider"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__["SocialSharing"], _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseAuthService"], _pipes_sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_23__["SortByPipe"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/accordion/accordion/accordion.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/accordion/accordion/accordion.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAccordionAccordionAccordionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "accordion-list .wrapper {\n  transition: 0.2s linear;\n}\naccordion-list .collapsed {\n  height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHVCQUFBO0FDRFI7QURJSTtFQUNJLG9CQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWNjb3JkaW9uLWxpc3Qge1xuIFxuICAgIC53cmFwcGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gICAgfSAgIFxuIFxuICAgIC5jb2xsYXBzZWQge1xuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gXG59IiwiYWNjb3JkaW9uLWxpc3QgLndyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn1cbmFjY29yZGlvbi1saXN0IC5jb2xsYXBzZWQge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/accordion/accordion/accordion.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/accordion/accordion/accordion.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AccordionComponent */

  /***/
  function srcAppComponentsAccordionAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
      return AccordionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccordionComponent = /*#__PURE__*/function () {
      function AccordionComponent(renderer) {
        _classCallCheck(this, AccordionComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
      }

      _createClass(AccordionComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return AccordionComponent;
    }();

    AccordionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], AccordionComponent.prototype, "expandWrapper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded")], AccordionComponent.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight")], AccordionComponent.prototype, "expandHeight", void 0);
    AccordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accordion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accordion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accordion.component.scss */
      "./src/app/components/accordion/accordion/accordion.component.scss"))["default"]]
    })], AccordionComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _mensagem_validacao_mensagem_validacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mensagem-validacao/mensagem-validacao.component */
    "./src/app/components/mensagem-validacao/mensagem-validacao.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _accordion_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accordion/accordion/accordion.component */
    "./src/app/components/accordion/accordion/accordion.component.ts");
    /* harmony import */


    var _textoCortado_texto_cortado_texto_cortado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./textoCortado/texto-cortado/texto-cortado.component */
    "./src/app/components/textoCortado/texto-cortado/texto-cortado.component.ts");
    /* harmony import */


    var _textoCortado_texto_cortado_textoPropover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./textoCortado/texto-cortado/textoPropover */
    "./src/app/components/textoCortado/texto-cortado/textoPropover.ts");
    /* harmony import */


    var _pages_tablinks_tablinks_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pages/tablinks/tablinks.page */
    "./src/app/pages/tablinks/tablinks.page.ts");

    var PAGES_COMPONENTS = [_mensagem_validacao_mensagem_validacao_component__WEBPACK_IMPORTED_MODULE_3__["MensagemValidacaoComponent"], _accordion_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__["AccordionComponent"], _textoCortado_texto_cortado_texto_cortado_component__WEBPACK_IMPORTED_MODULE_7__["TextoCortadoComponent"], _textoCortado_texto_cortado_textoPropover__WEBPACK_IMPORTED_MODULE_8__["PopupMenuComponentPopover"], _pages_tablinks_tablinks_page__WEBPACK_IMPORTED_MODULE_9__["TablinksPage"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot()],
      declarations: [PAGES_COMPONENTS],
      exports: [PAGES_COMPONENTS],
      entryComponents: []
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/mensagem-validacao/mensagem-validacao.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/mensagem-validacao/mensagem-validacao.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMensagemValidacaoMensagemValidacaoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvY29tcG9uZW50cy9tZW5zYWdlbS12YWxpZGFjYW8vbWVuc2FnZW0tdmFsaWRhY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnNhZ2VtLXZhbGlkYWNhby9tZW5zYWdlbS12YWxpZGFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FER007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW5zYWdlbS12YWxpZGFjYW8vbWVuc2FnZW0tdmFsaWRhY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IDE2cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/mensagem-validacao/mensagem-validacao.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/mensagem-validacao/mensagem-validacao.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MensagemValidacaoComponent */

  /***/
  function srcAppComponentsMensagemValidacaoMensagemValidacaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensagemValidacaoComponent", function () {
      return MensagemValidacaoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MensagemValidacaoComponent = function MensagemValidacaoComponent() {
      _classCallCheck(this, MensagemValidacaoComponent);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "nomeCampo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "validation_messages_object", void 0);
    MensagemValidacaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensagem-validacao',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mensagem-validacao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mensagem-validacao.component.scss */
      "./src/app/components/mensagem-validacao/mensagem-validacao.component.scss"))["default"]]
    })], MensagemValidacaoComponent);
    /***/
  },

  /***/
  "./src/app/components/textoCortado/texto-cortado/texto-cortado.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/textoCortado/texto-cortado/texto-cortado.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTextoCortadoTextoCortadoTextoCortadoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dG9Db3J0YWRvL3RleHRvLWNvcnRhZG8vdGV4dG8tY29ydGFkby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/textoCortado/texto-cortado/texto-cortado.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/textoCortado/texto-cortado/texto-cortado.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TextoCortadoComponent */

  /***/
  function srcAppComponentsTextoCortadoTextoCortadoTextoCortadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextoCortadoComponent", function () {
      return TextoCortadoComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _textoPropover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./textoPropover */
    "./src/app/components/textoCortado/texto-cortado/textoPropover.ts");

    var TextoCortadoComponent = /*#__PURE__*/function () {
      function TextoCortadoComponent(popoverController) {
        _classCallCheck(this, TextoCortadoComponent);

        this.popoverController = popoverController;
      }

      _createClass(TextoCortadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.textoCortado = this.texto.substring(0, this.qtdCaracteres);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _textoPropover__WEBPACK_IMPORTED_MODULE_3__["PopupMenuComponentPopover"],
                      componentProps: {
                        texto: this.texto
                      },
                      translucent: true,
                      event: ev
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TextoCortadoComponent;
    }();

    TextoCortadoComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextoCortadoComponent.prototype, "texto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextoCortadoComponent.prototype, "qtdCaracteres", void 0);
    TextoCortadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-texto-cortado',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./texto-cortado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/textoCortado/texto-cortado/texto-cortado.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./texto-cortado.component.scss */
      "./src/app/components/textoCortado/texto-cortado/texto-cortado.component.scss"))["default"]]
    })], TextoCortadoComponent);
    /***/
  },

  /***/
  "./src/app/components/textoCortado/texto-cortado/textoPropover.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/textoCortado/texto-cortado/textoPropover.ts ***!
    \************************************************************************/

  /*! exports provided: PopupMenuComponentPopover */

  /***/
  function srcAppComponentsTextoCortadoTextoCortadoTextoPropoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuComponentPopover", function () {
      return PopupMenuComponentPopover;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PopupMenuComponentPopover = /*#__PURE__*/function () {
      function PopupMenuComponentPopover(popoverCtrl, navParams) {
        _classCallCheck(this, PopupMenuComponentPopover);

        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.texto = this.navParams.data.texto;
      }

      _createClass(PopupMenuComponentPopover, [{
        key: "onDismiss",
        value: function onDismiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.popoverCtrl.dismiss();

                  case 3:
                    _context2.next = 7;
                    break;

                  case 5:
                    _context2.prev = 5;
                    _context2.t0 = _context2["catch"](0);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 5]]);
          }));
        }
      }]);

      return PopupMenuComponentPopover;
    }();

    PopupMenuComponentPopover.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    PopupMenuComponentPopover = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "<ion-list interface=\"popover\">\n        <ion-list-header>{{texto}}</ion-list-header>\n  </ion-list>   "
    })], PopupMenuComponentPopover);
    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });

    var Config = /*#__PURE__*/function () {
      function Config() {
        _classCallCheck(this, Config);
      }

      _createClass(Config, [{
        key: "adicionaUsuario",
        value: function adicionaUsuario(u) {
          this.usuario = u;
        }
      }, {
        key: "recuperaUsuario",
        value: function recuperaUsuario() {
          return this.usuario;
        }
      }], [{
        key: "RecuperaInstancia",
        value: function RecuperaInstancia() {
          if (!Config.instance) {
            Config.instance = new Config();
          }

          return Config.instance;
        }
      }]);

      return Config;
    }();
    /***/

  },

  /***/
  "./src/app/helpers/loadingContr.ts":
  /*!*****************************************!*\
    !*** ./src/app/helpers/loadingContr.ts ***!
    \*****************************************/

  /*! exports provided: LoadingContr */

  /***/
  function srcAppHelpersLoadingContrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingContr", function () {
      return LoadingContr;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingContr = /*#__PURE__*/function () {
      /**
       *
       */
      function LoadingContr(loadingController) {
        _classCallCheck(this, LoadingContr);

        this.loadingController = loadingController;
        this.isLoading = false;
      }

      _createClass(LoadingContr, [{
        key: "showLoader",
        value: function showLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    _context3.next = 3;
                    return this.loadingController.create({// duration: 5000,
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this3.isLoading) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Hide the loader if already created otherwise return error

      }, {
        key: "hideLoader",
        value: function hideLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = false;
                    _context4.next = 3;
                    return this.loadingController.dismiss();

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }], [{
        key: "getLoadingContent",
        value: function getLoadingContent() {
          return {
            content: 'Processando.'
          };
        }
      }]);

      return LoadingContr;
    }();

    LoadingContr.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }];
    };

    LoadingContr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], LoadingContr);
    /***/
  },

  /***/
  "./src/app/pages/tablinks/tablinks.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/tablinks/tablinks.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTablinksTablinksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxpbmtzL3RhYmxpbmtzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/tablinks/tablinks.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tablinks/tablinks.page.ts ***!
    \*************************************************/

  /*! exports provided: TablinksPage */

  /***/
  function srcAppPagesTablinksTablinksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablinksPage", function () {
      return TablinksPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TablinksPage = /*#__PURE__*/function () {
      function TablinksPage() {
        _classCallCheck(this, TablinksPage);

        this.itens = [];
        this.itens = this.RecuperaPaginasMenuLateral();
      }

      _createClass(TablinksPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itens = this.RecuperaPaginasMenuLateral();
        }
      }, {
        key: "RecuperaPaginasMenuLateral",
        value: function RecuperaPaginasMenuLateral() {
          return [{
            tab: 'prestador-consultar',
            descricao: 'Prestadores',
            icon: 'search-sharp'
          }, {
            tab: 'profile',
            descricao: 'Meu Perfil',
            icon: 'person'
          }];
        }
      }]);

      return TablinksPage;
    }();

    TablinksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tablinks',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablinks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tablinks/tablinks.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tablinks.page.scss */
      "./src/app/pages/tablinks/tablinks.page.scss"))["default"]]
    })], TablinksPage);
    /***/
  },

  /***/
  "./src/app/pipes/mask-telefone.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/mask-telefone.pipe.ts ***!
    \*********************************************/

  /*! exports provided: MaskTelefonePipe */

  /***/
  function srcAppPipesMaskTelefonePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskTelefonePipe", function () {
      return MaskTelefonePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MaskTelefonePipe = /*#__PURE__*/function () {
      function MaskTelefonePipe() {
        _classCallCheck(this, MaskTelefonePipe);
      }

      _createClass(MaskTelefonePipe, [{
        key: "transform",
        value: function transform(rawNum) {
          var value;
          var valueStr = rawNum ? rawNum.toString() : null;

          if (valueStr && valueStr.toString().length == 11) {
            value = "(" + valueStr.substring(0, 2) + ") " + valueStr.substring(2, 7) + "-" + valueStr.substring(7, 11);
          }

          if (valueStr && valueStr.toString().length == 10) {
            value = "(" + valueStr.substring(0, 2) + ") " + valueStr.substring(2, 6) + "-" + valueStr.substring(6, 10);
          }

          return value;
        }
      }]);

      return MaskTelefonePipe;
    }();

    MaskTelefonePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'maskTelefone'
    })], MaskTelefonePipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.ts":
  /*!********************************!*\
    !*** ./src/app/pipes/pipes.ts ***!
    \********************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _mask_telefone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mask-telefone.pipe */
    "./src/app/pipes/mask-telefone.pipe.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sortBy/sort-by.pipe */
    "./src/app/pipes/sortBy/sort-by.pipe.ts");

    var PipesModule_1;

    var PipesModule = PipesModule_1 = /*#__PURE__*/function () {
      function PipesModule() {
        _classCallCheck(this, PipesModule);
      }

      _createClass(PipesModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: PipesModule_1,
            providers: []
          };
        }
      }]);

      return PipesModule;
    }();

    PipesModule = PipesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_mask_telefone_pipe__WEBPACK_IMPORTED_MODULE_2__["MaskTelefonePipe"], _sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByPipe"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      exports: [_mask_telefone_pipe__WEBPACK_IMPORTED_MODULE_2__["MaskTelefonePipe"], _sortBy_sort_by_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/pipes/sortBy/sort-by.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/sortBy/sort-by.pipe.ts ***!
    \**********************************************/

  /*! exports provided: SortByPipe */

  /***/
  function srcAppPipesSortBySortByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByPipe", function () {
      return SortByPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /*
     *ngFor="let c of oneDimArray | sortBy:'asc'"
     *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
    */


    var SortByPipe = /*#__PURE__*/function () {
      function SortByPipe() {
        _classCallCheck(this, SortByPipe);
      }

      _createClass(SortByPipe, [{
        key: "transform",
        value: function transform(array, field) {
          if (!Array.isArray(array)) {
            return;
          }

          array.sort(function (a, b) {
            if (a[field] < b[field]) {
              return -1;
            } else if (a[field] > b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return array;
        }
      }]);

      return SortByPipe;
    }();

    SortByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sortBy'
    })], SortByPipe);
    /***/
  },

  /***/
  "./src/app/providers/AuthGuard/PerfilValidation_AdministradorIgreja.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/providers/AuthGuard/PerfilValidation_AdministradorIgreja.ts ***!
    \*****************************************************************************/

  /*! exports provided: PerfilValidation_AdministradorIgreja */

  /***/
  function srcAppProvidersAuthGuardPerfilValidation_AdministradorIgrejaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilValidation_AdministradorIgreja", function () {
      return PerfilValidation_AdministradorIgreja;
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


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");

    var PerfilValidation_AdministradorIgreja = /*#__PURE__*/function () {
      function PerfilValidation_AdministradorIgreja(router, usuarioService, loadingControll) {
        _classCallCheck(this, PerfilValidation_AdministradorIgreja);

        this.router = router;
        this.usuarioService = usuarioService;
        this.loadingControll = loadingControll;
      }

      _createClass(PerfilValidation_AdministradorIgreja, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this4 = this;

          this.loadingControll.showLoader();
          return this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            _this4.loadingControll.hideLoader();

            if (x == null && !src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) {
              _this4.router.navigate(['/sign-in'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
            } else {
              var perfisUsuario = src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().perfis;

              if (!perfisUsuario || perfisUsuario.filter(function (x) {
                return x == src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].PerfilUsuario.AdministradorIgreja;
              }).length == 0) {
                _this4.router.navigate(['/sign-in'], {
                  queryParams: {
                    returnUrl: state.url
                  }
                });
              }
            }

            return true;
          })["catch"](function () {
            _this4.loadingControll.hideLoader();

            return true;
          });
        }
      }]);

      return PerfilValidation_AdministradorIgreja;
    }();

    PerfilValidation_AdministradorIgreja.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"]
      }];
    };

    PerfilValidation_AdministradorIgreja = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PerfilValidation_AdministradorIgreja);
    /***/
  },

  /***/
  "./src/app/providers/AuthGuard/PerfilValidation_AdministradorSistema.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/providers/AuthGuard/PerfilValidation_AdministradorSistema.ts ***!
    \******************************************************************************/

  /*! exports provided: PerfilValidation_AdministradorSistema */

  /***/
  function srcAppProvidersAuthGuardPerfilValidation_AdministradorSistemaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilValidation_AdministradorSistema", function () {
      return PerfilValidation_AdministradorSistema;
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


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PerfilValidation_AdministradorSistema = /*#__PURE__*/function () {
      function PerfilValidation_AdministradorSistema(router, usuarioService, loadingControll, prestadorService, toast) {
        _classCallCheck(this, PerfilValidation_AdministradorSistema);

        this.router = router;
        this.usuarioService = usuarioService;
        this.loadingControll = loadingControll;
        this.prestadorService = prestadorService;
        this.toast = toast;
      }

      _createClass(PerfilValidation_AdministradorSistema, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this5 = this;

          this.loadingControll.showLoader();
          return this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            _this5.loadingControll.hideLoader();

            if (x == null && !src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) {
              _this5.router.navigate(['/sign-in'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
            } else {
              var perfisUsuario = src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().perfis;

              if (!perfisUsuario || perfisUsuario.filter(function (x) {
                return x == src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].PerfilUsuario.AdministradorSistema;
              }).length == 0) {
                _this5.router.navigate(['/sign-in'], {
                  queryParams: {
                    returnUrl: state.url
                  }
                });
              }
            }

            return true;
          })["catch"](function () {
            _this5.loadingControll.hideLoader();

            return true;
          });
        }
      }]);

      return PerfilValidation_AdministradorSistema;
    }();

    PerfilValidation_AdministradorSistema.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"]
      }, {
        type: _prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }];
    };

    PerfilValidation_AdministradorSistema = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PerfilValidation_AdministradorSistema);
    /***/
  },

  /***/
  "./src/app/providers/AuthGuard/UsuarioLogadoValidation.ts":
  /*!****************************************************************!*\
    !*** ./src/app/providers/AuthGuard/UsuarioLogadoValidation.ts ***!
    \****************************************************************/

  /*! exports provided: UsuarioLogadoValidation */

  /***/
  function srcAppProvidersAuthGuardUsuarioLogadoValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioLogadoValidation", function () {
      return UsuarioLogadoValidation;
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


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var UsuarioLogadoValidation = /*#__PURE__*/function () {
      function UsuarioLogadoValidation(router, usuarioService, loadingControll) {
        _classCallCheck(this, UsuarioLogadoValidation);

        this.router = router;
        this.usuarioService = usuarioService;
        this.loadingControll = loadingControll;
      }

      _createClass(UsuarioLogadoValidation, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this6 = this;

          this.loadingControll.showLoader();
          return this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            _this6.loadingControll.hideLoader();

            if (x == null && !src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) {
              _this6.router.navigate(['/sign-in'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
            }

            return true;
          })["catch"](function () {
            _this6.loadingControll.showLoader();

            return true;
          });
        }
      }]);

      return UsuarioLogadoValidation;
    }();

    UsuarioLogadoValidation.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"]
      }];
    };

    UsuarioLogadoValidation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioLogadoValidation);
    /***/
  },

  /***/
  "./src/app/providers/base-provider/base-provider.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/base-provider/base-provider.ts ***!
    \**********************************************************/

  /*! exports provided: BaseProvider */

  /***/
  function srcAppProvidersBaseProviderBaseProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseProvider", function () {
      return BaseProvider;
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


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var BaseProvider = /*#__PURE__*/function () {
      function BaseProvider(http) {
        _classCallCheck(this, BaseProvider);

        this.http = http;
      }

      _createClass(BaseProvider, [{
        key: "apiGet",
        value: function apiGet(url) {
          console.log(url);
          return this.http.get(url).toPromise().then(function (data) {
            return data.json();
          })["catch"](this.handleError);
        }
      }, {
        key: "apiPost",
        value: function apiPost(url, obj) {// return this.http
          //   .post(Config.apiUrl + url, obj, this.getRequestOptions())
          //   .toPromise()
          //   .then(data => {
          //     return data.json();
          //   })
          //   .catch(this.handleError);
        }
      }, {
        key: "getRequestOptions",
        value: function getRequestOptions() {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          headers.append('Access-Control-Allow-Methods', 'GET'); // headers.append('Authentication', Config.token);

          return new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: headers
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error); // return Observable.throw(error.json() || 'Server error');
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res.json();
          return body || {};
        }
      }]);

      return BaseProvider;
    }();

    BaseProvider.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    BaseProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BaseProvider);
    /***/
  },

  /***/
  "./src/app/providers/base-provider/firebase-auth-service.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/providers/base-provider/firebase-auth-service.service.ts ***!
    \**************************************************************************/

  /*! exports provided: FirebaseAuthService */

  /***/
  function srcAppProvidersBaseProviderFirebaseAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function () {
      return FirebaseAuthService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var FirebaseAuthService = /*#__PURE__*/function () {
      function FirebaseAuthService(angularFire, platform) {
        _classCallCheck(this, FirebaseAuthService);

        this.angularFire = angularFire;
        this.platform = platform;
        this.redirectResult = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(FirebaseAuthService, [{
        key: "verificaUsuarioLogado",
        value: function verificaUsuarioLogado() {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.angularFire.onAuthStateChanged(function (usr) {
              return resolve(usr);
            });
          });
        }
        /*
            // when using signInWithRedirect, this listens for the redirect results
            this.angularFire.getRedirectResult()
            .then((result) => {
              // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
              if (result.user) {
                this.setProviderAdditionalInfo(result.additionalUserInfo.profile);
                this.currentUser = result.user;
                this.redirectResult.next(result);
              }
            }, (error) => {
              this.redirectResult.next({error: error.code});
            });*/

      }, {
        key: "getRedirectResult",
        value: function getRedirectResult() {
          return this.redirectResult.asObservable();
        }
      }, {
        key: "setProviderAdditionalInfo",
        value: function setProviderAdditionalInfo(additionalInfo) {
          this.userProviderAdditionalInfo = Object.assign({}, additionalInfo);
        } //   public getProfileData() {
        //   const userModel = new ProfileModel();
        //   let providerData: any = this.currentUser.providerData[0];
        //   if (this.userProviderAdditionalInfo) {
        //     providerData = { ...providerData, ...this.userProviderAdditionalInfo };
        //   }
        //   // Default imgs are too small and our app needs a bigger image
        //   switch (providerData.providerId) {
        //     case 'facebook.com':
        //       userModel.image = providerData.photoURL + '?height=400';
        //       break;
        //     case 'password':
        //       userModel.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
        //       break;
        //     case 'twitter.com':
        //       userModel.image = providerData.photoURL.replace('_normal', '_400x400');
        //       break;
        //     case 'google.com':
        //       userModel.image = providerData.photoURL.split('=')[0];
        //       break;
        //     default:
        //       userModel.image = providerData.photoURL;
        //   }
        //   userModel.name = providerData.name || providerData.displayName || 'What\'s your name?';
        //   userModel.role = 'How would you describe yourself?';
        //   userModel.description = providerData.description || 'Anything else you would like to share with the world?';
        //   userModel.phoneNumber = providerData.phoneNumber || 'Is there a number where I can reach you?';
        //   userModel.email = providerData.email || 'Where can I send you emails?';
        //   userModel.provider = (providerData.providerId !== 'password') ? providerData.providerId : 'Credentials';
        //   return userModel;
        // }
        // Get the currently signed-in user

      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return this.currentUser;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          src_app_config__WEBPACK_IMPORTED_MODULE_6__["Config"].RecuperaInstancia().adicionaUsuario(null);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.angularFire.signOut());
        }
      }, {
        key: "signInWithEmail",
        value: function signInWithEmail(email, password) {
          return this.angularFire.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "signUpWithEmail",
        value: function signUpWithEmail(email, password) {
          return this.angularFire.createUserWithEmailAndPassword(email, password);
        }
      }, {
        key: "socialSignIn",
        value: function socialSignIn(providerName, scopes) {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].OAuthProvider(providerName); // add any permission scope you need

          if (scopes) {
            scopes.forEach(function (scope) {
              provider.addScope(scope);
            });
          }

          if (this.platform.is('desktop')) {
            return this.angularFire.signInWithPopup(provider);
          } else {
            // web but not desktop, for example mobile PWA
            return this.angularFire.signInWithRedirect(provider);
          }
        }
      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider(); // const scopes = ['user_birthday'];

          return this.socialSignIn(provider.providerId);
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
          var scopes = ['profile', 'email'];
          return this.socialSignIn(provider.providerId, scopes);
        }
      }, {
        key: "signInWithTwitter",
        value: function signInWithTwitter() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].TwitterAuthProvider();
          return this.socialSignIn(provider.providerId);
        }
      }]);

      return FirebaseAuthService;
    }();

    FirebaseAuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    FirebaseAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FirebaseAuthService);
    /***/
  },

  /***/
  "./src/app/providers/buscaCEP/buscar-cep.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/buscaCEP/buscar-cep.service.ts ***!
    \**********************************************************/

  /*! exports provided: BuscarCEPService */

  /***/
  function srcAppProvidersBuscaCEPBuscarCepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscarCEPService", function () {
      return BuscarCEPService;
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


    var _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-provider/base-provider */
    "./src/app/providers/base-provider/base-provider.ts");

    var BuscarCEPService = /*#__PURE__*/function () {
      function BuscarCEPService(baseProvider) {
        _classCallCheck(this, BuscarCEPService);

        this.baseProvider = baseProvider;
      }

      _createClass(BuscarCEPService, [{
        key: "buscarCEP",
        value: function buscarCEP(cep) {
          return this.baseProvider.apiGet("https://viacep.com.br/ws/" + cep + "/json/");
        }
      }, {
        key: "RecuperaEnderecoCompleto",
        value: function RecuperaEnderecoCompleto(item) {
          return item.logradouro + ", " + item.bairro + " - " + item.cidade + "/" + item.uf + " - " + item.cep;
        }
      }, {
        key: "buscarMunicipiosPorUF",
        value: function buscarMunicipiosPorUF(uf) {
          var _this8 = this;

          return new Promise(function (result, reject) {
            _this8.baseProvider.apiGet("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios").then(function (retornoApi) {
              var list = retornoApi.map(function (x) {
                return x.nome;
              });
              result(list);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return BuscarCEPService;
    }();

    BuscarCEPService.ctorParameters = function () {
      return [{
        type: _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_2__["BaseProvider"]
      }];
    };

    BuscarCEPService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BuscarCEPService);
    /***/
  },

  /***/
  "./src/app/providers/prestador/prestador.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/prestador/prestador.service.ts ***!
    \**********************************************************/

  /*! exports provided: PrestadorService */

  /***/
  function srcAppProvidersPrestadorPrestadorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorService", function () {
      return PrestadorService;
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


    var src_app_repository_prestador_prestador_rep_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/prestador/prestador-rep-service.service */
    "./src/app/repository/prestador/prestador-rep-service.service.ts");

    var PrestadorService = /*#__PURE__*/function () {
      function PrestadorService(prestadorRepService) {
        _classCallCheck(this, PrestadorService);

        this.prestadorRepService = prestadorRepService;
      }

      _createClass(PrestadorService, [{
        key: "AdicionaLocalAtendimento",
        value: function AdicionaLocalAtendimento(localidade, usuarioId) {
          return this.prestadorRepService.AdicionaLocalAtendimento(localidade, usuarioId);
        }
      }, {
        key: "ExcluirLocalAtendimento",
        value: function ExcluirLocalAtendimento(usuarioId, localidade) {
          return this.prestadorRepService.ExcluirLocalAtendimento(usuarioId, localidade);
        }
      }, {
        key: "RecuperaPestadoresPesquisarPorAdministrador",
        value: function RecuperaPestadoresPesquisarPorAdministrador(situacaoPrestador, igrejaId, usuarioId, igrejasDoAdmin) {
          return this.prestadorRepService.RecuperaPestadoresPesquisarPorAdministrador(situacaoPrestador, igrejaId, usuarioId, igrejasDoAdmin);
        }
      }, {
        key: "recuperaPrestadoresPorIgreja",
        value: function recuperaPrestadoresPorIgreja(igrejaId) {
          return this.prestadorRepService.recuperaPrestadoresPorIgreja(igrejaId);
        }
      }, {
        key: "AtualizaPrestador",
        value: function AtualizaPrestador(usuarioId, obj) {
          return this.prestadorRepService.AtualizaPrestador(usuarioId, obj);
        }
      }, {
        key: "ExcluirServico",
        value: function ExcluirServico(usuarioId, servicoId) {
          return this.prestadorRepService.ExcluirServico(usuarioId, servicoId);
        }
      }, {
        key: "AdicionaServicoAoPrestador",
        value: function AdicionaServicoAoPrestador(usuarioId, servico) {
          return this.prestadorRepService.AdicionaServicoAoPrestador(usuarioId, servico);
        }
      }, {
        key: "RecuperaPrestador",
        value: function RecuperaPrestador(usuarioId) {
          return this.prestadorRepService.RecuperaPrestador(usuarioId);
        }
      }, {
        key: "RecuperaBairroPrestadorDisponiveis",
        value: function RecuperaBairroPrestadorDisponiveis(uf, cidade) {
          return this.prestadorRepService.RecuperaBairroPrestadorDisponiveis(uf, cidade);
        }
      }, {
        key: "RecuperaUfPrestadorDisponiveis",
        value: function RecuperaUfPrestadorDisponiveis() {
          return this.prestadorRepService.recuperaUfPrestadorDisponiveis();
        }
      }, {
        key: "AdicionarNovoPrestador",
        value: function AdicionarNovoPrestador(prestador) {
          return this.prestadorRepService.AdicionaPrestador(prestador);
        }
      }, {
        key: "RecuperaPestadoresPesquisar",
        value: function RecuperaPestadoresPesquisar(ufSelecionado, cidadeSelecionado, bairro, servicoId, igrejaId) {
          return this.prestadorRepService.RecuperaPestadoresPesquisar(ufSelecionado, cidadeSelecionado, bairro, servicoId, igrejaId);
        }
      }, {
        key: "RecuperaCidadePrestadorDisponiveis",
        value: function RecuperaCidadePrestadorDisponiveis(ufSelecionado) {
          return this.prestadorRepService.RecuperaCidadePrestadorDisponiveis(ufSelecionado);
        }
      }, {
        key: "recuperaServicosPorPrestador",
        value: function recuperaServicosPorPrestador(usuarioId) {
          return this.prestadorRepService.recuperaServicosPorPrestador(usuarioId);
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(usuarioId) {
          return this.prestadorRepService.recuperaServicosPorPrestadores(usuarioId);
        }
      }]);

      return PrestadorService;
    }();

    PrestadorService.ctorParameters = function () {
      return [{
        type: src_app_repository_prestador_prestador_rep_service_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorRepServiceService"]
      }];
    };

    PrestadorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrestadorService);
    /***/
  },

  /***/
  "./src/app/providers/usuario/usuario.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/usuario/usuario.service.ts ***!
    \******************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppProvidersUsuarioUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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


    var src_app_repository_usuario_usuario_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/usuario/usuario-rep.service */
    "./src/app/repository/usuario/usuario-rep.service.ts");
    /* harmony import */


    var _base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(usuarioRepository, firebaseAutentication) {
        _classCallCheck(this, UsuarioService);

        this.usuarioRepository = usuarioRepository;
        this.firebaseAutentication = firebaseAutentication;
        this.usuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(UsuarioService, [{
        key: "atualizaUsuario",
        value: function atualizaUsuario(usuarioId, item) {
          return this.usuarioRepository.update(usuarioId, item);
        }
      }, {
        key: "AdicionaUsuarioLogado",
        value: function AdicionaUsuarioLogado(obj) {
          this.usuarioSubject.next(obj);
        }
      }, {
        key: "AdicionaPerfilAoUsuario",
        value: function AdicionaPerfilAoUsuario(usuarioId, perfil) {
          return this.usuarioRepository.AdicionaPerfilAoUsuario(usuarioId, perfil);
        }
      }, {
        key: "RecuperaUsuarioPorEmail",
        value: function RecuperaUsuarioPorEmail(emailAdministrador) {
          return this.usuarioRepository.find({
            elemento: "email",
            tipoComparacao: "==",
            comparacao: emailAdministrador
          });
        }
      }, {
        key: "AdicionarUsuario",
        value: function AdicionarUsuario(item) {
          return this.usuarioRepository.add(item, item.usuarioId);
        }
      }, {
        key: "RecuperaNomeUsuarios",
        value: function RecuperaNomeUsuarios(usuarios) {
          return this.usuarioRepository.find({
            elemento: "usuarioId",
            tipoComparacao: "in",
            comparacao: usuarios
          });
        }
      }, {
        key: "RecuperaUsuarioPorUsuarioId",
        value: function RecuperaUsuarioPorUsuarioId(usuarioId) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.usuarioRepository.findOne(usuarioId).then(function (result) {
              resolve(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaUsuarioObservable",
        value: function RecuperaUsuarioObservable() {
          return this.usuarioSubject;
        }
      }, {
        key: "recuperaUsuarioLogado",
        value: function recuperaUsuarioLogado() {
          var _this10 = this;

          console.log("Verifica Usuario Logado;");
          return new Promise(function (resolve, reject) {
            _this10.firebaseAutentication.verificaUsuarioLogado().then(function (user) {
              if (user != null) {
                _this10.usuarioRepository.findOne(user.uid).then(function (result) {
                  _this10.AdicionaUsuarioLogado(result);

                  src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().adicionaUsuario(result);
                  resolve(result);
                });
              } else {
                _this10.AdicionaUsuarioLogado(null);

                src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().adicionaUsuario(null);
                resolve(null);
              }
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: src_app_repository_usuario_usuario_rep_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioRepService"]
      }, {
        type: _base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
      }];
    };

    UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  },

  /***/
  "./src/app/repository/prestador/prestador-rep-service.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/repository/prestador/prestador-rep-service.service.ts ***!
    \***********************************************************************/

  /*! exports provided: PrestadorRepServiceService */

  /***/
  function srcAppRepositoryPrestadorPrestadorRepServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorRepServiceService", function () {
      return PrestadorRepServiceService;
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
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts"); // import * as firesql from 'firesql';


    var PrestadorRepServiceService = /*#__PURE__*/function (_repository_interface) {
      _inherits(PrestadorRepServiceService, _repository_interface);

      var _super = _createSuper(PrestadorRepServiceService);

      function PrestadorRepServiceService() {
        _classCallCheck(this, PrestadorRepServiceService);

        return _super.apply(this, arguments);
      }

      _createClass(PrestadorRepServiceService, [{
        key: "AdicionaLocalAtendimento",
        value: function AdicionaLocalAtendimento(localidade, usuarioId) {
          var _this11 = this;

          var ref = this.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId);
          return new Promise(function (retorno, reject) {
            _this11.db.runTransaction(function (transaction) {
              return transaction.get(ref).then(function (doc) {
                var prestador = doc.data();

                if (!prestador.locaisAtendimento) {
                  prestador.locaisAtendimento = [localidade];
                  transaction.set(ref, prestador);
                } else {
                  prestador.locaisAtendimento = prestador.locaisAtendimento.filter(function (y) {
                    return y.uf != localidade.uf && y.cidade != localidade.cidade;
                  });
                  prestador.locaisAtendimento.push(localidade);
                  transaction.update(ref, prestador);
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
        key: "ExcluirLocalAtendimento",
        value: function ExcluirLocalAtendimento(usuarioId, localidade) {
          var _this12 = this;

          var ref = this.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId);
          return new Promise(function (retorno, reject) {
            _this12.db.runTransaction(function (transaction) {
              return transaction.get(ref).then(function (doc) {
                var locaisAtendimento = [];
                locaisAtendimento = doc.data().locaisAtendimento;
                locaisAtendimento = locaisAtendimento.filter(function (y) {
                  return y.uf != localidade.uf && y.cidade != localidade.cidade;
                });
                transaction.update(ref, {
                  locaisAtendimento: locaisAtendimento
                });
              });
            }).then(function () {
              retorno();
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "RecuperaPestadoresPesquisarPorAdministrador",
        value: function RecuperaPestadoresPesquisarPorAdministrador(situacaoPrestador, igrejaId, usuarioId, igrejasDoAdmin) {
          var _this13 = this;

          return new Promise(function (retorno, reject) {
            var query = _this13.db.collectionGroup("prestador");

            if (igrejaId) {
              query = query.where("igrejaId", "==", igrejaId);
            } else {
              query = query.where("igrejaId", "in", igrejasDoAdmin);
            }

            if (situacaoPrestador) {
              query = query.where("situacaoPrestador", "==", situacaoPrestador);
            }

            query.get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              retorno(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaPrestadoresPorIgreja",
        value: function recuperaPrestadoresPorIgreja(igrejaId) {
          var _this14 = this;

          return new Promise(function (retorno, reject) {
            _this14.db.collectionGroup("prestador").where("igreja", "==", igrejaId).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              retorno(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "ExcluirServico",
        value: function ExcluirServico(usuarioId, servicoId) {
          var _this15 = this;

          var ref = this.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId);
          return new Promise(function (retorno, reject) {
            _this15.db.runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(ref).then(function (doc) {
                var servicos = [];
                servicos = doc.data().servicos;
                servicos = servicos.filter(function (y) {
                  return y.servicoId != servicoId;
                });
                transaction.update(ref, {
                  servicos: servicos
                });
              });
            }).then(function () {
              retorno();
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "AtualizaPrestador",
        value: function AtualizaPrestador(usuarioId, item) {
          var _this16 = this;

          return new Promise(function (retorno, reject) {
            _this16.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).update(item).then(function (result) {
              retorno(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AdicionaServicoAoPrestador",
        value: function AdicionaServicoAoPrestador(usuarioId, servico) {
          var _this17 = this;

          var ref = this.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId);
          return new Promise(function (retorno, reject) {
            _this17.db.runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(ref).then(function (doc) {
                var prestador = doc.data();

                if (!prestador.servicos) {
                  prestador.servicos = [servico];
                  transaction.set(ref, prestador);
                } else {
                  var _prestador = doc.data();

                  _prestador.servicos = _prestador.servicos.filter(function (y) {
                    return y.servicoId != servico.servicoId;
                  });

                  _prestador.servicos.push(servico);

                  transaction.update(ref, _prestador);
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
        key: "RecuperaPrestador",
        value: function RecuperaPrestador(usuarioId) {
          var _this18 = this;

          return new Promise(function (retorno, reject) {
            _this18.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).get().then(function (result) {
              retorno(result.data());
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(usuarios) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            _this19.db.collectionGroup("servico").where("usuarioId", "in", usuarios).get().then(function (result) {
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
        key: "recuperaServicosPorPrestador",
        value: function recuperaServicosPorPrestador(usuarioId) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            _this20.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).get().then(function (result) {
              var lst = [];

              if (result.data().servicos && result.data().servicos.length > 0) {
                result.data().servicos.forEach(function (doc) {
                  lst.push(doc);
                });
              }

              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaPestadoresPesquisar",
        value: function RecuperaPestadoresPesquisar(ufSelecionado, cidadeSelecionado, bairro, servicoId, igrejaId) {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            var query = _this21.db.collectionGroup("prestador") // .where("locaisAtendimento", "array-contains", { uf: ufSelecionado })
            .where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Ativo);

            query.get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                debugger;
                console.log(doc);

                if (doc.data().locaisAtendimento) {
                  doc.data().locaisAtendimento.forEach(function (x) {
                    if (x.cidade == cidadeSelecionado && x.uf == ufSelecionado) {
                      if (doc.data().servicos) {
                        var servicosTemp = doc.data().servicos.filter(function (y) {
                          return servicoId.includes(y.servicoId);
                        });

                        if (servicosTemp.length > 0 || servicoId.length == 0) {
                          var prestador = doc.data();

                          if (igrejaId) {
                            if (prestador.igrejaId == igrejaId) {
                              lst.push(prestador);
                            }
                          } else {
                            lst.push(prestador);
                          }
                        }
                      }
                    }
                  });
                }
              });
              resolve(lst);
            })["catch"](function (err) {
              console.log(err);
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaCidadePrestadorDisponiveis",
        value: function RecuperaCidadePrestadorDisponiveis(ufSelecionado) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            _this22.db.collectionGroup("prestador").where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Ativo).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                if (doc.data().locaisAtendimento) {
                  doc.data().locaisAtendimento.forEach(function (x) {
                    if (!lst.includes(x.cidade) && x.uf == ufSelecionado) {
                      lst.push(x.cidade);
                    }
                  });
                }
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaUfPrestadorDisponiveis",
        value: function recuperaUfPrestadorDisponiveis() {
          var _this23 = this;

          return new Promise(function (resolve, reject) {
            _this23.db.collectionGroup("prestador").where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Ativo).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                var ufs = doc.data().locaisAtendimento;
                ufs.forEach(function (localAtendimento) {
                  if (!lst.includes(localAtendimento.uf)) {
                    lst.push(localAtendimento.uf);
                  }
                });
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaBairroPrestadorDisponiveis",
        value: function RecuperaBairroPrestadorDisponiveis(uf, cidade) {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            _this24.db.collectionGroup("prestador").where("uf", "==", uf).where("cidade", "==", cidade).where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Ativo).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                if (!lst.includes(doc.data().bairro)) {
                  lst.push(doc.data().bairro);
                }
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AdicionaPrestador",
        value: function AdicionaPrestador(prestador) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            _this25.db.collection("usuario").doc(prestador.usuarioId).collection("prestador").doc(prestador.usuarioId).set(Object.assign({}, prestador), {
              merge: true
            }).then(function (obj) {
              resolve(obj);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return PrestadorRepServiceService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    PrestadorRepServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrestadorRepServiceService);
    /***/
  },

  /***/
  "./src/app/repository/repository-interface/Repository-Base.ts":
  /*!********************************************************************!*\
    !*** ./src/app/repository/repository-interface/Repository-Base.ts ***!
    \********************************************************************/

  /*! exports provided: BaseRepository */

  /***/
  function srcAppRepositoryRepositoryInterfaceRepositoryBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRepository", function () {
      return BaseRepository;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);

    var BaseRepository = /*#__PURE__*/function () {
      /**
       *
       */
      function BaseRepository() {
        var _this26 = this;

        _classCallCheck(this, BaseRepository);

        // success
        this.addCollection = function (item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", null);

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        };

        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
      }

      _createClass(BaseRepository, [{
        key: "add",
        value: function add(item, id) {
          var _this27 = this;

          var idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
          item.id = idTemp;
          return new Promise(function (resolve, reject) {
            _this27.db.collection(_this27._collectionName).doc(idTemp).set(Object.assign({}, item)).then(function (obj) {
              resolve(obj);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "update",
        value: function update(id, item) {
          var _this28 = this;

          return new Promise(function (resolve, reject) {
            _this28.db.collection(_this28._collectionName).doc(id).update(Object.assign({}, item)).then(function (result) {
              resolve(result);
            })["catch"](function (error) {
              reject(error);
            });
          });
          return null; // const result = await firebase.database().ref(documentName).set({ ...item });
          // return result;
          // if (documentRef.collection.length <= 0) {
          // 	const result = await documentRef.update({ ...item });
          // 	return result;
          // } else {
          // 	console.log('error ', documentRef);
          // 	return Promise.reject(`${this._collectionName} collection not fount!!`);
          // }
        }
      }, {
        key: "find",
        // .where(element.obj, element.type, element.compare)
        value: function find(filter) {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            var ref = _this29.db.collection(_this29._collectionName).where(filter.elemento, filter.tipoComparacao, filter.comparacao).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  data: doc.data(),
                  id: doc.id
                });
              });
              resolve(lst);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "findOne",
        value: function findOne(id) {
          var _this30 = this;

          return new Promise(function (resolve, reject) {
            _this30.db.collection(_this30._collectionName).doc(id).get().then(function (result) {
              resolve(result.data());
            });
          });
        } // return  firebase.database().ref(documentName).once("value",(result=>{
        // 	console.log(result);			
        // }));

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this31 = this;

          return new Promise(function (resolve, reject) {
            _this31.db.collection(_this31._collectionName).doc(id).set(Object.assign({
              deletado: true
            }), {
              merge: true
            }).then(function () {
              resolve();
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaColletion",
        value: function recuperaColletion(collection) {
          return this.db.collection(collection);
        }
      }, {
        key: "serverTimestamp",
        get: function get() {
          return null; //firebase.firestore.Timestamp.now().toDate().toString(); // Timestamp.now.toString();
        }
      }]);

      return BaseRepository;
    }();
    /***/

  },

  /***/
  "./src/app/repository/usuario/usuario-rep.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/repository/usuario/usuario-rep.service.ts ***!
    \***********************************************************/

  /*! exports provided: UsuarioRepService */

  /***/
  function srcAppRepositoryUsuarioUsuarioRepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioRepService", function () {
      return UsuarioRepService;
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

    var UsuarioRepService = /*#__PURE__*/function (_repository_interface2) {
      _inherits(UsuarioRepService, _repository_interface2);

      var _super2 = _createSuper(UsuarioRepService);

      _createClass(UsuarioRepService, [{
        key: "AdicionaPerfilAoUsuario",
        value: function AdicionaPerfilAoUsuario(usuarioId, perfil) {
          var _this33 = this;

          var ref = this.db.collection("usuario").doc(usuarioId);
          var ob = [perfil];
          return new Promise(function (retorno, reject) {
            _this33.db.runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(ref).then(function (doc) {
                var usuario = doc.data();

                if (!usuario.perfis) {
                  usuario.perfis = [perfil];
                  transaction.set(ref, usuario);
                } else {
                  usuario.perfis = usuario.perfis.filter(function (y) {
                    return y != perfil;
                  });
                  usuario.perfis.push(perfil);
                  transaction.update(ref, usuario);
                }
              });
            }).then(function () {
              retorno();
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }]);

      function UsuarioRepService() {
        var _this32;

        _classCallCheck(this, UsuarioRepService);

        _this32 = _super2.call(this);
        _this32._collectionName = "usuario";
        return _this32;
      }

      return UsuarioRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    UsuarioRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioRepService);
    /***/
  },

  /***/
  "./src/app/utils/constants.ts":
  /*!************************************!*\
    !*** ./src/app/utils/constants.ts ***!
    \************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppUtilsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants;

    (function (Constants) {
      var PerfilUsuario = /*#__PURE__*/function () {
        function PerfilUsuario() {
          _classCallCheck(this, PerfilUsuario);
        }

        _createClass(PerfilUsuario, null, [{
          key: "RecuperaListagem",
          value: function RecuperaListagem() {
            return [{
              valor: this.AdministradorIgreja,
              descricao: "Administrador Igreja"
            }, {
              valor: this.AdministradorSistema,
              descricao: "Administrador Sistema"
            }, {
              valor: this.Prestador,
              descricao: "Prestador"
            }];
          }
        }, {
          key: "RecuperaDescricaoPorValor",
          value: function RecuperaDescricaoPorValor(valor) {
            return this.RecuperaListagem().filter(function (y) {
              return y.valor == valor;
            })[0].descricao;
          }
        }]);

        return PerfilUsuario;
      }();

      PerfilUsuario.AdministradorSistema = 1;
      PerfilUsuario.AdministradorIgreja = 2;
      PerfilUsuario.Prestador = 3;
      Constants.PerfilUsuario = PerfilUsuario;

      var Mensagens = function Mensagens() {
        _classCallCheck(this, Mensagens);
      };

      Mensagens.CamposObrigatorios = "Favor preencher todos os campos obrigatorios sinalizados com *";
      Constants.Mensagens = Mensagens;

      var ListTipoSituacaoPrestador = /*#__PURE__*/function () {
        function ListTipoSituacaoPrestador() {
          _classCallCheck(this, ListTipoSituacaoPrestador);
        }

        _createClass(ListTipoSituacaoPrestador, null, [{
          key: "RecuperaListagem",
          value: function RecuperaListagem() {
            return [{
              valor: TipoSituacaoPrestador.CadastroDadosEmpresa,
              descricao: "Informações Iniciais"
            }, {
              valor: TipoSituacaoPrestador.CadastroServicos,
              descricao: "Serviços"
            }, {
              valor: TipoSituacaoPrestador.CadastroIgrejaVinculo,
              descricao: "Igreja Vinculada"
            }, {
              valor: TipoSituacaoPrestador.PendenteAutorizacao,
              descricao: "Pendente de Autorização"
            }, {
              valor: TipoSituacaoPrestador.Ativo,
              descricao: "Ativo"
            }, {
              valor: TipoSituacaoPrestador.Suspenso,
              descricao: "Suspenso"
            }];
          }
        }, {
          key: "RecuperaDescricaoPorValor",
          value: function RecuperaDescricaoPorValor(valor) {
            return this.RecuperaListagem().filter(function (y) {
              return y.valor == valor;
            })[0].descricao;
          }
        }]);

        return ListTipoSituacaoPrestador;
      }();

      Constants.ListTipoSituacaoPrestador = ListTipoSituacaoPrestador;

      var TipoSituacaoPrestador = function TipoSituacaoPrestador() {
        _classCallCheck(this, TipoSituacaoPrestador);
      };

      TipoSituacaoPrestador.PrestadorEmEdicao = 1;
      TipoSituacaoPrestador.CadastroDadosEmpresa = 0;
      TipoSituacaoPrestador.CadastroLocalAtendimento = 1;
      TipoSituacaoPrestador.CadastroServicos = 2;
      TipoSituacaoPrestador.CadastroIgrejaVinculo = 3;
      TipoSituacaoPrestador.FinalizarCadastro = 4;
      TipoSituacaoPrestador.PendenteAutorizacao = 5;
      TipoSituacaoPrestador.Ativo = 6;
      TipoSituacaoPrestador.Suspenso = 7;
      TipoSituacaoPrestador.Cancelado = 8;
      Constants.TipoSituacaoPrestador = TipoSituacaoPrestador;

      var TipoMinisterio = function TipoMinisterio() {
        _classCallCheck(this, TipoMinisterio);
      };

      TipoMinisterio.louvor = 1;
      TipoMinisterio.educacao = 2;
      TipoMinisterio.infantil = 3;
      Constants.TipoMinisterio = TipoMinisterio;
      ;
      ;

      var TipoPessoaIgreja = function TipoPessoaIgreja() {
        _classCallCheck(this, TipoPessoaIgreja);
      };

      TipoPessoaIgreja.admin = 1;
      TipoPessoaIgreja.participante = 2;
      TipoPessoaIgreja.pendente = 3;
      TipoPessoaIgreja.naoSolicitado = 4;
      TipoPessoaIgreja.naoAceito = 5;
      Constants.TipoPessoaIgreja = TipoPessoaIgreja;
      ;

      var TipoPessoaMinisterio = function TipoPessoaMinisterio() {
        _classCallCheck(this, TipoPessoaMinisterio);
      };

      TipoPessoaMinisterio.admin = 7;
      TipoPessoaMinisterio.adminSecundario = 1;
      TipoPessoaMinisterio.pessoa = 2;
      TipoPessoaMinisterio.pendente = 3;
      TipoPessoaMinisterio.naoSolicitado = 4;
      TipoPessoaMinisterio.naoAceito = 5;
      Constants.TipoPessoaMinisterio = TipoPessoaMinisterio;
      ;

      var TipoFuncaoPessoaEquipe = function TipoFuncaoPessoaEquipe() {
        _classCallCheck(this, TipoFuncaoPessoaEquipe);
      };

      TipoFuncaoPessoaEquipe.guitarra = 7;
      TipoFuncaoPessoaEquipe.vocal = 1;
      TipoFuncaoPessoaEquipe.violao = 2;
      TipoFuncaoPessoaEquipe.teclado = 3;
      TipoFuncaoPessoaEquipe.dataShow = 4;
      TipoFuncaoPessoaEquipe.bateria = 5;
      TipoFuncaoPessoaEquipe.baixo = 6;
      Constants.TipoFuncaoPessoaEquipe = TipoFuncaoPessoaEquipe;
      ;

      var TipoLinkMusica = function TipoLinkMusica() {
        _classCallCheck(this, TipoLinkMusica);
      };

      TipoLinkMusica.youtube = 0;
      TipoLinkMusica.cifra = 1;
      TipoLinkMusica.letra = 2;
      TipoLinkMusica.outro = 3;
      Constants.TipoLinkMusica = TipoLinkMusica;
      ;

      var TipoPeriodoMinistracao = function TipoPeriodoMinistracao() {
        _classCallCheck(this, TipoPeriodoMinistracao);
      };

      TipoPeriodoMinistracao.manha = 1;
      TipoPeriodoMinistracao.tarde = 2;
      TipoPeriodoMinistracao.noite = 3;
      Constants.TipoPeriodoMinistracao = TipoPeriodoMinistracao;

      var ListagemUF = /*#__PURE__*/function () {
        function ListagemUF() {
          _classCallCheck(this, ListagemUF);
        }

        _createClass(ListagemUF, null, [{
          key: "RecuperaListagem",
          value: function RecuperaListagem() {
            return [{
              "nome": "Acre",
              "sigla": "AC"
            }, {
              "nome": "Alagoas",
              "sigla": "AL"
            }, {
              "nome": "Amapá",
              "sigla": "AP"
            }, {
              "nome": "Amazonas",
              "sigla": "AM"
            }, {
              "nome": "Bahia",
              "sigla": "BA"
            }, {
              "nome": "Ceará",
              "sigla": "CE"
            }, {
              "nome": "Distrito Federal",
              "sigla": "DF"
            }, {
              "nome": "Espírito Santo",
              "sigla": "ES"
            }, {
              "nome": "Goiás",
              "sigla": "GO"
            }, {
              "nome": "Maranhão",
              "sigla": "MA"
            }, {
              "nome": "Mato Grosso",
              "sigla": "MT"
            }, {
              "nome": "Mato Grosso do Sul",
              "sigla": "MS"
            }, {
              "nome": "Minas Gerais",
              "sigla": "MG"
            }, {
              "nome": "Pará",
              "sigla": "PA"
            }, {
              "nome": "Paraíba",
              "sigla": "PB"
            }, {
              "nome": "Paraná",
              "sigla": "PR"
            }, {
              "nome": "Pernambuco",
              "sigla": "PE"
            }, {
              "nome": "Piauí",
              "sigla": "PI"
            }, {
              "nome": "Rio de Janeiro",
              "sigla": "RJ"
            }, {
              "nome": "Rio Grande do Norte",
              "sigla": "RN"
            }, {
              "nome": "Rio Grande do Sul",
              "sigla": "RS"
            }, {
              "nome": "Rondônia",
              "sigla": "RO"
            }, {
              "nome": "Roraima",
              "sigla": "RR"
            }, {
              "nome": "Santa Catarina",
              "sigla": "SC"
            }, {
              "nome": "São Paulo",
              "sigla": "SP"
            }, {
              "nome": "Sergipe",
              "sigla": "SE"
            }, {
              "nome": "Tocantins",
              "sigla": "TO"
            }];
          }
        }, {
          key: "RecuperaObjetoPorUF",
          value: function RecuperaObjetoPorUF(uf) {
            return this.RecuperaListagem().filter(function (y) {
              return y.sigla == uf;
            })[0];
          }
        }, {
          key: "RecuperaDescricaoPorUF",
          value: function RecuperaDescricaoPorUF(uf) {
            var obj = this.RecuperaObjetoPorUF(uf);
            return obj.nome + " / " + obj.sigla;
          }
        }]);

        return ListagemUF;
      }();

      Constants.ListagemUF = ListagemUF;
    })(Constants || (Constants = {}));
    /***/

  },

  /***/
  "./src/environments/appVersion.ts":
  /*!****************************************!*\
    !*** ./src/environments/appVersion.ts ***!
    \****************************************/

  /*! exports provided: appVersion */

  /***/
  function srcEnvironmentsAppVersionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appVersion", function () {
      return appVersion;
    });

    var appVersion = {
      version: "1.0.1.3"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      version: "1.0.0.1",
      firebase: {
        apiKey: "AIzaSyD0NntaNdFAWPCa4Ekodz05XQoxKS2DP6Q",
        authDomain: "igrejaapp-842f7.firebaseapp.com",
        databaseURL: "https://igrejaapp-842f7.firebaseio.com",
        projectId: "igrejaapp-842f7",
        storageBucket: "igrejaapp-842f7.appspot.com",
        messagingSenderId: "955960870186",
        appId: "1:955960870186:web:03030e61bb1a7420780a53",
        measurementId: "G-CC964Q03J6"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/andreferreiratrindade/IgrejaApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map