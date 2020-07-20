function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  }
}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module-es5.js.map