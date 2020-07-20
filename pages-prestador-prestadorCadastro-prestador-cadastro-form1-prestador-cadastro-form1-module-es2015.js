(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Dados da Empresa \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <form [formGroup]=\"form1\" (ngSubmit)=\"SalvarForm1()\">\n    <ion-list  lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Razão Social <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"text\"  formControlName=\"razaoSocial\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.razaoSocial\" [form]=\"form1\"\n      [nomeCampo]=\"'razaoSocial'\"></app-mensagem-validacao>\n     \n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\" >Telefone<ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"number\"  [brmasker]=\"{phone: true}\" formControlName=\"telefone\" clearInput autocapitalize=\"off\" ></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.telefone\" [form]=\"form1\"\n      [nomeCampo]=\"'telefone'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Cep<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"number\" maxlength=\"8\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cep\" [form]=\"form1\"\n        [nomeCampo]=\"'cep'\"></app-mensagem-validacao>\n       \n        <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarEnderecoPorCEP()\" size=\"6\">\n          <ion-label>Buscar Endereço</ion-label>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-chip>\n        <ion-item class=\"input-item\">\n          <ion-label class=\"ion-text-wrap\" *ngIf=\"prestador.logradouro\">\n            <p>{{prestador.logradouro}}, {{prestador.bairro}} -  {{prestador.cidade}}  / {{prestador.uf}}</p>\n          </ion-label>\n        </ion-item>\n        <!-- <ion-button class=\"ion-align-self-end\" position=\"right\" color=\"tertiary\" type=\"button\" (click)=\"submitError='';buscarEnderecoPorCEP()\" [disabled]=\"!form1.value['cep']\">Buscar endereço</ion-button> -->\n    \n        <ion-item (click)=\"abrirModalIgreja()\" detail [disabled]=\"!prestador.cidade\">\n          <ion-label>Igreja<ion-text color=\"danger\">*</ion-text>\n           \n          </ion-label>\n          <ion-note slot=\"end\" color=\"primary\">  {{form1.value.nomeIgreja}}</ion-note>\n  \n        </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.igrejaId\" [form]=\"form1\"\n      [nomeCampo]=\"'igrejaId'\"></app-mensagem-validacao>\n\n      <ion-item>\n        <ion-label>Membro da Igreja vinculada</ion-label>\n        <ion-toggle  name=\"staMembro\" formControlName=\"staMembro\" \n          [disabled]=\"!form1.value.igrejaId\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" >Prosseguir</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1PageRoutingModule", function() { return PrestadorCadastroForm1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prestador-cadastro-form1.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts");




const routes = [
    {
        path: '',
        component: _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroForm1Page"]
    }
];
let PrestadorCadastroForm1PageRoutingModule = class PrestadorCadastroForm1PageRoutingModule {
};
PrestadorCadastroForm1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrestadorCadastroForm1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1PageModule", function() { return PrestadorCadastroForm1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prestador_cadastro_form1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestador-cadastro-form1-routing.module */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts");
/* harmony import */ var _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prestador-cadastro-form1.page */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm1Page"],
    }
];
let PrestadorCadastroForm1PageModule = class PrestadorCadastroForm1PageModule {
};
PrestadorCadastroForm1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prestador_cadastro_form1_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroForm1PageRoutingModule"]
        ],
        declarations: [_prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm1Page"]]
    })
], PrestadorCadastroForm1PageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS9wcmVzdGFkb3ItY2FkYXN0cm8tZm9ybTEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0xL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0xL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PrestadorCadastroForm1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1Page", function() { return PrestadorCadastroForm1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/buscaCEP/buscar-cep.service */ "./src/app/providers/buscaCEP/buscar-cep.service.ts");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/igreja/modal-igreja/modal-igreja.page */ "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");














