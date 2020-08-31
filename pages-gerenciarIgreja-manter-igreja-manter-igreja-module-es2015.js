(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manter-igreja-manter-igreja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Mantem Igrejas\n      </ion-title>\n    </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <div class=\"ion-text-end\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n        <ion-button color=\"primary\" (click)=\"adicionarNovaIgreja()\">\n          <ion-icon name=\"add-outline\" style=\"margin-right:10px;\"></ion-icon>Novo\n        </ion-button>\n      </div>\n      <ion-card-title>Consultar Igrejas</ion-card-title>\n     \n    </ion-card-header>\n    \n    <ion-card-content>\n      <ion-searchbar type=\"text\" debounce=1 placeholder=\"Pesquisar\" animated #searchbar\n      (ionChange)=\"recuperaItens($event)\" animated></ion-searchbar>\n\n      <ion-list style=\"margin-top: 20px;\" *ngIf=\"igrejas.length > 0\">\n        <ion-list-header >\n          Igrejas\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of igrejas\" class=\"ion-no-border\" button  detail=\"false\" (click)=\"editarIgreja(item)\">\n          <ion-icon *ngIf=\"!item.deletado\" slot=\"end\" color=\"primary\" name=\"ellipsis-vertical\"></ion-icon>\n          <ion-label class=\"ion-text-wrap on-no-border\">{{item.nomeIgreja}}<p>{{item.deletado?\"deletado\":\"\"}}</p></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ManterIgrejaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterIgrejaPageRoutingModule", function() { return ManterIgrejaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manter_igreja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manter-igreja.page */ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.ts");




const routes = [
    {
        path: '',
        component: _manter_igreja_page__WEBPACK_IMPORTED_MODULE_3__["ManterIgrejaPage"]
    }
];
let ManterIgrejaPageRoutingModule = class ManterIgrejaPageRoutingModule {
};
ManterIgrejaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManterIgrejaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ManterIgrejaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterIgrejaPageModule", function() { return ManterIgrejaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manter_igreja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manter-igreja-routing.module */ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja-routing.module.ts");
/* harmony import */ var _manter_igreja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manter-igreja.page */ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.ts");







let ManterIgrejaPageModule = class ManterIgrejaPageModule {
};
ManterIgrejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manter_igreja_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManterIgrejaPageRoutingModule"]
        ],
        declarations: [_manter_igreja_page__WEBPACK_IMPORTED_MODULE_6__["ManterIgrejaPage"]]
    })
], ManterIgrejaPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlci1pZ3JlamEvbWFudGVyLWlncmVqYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXItaWdyZWphL21hbnRlci1pZ3JlamEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXItaWdyZWphL21hbnRlci1pZ3JlamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.ts ***!
  \***************************************************************************/
/*! exports provided: ManterIgrejaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterIgrejaPage", function() { return ManterIgrejaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var _criar_igreja_criar_igreja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../criar-igreja/criar-igreja.page */ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ManterIgrejaPage = class ManterIgrejaPage {
    constructor(igrejaService, modalCtrl) {
        this.igrejaService = igrejaService;
        this.modalCtrl = modalCtrl;
        this.igrejas = [];
        this.dominioIgrejas = [];
    }
    ngOnInit() {
        this.igrejaService.RecuperaTodasAsIgrejas().then(result => {
            this.igrejas = result;
            this.dominioIgrejas = result;
        });
    }
    recuperaItens(ev) {
        let val = "";
        if (ev && ev.target) {
            val = ev.target.value;
        }
        if (val && val.trim() !== '') {
            this.igrejas = this.dominioIgrejas.filter(item => {
                return item.nomeIgreja.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            this.igrejas = [...this.dominioIgrejas];
        }
        if (this.igrejas.length > 10)
            this.igrejas.length = 10;
    }
    adicionarNovaIgreja() {
        const modal = this.modalCtrl.create({
            component: _criar_igreja_criar_igreja_page__WEBPACK_IMPORTED_MODULE_3__["CriarIgrejaPage"],
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                this.ngOnInit();
            });
        });
    }
    editarIgreja(item) {
        var _a;
        let igrejaId = (_a = item.igrejaId) !== null && _a !== void 0 ? _a : item.id;
        const modal = this.modalCtrl.create({
            component: _criar_igreja_criar_igreja_page__WEBPACK_IMPORTED_MODULE_3__["CriarIgrejaPage"],
            componentProps: { igrejaId: igrejaId },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                this.ngOnInit();
            });
        });
    }
};
ManterIgrejaPage.ctorParameters = () => [
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_2__["IgrejaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ManterIgrejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manter-igreja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manter-igreja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manter-igreja.page.scss */ "./src/app/pages/gerenciarIgreja/manter-igreja/manter-igreja.page.scss")).default]
    })
], ManterIgrejaPage);



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-manter-igreja-manter-igreja-module-es2015.js.map