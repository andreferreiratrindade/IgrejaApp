(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"profile-content\">\r\n  <ion-row class=\"user-details-wrapper\">\r\n    <ion-col size=\"6\" class=\"user-image-wrapper\">\r\n      <img class=\"user-image\" [src]=\"user.image\">\r\n    </ion-col>\r\n    <ion-col class=\"user-info-wrapper\" size=\"12\">\r\n      <h3>{{user.name}}</h3>\r\n      <p>{{user.description}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <h4>Mobile</h4>\r\n      <p>\r\n        {{user.phoneNumber}}\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <h4>Email</h4>\r\n      <p>\r\n        {{user.email}}\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <h4>Auth Provider</h4>\r\n      <p>\r\n        {{user.provider}}\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"signOut()\">Sign out</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile/profile-can-activate.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/profile-can-activate.guard.ts ***!
  \*************************************************************/
/*! exports provided: ProfilePageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageGuard", function() { return ProfilePageGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/base-provider/firebase-auth-service.service */ "./src/app/providers/base-provider/firebase-auth-service.service.ts");




let ProfilePageGuard = class ProfilePageGuard {
    constructor(firebaseAuthService, router) {
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
    }
    canActivate() {
        // check if user is authenticated
        if (this.firebaseAuthService.getLoggedInUser() != null) {
            return true;
        }
        else {
            // Navigate to the login page
            this.router.navigate(['sign-in']);
            return false;
        }
    }
};
ProfilePageGuard.ctorParameters = () => [
    { type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfilePageGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfilePageGuard);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.resolver */ "./src/app/pages/profile/profile.resolver.ts");
/* harmony import */ var _profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-can-activate.guard */ "./src/app/pages/profile/profile-can-activate.guard.ts");









const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"],
        resolve: {
            data: _profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]
        },
        canActivate: [_profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__["ProfilePageGuard"]],
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]],
        providers: [_profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"], _profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__["ProfilePageGuard"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.profile-content .user-image {\n  border-radius: 4%;\n}\n.profile-content .user-details-wrapper {\n  justify-content: center;\n}\n.profile-content .user-details-wrapper .user-image-wrapper {\n  text-align: center;\n}\n.profile-content .user-details-wrapper .user-info-wrapper {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcV29ya1NwYWNlXFxDaGFuZ2VQYXN0YXNJZ3JlamFcXElncmVqYUFwcC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7QUNBTjtBREdJO0VBQ0Usa0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4gIC51c2VyLWltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvZmlsZS1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnByb2ZpbGUtY29udGVudCAudXNlci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQlO1xufVxuLnByb2ZpbGUtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/base-provider/firebase-auth-service.service */ "./src/app/providers/base-provider/firebase-auth-service.service.ts");




let ProfilePage = class ProfilePage {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.route.data
            .subscribe((result) => {
            this.user = result['data'];
        });
    }
    signOut() {
        this.authService.signOut().subscribe(() => {
            // Sign-out successful.
            this.router.navigate(['sign-in']);
        }, (error) => {
            console.log('signout error', error);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/pages/profile/profile.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/profile.resolver.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageResolver", function() { return ProfilePageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/base-provider/firebase-auth-service.service */ "./src/app/providers/base-provider/firebase-auth-service.service.ts");



let ProfilePageResolver = class ProfilePageResolver {
    constructor(firebaseAuthService) {
        this.firebaseAuthService = firebaseAuthService;
    }
    resolve() {
        return this.firebaseAuthService.getProfileData();
    }
};
ProfilePageResolver.ctorParameters = () => [
    { type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] }
];
ProfilePageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfilePageResolver);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map