(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-criar-igreja-criar-igreja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Adicionar Igreja\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form [formGroup]=\"formData\" (ngSubmit)=\"salvarIgreja()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Nome Igreja <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n\n        <ion-input type=\"text\" formControlName=\"nomeIgreja\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.nomeIgreja\" [form]=\"formData\"\n        [nomeCampo]=\"'nomeIgreja'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Cep <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n\n      <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarEnderecoPorCEP()\" size=\"6\">\n        <ion-label>Buscar Endereço</ion-label>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-chip>\n      <ion-item class=\"input-item\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"formData.value.logradouro\">\n          <p>{{formData.value.logradouro}}, {{formData.value.bairro}} - {{formData.value.cidade}} / {{formData.value.uf}}</p>\n        </ion-label>\n\n        <!-- <ion-button color=\"tertiary\" type=\"button\" (click)=\"submitError='';buscarEnderecoPorCEP()\" [submitError]=\"\">Buscar endereço</ion-button> -->\n        <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cep\" [form]=\"formData\"\n          [nomeCampo]=\"'cep'\"></app-mensagem-validacao>\n      </ion-item>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\" class=\"ion-text-wrap\">Email do administrador da igreja <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"emailAdministrador\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <ion-chip color=\"tertiary\" (click)=\"buscarUsuarioAdministradorIgreja()\" size=\"6\">\n        <ion-label>Buscar Administrador</ion-label>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-chip>\n      <ion-item class=\"input-item\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"formData.value.administradorUsuarioId\">\n          <p>{{formData.value.emailAdministrador}}</p>\n          <p>{{formData.value.nomeAdministrador}}</p>\n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n    <ion-button class=\"sign-up-btn\" type=\"submit\" [submitError]=\"\" expand=\"block\">\n      Adicionar Igreja</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts ***!
  \***************************************************************************/
/*! exports provided: CriarIgrejaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarIgrejaPageModule", function() { return CriarIgrejaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-igreja.page */ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__["CriarIgrejaPage"],
    }
];
let CriarIgrejaPageModule = class CriarIgrejaPageModule {
};
CriarIgrejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
        ],
        declarations: [_criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__["CriarIgrejaPage"]]
    })
], CriarIgrejaPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9jcmlhci1pZ3JlamEvY3JpYXItaWdyZWphLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts ***!
  \*************************************************************************/
/*! exports provided: CriarIgrejaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarIgrejaPage", function() { return CriarIgrejaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/buscaCEP/buscar-cep.service */ "./src/app/providers/buscaCEP/buscar-cep.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");












let CriarIgrejaPage = class CriarIgrejaPage {
    constructor(buscarCEPService, igrejaService, router, toastCtrl, loadingControll, ngZone, usuarioService) {
        this.buscarCEPService = buscarCEPService;
        this.igrejaService = igrejaService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingControll = loadingControll;
        this.ngZone = ngZone;
        this.usuarioService = usuarioService;
        this.igrejaEntity = {};
        this.validation_messages = {
            'nomeIgreja': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ],
            'cep': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ], 'nomeAdministrador': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ], 'administradorUsuarioId': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ]
        };
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'logradouro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'emailAdministrador': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'nomeAdministrador': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'administradorUsuarioId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    }
    ngOnInit() {
    }
    buscarEnderecoPorCEP() {
        this.formData.controls['cidade'].setValue(null);
        this.formData.controls['bairro'].setValue(null);
        this.formData.controls['uf'].setValue(null);
        this.formData.controls['logradouro'].setValue(null);
        if (!this.formData.value.cep || this.formData.value.cep.toString().length != "8") {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        this.loadingControll.showLoader();
        this.buscarCEPService.buscarCEP(this.formData.value.cep).then(x => {
            if (x && !x.erro) {
                this.formData.controls['cidade'].setValue(x.localidade);
                this.formData.controls['bairro'].setValue(x.bairro);
                this.formData.controls['uf'].setValue(x.uf);
                this.formData.controls['logradouro'].setValue(x.logradouro);
                this.loadingControll.hideLoader();
            }
            else {
                this.loadingControll.hideLoader();
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            }
        }).catch(x => {
            this.loadingControll.hideLoader();
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(x, this.toastCtrl);
        });
    }
    salvarIgreja() {
        if (!this.formData.value.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        if (!this.formData.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
        }
        this.loadingControll.showLoader();
        this.igrejaEntity = this.formData.value;
        this.igrejaEntity.administradores = [{ usuarioId: this.formData.value.administradorUsuarioId }];
        this.igrejaService.AdicionarNovaIgreja(this.igrejaEntity).then(() => {
            this.usuarioService
                .AdicionaPerfilAoUsuario(this.formData.value.administradorUsuarioId, src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PerfilUsuario.AdministradorIgreja)
                .then(() => {
                src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(this.toastCtrl);
                this.loadingControll.hideLoader();
                this.ngZone.run(() => {
                    this.router.navigate(['home']);
                });
            }).catch((error) => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, this.toastCtrl);
                this.loadingControll.hideLoader();
            });
        }).catch((error) => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, this.toastCtrl);
            this.loadingControll.hideLoader();
        });
    }
    buscarUsuarioAdministradorIgreja() {
        this.loadingControll.showLoader();
        this.usuarioService.RecuperaUsuarioPorEmail(this.formData.value.emailAdministrador).then(result => {
            if (result.length > 0) {
                this.formData.controls['administradorUsuarioId'].setValue(result[0].data.usuarioId);
                this.formData.controls['emailAdministrador'].setValue(result[0].data.email);
                this.formData.controls['nomeAdministrador'].setValue(result[0].data.nome);
            }
            else {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Nenhum usuário encontrado com este e-mail.", this.toastCtrl);
            }
            this.loadingControll.hideLoader();
        }).catch((error) => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, this.toastCtrl);
            this.loadingControll.hideLoader();
        });
    }
};
CriarIgrejaPage.ctorParameters = () => [
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__["BuscarCEPService"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__["IgrejaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__["LoadingContr"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] }
];
CriarIgrejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-igreja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./criar-igreja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./criar-igreja.page.scss */ "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss")).default]
    })
], CriarIgrejaPage);



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-criar-igreja-criar-igreja-module-es2015.js.map