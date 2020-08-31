(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card class=\"ion-no-border\">\n    <ion-button (click)=\"closeModal()\" fill=\"clear\" style=\"margin-left: -9px; margin-top: 0px;\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n    <ion-card-header style=\"padding-top: 0px;margin-top: -20px;\">\n\n      <ion-card-title>\n        <h3>{{prestador.nome}}</h3>\n        <ion-label size=\"12\">\n          <p>{{prestador.descricaoServicos}}</p>\n        </ion-label>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item (click)=\"ligarTelefone(prestador.telefone)\" class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-phone-alt\" style=\"padding-right: 11px;margin-left: 3px;\"></ion-icon>\n        <ion-button color=\"tertiary\" size=\"small\" type=\"button\">{{prestador.telefone | maskTelefone}}</ion-button>\n      </ion-item>\n      <ion-item class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-church\" style=\"padding-right: 11px;\"></ion-icon>\n        <ion-label class=\"ion-text-wrap on-no-border\">\n          <h2>{{prestador.nomeIgreja}} </h2>\n         \n        </ion-label>\n\n      </ion-item>\n      <ion-item class=\"ion-no-border\">\n        <ion-icon class=\"fas fa-map-marker-alt\" style=\"padding-right: 11px;margin-left: 7px;\"></ion-icon>\n        <ion-label class=\"ion-text-wrap on-no-border\">\n          <h2>{{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h2>\n        </ion-label>\n      </ion-item>\n      <div class=\"ion-text-end\">\n        <ion-button size=\"small\" (click)=\"ShareGeneric(item)\" color=\"light\">\n          <ion-icon name=\"share-social\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Local Atendimento</h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item *ngFor=\"let item of prestador.locaisAtendimento; let i = index\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{i+1}}. {{item.cidade}} / {{item.uf}}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>Serviços</h3>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-item *ngFor=\"let item of prestadorServicos\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{item.nomeServico}}</h2>\n        <h3>{{item.breveDescricao}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3Zpc3VhbGl6YXItcHJlc3RhZG9yL3Zpc3VhbGl6YXItcHJlc3RhZG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3Zpc3VhbGl6YXItcHJlc3RhZG9yL3Zpc3VhbGl6YXItcHJlc3RhZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvdmlzdWFsaXphci1wcmVzdGFkb3IvdmlzdWFsaXphci1wcmVzdGFkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.ts ***!
  \***********************************************************************************/
/*! exports provided: VisualizarPrestadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarPrestadorPage", function() { return VisualizarPrestadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");













let VisualizarPrestadorPage = class VisualizarPrestadorPage {
    constructor(prestadorService, dominioServicoService, loadingContr, ngZone, router, toastCtrl, igrejaService, route, usuarioService, modalController, callNumber, socialSharing) {
        this.prestadorService = prestadorService;
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.ngZone = ngZone;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.route = route;
        this.usuarioService = usuarioService;
        this.modalController = modalController;
        this.callNumber = callNumber;
        this.socialSharing = socialSharing;
        this.prestador = {};
        this.prestadorServicos = [];
        this.usuario = {};
        this.usuarioId = this.route.snapshot.queryParams['usuarioId'];
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.prestadorService.RecuperaPrestador(this.usuarioId)
            .then((result) => {
            this.prestador = result;
            this.prestador.nomeSituacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(this.prestador.situacaoPrestador);
            this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejaId]).then(result => {
                this.prestador.nomeIgreja = result[0].data.nomeIgreja;
                this.loadingContr.hideLoader();
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
        this.prestadorService.recuperaServicosPorPrestador(this.usuarioId)
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
                this.prestador.descricaoServicos = this.prestadorServicos.map(y => { return y.nomeServico; }).join(', ');
                this.loadingContr.hideLoader();
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
        this.usuarioService.RecuperaNomeUsuarios([this.usuarioId])
            .then(resultado => {
            this.prestador.nome = resultado[0].data.nome;
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    closeModal() {
        this.modalController.dismiss(null, 'cancel');
    }
    ShareGeneric(prestador) {
        let texto = prestador.nome + " / " + prestador.telefone;
        this.socialSharing.share(texto, null, null);
    }
    ligarTelefone(telefone) {
        this.callNumber.callNumber(telefone, true);
    }
};
VisualizarPrestadorPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_3__["DominioServicoService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_2__["LoadingContr"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__["IgrejaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"] }
];
VisualizarPrestadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualizar-prestador',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./visualizar-prestador.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./visualizar-prestador.page.scss */ "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.page.scss")).default]
    })
], VisualizarPrestadorPage);



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
//# sourceMappingURL=default~pages-prestador-prestador-consultar-prestador-consultar-module~pages-prestador-visualizar-pr~237fe361-es2015.js.map