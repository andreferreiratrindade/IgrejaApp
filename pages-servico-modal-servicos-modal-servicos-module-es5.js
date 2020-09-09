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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servico-modal-servicos-modal-servicos-module"], {
  /***/
  "./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ModalServicosPageRoutingModule */

  /***/
  function srcAppPagesServicoModalServicosModalServicosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalServicosPageRoutingModule", function () {
      return ModalServicosPageRoutingModule;
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


    var _modal_servicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");

    var routes = [{
      path: '',
      component: _modal_servicos_page__WEBPACK_IMPORTED_MODULE_3__["ModalServicosPage"]
    }];

    var ModalServicosPageRoutingModule = function ModalServicosPageRoutingModule() {
      _classCallCheck(this, ModalServicosPageRoutingModule);
    };

    ModalServicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalServicosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/servico/modal-servicos/modal-servicos.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/servico/modal-servicos/modal-servicos.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ModalServicosPageModule */

  /***/
  function srcAppPagesServicoModalServicosModalServicosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalServicosPageModule", function () {
      return ModalServicosPageModule;
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


    var _modal_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-servicos-routing.module */
    "./src/app/pages/servico/modal-servicos/modal-servicos-routing.module.ts");
    /* harmony import */


    var _modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-servicos.page */
    "./src/app/pages/servico/modal-servicos/modal-servicos.page.ts");

    var ModalServicosPageModule = function ModalServicosPageModule() {
      _classCallCheck(this, ModalServicosPageModule);
    };

    ModalServicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalServicosPageRoutingModule"]],
      declarations: [_modal_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ModalServicosPage"]]
    })], ModalServicosPageModule);
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
        var _this;

        _classCallCheck(this, DominioServicoRepositoryService);

        _this = _super.call(this);
        _this.servicoConverter = {
          toFirestore: function toFirestore(servico) {
            return {
              servicoId: servico.servicoId,
              nomeServico: servico.nomeServico
            };
          }
        };
        _this._collectionName = "dominioServico";
        return _this;
      }

      _createClass(DominioServicoRepositoryService, [{
        key: "recuperaServicoAutoComplete",
        value: function recuperaServicoAutoComplete(query) {
          var _this2 = this;

          return new Promise(function (response, resp) {
            query = query.toLowerCase();
            var endText = query + "\uF8FF";

            _this2.db.collection("dominioServico").orderBy("nomeServico_insensitive").limit(10).startAt(query).endAt(endText) // .where("nomeServico",">=",query)
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
          var _this3 = this;

          return new Promise(function (response, resp) {
            _this3.db.collection("dominioServico").orderBy("nomeServico").get().then(function (result) {
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
          var _this4 = this;

          return new Promise(function (response, resp) {
            _this4.db.collection("dominioServico").where("deletado", "==", false).orderBy("nomeServico").get().then(function (result) {
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
//# sourceMappingURL=pages-servico-modal-servicos-modal-servicos-module-es5.js.map