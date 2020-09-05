(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Cadastro Prestador\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  \n  <ion-progress-bar *ngIf=\"prestador.SituacaoPrestador == 1\" color=\"secondary\" value=\"0.20\" buffer=\"0.40\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Dados da Empresa</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"formulario\">\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Razão Social <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"text\" formControlName=\"razaoSocial\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Telefone<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n\n          <ion-input type=\"number\" formControlName=\"telefone\" clearInput autocapitalize=\"off\">\n          </ion-input>\n        </ion-item>\n\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">CEP Comercial ou residencial<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"number\" maxlength=\"8\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n        </ion-item>\n        <div class=\"ion-text-center\">\n          <ion-button color=\"primary\" size=\"small\" (click)=\"buscarEnderecoPorCEP()\">\n            <ion-icon name=\"search-outline\" style=\"margin-right: 10px;\"></ion-icon>\n            <ion-label>Buscar Endereço</ion-label>\n          </ion-button>\n        </div>\n\n\n        <ion-item class=\"ion-no-border\">\n          <ion-label class=\"ion-text-wrap\" *ngIf=\"formulario.value.logradouro\">\n            <h3>{{formulario.value.logradouro}}, {{formulario.value.bairro}} - {{formulario.value.cidade}} /\n              {{formulario.value.uf}}</h3>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n          <ion-button color=\"medium\" type=\"button\" *ngIf=\"prestador.SituacaoPrestador != 1\" (click)=\"voltar()\" style=\"margin-right: 20px!important;\" size=\"4\"\n            clear>\n            <ion-icon name=\"chevron-back-outline\" style=\"margin-right:10px;\"></ion-icon>Voltar\n          </ion-button>\n          <ion-button color=\"success\" type=\"button\" (click)=\"prosseguir()\" clear>\n            <ion-icon name=\"checkmark\" style=\"margin-right:10px;\">\n            </ion-icon>\n          {{prestador.SituacaoPrestador == 1 ? \"Prosseguir\" : \"Salvar\"}}\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DadosEmpresaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosEmpresaPageRoutingModule", function() { return DadosEmpresaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dados_empresa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dados-empresa.page */ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts");




const routes = [
    {
        path: '',
        component: _dados_empresa_page__WEBPACK_IMPORTED_MODULE_3__["DadosEmpresaPage"]
    }
];
let DadosEmpresaPageRoutingModule = class DadosEmpresaPageRoutingModule {
};
DadosEmpresaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DadosEmpresaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DadosEmpresaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosEmpresaPageModule", function() { return DadosEmpresaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dados_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dados-empresa-routing.module */ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa-routing.module.ts");
/* harmony import */ var _dados_empresa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dados-empresa.page */ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let DadosEmpresaPageModule = class DadosEmpresaPageModule {
};
DadosEmpresaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dados_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DadosEmpresaPageRoutingModule"]
        ],
        declarations: [_dados_empresa_page__WEBPACK_IMPORTED_MODULE_6__["DadosEmpresaPage"]]
    })
], DadosEmpresaPageModule);



/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL2RhZG9zLWVtcHJlc2EvZGFkb3MtZW1wcmVzYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9kYWRvcy1lbXByZXNhL2RhZG9zLWVtcHJlc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9kYWRvcy1lbXByZXNhL2RhZG9zLWVtcHJlc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.ts ***!
  \***************************************************************************************/
/*! exports provided: DadosEmpresaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosEmpresaPage", function() { return DadosEmpresaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/buscaCEP/buscar-cep.service */ "./src/app/providers/buscaCEP/buscar-cep.service.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/helpers/confirmAlert */ "./src/app/helpers/confirmAlert.ts");














