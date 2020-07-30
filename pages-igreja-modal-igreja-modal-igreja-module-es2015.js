(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-igreja-modal-igreja-modal-igreja-module"],{

/***/ "./src/app/pages/igreja/modal-igreja/modal-igreja-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/igreja/modal-igreja/modal-igreja-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ModalIgrejaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalIgrejaPageRoutingModule", function() { return ModalIgrejaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_igreja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-igreja.page */ "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");




const routes = [
    {
        path: '',
        component: _modal_igreja_page__WEBPACK_IMPORTED_MODULE_3__["ModalIgrejaPage"]
    }
];
let ModalIgrejaPageRoutingModule = class ModalIgrejaPageRoutingModule {
};
ModalIgrejaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalIgrejaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/igreja/modal-igreja/modal-igreja.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/igreja/modal-igreja/modal-igreja.module.ts ***!
  \******************************************************************/
/*! exports provided: ModalIgrejaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalIgrejaPageModule", function() { return ModalIgrejaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_igreja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-igreja-routing.module */ "./src/app/pages/igreja/modal-igreja/modal-igreja-routing.module.ts");
/* harmony import */ var _modal_igreja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-igreja.page */ "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");







let ModalIgrejaPageModule = class ModalIgrejaPageModule {
};
ModalIgrejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_igreja_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalIgrejaPageRoutingModule"]
        ],
        declarations: [_modal_igreja_page__WEBPACK_IMPORTED_MODULE_6__["ModalIgrejaPage"]]
    })
], ModalIgrejaPageModule);



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
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
    }
    AdicionarNovaIgreja(obj) {
        return this.igrejaRepService.add(obj, null);
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
};
IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaRepService);



/***/ })

}]);
//# sourceMappingURL=pages-igreja-modal-igreja-modal-igreja-module-es2015.js.map