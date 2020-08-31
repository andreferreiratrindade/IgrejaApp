(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Manter Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Dados Empresa</h3>\n\n\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Nome</p>\n          <h3>{{prestador.nome}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Email</p>\n          <h3>{{prestador.email}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Razão Social</p>\n          <h3>{{prestador.razaoSocial}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Telefone</p>\n          <h3>{{prestador.telefone}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Endereço</p>\n          <h3>{{prestador.logradouro}}, {{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h3>\n        </ion-label>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Local Atendimento</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item *ngFor=\"let item of prestador.locaisAtendimento; let i = index\">\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{item.cidade}} / {{item.uf}}</h2>\n        </ion-label>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Serviços</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item *ngFor=\"let item of prestadorServicos\">\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{item.nomeServico}}</h2>\n          <h3>{{item.breveDescricao}}</h3>\n        </ion-label>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Igreja Vinculo</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <h3>{{prestador.nomeIgreja}}</h3>\n        </ion-label>\n      </ion-item>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Situação</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-select [(ngModel)]=\"prestador.situacaoPrestador\">\n        <ion-select-option *ngFor=\"let item of situacoesPrestador\" [value]=\"item.valor\">\n          {{ item.descricao }}\n        </ion-select-option>\n      </ion-select>\n\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;margin-right: 15px; margin-bottom: 20px;\">\n        <ion-button color=\"medium\" type=\"button\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n          clear>\n          <ion-icon name=\"chevron-back-outline\" style=\"margin-right:10px;\"></ion-icon>Voltar\n        </ion-button>\n        <ion-button class=\"success\" type=\"button\" (click)=\"atualizarPrestador()\" clear>\n          <ion-icon name=\"checkmark\" style=\"margin-right:10px;\"></ion-icon>Atualizar\n        </ion-button>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/helpers/handlerError.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/handlerError.ts ***!
  \*****************************************/
/*! exports provided: HandlerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerError", function() { return HandlerError; });
/* harmony import */ var _toastCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastCustom */ "./src/app/helpers/toastCustom.ts");

class HandlerError {
    static handler(err, toastCtrl) {
        var data = err;
        let message = data.error ? data.error.message : data;
        _toastCustom__WEBPACK_IMPORTED_MODULE_0__["ToastCustom"].errorToast(message, toastCtrl);
    }
}


/***/ }),

/***/ "./src/app/helpers/toastCustom.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/toastCustom.ts ***!
  \****************************************/
/*! exports provided: ToastCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastCustom", function() { return ToastCustom; });
class ToastCustom {
    static errorToast(msg, toastCtrl) {
        this.CustomToast(toastCtrl, msg, "danger", 4000);
    }
    static SucessoToast(toastCtrl) {
        this.CustomToast(toastCtrl, "Operação realizada com sucesso.", "success", 4000);
    }
    static CustomToast(toastCtrl, message, color, duration) {
        toastCtrl.create({
            message: message,
            duration: duration,
            color: color
        }).then(x => {
            x.present();
        });
    }
}


/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ManterPrestadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPageRoutingModule", function() { return ManterPrestadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manter_prestador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manter-prestador.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts");




const routes = [
    {
        path: '',
        component: _manter_prestador_page__WEBPACK_IMPORTED_MODULE_3__["ManterPrestadorPage"]
    }
];
let ManterPrestadorPageRoutingModule = class ManterPrestadorPageRoutingModule {
};
ManterPrestadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManterPrestadorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ManterPrestadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPageModule", function() { return ManterPrestadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manter_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manter-prestador-routing.module */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts");
/* harmony import */ var _manter_prestador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manter-prestador.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ManterPrestadorPageModule = class ManterPrestadorPageModule {
};
ManterPrestadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manter_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManterPrestadorPageRoutingModule"]
        ],
        declarations: [_manter_prestador_page__WEBPACK_IMPORTED_MODULE_6__["ManterPrestadorPage"]]
    })
], ManterPrestadorPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclByZXN0YWRvcmVzL21hbnRlci1wcmVzdGFkb3IvbWFudGVyLXByZXN0YWRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXJQcmVzdGFkb3Jlcy9tYW50ZXItcHJlc3RhZG9yL21hbnRlci1wcmVzdGFkb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXJQcmVzdGFkb3Jlcy9tYW50ZXItcHJlc3RhZG9yL21hbnRlci1wcmVzdGFkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManterPrestadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPage", function() { return ManterPrestadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");