let DadosEmpresaPage = class DadosEmpresaPage {
    constructor(usuarioService, router, toastCtrl, ngZone, prestadorService, buscarCEPService, loadingContr, confirmAlert, alertController) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.prestadorService = prestadorService;
        this.buscarCEPService = buscarCEPService;
        this.loadingContr = loadingContr;
        this.confirmAlert = confirmAlert;
        this.alertController = alertController;
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
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'bairro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])), 'logradouro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            'razaoSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
    }
    ngOnInit() {
        this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then((result) => {
            this.prestador = result;
            if (result) {
                this.formulario.controls['telefone'].setValue(result.telefone);
                this.formulario.controls['cep'].setValue(result.cep);
                this.formulario.controls['uf'].setValue(result.uf);
                this.formulario.controls['cidade'].setValue(result.cidade);
                this.formulario.controls['bairro'].setValue(result.bairro);
                this.formulario.controls['logradouro'].setValue(result.logradouro);
                this.formulario.controls['razaoSocial'].setValue(result.razaoSocial);
            }
            else {
                this.prestador.situacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao;
            }
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    buscarEnderecoPorCEP() {
        if (!this.formulario.value['cep'] || this.formulario.value['cep'].toString().length != "8") {
            this.formulario.value.cidade = null;
            this.formulario.value.bairro = null;
            this.formulario.value.uf = null;
            this.formulario.value.logradouro = null;
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        this.loadingContr.showLoader();
        this.buscarCEPService.buscarCEP(this.formulario.value['cep']).then(x => {
            if (x && !x.erro) {
                this.formulario.controls["cidade"].setValue(x.localidade);
                this.formulario.controls["bairro"].setValue(x.bairro);
                this.formulario.controls["uf"].setValue(x.uf);
                this.formulario.controls["logradouro"].setValue(x.logradouro);
            }
            else {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            }
            this.loadingContr.hideLoader();
        }).catch(x => {
            this.loadingContr.hideLoader();
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(x, this.toastCtrl);
        });
    }
    prosseguir() {
        if (!this.formulario.value.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
        }
        if (!this.formulario.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].Mensagens.CamposObrigatorios, this.toastCtrl);
            return false;
        }
        // Caso situação do prestador serja diferente de Em edição, sistema deverá alertar usuário sobre a alteração da situação
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            const result = this.confirmAlert.confirmationAlert(this.alertController, 'Toda atualização depende de aprovação e o cadastro ficará suspenso temporariamente, deseja continuar?').then(result => {
                if (result) {
                    this.atualizaSituacaoPrestador(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao, 'meu-cadastro-prestador');
                }
            });
        }
        else {
            this.atualizaSituacaoPrestador(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao, 'prestador-local-atendimento');
        }
    }
    atualizaSituacaoPrestador(situacaoPrestador, redirectURL) {
        this.loadingContr.showLoader();
        let obj = this.formulario.value;
        obj.usuarioId = src_app_config__WEBPACK_IMPORTED_MODULE_10__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId;
        obj.situacaoPrestador = situacaoPrestador;
        if (this.prestador) {
            obj.situacaoPrestador = this.prestador.situacaoPrestador;
        }
        this.prestadorService.AdicionarNovoPrestador(obj)
            .then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_12__["ToastCustom"].SucessoToast(this.toastCtrl);
            this.ngZone.run(() => {
                this.router.navigate([redirectURL]);
            });
        })
            .catch((error) => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_2__["HandlerError"].handler(error, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    voltar() {
        if (this.prestador.situacaoPrestador != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao) {
            this.router.navigate(['meu-cadastro-prestador']);
        }
    }
};
DadosEmpresaPage.ctorParameters = () => [
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"] },
    { type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_9__["BuscarCEPService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"] },
    { type: src_app_helpers_confirmAlert__WEBPACK_IMPORTED_MODULE_13__["ConfirmAlert"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
DadosEmpresaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dados-empresa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dados-empresa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dados-empresa.page.scss */ "./src/app/pages/prestador/prestadorCadastro/dados-empresa/dados-empresa.page.scss")).default]
    })
], DadosEmpresaPage);



/***/ })

}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-dados-empresa-dados-empresa-module-es2015.js.map