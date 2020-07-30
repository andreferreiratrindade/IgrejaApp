(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Mantem Serviços\n      </ion-title>\n    </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Adicionar Serviço</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label position=\"floating\">Serviço<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"nomeServico\" autofocus clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n        <ion-button color=\"primary\" (click)=\"salvar()\">\n          <ion-icon name=\"add-outline\" style=\"margin-right:10px;\"></ion-icon>Novo\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Serviços</ion-card-title>\n      <ion-searchbar type=\"text\" debounce=1 placeholder=\"Pesquisar\" animated #searchbar\n        (ionChange)=\"recuperaServicos($event)\" animated></ion-searchbar>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-list style=\"margin-top: 20px;\">\n        <ion-item *ngFor=\"let item of servicos\" class=\"ion-no-border\" button detail=\"false\"\n          (click)=\"excluirServico(item.servicoId)\">\n          <ion-icon *ngIf=\"!item.deletado\" slot=\"end\" color=\"danger\" name=\"trash-outline\"></ion-icon>\n          <ion-label>{{item.nomeServico}}<p>{{item.deletado?\"deletado\":\"\"}}</p></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

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
        console.log(message);
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

/***/ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: MantemServicoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemServicoPageRoutingModule", function() { return MantemServicoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mantem_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mantem-servico.page */ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts");




const routes = [
    {
        path: '',
        component: _mantem_servico_page__WEBPACK_IMPORTED_MODULE_3__["MantemServicoPage"]
    }
];
let MantemServicoPageRoutingModule = class MantemServicoPageRoutingModule {
};
MantemServicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MantemServicoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MantemServicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemServicoPageModule", function() { return MantemServicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mantem_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mantem-servico-routing.module */ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico-routing.module.ts");
/* harmony import */ var _mantem_servico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mantem-servico.page */ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts");







let MantemServicoPageModule = class MantemServicoPageModule {
};
MantemServicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mantem_servico_routing_module__WEBPACK_IMPORTED_MODULE_5__["MantemServicoPageRoutingModule"]
        ],
        declarations: [_mantem_servico_page__WEBPACK_IMPORTED_MODULE_6__["MantemServicoPage"]]
    })
], MantemServicoPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclNlcnZpY29zL21hbnRlbS1zZXJ2aWNvL21hbnRlbS1zZXJ2aWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclNlcnZpY29zL21hbnRlbS1zZXJ2aWNvL21hbnRlbS1zZXJ2aWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXJlbmNpYXJJZ3JlamEvbWFudGVyU2Vydmljb3MvbWFudGVtLXNlcnZpY28vbWFudGVtLXNlcnZpY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.ts ***!
  \********************************************************************************************/
/*! exports provided: MantemServicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemServicoPage", function() { return MantemServicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var _adiciona_servico_adiciona_servico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adiciona-servico/adiciona-servico.page */ "./src/app/pages/gerenciarIgreja/manterServicos/adiciona-servico/adiciona-servico.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");









let MantemServicoPage = class MantemServicoPage {
    constructor(servicoService, modalCtrl, loadingContr, toastCtrl) {
        this.servicoService = servicoService;
        this.modalCtrl = modalCtrl;
        this.loadingContr = loadingContr;
        this.toastCtrl = toastCtrl;
        this.servicos = [];
        this.dominioServicos = [];
    }
    ngOnInit() {
        this.servicoService.recuperaDominioServico().then(result => {
            this.servicos = result;
            this.dominioServicos = result;
        });
    }
    salvar() {
        if (!this.nomeServico) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
        }
        this.servicoService.recuperaDominioServico().then(result => {
            this.loadingContr.showLoader();
            if (result.filter(x => x.nomeServico == this.nomeServico).length > 0) {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler("Serviço já cadastrado.", this.toastCtrl);
                this.loadingContr.hideLoader();
                return false;
            }
            else {
                this.servicoService.adicionaServico({ nomeServico: this.nomeServico, deletado: false })
                    .then(result => {
                    this.nomeServico = null;
                    src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_7__["ToastCustom"].SucessoToast(this.toastCtrl);
                    this.ngOnInit();
                    this.loadingContr.hideLoader();
                }).catch((error) => {
                    src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(error, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
            }
        })
            .catch((error) => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(error, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    abreModalSelecionaServico() {
        const modal = this.modalCtrl.create({
            component: _adiciona_servico_adiciona_servico_page__WEBPACK_IMPORTED_MODULE_3__["AdicionaServicoPage"],
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
            });
        });
    }
    recuperaServicos(ev) {
        let val = "";
        if (ev && ev.target) {
            val = ev.target.value;
        }
        if (val && val.trim() !== '') {
            this.servicos = this.dominioServicos.filter(item => {
                return item.nomeServico.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            this.servicos = [...this.dominioServicos];
        }
        if (this.servicos.length > 10)
            this.servicos.length = 10;
    }
    excluirServico(servicoId) {
        this.servicoService.excluirServico(servicoId).then(result => {
            this.ngOnInit();
        });
    }
};
MantemServicoPage.ctorParameters = () => [
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
MantemServicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mantem-servico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mantem-servico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mantem-servico.page.scss */ "./src/app/pages/gerenciarIgreja/manterServicos/mantem-servico/mantem-servico.page.scss")).default]
    })
], MantemServicoPage);



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
            this.db.collection("dominioServico").get()
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



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterServicos-mantem-servico-mantem-servico-module-es2015.js.map