let ManterPrestadorPage = class ManterPrestadorPage {
    constructor(prestadorService, dominioServicoService, loadingContr, router, usuarioService, toastCtrl, igrejaService, route) {
        this.prestadorService = prestadorService;
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.router = router;
        this.usuarioService = usuarioService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.route = route;
        this.prestador = {};
        this.prestadorUsuario = {};
        this.prestadorServicos = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.prestador = { usuarioId: params['prestadorUsuarioId'] };
            this.loadingContr.showLoader();
            this.situacoesPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ListTipoSituacaoPrestador.RecuperaListagem()
                .filter(y => { return y.value !== src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao; });
            this.prestadorService.RecuperaPrestador(this.prestador.usuarioId)
                .then((result) => {
                this.prestador = result;
                this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejaId]).then(result => {
                    this.prestador.nomeIgreja = result[0].data.nomeIgreja;
                    this.loadingContr.hideLoader();
                }).catch(err => {
                    src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
            this.prestadorService.recuperaServicosPorPrestador(this.prestador.usuarioId)
                .then(result => {
                this.prestadorServicos = result;
                this.dominioServicoService.recuperaDominioServico().then(x => {
                    this.prestadorServicos.map((listItem) => {
                        var _a;
                        listItem.expanded = false;
                        listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                        listItem.nomeServico = x.filter(y => y.servicoId == listItem.servicoId)[0].nomeServico;
                        return listItem;
                    });
                    this.loadingContr.hideLoader();
                }).catch(err => {
                    src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
            this.usuarioService.RecuperaUsuarioPorUsuarioId(this.prestador.usuarioId)
                .then(result => {
                this.prestador.nome = result.nome;
                this.prestador.email = result.email;
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        });
    }
    atualizarPrestador() {
        this.loadingContr.showLoader();
        let obj = { situacaoPrestador: this.prestador.situacaoPrestador };
        this.prestadorService
            .AtualizaPrestador(this.prestador.usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_3__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    voltar() {
    }
};
ManterPrestadorPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_5__["DominioServicoService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__["IgrejaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ManterPrestadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manter-prestador',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manter-prestador.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manter-prestador.page.scss */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss")).default]
    })
], ManterPrestadorPage);



/***/ }),

/***/ "./src/app/providers/dominioServico/dominio-servico.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/providers/dominioServico/dominio-servico.service.ts ***!
  \*********************************************************************/
/*! exports provided: DominioServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoService", function() { return DominioServicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/dominioServico/dominio-servico-repository.service */ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts");



let DominioServicoService = class DominioServicoService {
    constructor(dominioServico) {
        this.dominioServico = dominioServico;
    }
    recuperaServicoAutoComplete(ev) {
        return this.dominioServico.recuperaServicoAutoComplete(ev);
    }
    recuperaDominioServico() {
        return this.dominioServico.recuperaDominioServico();
    }
    recuperaDominioServicoAtivo() {
        return this.dominioServico.recuperaDominioServicoAtivo();
    }
    adicionaServico(servico) {
        return this.dominioServico.add(servico, null);
    }
    excluirServico(servicoId) {
        return this.dominioServico.delete(servicoId);
    }
};
DominioServicoService.ctorParameters = () => [
    { type: src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoRepositoryService"] }
];
DominioServicoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoService);



/***/ }),

/***/ "./src/app/providers/igreja/igreja.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/igreja/igreja.service.ts ***!
  \****************************************************/
/*! exports provided: IgrejaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaService", function() { return IgrejaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/igreja/igreja-rep.service */ "./src/app/repository/igreja/igreja-rep.service.ts");



