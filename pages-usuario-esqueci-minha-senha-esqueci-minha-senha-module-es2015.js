(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-esqueci-minha-senha-esqueci-minha-senha-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Esqueceu sua senha?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n        </ion-item>\n\n        <div class=\"ion-text-center\" >\n\n          <ion-button color=\"primary\" (click)=\"recover()\">\n            Recuperar \n          </ion-button>\n        </div>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EsqueciMinhaSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciMinhaSenhaPageRoutingModule", function() { return EsqueciMinhaSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _esqueci_minha_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esqueci-minha-senha.page */ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.ts");




const routes = [
    {
        path: '',
        component: _esqueci_minha_senha_page__WEBPACK_IMPORTED_MODULE_3__["EsqueciMinhaSenhaPage"]
    }
];
let EsqueciMinhaSenhaPageRoutingModule = class EsqueciMinhaSenhaPageRoutingModule {
};
EsqueciMinhaSenhaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EsqueciMinhaSenhaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EsqueciMinhaSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciMinhaSenhaPageModule", function() { return EsqueciMinhaSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _esqueci_minha_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esqueci-minha-senha-routing.module */ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha-routing.module.ts");
/* harmony import */ var _esqueci_minha_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esqueci-minha-senha.page */ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.ts");







let EsqueciMinhaSenhaPageModule = class EsqueciMinhaSenhaPageModule {
};
EsqueciMinhaSenhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _esqueci_minha_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["EsqueciMinhaSenhaPageRoutingModule"]
        ],
        declarations: [_esqueci_minha_senha_page__WEBPACK_IMPORTED_MODULE_6__["EsqueciMinhaSenhaPage"]]
    })
], EsqueciMinhaSenhaPageModule);



/***/ }),

/***/ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvdXN1YXJpby9lc3F1ZWNpLW1pbmhhLXNlbmhhL2VzcXVlY2ktbWluaGEtc2VuaGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL2VzcXVlY2ktbWluaGEtc2VuaGEvZXNxdWVjaS1taW5oYS1zZW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXN1YXJpby9lc3F1ZWNpLW1pbmhhLXNlbmhhL2VzcXVlY2ktbWluaGEtc2VuaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9IiwiaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EsqueciMinhaSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciMinhaSenhaPage", function() { return EsqueciMinhaSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");








let EsqueciMinhaSenhaPage = class EsqueciMinhaSenhaPage {
    constructor(angularFire, toast, router, loadingContr) {
        this.angularFire = angularFire;
        this.toast = toast;
        this.router = router;
        this.loadingContr = loadingContr;
        this.email = '';
        this.password = '';
        this.error = '';
        this.username = '';
    }
    ngOnInit() {
    }
    recover() {
        if (this.email.trim() == '') {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("E-mail é de preenchimento obrigatório.", this.toast);
            return false;
        }
        this.loadingContr.showLoader();
        this.angularFire.sendPasswordResetEmail(this.email)
            .then(data => {
            console.log(data);
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_4__["ToastCustom"].CustomToast(this.toast, 'Reset de senha enviada para seu e-mail, favor verificar.', 'primary', 5000);
            this.loadingContr.hideLoader();
            this.router.navigateByUrl('/login');
        })
            .catch(err => {
            // err.
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("E-mail não encontrado.", this.toast);
            this.loadingContr.hideLoader();
        });
    }
};
EsqueciMinhaSenhaPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"] }
];
EsqueciMinhaSenhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-esqueci-minha-senha',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./esqueci-minha-senha.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./esqueci-minha-senha.page.scss */ "./src/app/pages/usuario/esqueci-minha-senha/esqueci-minha-senha.page.scss")).default]
    })
], EsqueciMinhaSenhaPage);



/***/ })

}]);
//# sourceMappingURL=pages-usuario-esqueci-minha-senha-esqueci-minha-senha-module-es2015.js.map