let PrestadorCadastroForm1Page = class PrestadorCadastroForm1Page {
    constructor(usuarioService, igrejaService, router, toastCtrl, ngZone, prestadorService, buscarCEPService, loadingContr, modalCtrl) {
        this.usuarioService = usuarioService;
        this.igrejaService = igrejaService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.prestadorService = prestadorService;
        this.buscarCEPService = buscarCEPService;
        this.loadingContr = loadingContr;
        this.modalCtrl = modalCtrl;
        this.prestador = {};
        this.validation_messages = {
            'telefone': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ],
            'igrejaId': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ],
            'cep': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ],
            'razaoSocial': [
                { type: 'required', message: 'Campo de preenchimento obrigatório.' },
            ]
        };
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'razaoSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'staMembro': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([]))
        });
        this.igrejas = [];
        this.form1.controls['staMembro'].setValue(true);
    }
    ngOnInit() {
    }
    buscarEnderecoPorCEP() {
        if (!this.form1.value['cep'] || this.form1.value['cep'].toString().length != "8") {
            this.prestador.cidade = null;
            this.prestador.bairro = null;
            this.prestador.uf = null;
            this.prestador.logradouro = null;
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        this.loadingContr.showLoader();
        this.buscarCEPService.buscarCEP(this.form1.value['cep']).then(x => {
            if (x && !x.erro) {
                this.prestador.cidade = x.localidade;
                this.prestador.bairro = x.bairro;
                this.prestador.uf = x.uf;
                this.prestador.logradouro = x.logradouro;
                this.prestador.cep = x.cep;
                this.igrejaService.RecuperaIgrejasPorCidade(this.prestador.cidade).then(x => {
                    if (x && x.length > 0) {
                        this.igrejas = x.map(map => {
                            return { id: map.id, nomeIgreja: map.data.nomeIgreja };
                        });
                    }
                    else {
                        this.igrejas = [];
                        src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Nenhuma igreja encontrada para localidade informada.", this.toastCtrl);
                    }
                    this.loadingContr.hideLoader();
                }).catch(err => {
                    src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(err, this.toastCtrl);
                    this.loadingContr.hideLoader();
                });
            }
            else {
                this.igrejas = [];
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            }
        }).catch(x => {
            this.igrejas = [];
            this.loadingContr.hideLoader();
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(x, this.toastCtrl);
        });
    }
    SalvarForm1() {
        if (!this.prestador || !this.prestador.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        if (!this.form1.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.", this.toastCtrl);
            return false;
        }
        this.loadingContr.showLoader();
        this.prestador.igrejas = [{ igrejaId: this.form1.value['igrejaId'], staMembro: this.form1.value['staMembro'] }];
        this.prestador.usuarioId = src_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId;
        this.prestador.situacaoPrestador = 2;
        let obj = this.MontaPrestadorParaSalvar(this.prestador, this.form1);
        this.prestadorService.AdicionarNovoPrestador(obj)
            .then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.ngZone.run(() => {
                this.router.navigate(['prestador-Form2']);
            });
        })
            .catch((error) => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    MontaPrestadorParaSalvar(prestador, formulario) {
        let obj = prestador;
        obj.telefone = formulario.value['telefone'];
        obj.razaoSocial = formulario.value['razaoSocial'];
        return obj;
    }
    updateToggleSet(obj) {
        console.log(this.form1.value['staMembro'].value);
    }
    abrirModalIgreja() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_13__["ModalIgrejaPage"],
            componentProps: {
                uf: this.prestador.uf,
                cidade: this.prestador.cidade,
                bairro: this.prestador.bairro
            },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal) {
                    this.form1.controls['nomeIgreja'].setValue(resultModal.data.nomeIgreja);
                    this.form1.controls['igrejaId'].setValue(resultModal.data.id);
                    // this.form1.value.nomeIgreja = resultModal.data.nomeIgreja;
                    // this.form1.value.igrejaId = resultModal.data.id;
                }
            });
        });
    }
};
PrestadorCadastroForm1Page.ctorParameters = () => [
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__["IgrejaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__["PrestadorService"] },
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_5__["BuscarCEPService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_11__["LoadingContr"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
PrestadorCadastroForm1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestador-cadastro-form1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prestador-cadastro-form1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prestador-cadastro-form1.page.scss */ "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss")).default]
    })
], PrestadorCadastroForm1Page);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module-es2015.js.map