let IgrejaService = class IgrejaService {
    constructor(igrejaRepService) {
        this.igrejaRepService = igrejaRepService;
    }
    RecuperaTodasAsIgrejas() {
        return this.igrejaRepService.RecuperaTodasAsIgrejas();
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return this.igrejaRepService.RecuperaIgrejaPorIgrejaId(igrejaId);
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
    }
    AdicionarNovaIgreja(obj) {
        return this.igrejaRepService.AdicionaNovaIgreja(obj, obj.igrejaId);
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return this.igrejaRepService.RecuperaIgrejasPorEndereco(uf, cidade, bairro);
    }
    RecuperaNomeIgreja(igrejas) {
        return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
    }
};
IgrejaService.ctorParameters = () => [
    { type: src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__["IgrejaRepService"] }
];
IgrejaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaService);



/***/ }),

/***/ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/repository/dominioServico/dominio-servico-repository.service.ts ***!
  \*********************************************************************************/
/*! exports provided: DominioServicoRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoRepositoryService", function() { return DominioServicoRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let DominioServicoRepositoryService = class DominioServicoRepositoryService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    /**
     *
     */
    constructor() {
        super();
        this.servicoConverter = {
            toFirestore: function (servico) {
                return { servicoId: servico.servicoId,
                    nomeServico: servico.nomeServico };
            }
        };
        this._collectionName = "dominioServico";
    }
    recuperaServicoAutoComplete(query) {
        return new Promise((response, resp) => {
            const endText = query + '\uf8ff';
            this.db.collection("dominioServico")
                .orderBy("nomeServico")
                .limit(10)
                .where("nomeServico", ">=", query)
                .where("nomeServico", "<=", endText)
                // .startAt(query)
                // .endAt(endText)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id });
                });
                response(lst);
            })
                .catch((err) => {
                resp(err);
            });
        });
    }
    recuperaDominioServico() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico").orderBy("nomeServico").get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
    recuperaDominioServicoAtivo() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico")
                .where("deletado", "==", false)
                .orderBy("nomeServico")
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
};
DominioServicoRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoRepositoryService);



/***/ }),

/***/ "./src/app/repository/igreja/igreja-rep.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/repository/igreja/igreja-rep.service.ts ***!
  \*********************************************************/
/*! exports provided: IgrejaRepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaRepService", function() { return IgrejaRepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let IgrejaRepService = class IgrejaRepService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    constructor() {
        super();
        this._collectionName = "igreja";
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return new Promise((resolve, reject) => {
            let query = this.db.collection('igreja')
                .where("uf", "==", uf);
            if (cidade) {
                query = query.where("cidade", "==", cidade);
            }
            if (bairro) {
                query = query.where("bairro", "==", bairro);
            }
            query.get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    AdicionaNovaIgreja(item, id) {
        let idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
        item.id = idTemp;
        item.igrejaId = idTemp;
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .doc(idTemp)
                .set(Object.assign({}, item), { merge: true })
                .then((obj) => {
                resolve(obj);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return new Promise((resolve, reject) => {
            this.db.collection('igreja')
                .where("administradores", "array-contains", usuarioId)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.find({ elemento: "cidade", tipoComparacao: "==", comparacao: cidade });
    }
    RecuperaNomeIgreja(igrejas) {
        // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
        return this.find({ elemento: "id", tipoComparacao: "in", comparacao: igrejas });
    }
    RecuperaTodasAsIgrejas() {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName).doc(igrejaId)
                .get()
                .then((result) => {
                resolve(result.data());
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
};
IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaRepService);



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module-es2015.js.map