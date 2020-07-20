function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"6\" class=\"user-image-wrapper\">\n      <img class=\"user-image\" [src]=\"user.image\">\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"12\">\n      <h3>{{user.name}}</h3>\n      <p>{{user.description}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <h4>Mobile</h4>\n      <p>\n        {{user.phoneNumber}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Email</h4>\n      <p>\n        {{user.email}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Auth Provider</h4>\n      <p>\n        {{user.provider}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"signOut()\">Sign out</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-can-activate.guard.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/profile/profile-can-activate.guard.ts ***!
    \*************************************************************/

  /*! exports provided: ProfilePageGuard */

  /***/
  function srcAppPagesProfileProfileCanActivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageGuard", function () {
      return ProfilePageGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");

    var ProfilePageGuard = /*#__PURE__*/function () {
      function ProfilePageGuard(firebaseAuthService, router) {
        _classCallCheck(this, ProfilePageGuard);

        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
      }

      _createClass(ProfilePageGuard, [{
        key: "canActivate",
        value: function canActivate() {
          // check if user is authenticated
          if (this.firebaseAuthService.getLoggedInUser() != null) {
            return true;
          } else {
            // Navigate to the login page
            this.router.navigate(['sign-in']);
            return false;
          }
        }
      }]);

      return ProfilePageGuard;
    }();

    ProfilePageGuard.ctorParameters = function () {
      return [{
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProfilePageGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProfilePageGuard);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.resolver */
    "./src/app/pages/profile/profile.resolver.ts");
    /* harmony import */


    var _profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-can-activate.guard */
    "./src/app/pages/profile/profile-can-activate.guard.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"],
      resolve: {
        data: _profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]
      },
      canActivate: [_profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__["ProfilePageGuard"]]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]],
      providers: [_profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"], _profile_can_activate_guard__WEBPACK_IMPORTED_MODULE_8__["ProfilePageGuard"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.profile-content .user-image {\n  border-radius: 4%;\n}\n.profile-content .user-details-wrapper {\n  justify-content: center;\n}\n.profile-content .user-details-wrapper .user-image-wrapper {\n  text-align: center;\n}\n.profile-content .user-details-wrapper .user-info-wrapper {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0FDQU47QURHSTtFQUNFLGtCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAudXNlci1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNCU7XG4gIH1cblxuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi5wcm9maWxlLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG59XG4ucHJvZmlsZS1jb250ZW50IC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG59XG4ucHJvZmlsZS1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2ZpbGUtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(router, route, authService) {
        _classCallCheck(this, ProfilePage);

        this.router = router;
        this.route = route;
        this.authService = authService;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (result) {
            _this.user = result['data'];
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this2 = this;

          this.authService.signOut().subscribe(function () {
            // Sign-out successful.
            _this2.router.navigate(['sign-in']);
          }, function (error) {});
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.resolver.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/profile/profile.resolver.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageResolver */

  /***/
  function srcAppPagesProfileProfileResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageResolver", function () {
      return ProfilePageResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");

    var ProfilePageResolver = /*#__PURE__*/function () {
      function ProfilePageResolver(firebaseAuthService) {
        _classCallCheck(this, ProfilePageResolver);

        this.firebaseAuthService = firebaseAuthService;
      }

      _createClass(ProfilePageResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.firebaseAuthService.getProfileData();
        }
      }]);

      return ProfilePageResolver;
    }();

    ProfilePageResolver.ctorParameters = function () {
      return [{
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]
      }];
    };

    ProfilePageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProfilePageResolver);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map