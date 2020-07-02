(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar></ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"sign-in-content\">\r\n  <h2 class=\"auth-title\">\r\n    Sign In with Firebase\r\n  </h2>\r\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signInWithEmail()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\" *ngIf=\"signInForm.get('email').hasError(validation.type) && (signInForm.get('email').dirty || signInForm.get('email').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n          <div class=\"error-message\" *ngIf=\"signInForm.get('password').hasError(validation.type) && (signInForm.get('password').dirty || signInForm.get('password').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-button class=\"sign-in-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signInForm.valid\">Sign In</ion-button>\r\n    <div class=\"error-container\" *ngIf=\"submitError\">\r\n      <div class=\"error-message\">\r\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n        <span>{{ submitError }}</span>\r\n      </div>\r\n    </div>\r\n    <ion-row class=\"sign-up-btn-wrapper\">\r\n      <ion-button class=\"sign-up-btn\" fill=\"clear\" [routerLink]=\"['/sign-up']\">\r\n        Don't have an account?\r\n      </ion-button>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <div class=\"social-auth-options\">\r\n    <p class=\"options-divider\">Or</p>\r\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignIn()\">Facebook Sign In</ion-button>\r\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignIn()\">Google Sign In</ion-button>\r\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignIn()\">Twitter Sign In</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"],
    }
];
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-in-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-in-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-in-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-in-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-in-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-in-content .sign-in-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-up-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-in-content .sign-up-btn-wrapper .sign-up-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9EOlxcV29ya1NwYWNlXFxDaGFuZ2VQYXN0YXNJZ3JlamFcXElncmVqYUFwcC9zcmNcXGFwcFxccGFnZXNcXHNpZ24taW5cXHNpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjtBREdJO0VBQ0Esa0JBQUE7QUNESjtBRE1JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDSk47QURTSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDUE47QURTTTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUFI7QURZRTtFQUNFLGdCQUFBO0FDVko7QURhRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGFJO0VBQ0Usa0JBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG5cclxuICAuYXV0aC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XHJcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcclxuICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0cy1saXN0IHtcclxuICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZ24taW4tYnRuIHtcclxuICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lnbi11cC1idG4td3JhcHBlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuc2lnbi11cC1idG4ge1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zaWduLWluLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbn1cbi5zaWduLWluLWNvbnRlbnQgLmF1dGgtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuLnNpZ24taW4tY29udGVudCAuc29jaWFsLWF1dGgtb3B0aW9ucyAub3B0aW9ucy1kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ24taW4tY29udGVudCAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uc2lnbi1pbi1jb250ZW50IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IDE2cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zaWduLWluLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiA4cHg7XG59XG4uc2lnbi1pbi1jb250ZW50IC5zaWduLWluLWJ0biB7XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG4uc2lnbi1pbi1jb250ZW50IC5zaWduLXVwLWJ0bi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWduLWluLWNvbnRlbnQgLnNpZ24tdXAtYnRuLXdyYXBwZXIgLnNpZ24tdXAtYnRuIHtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/base-provider/firebase-auth-service.service */ "./src/app/providers/base-provider/firebase-auth-service.service.ts");






let SignInPage = class SignInPage {
    constructor(angularFire, router, ngZone, authService) {
        this.angularFire = angularFire;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
        // Get firebase authentication redirect result invoken when using signInWithRedirect()
        // signInWithRedirect() is only used when client is in web but not desktop
        this.authRedirectResult = this.authService.getRedirectResult()
            .subscribe(result => {
            if (result.user) {
                this.redirectLoggedUserToProfilePage();
            }
            else if (result.error) {
                this.submitError = result.error;
            }
        });
    }
    // Once the auth provider finished the authentication flow, and the auth redirect completes,
    // redirect the user to the profile page
    redirectLoggedUserToProfilePage() {
        // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
        // That's why we need to wrap the router navigation call inside an ngZone wrapper
        this.ngZone.run(() => {
            this.router.navigate(['profile']);
        });
    }
    signInWithEmail() {
        this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
            .then(user => {
            // navigate to user profile
            this.redirectLoggedUserToProfilePage();
        })
            .catch(error => {
            this.authService.signUpWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
                .then(user => {
                // navigate to user profile
                this.redirectLoggedUserToProfilePage();
            })
                .catch(error => {
                this.submitError = error.message;
            });
        });
    }
    facebookSignIn() {
        this.authService.signInWithFacebook()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
    googleSignIn() {
        this.authService.signInWithGoogle()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
    twitterSignIn() {
        this.authService.signInWithTwitter()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Twitter Access Token. You can use it to access the Twitter API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/sign-in/sign-in.page.scss")).default]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2015.js.map