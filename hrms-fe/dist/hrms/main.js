(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aislogo/aislogo.component.css":
/*!***********************************************!*\
  !*** ./src/app/aislogo/aislogo.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aislogo/aislogo.component.html":
/*!************************************************!*\
  !*** ./src/app/aislogo/aislogo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\" style=\"margin-top: 15px;\">\n\t\t<div class=\"col-md-offset-2 col-md-1\">\n\t\t\t<img [src]=\"logoPath\" class=\"img-responsive\">\n\t\t</div>\n\t\t<div class=\"col-md-8 text-left\">\n\t\t\t <h3 class=\"brand\">ALL INDIA SERVICES (AIS)MEMBERS IN KERALA</h3>\n\t\t\t\t<h4>Data Collection Form | Department of General Administration, Government of Kerala</h4>\n\t\t</div>\n\t</div>\n</div>\t\n"

/***/ }),

/***/ "./src/app/aislogo/aislogo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aislogo/aislogo.component.ts ***!
  \**********************************************/
/*! exports provided: AislogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AislogoComponent", function() { return AislogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AislogoComponent = /** @class */ (function () {
    // logoPath = require('../../assets/images/logo.png')
    function AislogoComponent() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.logoPath = '../../' + this.baseUrl + 'assets/images/logo.png';
    }
    AislogoComponent.prototype.ngOnInit = function () {
    };
    AislogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aislogo',
            template: __webpack_require__(/*! ./aislogo.component.html */ "./src/app/aislogo/aislogo.component.html"),
            styles: [__webpack_require__(/*! ./aislogo.component.css */ "./src/app/aislogo/aislogo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AislogoComponent);
    return AislogoComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _spouse_spouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spouse/spouse.component */ "./src/app/spouse/spouse.component.ts");
/* harmony import */ var _dependants_dependants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dependants/dependants.component */ "./src/app/dependants/dependants.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workflow/workflow-guard.service */ "./src/app/workflow/workflow-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    // 1st Route
    { path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalComponent"] },
    // 1st Route
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    // 2nd Route
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"] },
    // 3rd Route
    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"] },
    // 4th Route
    { path: 'spouse', component: _spouse_spouse_component__WEBPACK_IMPORTED_MODULE_5__["SpouseComponent"] },
    // 5th Route
    { path: 'dependants', component: _dependants_dependants_component__WEBPACK_IMPORTED_MODULE_6__["DependantsComponent"] },
    { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__["ChangepasswordComponent"] },
    // 6th Route
    // { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 7th Route
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // 8th Route
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_10__["WorkflowGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <section>\n      <router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/data/formData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Multi-Step Wizard';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "formData", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hrms',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _dependants_dependants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dependants/dependants.component */ "./src/app/dependants/dependants.component.ts");
/* harmony import */ var _spouse_spouse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spouse/spouse.component */ "./src/app/spouse/spouse.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/login.service */ "./src/app/shared/login.service.ts");
/* harmony import */ var _changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./changepassword/changepassword.service */ "./src/app/changepassword/changepassword.service.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/app/workflow/workflow.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aislogo_aislogo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./aislogo/aislogo.component */ "./src/app/aislogo/aislogo.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Feature Components */






/* Routing Module */

/* Shared Service */












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [{ provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_12__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_12__["FormDataService"] },
                { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_16__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_16__["WorkflowService"] },
                _shared_profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
                _shared_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
                _changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_14__["ChangepasswordService"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"], _dependants_dependants_component__WEBPACK_IMPORTED_MODULE_8__["DependantsComponent"], _spouse_spouse_component__WEBPACK_IMPORTED_MODULE_9__["SpouseComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _aislogo_aislogo_component__WEBPACK_IMPORTED_MODULE_22__["AislogoComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_23__["ChangepasswordComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <form (ngSubmit)=\"OnSubmit(oldPassword.value,newPassword.value)\"  #loginForm=\"ngForm\" class=\"editForm\" novalidate>\n                <div class=\"tab-pane fade in active\">\n                  <h6 class=\"head text-center\">Change Password</h6>\n                  <br/>\n                  <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n                            <div class=\"row\">\n                                <div class='col-md-offset-3 col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"oldPassword\">Old Password</label>\n                                        <input class=\"form-control input-md\" #oldPassword ngModel required \n                                            id=\"oldPassword\" name=\"oldPassword\" type=\"password\" placeholder=\"oldPassword\">   \n                                        <div *ngIf = \"oldPassword?.touched || oldPassword?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf = \"oldPassword.errors?.required\">Passowrd Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"row\">\n                                <div class='col-md-offset-3 col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                          <label class=\"control-label\" for=\"newPassword\">Password</label>\n                                          <input class=\"form-control input-md\" #newPassword ngModel required    id=\"newPassword\"\n                                          name=\"newPassword\" type=\"password\" placeholder=\"newPassword\">\n\n                                          <div *ngIf = \"newPassword?.touched || newPassword?.dirty\" class=\"alert alert-danger\">\n                                             <div *ngIf = \"newPassword.errors?.required\">Password Required</div>\n                                          </div>\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"form-group text-center\">\n                                <button  class=\"btn btn-success btn-outline-rounded btn-info\" style=\"margin:0px 15px 0px 0px;\"\n                                > Change Password\n                                <span class=\"glyphicon glyphicon-arrow-right\"></span>\n                                </button>\n                            </div>\n                        </div>\n                  </div>\n                </div>\n            </form>          \n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../changepassword/changepassword.service */ "./src/app/changepassword/changepassword.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(router, _changePasswordService) {
        this.router = router;
        this._changePasswordService = _changePasswordService;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
    };
    ChangepasswordComponent.prototype.OnSubmit = function (oldPassword, newPassword) {
        var _this = this;
        var passwords = {};
        passwords.oldPassword = oldPassword;
        passwords.newPassword = newPassword;
        this._changePasswordService.changePassword(passwords).subscribe(function (response) {
            alert("PASSWORD SUCCESSFULLY CHANGED");
            _this.router.navigate(['/home']);
        }, function (err) {
            alert("Invalid Current Password");
        });
    };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/changepassword/changepassword.service.ts ***!
  \**********************************************************/
/*! exports provided: ChangepasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordService", function() { return ChangepasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordService = /** @class */ (function () {
    // private headers = new HttpHeaders().set('Content-Type','application/json');
    function ChangepasswordService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.API_URL = this.baseUrl + "/api";
    }
    ChangepasswordService.prototype.initRequestOptions = function () {
        var token = sessionStorage.getItem('token');
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'access_token': token
        };
        var headersConfig = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers);
        return headersConfig;
    };
    ChangepasswordService.prototype.changePassword = function (passwords) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/users/userChangePassword", passwords, { headers: options });
    };
    ChangepasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChangepasswordService);
    return ChangepasswordService;
}());



/***/ }),

/***/ "./src/app/data/formData.model.ts":
/*!****************************************!*\
  !*** ./src/app/data/formData.model.ts ***!
  \****************************************/
/*! exports provided: FormData, Personal, Work, Dependants, Spouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dependants", function() { return Dependants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spouse", function() { return Spouse; });
var FormData = /** @class */ (function () {
    function FormData() {
        //personal
        this.fullName = '';
        this.userPrefix = '';
        this.dateOfBirth = '';
        this.aadhaarNumber = '';
        this.penNumber = '';
        this.email = '';
        this.mobile = '';
        this.gender = '';
        this.maritialStatus = '';
        //dependants
        this.childFullName = '';
        this.childGender = '';
        this.childRelation = '';
        this.childDateOfBirth = '';
        this.childEmploy = '';
        this.childAis = '';
        this.parentFullName = '';
        this.parentRelation = '';
        this.parentDateOfBirth = '';
        this.parentEmploy = '';
        this.parentAis = '';
        this.childService = '';
        this.childCadre = '';
        this.childBatch = '';
        this.childDateOfAllotment = '';
        this.childIdentityNumber = '';
        this.parentService = '';
        this.parentCadre = '';
        this.parentBatch = '';
        this.parentDateOfAllotment = '';
        this.parentIdentityNumber = '';
        this.othersFullName = '';
        this.othersGender = '';
        this.othersRelation = '';
        this.othersDateOfBirth = '';
        this.othersEmploy = '';
        this.othersService = '';
        this.othersCadre = '';
        this.othersBatch = '';
        this.othersDateOfAllotment = '';
        this.othersIdentityNumber = '';
        //work
        this.workService = '';
        this.cadre = '';
        this.batch = '';
        this.dateOfAllotment = '';
        this.identityNumber = '';
        this.modeOfRecruitment = '';
        this.domicile = '';
        this.motherTongue = '';
        this.scaleOfPay = '';
        this.position = '';
        this.nameOfPost = '';
        this.nameOfPostCentral = '';
        this.officeFaxStateEx = '';
        this.departmentOrPsu = '';
        this.pinCode = '';
        this.pinCodeCentral = '';
        this.officeTel = '';
        this.officeTelCentral = '';
        this.workEmail = '';
        this.workMobile = '';
        this.officeFax = '';
        this.residencePh = '';
        this.residenceAddress = '';
        this.startCentralDeputation = '';
        this.ministryOrDepartmentOrPsu = '';
        this.nameOfTraining = '';
        this.trainingDuration = '';
        this.trainingPlace = '';
        this.dateOfStartingLeave = '';
        //spouse
        this.spousePrefix = '';
        this.spouseFullName = '';
        this.spouseGender = '';
        this.spouseDateOfBirth = '';
        this.spouseAdhaarNumber = '';
        this.spouseNationality = '';
        this.spouseEmail = '';
        this.spousePhoto = '';
        this.spouseEmployment = '';
        this.spouseConstitutionalPost = '';
        this.spouseEmploymentType = '';
        this.spouseService = '';
        this.spouseCadre = '';
        this.spouseBatch = '';
        this.spouseDateOfAllotment = '';
        this.spouseIdentityNumber = '';
        this.spousePost = '';
        this.spouseMinistry = '';
        this.spouseDepartment = '';
        this.spouseOrganization = '';
        this.spousePostState = '';
        this.spouseMinistryState = '';
        this.spouseDepartmentState = '';
        this.spouseOrganizationState = '';
        //Education
        this.eduqualification = '';
        this.university = '';
        this.institute = '';
        this.subject = '';
        this.division = '';
        this.userCv = '';
        this.year = '';
        this.language = '';
        this.read = '';
        this.write = '';
        this.speak = '';
        this.understand = '';
        this.mothertounge = '';
    }
    FormData.prototype.clear = function () {
        //personal
        this.fullName = '';
        this.userPrefix = '';
        this.dateOfBirth = '';
        this.aadhaarNumber = '';
        this.penNumber = '';
        this.email = '';
        this.mobile = '';
        this.gender = '';
        this.maritialStatus = '';
        //dependants
        this.childFullName = '';
        this.childGender = '';
        this.childRelation = '';
        this.childDateOfBirth = '';
        this.childEmploy = '';
        this.childAis = '';
        this.parentFullName = '';
        this.parentRelation = '';
        this.parentDateOfBirth = '';
        this.parentEmploy = '';
        this.parentAis = '';
        this.childService = '';
        this.childCadre = '';
        this.childBatch = '';
        this.childDateOfAllotment = '';
        this.childIdentityNumber = '';
        this.othersFullName = '';
        this.othersGender = '';
        this.othersRelation = '';
        this.othersDateOfBirth = '';
        this.othersEmploy = '';
        this.othersService = '';
        this.othersCadre = '';
        this.othersBatch = '';
        this.othersDateOfAllotment = '';
        this.othersIdentityNumber = '';
        //work
        this.workService = '';
        this.cadre = '';
        this.batch = '';
        this.dateOfAllotment = '';
        this.identityNumber = '';
        this.modeOfRecruitment = '';
        this.domicile = '';
        this.motherTongue = '';
        this.scaleOfPay = '';
        this.position = '';
        this.nameOfPost = '';
        this.nameOfPostCentral = '';
        this.departmentOrPsu = '';
        this.pinCode = '';
        this.pinCodeCentral = '';
        this.officeTel = '';
        this.officeTelCentral = '';
        this.workMobile = '';
        this.workEmail = '';
        this.officeFax = '';
        this.nameOfTraining = '';
        this.residencePh = '';
        this.residenceAddress = '';
        this.startCentralDeputation = '';
        this.ministryOrDepartmentOrPsu = '';
        this.nameOfTraining = '';
        this.trainingDuration = '';
        this.trainingPlace = '';
        this.dateOfStartingLeave = '';
        //spouse
        this.spousePrefix = '';
        this.spouseFullName = '';
        this.spouseGender = '';
        this.spouseDateOfBirth = '';
        this.spouseAdhaarNumber = '';
        this.spouseNationality = '';
        this.spouseEmail = '';
        this.spousePhoto = '';
        this.spouseEmployment = '';
        this.spouseEmploymentType = '';
        this.spouseConstitutionalPost = '';
        this.spouseService = '';
        this.spouseCadre = '';
        this.spouseBatch = '';
        this.spouseDateOfAllotment = '';
        this.spouseIdentityNumber = '';
        this.spousePost = '';
        this.spouseMinistry = '';
        this.spouseOrganization = '';
        this.spouseDepartment = '';
        this.spousePostState = '';
        this.spouseMinistryState = '';
        this.spouseDepartmentState = '';
        this.spouseOrganizationState = '';
        //Education
        this.eduqualification = '';
        this.university = '';
        this.institute = '';
        this.subject = '';
        this.division = '';
        this.year = '';
        this.userCv = '';
        this.language = '';
        this.read = '';
        this.write = '';
        this.speak = '';
        this.understand = '';
        this.mothertounge = '';
    };
    return FormData;
}());

var Personal = /** @class */ (function () {
    function Personal() {
        this.fullName = '';
        this.userPrefix = '';
        this.dateOfBirth = '';
        this.aadhaarNumber = '';
        this.penNumber = '';
        this.email = '';
        this.mobile = '';
        this.gender = '';
        this.maritialStatus = '';
    }
    return Personal;
}());

var Work = /** @class */ (function () {
    function Work() {
        this.workService = '';
        this.cadre = '';
        this.batch = '';
        this.dateOfAllotment = '';
        this.identityNumber = '';
        this.modeOfRecruitment = '';
        this.specialPay = '';
        this.state = '';
        this.district = '';
        this.hometown = '';
        // motherTongue: string = '';
        this.scaleOfPay = '';
        this.position = '';
        this.nameOfPost = '';
        this.nameOfPostCentral = '';
        this.departmentOrPsu = '';
        this.pinCode = '';
        this.pinCodeCentral = '';
        this.workEmail = '';
        this.workMobile = '';
        this.residencePh = '';
        this.officeTel = '';
        this.residenceAddress = '';
        this.officeTelCentral = '';
        this.emailCentral = '';
        this.mobileCentral = '';
        this.officeFaxCentral = '';
        this.officeFaxStateEx = '';
        this.startCentralDeputation = '';
        this.ministryOrDepartmentOrPsu = '';
        this.residencePhCentral = '';
        this.residenceAddressCentral = '';
        this.nameOfTraining = '';
        this.trainingDuration = '';
        this.trainingPlace = '';
        this.dateOfStartingLeave = '';
    }
    return Work;
}());

var Dependants = /** @class */ (function () {
    function Dependants() {
        this.childFullName = '';
        this.childGender = '';
        this.childRelation = '';
        this.childDateOfBirth = '';
        this.childEmploy = '';
        this.childAis = '';
        this.childService = '';
        this.childCadre = '';
        this.childBatch = '';
        this.childDateOfAllotment = '';
        this.childIdentityNumber = '';
        this.parentFullName = '';
        this.parentRelation = '';
        this.parentDateOfBirth = '';
        this.parentEmploy = '';
        this.parentAis = '';
        this.parentService = '';
        this.parentCadre = '';
        this.parentBatch = '';
        this.parentDateOfAllotment = '';
        this.parentIdentityNumber = '';
        this.othersFullName = '';
        this.othersGender = '';
        this.othersRelation = '';
        this.othersDateOfBirth = '';
        this.othersEmploy = '';
        this.othersService = '';
        this.othersCadre = '';
        this.othersBatch = '';
        this.othersDateOfAllotment = '';
        this.othersIdentityNumber = '';
    }
    return Dependants;
}());

var Spouse = /** @class */ (function () {
    function Spouse() {
        this.spousePrefix = '';
        this.spouseFullName = '';
        this.spouseGender = '';
        this.spouseDateOfBirth = '';
        this.spouseAdhaarNumber = '';
        this.spouseNationality = '';
        this.spouseEmail = '';
        this.spouseMobile = '';
        this.spousePhoto = '';
        this.spouseEmployment = '';
        this.spouseEmploymentType = '';
        this.spouseConstitutionalPost = '';
        this.spouseService = '';
        this.spouseCadre = '';
        this.spouseBatch = '';
        this.spouseDateOfAllotment = '';
        this.spouseIdentityNumber = '';
        this.spousePost = '';
        this.spouseMinistry = '';
        this.spouseDepartment = '';
        this.spouseOrganization = '';
        this.spouseIdentityNumberRetired = '';
        this.spousePostState = '';
        this.spouseMinistryState = '';
        this.spouseDepartmentState = '';
        this.spouseOrganizationState = '';
        this.spousePen = '';
    }
    return Spouse;
}());



/***/ }),

/***/ "./src/app/data/formData.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/formData.service.ts ***!
  \******************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isEducationFormValid = false;
        this.isSpouseFormValid = false;
        this.isDependantsFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            fullName: this.formData.fullName,
            userPrefix: this.formData.userPrefix,
            dateOfBirth: this.formData.dateOfBirth,
            aadhaarNumber: this.formData.aadhaarNumber,
            penNumber: this.formData.penNumber,
            email: this.formData.email,
            mobile: this.formData.mobile,
            gender: this.formData.gender,
            maritialStatus: this.formData.maritialStatus
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.fullName = data.fullName;
        this.formData.userPrefix = data.userPrefix;
        this.formData.dateOfBirth = data.dateOfBirth;
        this.formData.aadhaarNumber = data.aadhaarNumber;
        this.formData.penNumber = data.penNumber;
        this.formData.email = data.email;
        this.formData.mobile = data.mobile;
        this.formData.gender = data.gender;
        this.formData.maritialStatus = data.maritialStatus;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].personal);
    };
    // getWork(): Work {
    //     // Return the Personal data
    //     var work: Work = {
    //         workService: this.formData.workService,
    //         cadre: this.formData.cadre,
    //         batch: this.formData.batch,
    //         dateOfAllotment: this.formData.dateOfAllotment,
    //         identityNumber: this.formData.identityNumber,
    //         modeOfRecruitment: this.formData.modeOfRecruitment,
    //         domicile: this.formData.domicile,
    //         motherTongue: this.formData.motherTongue,
    //         scaleOfPay: this.formData.scaleOfPay,
    //         position: this.formData.position,
    //         nameOfPost: this.formData.nameOfPost,
    //         nameOfPostCentral: this.formData.nameOfPostCentral,
    //         pinCodeCentral: this.formData.pinCodeCentral,
    //         officeTelCentral: this.formData.officeTelCentral,
    //         officeFaxStateEx: this.formData.officeFaxStateEx,
    //         departmentOrPsu: this.formData.departmentOrPsu,
    //         pinCode: this.formData.pinCode,
    //         officeTel: this.formData.officeTel,
    //         workEmail: this.formData.workEmail,
    //         workMobile: this.formData.workMobile,
    //         officeFax: this.formData.officeFax,
    //         residencePh: this.formData.residencePh,
    //         residenceAddress: this.formData.residenceAddress,
    //         startCentralDeputation: this.formData.startCentralDeputation,
    //         ministryOrDepartmentOrPsu: this.formData.ministryOrDepartmentOrPsu,
    //         nameOfTraining: this.formData.nameOfTraining,
    //         trainingDuration: this.formData.trainingDuration,
    //         trainingPlace: this.formData.trainingPlace,
    //         dateOfStartingLeave: this.formData.dateOfStartingLeave
    //     };
    //     return work;
    // }
    // setWork(data: Work) {
    //     // Update the Work data only when the Work Form had been validated successfully
    //     this.isWorkFormValid = true;
    //     this.formData.workService = data.workService;
    //     this.formData.cadre  = data.cadre;
    //     this.formData.batch = data.batch;
    //     this.formData.dateOfAllotment = data.dateOfAllotment;
    //     this.formData.identityNumber = data.identityNumber;
    //     this.formData.modeOfRecruitment = data.modeOfRecruitment;
    //     this.formData.domicile = data.domicile;
    //     this.formData.motherTongue = data.motherTongue;
    //     this.formData.scaleOfPay = data.scaleOfPay;
    //     this.formData.position = data.position;
    //     this.formData.nameOfPost = data.nameOfPost;
    //     this.formData.nameOfPostCentral=data.nameOfPostCentral,
    //     this.formData.pinCodeCentral=data.pinCodeCentral,
    //     this.formData.officeTelCentral=data.officeTelCentral,
    //     this.formData.officeFaxStateEx=data.officeFaxStateEx,
    //     this.formData.departmentOrPsu = data.departmentOrPsu;
    //     this.formData.pinCode = data.pinCode;
    //     this.formData.officeTel = data.officeTel;
    //     this.formData.workEmail = data.workEmail;
    //     this.formData.workMobile = data.workMobile;
    //     this.formData.officeFax = data.officeFax;
    //     this.formData.residencePh = data.residencePh;
    //     this.formData.residenceAddress = data.residenceAddress;
    //     this.formData.startCentralDeputation = data.startCentralDeputation;
    //     this.formData.ministryOrDepartmentOrPsu = data.ministryOrDepartmentOrPsu;
    //     this.formData.nameOfTraining = data.nameOfTraining;
    //     this.formData.trainingDuration = data.trainingDuration;
    //     this.formData.trainingPlace = data.trainingPlace;
    //     this.formData.dateOfStartingLeave = data.dateOfStartingLeave;
    //     this.workflowService.validateStep(STEPS.work);
    // }
    // getSpouse(): Spouse {
    //     // Return the Personal data
    //     var spouse: Spouse = {
    //         spousePrefix: this.formData.spousePrefix,
    //         spouseFullName: this.formData.spouseFullName,
    //         spouseGender: this.formData.spouseGender,
    //         spouseDateOfBirth: this.formData.spouseDateOfBirth,
    //         spouseAdhaarNumber: this.formData.spouseAdhaarNumber,
    //         spouseNationality: this.formData.spouseNationality,
    //         spouseEmail: this.formData.spouseEmail,
    //         spousePhoto: this.formData.spousePhoto,
    //         spouseEmployment: this.formData.spouseEmployment,
    //         spouseEmploymentType: this.formData.spouseEmploymentType,
    //         spouseConstitutionalPost:this.formData.spouseConstitutionalPost,
    //         spouseService: this.formData.spouseService,
    //         spouseCadre: this.formData.spouseCadre,
    //         spouseBatch: this.formData.spouseBatch,
    //         spouseDateOfAllotment: this.formData.spouseDateOfAllotment,
    //         spouseIdentityNumber: this.formData.spouseIdentityNumber,
    //         spousePost: this.formData.spousePost,
    //         spouseMinistry: this.formData.spouseMinistry,
    //         spouseDepartment: this.formData.spouseDepartment,
    //         spouseOrganization: this.formData.spouseOrganization,
    //         spousePostState: this.formData.spousePostState,
    //         spouseMinistryState: this.formData.spouseMinistryState,
    //         spouseDepartmentState: this.formData.spouseDepartmentState,
    //         spouseOrganizationState: this.formData.spouseOrganizationState        
    //     };
    //     return spouse;
    // }
    // setSpouse(data: Spouse) {
    //     // Update the Spouse data only when the Spouse Form had been validated successfully
    //     this.isSpouseFormValid = true;
    //     this.formData.spousePrefix = data.spousePrefix;
    //     this.formData.spouseFullName =data.spouseFullName;
    //     this.formData.spouseGender =data.spouseGender;
    //     this.formData.spouseDateOfBirth =data.spouseDateOfBirth;
    //     this.formData.spouseAdhaarNumber =data.spouseAdhaarNumber;
    //     this.formData.spouseNationality =data.spouseNationality;
    //     this.formData.spouseEmail =data.spouseEmail;
    //     this.formData.spousePhoto =data.spousePhoto;
    //     this.formData.spouseEmployment =data.spouseEmployment;
    //     this.formData.spouseEmploymentType =data.spouseEmploymentType;
    //     this.formData.spouseConstitutionalPost =data.spouseConstitutionalPost;
    //     this.formData.spouseService =data.spouseService;
    //     this.formData.spouseCadre =data.spouseCadre;
    //     this.formData.spouseBatch =data.spouseBatch;
    //     this.formData.spouseDateOfAllotment =data.spouseDateOfAllotment;
    //     this.formData.spouseIdentityNumber =data.spouseIdentityNumber;
    //     this.formData.spousePost =data.spousePost;
    //     this.formData.spouseMinistry =data.spouseMinistry;
    //     this.formData.spouseOrganization =data.spouseOrganization;
    //     this.formData.spouseDepartment =data.spouseDepartment;
    //     this.formData.spousePostState =data.spousePostState;
    //     this.formData.spouseMinistryState =data.spouseMinistryState;
    //     this.formData.spouseDepartmentState =data.spouseDepartmentState;
    //     this.formData.spouseOrganizationState =data.spouseOrganizationState;
    //     this.workflowService.validateStep(STEPS.spouse);
    // }
    // getDependants(): Dependants {
    //     // Return the Personal data
    //     var dependants: Dependants = {
    //         childFullName: this.formData.childFullName,
    //         childGender: this.formData.childGender,
    //         childRelation: this.formData.childRelation,
    //         childDateOfBirth: this.formData.childDateOfBirth,
    //         childEmploy: this.formData.childEmploy,
    //         childAis: this.formData.childAis,
    //         parentFullName: this.formData.parentFullName,
    //         parentRelation: this.formData.parentRelation,
    //         parentDateOfBirth: this.formData.parentDateOfBirth,
    //         parentEmploy: this.formData.parentEmploy,
    //         parentAis: this.formData.parentAis,
    //         othersFullName: this.formData.othersFullName,
    //         othersGender: this.formData.othersGender,
    //         othersRelation: this.formData.othersRelation,
    //         othersDateOfBirth: this.formData.othersDateOfBirth,
    //         othersEmploy: this.formData.othersEmploy
    //     };
    //     return dependants;
    // }
    // setDependants(data: Dependants) {
    //     // Update the Dependants data only when the Dependants Form had been validated successfully
    //     this.isDependantsFormValid = true;
    //     this.formData.childFullName = data.childFullName;
    //     this.formData.childGender = data.childGender;
    //     this.formData.childRelation = data.childRelation;
    //     this.formData.childDateOfBirth = data.childDateOfBirth;
    //     this.formData.childEmploy = data.childEmploy;
    //     this.formData.childAis = data.childAis;
    //     this.formData.parentFullName = data.parentFullName;
    //     this.formData.parentRelation = data.parentRelation;
    //     this.formData.parentDateOfBirth = data.parentDateOfBirth;
    //     this.formData.parentEmploy = data.parentEmploy;
    //     this.formData.parentAis = data.parentAis;
    //     this.formData.othersFullName = data.othersFullName;
    //     this.formData.othersGender = data.othersGender;
    //     this.formData.othersRelation = data.othersRelation;
    //     this.formData.othersDateOfBirth = data.othersDateOfBirth;
    //     this.formData.othersEmploy = data.othersEmploy;
    //     this.workflowService.validateStep(STEPS.dependants);
    // }
    // getEducation() : Education {
    //     // Return the Education data
    //     var education: Education = {
    //             eduqualification: this.formData.eduqualification,
    //             university: this.formData.university,
    //             institute: this.formData.institute,
    //             subject: this.formData.subject,
    //             division: this.formData.division,
    //             year: this.formData.year,
    //             userCv: this.formData.userCv,
    //             language:this.formData.language,
    //             read: this.formData.read,
    //             write: this.formData.write,
    //             speak: this.formData.speak,
    //             understand: this.formData.understand
    //     };
    //     return education;
    // }
    // setEducation(data: Education) {
    //     // Update the Education data only when the Education Form had been validated successfully
    //     this.isEducationFormValid = true;
    //     this.formData.eduqualification = data.eduqualification;
    //     this.formData.university = data.university;
    //     this.formData.institute = data.institute;
    //     this.formData.subject = data.subject;
    //     this.formData.division = data.division;
    //     this.formData.year = data.year;
    //     this.formData.userCv = data.userCv;
    //     this.formData.language=data.language;
    //     this.formData.read = data.read;
    //     this.formData.write = data.write;
    //     this.formData.speak = data.speak;
    //     this.formData.understand = data.understand;
    //     this.workflowService.validateStep(STEPS.education);
    // }
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isEducationFormValid = this.isSpouseFormValid = this.isDependantsFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isSpouseFormValid &&
            this.isDependantsFormValid &&
            this.isEducationFormValid;
    };
    FormDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/dependants/dependants.component.html":
/*!******************************************************!*\
  !*** ./src/app/dependants/dependants.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <msw-navbar></msw-navbar>\n            <form #dependantsForm=\"ngForm\" class=\"editForm\" novalidate>\n                <div class=\"tab-pane fade in active\">\n                    <h6 class=\"head text-center\">{{title}}</h6>\n                    <br/>\n                    <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                                <h4 class=\"panel-title\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                                                        Children Info\n                                                    </a>\n                                                </h4>\n                                            </div>\n\n                                            <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                                <div class=\"panel-body\">\n                                                    <div class=\"row clearfix text-center\">\n                                                        <div class=\"form-group\">\n                                                            <input id=\"image\" type=\"file\" name=\"profile_photo\" placeholder=\"Photo\" class=\"profilePicEditorClass\" id=\"file\" (change)=\"handleFileInput($event)\">\n                                                            <!-- <img src=\"../../assets/images/Avatar.jpg\" class=\"img-circle\" alt=\"car\" width=\"150\" height=\"130\"> -->\n                                                            <img src=\"{{childImg_url}}\" class=\"img-circle\" alt=\"profile\" width=\"150\" height=\"130\">\n                                                        </div>\n                                                    </div>\n\n                                                    <div class='row'>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childFullName\">Full Name</label>\n                                                                <input class=\"form-control input-md\" #childFullName=\"ngModel\" required id=\"childFullName\" name=\"childFullName\" type=\"text\"\n                                                                    placeholder=\"Full Name\" [(ngModel)]=\"dependants.childFullName\">\n                                                                <div *ngIf=\"childFullName?.touched || childFullName?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childFullName.errors?.required\">Name Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childGender\">Gender</label>\n                                                                <select class=\"form-control input-md\" required id=\"childGender\" required name=\"childGender\" #childGender=\"ngModel\" [(ngModel)]=\"dependants.childGender\">\n\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let gen of Gender\" [id]=\"gen.id\" [value]=\"gen.gender\">{{gen.gender}}</option>\n\n                                                                </select>\n                                                                <div *ngIf=\"childGender?.touched || childGender?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childGender.errors?.required\">Gender Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childRelation\">Relation</label>\n                                                                <input class=\"form-control input-md\" #childRelation=\"ngModel\" required id=\"childRelation\" name=\"childRelation\" type=\"text\"\n                                                                    placeholder=\"Relation\" [(ngModel)]=\"dependants.childRelation\">\n                                                                <div *ngIf=\"childRelation?.touched || childRelation?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childRelation.errors?.required\">Relation Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childDateOfBirth\">Date Of Birth</label>\n                                                                <input class=\"form-control input-md\" #childDateOfBirth=\"ngModel\" required id=\"childDateOfBirth\" name=\"childDateOfBirth\" type=\"date\"\n                                                                    placeholder=\"Date Of Birth\" [(ngModel)]=\"dependants.childDateOfBirth\">\n                                                                <div *ngIf=\"childDateOfBirth?.touched || childDateOfBirth?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childDateOfBirth.errors?.required\">Valid Date Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childEmploy\">Employed or Not</label>\n                                                                <select class=\"form-control input-md\" id=\"childEmploy\" required name=\"childEmploy\" #childEmploy=\"ngModel\" [(ngModel)]=\"dependants.childEmploy\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option value=\"Employed\">Employed</option>\n                                                                    <option value=\"Not\">Not</option>\n                                                                </select>\n                                                                <div *ngIf=\"childEmploy?.touched || childEmploy?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childEmploy.errors?.required\">Employee Status Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childAis\">Whether AIS or Not</label>\n                                                                <select class=\"form-control input-md\" id=\"childAis\" required name=\"childAis\" (change)=\"childHandler($event)\" #childAis=\"ngModel\"\n                                                                    [(ngModel)]=\"dependants.childAis\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option value=\"AIS\">AIS</option>\n                                                                    <option value=\"Not\">Not</option>\n                                                                </select>\n                                                                <div *ngIf=\"childAis?.touched || childAis?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childAis.errors?.required\">Employee Status Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"childJobType\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childService\">Child Service</label>\n                                                                <select class=\"form-control input-md\" id=\"childService\" required name=\"childService\" #childService=\"ngModel\" [(ngModel)]=\"dependants.childService\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option value=\"IAS\">IAS</option>\n                                                                    <option value=\"IPS\">IPS</option>\n                                                                    <option value=\"IFS\">IFS</option>\n                                                                </select>\n                                                                <div *ngIf=\"childService?.touched || childService?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childService.errors?.required\">Service is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Child Starting -->\n                                                    <div class=\"row\" *ngIf=\"childJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childCadre\">Cadre</label>\n                                                                <select class=\"form-control input-md\" id=\"childCadre\" required name=\"childCadre\" #childCadre=\"ngModel\" [(ngModel)]=\"dependants.childCadre\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let cad of Cadre\" [id]=\"cad.id\" [value]=\"cad.cadre\">{{cad.cadre}}</option>\n                                                                </select>\n                                                                <div *ngIf=\"childCadre?.touched || childCadre?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childCadre.errors?.required\">Cadre is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childBatch\">Batch</label>\n                                                                <input class=\"form-control input-md\" #childBatch=\"ngModel\" required id=\"childBatch\" name=\"childBatch\" type=\"text\" placeholder=\"Batch\"\n                                                                    [(ngModel)]=\"dependants.childBatch\">\n                                                                <div *ngIf=\"childBatch?.touched || childBatch?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childBatch.errors?.required\">Batch is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"childJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childDateOfAllotment\">Date of allotment of service</label>\n                                                                <input class=\"form-control input-md\" #childDateOfAllotment=\"ngModel\" required id=\"childDateOfAllotment\" name=\"childDateOfAllotment\"\n                                                                    type=\"date\" placeholder=\"Date of allotment of service\" [(ngModel)]=\"dependants.childDateOfAllotment\">\n                                                                <div *ngIf=\"childDateOfAllotment?.touched || childDateOfAllotment?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childDateOfAllotment.errors?.required\">Date of allotment is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"childIdentityNumber\">Identity Number</label>\n                                                                <input class=\"form-control input-md\" #childIdentityNumber=\"ngModel\" required id=\"childIdentityNumber\" name=\"childIdentityNumber\"\n                                                                    type=\"text\" placeholder=\"Identity Number\" [(ngModel)]=\"dependants.childIdentityNumber\">\n                                                                <div *ngIf=\"childIdentityNumber?.touched || childIdentityNumber?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"childIdentityNumber.errors?.required\">Identity Numberis Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Child Compleated -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                                <h4 class=\"panel-title\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                                        Parents Info\n                                                    </a>\n                                                </h4>\n                                            </div>\n                                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                                <div class=\"panel-body\">\n\n                                                    <!-- Parent Information -->\n                                                    <div class=\"row clearfix text-center\">\n                                                        <div class=\"form-group\">\n                                                            <input id=\"image\" type=\"file\" name=\"profile_photo\" placeholder=\"Photo\" class=\"profilePicEditorClass\" id=\"file\" (change)=\"handleParentInput($event)\">\n                                                            <!-- <img src=\"../../assets/images/Avatar.jpg\" class=\"img-circle\" alt=\"car\" width=\"150\" height=\"130\"> -->\n                                                            <img src=\"{{parentImg_url}}\" class=\"img-circle\" alt=\"profile\" width=\"150\" height=\"130\">\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"row\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentFullName\">Full Name</label>\n                                                                <input class=\"form-control input-md\" #parentFullName=\"ngModel\" required id=\"parentFullName\" name=\"parentFullName\" type=\"text\"\n                                                                    placeholder=\"Full Name\" [(ngModel)]=\"dependants.parentFullName\">\n                                                                <div *ngIf=\"parentFullName?.touched || parentFullName?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentFullName.errors?.required\">Name Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentRelation\">Relation</label>\n                                                                <input class=\"form-control input-md\" #parentRelation=\"ngModel\" required id=\"parentRelation\" name=\"parentRelation\" type=\"text\"\n                                                                    placeholder=\"Relation\" [(ngModel)]=\"dependants.parentRelation\">\n                                                                <div *ngIf=\"parentRelation?.touched || parentRelation?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentRelation.errors?.required\">Relation Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentDateOfBirth\">Date Of Birth</label>\n                                                                <input class=\"form-control input-md\" #parentDateOfBirth=\"ngModel\" required id=\"parentDateOfBirth\" name=\"parentDateOfBirth\"\n                                                                    type=\"date\" placeholder=\"Date Of Birth\" [(ngModel)]=\"dependants.parentDateOfBirth\">\n                                                                <div *ngIf=\"parentDateOfBirth?.touched || parentDateOfBirth?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentDateOfBirth.errors?.required\">Valid Date Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentEmploy\">Employed or Not</label>\n                                                                <select class=\"form-control input-md\" id=\"parentEmploy\" required name=\"parentEmploy\" #parentEmploy=\"ngModel\" [(ngModel)]=\"dependants.parentEmploy\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option value=\"Employed\">Employed</option>\n                                                                    <option value=\"Not\">Not</option>\n                                                                </select>\n                                                                <div *ngIf=\"parentEmploy?.touched || parentEmploy?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentEmploy.errors?.required\">Employee Status Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentAis\">Whether AIS or Not</label>\n                                                                <select class=\"form-control input-md\" id=\"parentAis\" required name=\"parentAis\" (change)=\"parentHandler($event)\" #parentAis=\"ngModel\"\n                                                                    [(ngModel)]=\"dependants.parentAis\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option value=\"AIS\">AIS</option>\n                                                                    <option value=\"Not\">Not</option>\n                                                                </select>\n                                                                <div *ngIf=\"parentAis?.touched || parentAis?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentAis.errors?.required\">AIS or Not Status Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"parentJobType\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentService\">Child Service</label>\n                                                                <select class=\"form-control input-md\" id=\"parentService\" required name=\"parentService\" #parentService=\"ngModel\" [(ngModel)]=\"dependants.parentService\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let ser of Service\" [id]=\"ser.id\" [value]=\"ser.service\">{{ser.service}}</option>\n                                                                </select>\n                                                                <div *ngIf=\"parentService?.touched || parentService?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentService.errors?.required\">Service is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Parent Starting -->\n                                                    <div class=\"row\" *ngIf=\"parentJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentCadre\">Cadre</label>\n                                                                <select class=\"form-control input-md\" id=\"parentCadre\" required name=\"parentCadre\" #parentCadre=\"ngModel\" [(ngModel)]=\"dependants.parentCadre\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let cad of Cadre\" [id]=\"cad.id\" [value]=\"cad.cadre\">{{cad.cadre}}</option>\n                                                                </select>\n                                                                <div *ngIf=\"parentCadre?.touched || parentCadre?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentCadre.errors?.required\">Cadre is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentBatch\">Batch</label>\n                                                                <input class=\"form-control input-md\" #parentBatch=\"ngModel\" required id=\"parentBatch\" name=\"parentBatch\" type=\"text\" placeholder=\"Batch\"\n                                                                    [(ngModel)]=\"dependants.parentBatch\">\n                                                                <div *ngIf=\"parentBatch?.touched || parentBatch?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentBatch.errors?.required\">Batch is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"parentJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentDateOfAllotment\">Date of allotment of service</label>\n                                                                <input class=\"form-control input-md\" #parentDateOfAllotment=\"ngModel\" required id=\"parentDateOfAllotment\" name=\"parentDateOfAllotment\"\n                                                                    type=\"date\" placeholder=\"Date of allotment of service\" [(ngModel)]=\"dependants.parentDateOfAllotment\">\n                                                                <div *ngIf=\"parentDateOfAllotment?.touched || parentDateOfAllotment?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentDateOfAllotment.errors?.required\">Date of allotment is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"parentIdentityNumber\">Identity Number</label>\n                                                                <input class=\"form-control input-md\" #parentIdentityNumber=\"ngModel\" required id=\"parentIdentityNumber\" name=\"parentIdentityNumber\"\n                                                                    type=\"text\" placeholder=\"Identity Number\" [(ngModel)]=\"dependants.parentIdentityNumber\">\n                                                                <div *ngIf=\"parentIdentityNumber?.touched || parentIdentityNumber?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"parentIdentityNumber.errors?.required\">Identity Numberis Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Parent Compleated -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                                <h4 class=\"panel-title\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                        Others Info\n                                                    </a>\n                                                </h4>\n                                            </div>\n                                            <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                                <div class=\"panel-body\">\n                                                    <!-- Others Information -->\n                                                    <div class=\"row clearfix text-center\">\n                                                        <div class=\"form-group\">\n                                                            <input id=\"image\" type=\"file\" name=\"profile_photo\" placeholder=\"Photo\" class=\"profilePicEditorClass\" id=\"file\" (change)=\"handleOthersInput($event)\">\n                                                            <!-- <img src=\"../../assets/images/Avatar.jpg\" class=\"img-circle\" alt=\"car\" width=\"150\" height=\"130\"> -->\n                                                            <img src=\"{{othersImg_url}}\" class=\"img-circle\" alt=\"profile\" width=\"150\" height=\"130\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersFullName\">Full Name</label>\n                                                                <input class=\"form-control input-md\" #othersFullName=\"ngModel\" required id=\"othersFullName\" name=\"othersFullName\" type=\"text\"\n                                                                    placeholder=\"Full Name\" [(ngModel)]=\"dependants.othersFullName\">\n                                                                <div *ngIf=\"othersFullName?.touched || othersFullName?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersFullName.errors?.required\">Name Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersGender\">Gender</label>\n                                                                <select class=\"form-control input-md\" id=\"othersGender\" required name=\"othersGender\" #othersGender=\"ngModel\" [(ngModel)]=\"dependants.othersGender\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let gen of Gender\" [id]=\"gen.id\" [value]=\"gen.gender\">{{gen.gender}}</option>\n                                                                </select>\n                                                                <div *ngIf=\"othersGender?.touched || othersGender?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersGender.errors?.required\">Gender Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersRelation\">Relation</label>\n                                                                <input class=\"form-control input-md\" #othersRelation=\"ngModel\" required id=\"othersRelation\" name=\"othersRelation\" type=\"text\"\n                                                                    placeholder=\"Realtion\" [(ngModel)]=\"dependants.othersRelation\">\n                                                                <div *ngIf=\"othersRelation?.touched || othersRelation?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersRelation.errors?.required\">Relation Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersDateOfBirth\">Date Of Birth</label>\n                                                                <input class=\"form-control input-md\" #othersDateOfBirth=\"ngModel\" required id=\"othersDateOfBirth\" name=\"othersDateOfBirth\"\n                                                                    type=\"date\" placeholder=\"Date Of Birth\" [(ngModel)]=\"dependants.othersDateOfBirth\">\n                                                                <div *ngIf=\"othersDateOfBirth?.touched || othersDateOfBirth?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersDateOfBirth.errors?.required\">Enter Valid Date</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6 '>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersEmploy\">Employed or Not</label>\n                                                                <select class=\"form-control input-md\" id=\"othersEmploy\" required name=\"othersEmploy\" (change)=\"othersHandler($event)\" #othersEmploy=\"ngModel\"\n                                                                    [(ngModel)]=\"dependants.othersEmploy\">\n                                                                    <option value=\"\" disabled>select Option</option>\n                                                                    <option value=\"Employed\">Employed</option>\n                                                                    <option value=\"Not\">Not</option>\n                                                                </select>\n                                                                <div *ngIf=\"othersEmploy?.touched || othersEmploy?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersEmploy.errors?.required\">Employee Status Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"othersJobType\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6' *ngIf=\"othersAisService\">\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersService\">Child Service</label>\n                                                                <select class=\"form-control input-md\" id=\"othersService\" required name=\"othersService\" #othersService=\"ngModel\" [(ngModel)]=\"dependants.othersService\">\n                                                                    <option value=\"\" disabled>Select Option</option>\n                                                                    <option *ngFor=\"let ser of Service\" [id]=\"ser.id\" [value]=\"ser.service\">{{ser.service}}</option>\n                                                                </select>\n                                                                <div *ngIf=\"othersService?.touched || othersService?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersService.errors?.required\">Service is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Others Starting -->\n                                                    <div class=\"row\" *ngIf=\"othersJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersCadre\">Cadre</label>\n                                                                <select class=\"form-control input-md\" id=\"othersCadre\" required name=\"othersCadre\" #othersCadre=\"ngModel\" [(ngModel)]=\"dependants.othersCadre\">\n                                                                    <option value=\"\" disabled>Cadre</option>\n                                                                    <option value=\"Kerala\">Kerala</option>\n                                                                    <option value=\"Other\">Other</option>\n                                                                </select>\n                                                                <div *ngIf=\"othersCadre?.touched || othersCadre?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersCadre.errors?.required\">Cadre is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersBatch\">Batch</label>\n                                                                <input class=\"form-control input-md\" #othersBatch=\"ngModel\" required id=\"othersBatch\" name=\"othersBatch\" type=\"text\" placeholder=\"Batch\"\n                                                                    [(ngModel)]=\"dependants.othersBatch\">\n                                                                <div *ngIf=\"othersBatch?.touched || othersBatch?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersBatch.errors?.required\">Batch is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" *ngIf=\"othersJobDetails\">\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersDateOfAllotment\">Date of allotment of service</label>\n                                                                <input class=\"form-control input-md\" #othersDateOfAllotment=\"ngModel\" required id=\"othersDateOfAllotment\" name=\"othersDateOfAllotment\"\n                                                                    type=\"date\" placeholder=\"Date of allotment of service\" [(ngModel)]=\"dependants.othersDateOfAllotment\">\n                                                                <div *ngIf=\"othersDateOfAllotment?.touched || othersDateOfAllotment?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersDateOfAllotment.errors?.required\">Date of allotment is Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                                            <div class=\"form-group\">\n                                                                <label class=\"control-label\" for=\"othersIdentityNumber\">Identity Number</label>\n                                                                <input class=\"form-control input-md\" #othersIdentityNumber=\"ngModel\" required id=\"othersIdentityNumber\" name=\"othersIdentityNumber\"\n                                                                    type=\"text\" placeholder=\"Identity Number\" [(ngModel)]=\"dependants.othersIdentityNumber\">\n                                                                <div *ngIf=\"othersIdentityNumber?.touched || othersIdentityNumber?.dirty\" class=\"alert alert-danger\">\n                                                                    <div *ngIf=\"othersIdentityNumber.errors?.required\">Identity Numberis Required</div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!-- if AIS Employed Others Compleated -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group text-center space-20\">\n                        <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(dependantsForm)\"> Submit\n                            <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\n                        </button>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dependants/dependants.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dependants/dependants.component.ts ***!
  \****************************************************/
/*! exports provided: DependantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependantsComponent", function() { return DependantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DependantsComponent = /** @class */ (function () {
    // visible=false;
    // activateSaveButton:Boolean = false;
    // showChild(){
    //     this.visible = !this.visible;
    //     this.activateSaveButton = true;
    // }
    // parentVisible=false;
    // showParent(){
    //     this.parentVisible = !this.parentVisible;
    //     this.activateSaveButton = true;
    // }
    // othersVisible=false;
    // showOthers(){
    //     this.othersVisible = !this.othersVisible;
    //     this.activateSaveButton = true;
    // }
    function DependantsComponent(router, _profileService, http) {
        this.router = router;
        this._profileService = _profileService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.title = 'Dependant Details';
        this.dependants = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Dependants"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.selectedFile = null;
        this.selectedPrefix = '';
        this.selectedValue = '';
        this.childJobType = false;
        this.childJobDetails = false;
        this.parentJobType = false;
        this.parentJobDetails = false;
        this.othersJobType = false;
        this.othersJobDetails = false;
    }
    DependantsComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readDependants(id);
        this.getGenderCombo();
        this.getChildPic(id);
        this.getParentPic(id);
        this.getOthersPic(id);
        this.getCadreCombo();
        this.getServiceCombo();
    };
    //Combo From DB
    DependantsComponent.prototype.getCadreCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Cadres", { headers: this.headers })
            .subscribe(function (res) {
            _this.Cadre = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    DependantsComponent.prototype.getServiceCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Services", { headers: this.headers })
            .subscribe(function (res) {
            _this.Service = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    //Combo From DB
    //image upload other
    DependantsComponent.prototype.handleOthersInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post(this.baseUrl + "/api/containers/otherImage-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getOthersPic(id);
            });
        }
        else {
            alert("upload valid jpg/png");
        }
    };
    DependantsComponent.prototype.getOthersPic = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/otherImage-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                _this.othersImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
            }
            else {
                var file_id = arr[arr.length - 1]._id;
                _this.othersImg_url = _this.baseUrl + "/api/containers/otherImage-" + id + "/download/" + file_id;
            }
        }, function (err) {
            _this.othersImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
        });
    };
    //image upload other
    //image upload child
    DependantsComponent.prototype.handleFileInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post(this.baseUrl + "/api/containers/childImage-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getChildPic(id);
            });
        }
        else {
            alert("upload valid jpg/png");
        }
    };
    DependantsComponent.prototype.getChildPic = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/childImage-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                _this.childImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
            }
            else {
                var file_id = arr[arr.length - 1]._id;
                _this.childImg_url = _this.baseUrl + "/api/containers/childImage-" + id + "/download/" + file_id;
            }
        }, function (err) {
            _this.childImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
        });
    };
    // image upload child
    //image upload parent
    DependantsComponent.prototype.handleParentInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post(this.baseUrl + "/api/containers/parentImage-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getParentPic(id);
            });
        }
        else {
            alert("upload valid jpg/png");
        }
    };
    DependantsComponent.prototype.getParentPic = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/parentImage-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                _this.parentImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
            }
            else {
                var file_id = arr[arr.length - 1]._id;
                _this.parentImg_url = _this.baseUrl + "/api/containers/parentImage-" + id + "/download/" + file_id;
            }
        }, function (err) {
            _this.parentImg_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
        });
    };
    //image upload parent
    //image upload//dropdown form DB
    DependantsComponent.prototype.getGenderCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Genders", { headers: this.headers })
            .subscribe(function (res) {
            _this.Gender = res;
        }, function (err) {
            alert('error while getiing Gender');
        });
    };
    DependantsComponent.prototype.childHandler = function (event) {
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'AIS') {
            this.childJobType = true;
            this.childJobDetails = true;
        }
        else if (this.selectedPrefix == 'Not') {
            this.childJobType = false;
            this.childJobDetails = false;
        }
    };
    DependantsComponent.prototype.parentHandler = function (event) {
        this.selectedValue = event.target.value;
        /*alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') {
            this.parentJobType = true;
            this.parentJobDetails = true;
        }
        else if (this.selectedPrefix == 'Not') {
            this.parentJobType = false;
            this.parentJobDetails = false;
        }
    };
    DependantsComponent.prototype.othersHandler = function (event) {
        this.selectedValue = event.target.value;
        /* alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') {
            this.othersJobType = true;
            this.othersJobDetails = true;
        }
        else if (this.selectedPrefix == 'Not') {
            this.othersJobType = false;
            this.othersJobDetails = false;
        }
    };
    // activateSaveAction(){
    //     this.activateSaveButton = true;
    // }
    DependantsComponent.prototype.readDependants = function (id) {
        var _this = this;
        this._profileService
            .readDependants(id)
            .subscribe(function (data) {
            if (!data) {
                _this.dependants = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Dependants"]();
            }
            else {
                _this.dependants = data;
            }
        }, function (err) {
            alert('failed');
        });
    };
    DependantsComponent.prototype.save = function (form) {
        var _this = this;
        // if (!form.valid) {
        //     return false;
        // }
        var id = sessionStorage.getItem('userId');
        this._profileService.createDependants(id, this.dependants).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
        // return true;
    };
    DependantsComponent.prototype.goToNext = function (form) {
        // if (this.save(form)) {
        // }
        this.save(form);
    };
    DependantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dependants',
            template: __webpack_require__(/*! ./dependants.component.html */ "./src/app/dependants/dependants.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DependantsComponent);
    return DependantsComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <msw-navbar></msw-navbar>\n                <div class=\"tab-pane fade in active\">\n                    <h6 class=\"head text-center\">{{title}}</h6>\n                    <br/>\n                    <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                                <h4 class=\"panel-title\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#qualification\" aria-expanded=\"false\" aria-controls=\"qualification\">\n                                                        <b>Your Qualification</b>\n                                                    </a>\n                                                </h4>\n                                            </div>\n                                            <div id=\"qualification\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                                <!--qualification form-->\n                                                <div class=\"row row-body\">\n                                                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-12' *ngIf=\"visible\">\n                                                        <table class=\"table table-sm\">\n                                                            <tr>\n                                                                <th>Qualification</th>\n                                                                <th>University</th>\n                                                                <th>Institute</th>\n                                                                <th>Subject</th>\n                                                                <th>Division</th>\n                                                                <th>Year</th>\n                                                            </tr>\n                                                            <tr>\n                                                                <td>\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required pattern=\"[a-zA-Z ]*\" id=\"eduqualification\" type=\"text\" placeholder=\"Quaification\"\n                                                                            name=\"eduqualification\" #eduqualification=\"ngModel\"\n                                                                            [(ngModel)]=\"qualification.eduqualification\">\n\n\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required pattern=\"[a-zA-Z ]*\" id=\"university\" type=\"text\" placeholder=\"University\" name=\"university\"\n                                                                            id=\"university\" #university=\"ngModel\" [(ngModel)]=\"qualification.university\">\n\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required pattern=\"[a-zA-Z ]*\" id=\"institute\" type=\"text\" placeholder=\"Institute\" name=\"institute\"\n                                                                            id=\"institute\" #institute=\"ngModel\" [(ngModel)]=\"qualification.institute\">\n\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required pattern=\"[a-zA-Z ]*\" id=\"subject\" type=\"text\" placeholder=\"Subject\" name=\"subject\"\n                                                                            id=\"subject\" #subject=\"ngModel\" [(ngModel)]=\"qualification.subject\">\n\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required id=\"division\" type=\"text\" placeholder=\"Division\" name=\"division\" id=\"division\"\n                                                                            #division=\"ngModel\" [(ngModel)]=\"qualification.division\">\n\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <div class=\"form-group\">\n                                                                        <input class=\"form-control input-md\" required minlength=\"4\" maxlength=\"4\" pattern=\"[0-9]{4}\" type=\"text\" placeholder=\"Year\"\n                                                                            name=\"year\" id=\"year\" #year=\"ngModel\" [(ngModel)]=\"qualification.year\">\n                                                                    </div>\n                                                                </td>\n                                                            </tr>\n                                                        </table>\n                                                        <button *ngIf=\"editFlag==false\" class=\"btn btn-success btn-outline-rounded btn-info btn-add\" (click)=\"addQualification()\">Add Qualification</button>\n                                                        <button *ngIf=\"editFlag==true\" class=\"btn btn-success btn-outline-rounded btn-info btn-add\" (click)=\"saveChanges()\">Add Changes</button>\n                                                    </div>\n                                                </div>\n                                                <!--qualification form-->\n\n                                                <!--display table-->\n                                                <div class=\"row \" *ngIf=\"education.qualifications.length > 0\">\n                                                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-12'>\n                                                        <h4 class=\"text-center\">Educational Details</h4>\n                                                        <table class=\"table table-sm\">\n                                                            <tr>\n                                                                <th>Qualification</th>\n                                                                <th>University</th>\n                                                                <th>Institute</th>\n                                                                <th>Subject</th>\n                                                                <th>Division</th>\n                                                                <th>Year</th>\n                                                                <th>Actions</th>\n                                                            </tr>\n                                                            <tr *ngFor=\"let qual of education.qualifications; let i=index \">\n                                                                <td>\n                                                                    {{qual.eduqualification}}\n                                                                </td>\n                                                                <td>\n                                                                    {{qual.university}}\n                                                                </td>\n                                                                <td>\n                                                                    {{qual.institute}}\n                                                                </td>\n                                                                <td>\n                                                                    {{qual.subject}}\n                                                                </td>\n                                                                <td>\n                                                                    {{qual.division}}\n                                                                </td>\n                                                                <td>\n                                                                    {{qual.year}}\n                                                                </td>\n                                                                <td>\n                                                                    <a (click)=\"qualificationEdit(i)\" class=\" btn btn-info  a-info\">\n                                                                        <span class=\"glyphicon glyphicon-pencil\"></span>\n                                                                    </a>\n                                                                    <a (click)=\"qualificationDelete(i)\" class=\"btn  a-info btn-delete\">\n                                                                        <span class=\"glyphicon glyphicon-trash\"></span>\n                                                                    </a>\n                                                                </td>\n                                                            </tr>\n                                                        </table>\n                                                        <!-- <ul>\n                                                                        <li >\n                                                                            EduQualification: {{qual.eduqualification}},\n                                                                            University: {{qual.university}}, i = {{i}}\n                                                                            <a (click)=\"qualificationEdit(i)\" class=\"btn btn-info\">Edit</a>\n                                                                        </li>\n                                                                    </ul> -->\n                                                    </div>\n                                                </div>\n                                                <!--display Table-->\n                                                <!--show button-->\n                                                <div class=\"row row-body\">\n                                                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-12 '>\n                                                        <button *ngIf=\"showFlag\" class=\"btn-info btn-outline-rounded\" (click)=\"showQualification()\">Add/Show Qualification</button>\n                                                        <button *ngIf=\"hideFlag\" class=\"btn-info btn-outline-rounded\" (click)=\"hideQualification()\"> Hide Qualification</button>\n\n                                                    </div>\n                                                </div>\n                                                <!--show button-->\n\n\n                                            </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                                <h4 class=\"panel-title\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#language\" aria-expanded=\"false\" aria-controls=\"language\">\n                                                        <b>Languages Known</b>\n                                                    </a>\n                                                </h4>\n                                            </div>\n                                            <div id=\"language\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n\n                                                <!--language form-->\n                                                <div class=\"row row-body\" *ngIf=\"visible\">\n                                                    <div class=\"col-xs-12 col-sm-12 col-md-5\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"control-label\" for=\"lang\">Languages Known</label>\n                                                            <select for=\"lan\" name=\"lang\"  id=\"lang\" class=\"form-control\" \n                                                            type=\"text\" placeholder=\"language\" #lang=\"ngModel\" [(ngModel)]=\"language.lang\">\n                                                            <option value=\"\" disabled>Select Option</option>\n                                                            <option *ngFor=\"let lan of Languages\" [id]=\"lan.id\" [value]=\"lan.language\">{{lan.language}}</option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-xs-12 col-sm-12 col-md-1\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"control-label label-language\" for=\"read\">Read\n                                                                <input class=\" input-md\" id=\"read\" name=\"read\" type=\"checkbox\" #read=\"ngModel\" [(ngModel)]=\"language.read\">\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-xs-12 col-sm-12 col-md-1\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"control-label label-language\" for=\"write\">Write\n                                                                <input class=\" input-md\" id=\"write\" name=\"write\" type=\"checkbox\" #write=\"ngModel\" [(ngModel)]=\"language.write\">\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-xs-12 col-sm-12 col-md-1\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"control-label label-language\" for=\"speak\">Speak\n                                                                <input class=\" input-md\" id=\"speak\" name=\"speak\" type=\"checkbox\" #speak=\"ngModel\" [(ngModel)]=\"language.speak\">\n                                                            </label>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-xs-12 col-sm-12 col-md-1\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"control-label label-language\" for=\"understand\">Understand\n                                                                <input class=\" input-md\" id=\"understand\" name=\"understand\" type=\"checkbox\" #understand=\"ngModel\" [(ngModel)]=\"language.understand\">\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                      <!--language form-->\n                                                      <div>\n                                                        <button *ngIf=\"editFlagLang==false\" class=\"btn btn-success btn-outline-rounded btn-info btn-add language-save\" (click)=\"addLanguage()\">Add Language</button>\n                                                        <button *ngIf=\"editFlagLang==true\" class=\"btn btn-success btn-outline-rounded btn-info btn-addlanguage-save\" (click)=\"saveChangesLanguage()\">Add Changes</button>\n                                                    </div>\n                                                    <!--display Language-->\n                                                </div>\n\n                                                <div class=\"row \" *ngIf=\"education.languages.length > 0\">\n                                                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-12'>\n                                                        <h4 class=\"text-center\">Languages</h4>\n                                                        <table class=\"table table-sm\">\n                                                            <tr>\n                                                                <th>Language</th>\n                                                                <th>Read</th>\n                                                                <th>Write</th>\n                                                                <th>Speak</th>\n                                                                <th>Understand</th>\n                                                                <th>Actions</th>\n                                                            </tr>\n                                                            <tr *ngFor=\"let lan of education.languages; let i=index \">\n                                                                <td>\n                                                                    {{lan.lang}}\n                                                                </td>\n                                                                <td>\n                                                                    {{lan.read}}\n                                                                </td>\n                                                                <td>\n                                                                    {{lan.write}}\n                                                                </td>\n                                                                <td>\n                                                                    {{lan.speak}}\n                                                                </td>\n                                                                <td>\n                                                                    {{lan.understand}}\n                                                                </td>\n\n                                                                <td>\n                                                                    <a (click)=\"languageEdit(i)\" class=\"btn a-info btn-info\">\n                                                                        <span class=\"glyphicon glyphicon-pencil\"></span>\n                                                                    </a>\n\n                                                                    <a (click)=\"languageDelete(i)\" class=\"btn a-info btn-delete\">\n                                                                        <span class=\"glyphicon glyphicon-trash\"></span>\n                                                                    </a>\n                                                                </td>\n                                                            </tr>\n                                                        </table>\n\n                                                        <!-- <ul>\n                                    <li >\n                                        EduQualification: {{qual.eduqualification}},\n                                        University: {{qual.university}}, i = {{i}}\n                                        <a (click)=\"qualificationEdit(i)\" class=\"btn btn-info\">Edit</a>\n                                    </li>\n                                </ul> -->\n                                                    </div>\n                                                </div>\n                                                <!--display Language-->\n                                                <!--show button-->\n                                                <div class=\"row row-body\">\n                                                    <div class='col-xs-12 col-sm-12 col-md-6 col-lg-12 '>\n                                                        <button *ngIf=\"showFlag\" class=\"btn-info btn-outline-rounded\" (click)=\"showLanguage()\">Add/Show Language</button>\n                                                        <button *ngIf=\"hideFlag\" class=\"btn-info btn-outline-rounded\" (click)=\"hideLanguage()\"> Hide Language</button>\n\n                                                    </div>\n                                                </div>\n                                                <!--show button-->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--fields-->\n                            <form #educationForm=\"ngForm\" class=\"editForm\" novalidate>\n\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"userCv\">user CV</label>\n                                        <input class=\"form-control input-md\" #userCv=\"ngModel\" required id=\"userCv\" name=\"userCv\" \n                                        type=\"file\" placeholder=\"userCv\"\n                                        (change)=\"handleFileInput($event)\" [(ngModel)]=\"education.userCv\">\n\n                                        <a target=\"_blank\" download href=\"{{resume_url}}\" class=\"fa fa-download resumeDownloadIconCls\"></a>\n                                        <div *ngIf=\"userCv?.touched || userCv?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"userCv.errors?.required\"> Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"mothertounge\">Mothertounge</label>\n                                        <select class=\"form-control input-md\" #mothertounge=\"ngModel\" required id=\"mothertounge\" name=\"mothertounge\" type=\"file\"\n                                            placeholder=\"mothertounge\" [(ngModel)]=\"education.mothertounge\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let lan of Languages\" [id]=\"lan.id\" [value]=\"lan.language\">{{lan.language}}</option>\n\n                                        </select>\n                                        <div *ngIf=\"mothertounge?.touched || mothertounge?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"mothertounge.errors?.required\"> Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"form-group text-center\">\n                                <button class=\"btn btn-success btn-outline-rounded btn-info\" [disabled]=\"!educationForm.valid\" (click)=\"goToNext(educationForm)\">\n                                    Submit\n                                    <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\n                                </button>\n                            </div>\n                        </form>\n\n                        </div>\n                    </div>\n                </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education */ "./src/app/education/education.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _qualification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qualification */ "./src/app/education/qualification.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language */ "./src/app/education/language.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EducationComponent = /** @class */ (function () {
    function EducationComponent(router, _profileService, http) {
        this.router = router;
        this._profileService = _profileService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.editFlag = false;
        this.editFlagLang = false;
        this.title = 'Education info';
        this.qualification = new _qualification__WEBPACK_IMPORTED_MODULE_4__["Qualification"]();
        this.language = new _language__WEBPACK_IMPORTED_MODULE_5__["Language"]();
        this.education = new _education__WEBPACK_IMPORTED_MODULE_2__["Education"]();
        this.selectedFile = null;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('Content-Type', 'application/json');
        //show or hide
        this.visible = false;
        this.showFlag = true;
        this.hideFlag = false;
    }
    EducationComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readEducation(id);
        this.getResume(id);
        this.getLanguagesCombo();
    };
    EducationComponent.prototype.getLanguagesCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Languages", { headers: this.headers })
            .subscribe(function (res) {
            _this.Languages = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    //uploadfile
    EducationComponent.prototype.handleFileInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('file', this.selectedFile, this.selectedFile.name);
        // this.http.post<File>(`http://localhost:4000/api/users/${id}/uploadDisplayPic`, fd)
        // this.http.post<File>(`${this.baseUrl}/api/containers/resume-${id}/upload`,fd)
        //     .subscribe(res =>{
        //         console.log(res);
        //         this.getResume(id); 
        //     });
        if (this.selectedFile.type == "application/pdf") {
            this.http.post(this.baseUrl + "/api/containers/resume-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getResume(id);
            });
        }
        else {
            alert("upload valid pdf format");
        }
    };
    EducationComponent.prototype.getResume = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/resume-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                // alert("no resume in your profile"); 
            }
            else {
                _this.file_id = arr[arr.length - 1]._id;
                _this.file_name = arr[arr.length - 1].filename;
                _this.resume_url = _this.baseUrl + "/api/containers/resume-" + id + "/download/" + _this.file_id;
            }
        }, function (err) {
            alert('error');
        });
    };
    //language
    EducationComponent.prototype.addLanguage = function () {
        if (this.isEmpty(this.language)) {
            console.log("language is empty");
            return console.log(JSON.stringify(this.language));
        }
        else {
            console.log("language is not emty");
            this.education.languages.push(this.language);
            this.language = new _language__WEBPACK_IMPORTED_MODULE_5__["Language"]();
        }
    };
    EducationComponent.prototype.languageEdit = function (indx) {
        this.language = this.education.languages[indx];
        this.editFlag = true;
    };
    EducationComponent.prototype.languageDelete = function (valueToRemove) {
        this.education.languages.splice(valueToRemove, 1);
    };
    // isBlank(language){
    //     if(language.lang != null)
    //         true
    //     else
    //         false
    // }
    EducationComponent.prototype.saveChangesLanguage = function () {
        this.language = new _language__WEBPACK_IMPORTED_MODULE_5__["Language"]();
        this.editFlag = false;
    };
    //Qualifications
    EducationComponent.prototype.addQualification = function () {
        if (this.isBlank(this.qualification)) {
            console.log(this.qualification);
            return console.log(JSON.stringify(this.qualification));
        }
        else {
            console.log("qualification is not emty");
            this.education.qualifications.push(this.qualification);
            this.qualification = new _qualification__WEBPACK_IMPORTED_MODULE_4__["Qualification"]();
        }
    };
    EducationComponent.prototype.isBlank = function (qualification) {
        if (qualification.eduqualification == null) {
            return true;
        }
        else if (qualification.university == null) {
            return true;
        }
        else if (qualification.institute == null) {
            return true;
        }
        else if (qualification.subject == null) {
            return true;
        }
        else if (qualification.division == null) {
            return true;
        }
        else if (qualification.year == null) {
            return true;
        }
        else {
            return false;
        }
    };
    EducationComponent.prototype.qualificationEdit = function (indx) {
        this.qualification = this.education.qualifications[indx];
        this.editFlag = true;
    };
    EducationComponent.prototype.qualificationDelete = function (valueToRemove) {
        this.education.qualifications.splice(valueToRemove, 1);
    };
    EducationComponent.prototype.saveChanges = function () {
        this.qualification = new _qualification__WEBPACK_IMPORTED_MODULE_4__["Qualification"]();
        this.editFlag = false;
    };
    EducationComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                this.qualEmptyCheck.push("key");
            console.log("qualification=" + key);
            return false;
        }
        return true;
    };
    EducationComponent.prototype.showQualification = function () {
        this.hideFlag = true;
        this.visible = true;
        this.showFlag = false;
    };
    EducationComponent.prototype.hideQualification = function () {
        this.hideFlag = false;
        this.visible = false;
        this.showFlag = true;
    };
    EducationComponent.prototype.showLanguage = function () {
        this.hideFlag = true;
        this.visible = true;
        this.showFlag = false;
    };
    EducationComponent.prototype.hideLanguage = function () {
        this.hideFlag = false;
        this.visible = false;
        this.showFlag = true;
    };
    EducationComponent.prototype.readEducation = function (id) {
        var _this = this;
        this._profileService
            .readEducation(id)
            .subscribe(function (data) {
            if (!data) {
                _this.education = new _education__WEBPACK_IMPORTED_MODULE_2__["Education"]();
            }
            else {
                _this.education = data;
            }
            console.log(JSON.stringify(_this.education));
        }, function (err) {
            console.log("Fetch failed in education");
        });
    };
    EducationComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        console.log(JSON.stringify(this.education));
        var userId = sessionStorage.getItem('userId');
        this._profileService.createEducation(userId, this.education).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        return true;
    };
    EducationComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-eduation',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/education/education.ts":
/*!****************************************!*\
  !*** ./src/app/education/education.ts ***!
  \****************************************/
/*! exports provided: Education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
var Education = /** @class */ (function () {
    function Education() {
        this.qualifications = [];
        this.languages = [];
        this.userCv = '';
        this.mothertounge = '';
    }
    return Education;
}());



/***/ }),

/***/ "./src/app/education/language.ts":
/*!***************************************!*\
  !*** ./src/app/education/language.ts ***!
  \***************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());



/***/ }),

/***/ "./src/app/education/qualification.ts":
/*!********************************************!*\
  !*** ./src/app/education/qualification.ts ***!
  \********************************************/
/*! exports provided: Qualification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qualification", function() { return Qualification; });
var Qualification = /** @class */ (function () {
    function Qualification() {
    }
    return Qualification;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer text-center\">\n    <div class=\"container\">\n         Designed and Developed by <a href=\"http://cdit.org\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"clicking will lead to external website of C-DIT\">Centre for Development of Imaging Technology (C-DIT)</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">AIS</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n      \t<li><a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\n        <li><a routerLink=\"/personal\"><span class=\"glyphicon glyphicon-user\"></span> Profile</a></li>\n        <li><a routerLink=\"/changepassword\"><span class=\"glyphicon glyphicon-lock\"></span> Change Password</a></li>\n        <li><a (click) = \"logout($event)\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\t\t\t\t\t\t\t"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/shared/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, _loginService) {
        this.router = router;
        this._loginService = _loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function (event) {
        var _this = this;
        var token = sessionStorage.getItem('token');
        this._loginService.logout(token).subscribe(function (data) {
            sessionStorage.clear();
            _this.router.navigate(['/login']);
        }, function (err) {
            alert('logout failed');
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n          <h1 style=\"padding: 15px;\">ALL INDIA SERVICES (AIS)MEMBERS IN KERALA</h1>          \n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n          \n          <form (ngSubmit)=\"OnSubmit(userEmail.value,password.value)\"  #loginForm=\"ngForm\" class=\"editForm\" novalidate>\n            <div class=\"tab-pane fade in active\">\n              <h6 class=\"head text-center\">LOGIN</h6>\n              <br/>\n              <div class='row'>\n                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n\n\n                  <div class=\"row\">\n                    <div class='col-md-offset-3 col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                      <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"Email\">Username</label>\n                        <input class=\"form-control input-md\" #userEmail ngModel required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" \n                        id=\"userEmail\" name=\"userEmail\" type=\"text\" placeholder=\"userEmail\">   \n                        <div *ngIf = \"userEmail?.touched || userEmail?.dirty\" class=\"alert alert-danger\">\n                         <div *ngIf = \"userEmail.errors?.required\">email Required</div>\n                       </div>\n                     </div>\n                   </div>\n                 </div>    \n\n                 <div class=\"row\">\n                  <div class='col-md-offset-3 col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                    <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"Password\">Password</label>\n                      <input class=\"form-control input-md\" #password ngModel required    id=\"password\"\n                      name=\"password\" type=\"password\" placeholder=\"password\">\n\n                      <div *ngIf = \"password?.touched || password?.dirty\" class=\"alert alert-danger\">\n                       <div *ngIf = \"password.errors?.required\">Password Required</div>\n                     </div>\n                   </div>\n                 </div>\n               </div>    \n\n               <div class=\"form-group text-center\">\n                <button  class=\"btn btn-success btn-outline-rounded btn-info\" style=\"margin:0px 15px 0px 0px;\"\n                > Login\n                <span class=\"glyphicon glyphicon-arrow-right\"></span>\n              </button>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </form>          \n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/shared/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _loginService) {
        this.router = router;
        this._loginService = _loginService;
        this.title = 'Login';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (id) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.OnSubmit = function (userEmail, password) {
        var _this = this;
        var credentials = {};
        credentials.email = userEmail;
        credentials.password = password;
        this._loginService.getlogin(credentials).subscribe(function (response) {
            console.log(response);
            var stringfyObj = JSON.stringify(response);
            var parsedObj = JSON.parse(stringfyObj);
            sessionStorage.setItem('userId', parsedObj.userId);
            sessionStorage.setItem('token', parsedObj.accessToken);
            if (parsedObj.passwordReset == true) {
                _this.router.navigate(['/changepassword']);
            }
            else {
                _this.router.navigate(['/home']);
            }
        }, function (err) {
            alert("Invalid Credentials");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());

// save(form: any): any {
// if (!form.valid) {
//     return false;
// }
// goToNext(form: any) {
// if (this.save(form)) {
//     // Navigate to the education page
//     this.router.navigate(['/personal']);
// }
// }
// }


/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n                    \n        \n        <li>\n            <a routerLink=\"/personal\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\n                <span class=\"round-tabs one\">\n                    <i class=\"glyphicon glyphicon-user\"></i>\n                </span>\n            </a>\n        </li>\n\n       \n        <li>\n            <a routerLink=\"/spouse\" routerLinkActive=\"active\" data-toggle=\"tab\" id=\"spouse\" title=\"spouse\">\n                <span class=\"round-tabs four\">\n                    <i class=\"fa fa-user-plus glyphicon\" style=\"top: -2px\"></i>\n                </span>\n            </a>\n        </li>\n\n        \n        <li>\n            <a routerLink=\"/education\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"education\">\n                <span class=\"round-tabs three\">\n                    <i class=\"glyphicon glyphicon-education\"></i>\n                </span>\n            </a>\n        </li>\n        \n         <li>\n            <a routerLink=\"/work\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs two\">\n                    <i class=\"glyphicon glyphicon-briefcase\"></i>\n                </span> \n            </a>\n        </li>\n        \n        <li>\n            <a routerLink=\"/dependants\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"dependants\">\n                <span class=\"round-tabs five\">\n                    <i class=\"glyphicon fa fa-users\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <!-- <li>\n            <a routerLink=\"/result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs six\">\n                    <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li> -->\n                \n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'msw-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <msw-navbar></msw-navbar>\n            <form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n                <div class=\"tab-pane fade in active\">\n                    <h6 class=\"head text-center\">{{title}}</h6>\n                    <br/>\n                    <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n                            <div class=\"row clearfix text-center\">\n                                <div class=\"form-group\">\n                                    <input id=\"image\" type=\"file\" name=\"profile_photo\" placeholder=\"Photo\" class=\"profilePicEditorClass\" id=\"file\" (change)=\"handleFileInput($event)\">\n                                    <!-- <img src=\"../../assets/images/Avatar.jpg\" class=\"img-circle\" alt=\"car\" width=\"150\" height=\"130\"> -->\n                                    <img src=\"{{img_url}}\" class=\"img-circle\" alt=\"profile\" width=\"150\" height=\"130\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"userPrefix\">Prefix</label>\n                                        <select class=\"form-control input-md\" id=\"userPrefix\" required name=\"userPrefix\" #userPrefix=\"ngModel\" [(ngModel)]=\"personal.userPrefix\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let pre of Prefix\" [id]=\"pre.id\" [value]=\"pre.prefix\">{{pre.prefix}}</option>\n                                        </select>\n                                        <div *ngIf=\"userPrefix?.touched || userPrefix?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"userPrefix.errors?.required\">Prefix Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"fullName\">Full Name</label>\n                                        <input class=\"form-control input-md\" #fullName=\"ngModel\" required pattern=\"[a-zA-Z ]*\" id=\"fullName\" name=\"fullName\" type=\"text\"\n                                            placeholder=\"Full Name\" [(ngModel)]=\"personal.fullName\">\n                                        <div *ngIf=\"fullName?.touched || fullName?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"fullName.errors?.required\">Name Required</div>\n                                            <div *ngIf=\"fullName.errors?.pattern\">Invalid Name</div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"gender\">Gender</label>\n                                        <select class=\"form-control\" id=\"gender\" required name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"personal.gender\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let gen of Gender\" [id]=\"gen.id\" [value]=\"gen.gender\">{{gen.gender}}</option>\n                                        </select>\n                                        <div *ngIf=\"gender?.touched || gender?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"gender.errors?.required\">Gender Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"dateOfBirth\">Date Of Birth</label>\n                                        <input class=\"form-control input-md\" #dateOfBirth=\"ngModel\" required date id=\"dateOfBirth\" name=\"dateOfBirth\" type=\"date\"\n                                            placeholder=\"Date Of Birth\" [(ngModel)]=\"personal.dateOfBirth\">\n                                        <div *ngIf=\"dateOfBirth?.touched || dateOfBirth?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"dateOfBirth.errors?.required\">Date is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"aadhaarNumber\">Aadhaar Number</label>\n                                        <input class=\"form-control input-md\" #aadhaarNumber=\"ngModel\" required minlength=\"12\" maxlength=\"16\" pattern=\"[0-9]{12,16}\"\n                                            id=\"aadhaarNumber\" name=\"aadhaarNumber\" type=\"text\" placeholder=\"Aadhaar Number\"\n                                            [(ngModel)]=\"personal.aadhaarNumber\">\n                                        <div *ngIf=\"aadhaarNumber?.touched || aadhaarNumber?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"aadhaarNumber.errors?.required\">Aadhaar Number Required</div>\n                                            <div *ngIf=\"aadhaarNumber.errors?.pattern\">Should have 12 to 16 Digits valid Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"penNumber\">PEN Number</label>\n                                        <input class=\"form-control input-md\" #penNumber=\"ngModel\" required maxlength=\"8\" pattern=\"[0-9]{6,8}\" id=\"penNumber\" name=\"penNumber\"\n                                            type=\"text\" placeholder=\"PEN Number\" [(ngModel)]=\"personal.penNumber\" minlength=\"6\"\n                                            maxlength=\"8\">\n                                        <div *ngIf=\"penNumber?.touched || penNumber?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"penNumber.errors?.required\">PEN Number Required</div>\n                                            <div *ngIf=\"penNumber.errors?.pattern\">Should have 6 to 8 Digits valid Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"email\">Email</label>\n                                        <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\"\n                                            type=\"text\" placeholder=\"Email\" [(ngModel)]=\"personal.email\">\n                                        <div *ngIf=\"email?.touched || email?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"email.errors?.required\">Email Required</div>\n                                            <div *ngIf=\"email.errors?.pattern\">Invalid Email</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"mobile\">Mobile Number</label>\n                                        <input class=\"form-control input-md\" #mobile=\"ngModel\" required minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]{10}\" id=\"mobile\"\n                                            name=\"mobile\" type=\"text\" placeholder=\"Mobile Number\" [(ngModel)]=\"personal.mobile\">\n                                        <div *ngIf=\"mobile?.touched || mobile?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"mobile.errors?.required\">Mobile Required</div>\n                                            <div *ngIf=\"mobile.errors?.pattern\">Should have 10 Digits</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"maritialStatus\">Maritial Status</label>\n                                        <select class=\"form-control\" id=\"maritialStatus\" required name=\"maritialStatus\" #maritialStatus=\"ngModel\" [(ngModel)]=\"personal.maritialStatus\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option value=\"Married\">Married</option>\n                                            <option value=\"Unmarried\">Unmarried</option>\n\n                                        </select>\n                                        <div *ngIf=\"maritialStatus?.touched || maritialStatus?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"maritialStatus.errors?.required\">maritialStatus Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group text-center\">\n                                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!personalForm.valid\" (click)=\"goToNext(personalForm)\"> Submit\n                                    <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, _profileService, http) {
        this.router = router;
        this._profileService = _profileService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.title = 'Basic Info';
        this.personal = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Personal"]();
        this.selectedFile = null;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.disabled = false;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readProfile(id);
        this.getProfilePic(id);
        this.getPrefixCombo();
        this.getGenderCombo();
    };
    PersonalComponent.prototype.getPrefixCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Prefixes", { headers: this.headers })
            .subscribe(function (res) {
            _this.Prefix = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    PersonalComponent.prototype.getGenderCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Genders", { headers: this.headers })
            .subscribe(function (res) {
            _this.Gender = res;
        }, function (err) {
            alert('error while getiing Gender');
        });
    };
    PersonalComponent.prototype.handleFileInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post(this.baseUrl + "/api/containers/profile-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getProfilePic(id);
            });
        }
        else {
            alert("upload valid jpg/png");
        }
    };
    PersonalComponent.prototype.getProfilePic = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/profile-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                _this.img_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
            }
            else {
                var file_id = arr[arr.length - 1]._id;
                _this.img_url = _this.baseUrl + "/api/containers/profile-" + id + "/download/" + file_id;
            }
        }, function (err) {
            _this.img_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
        });
    };
    PersonalComponent.prototype.readProfile = function (id) {
        var _this = this;
        this._profileService
            .readProfile(id)
            .subscribe(function (data) {
            if (!data) {
                _this.personal = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Personal"]();
            }
            else {
                _this.personal = data;
            }
            console.log('component:' + JSON.stringify(_this.personal));
        }, function (err) {
            alert('failed');
        });
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        var id = sessionStorage.getItem('userId');
        this._profileService.createProfile(id, this.personal).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        return true;
    };
    PersonalComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            if (this.personal.maritialStatus == 'Married') {
                this.router.navigate(['/spouse']);
            }
            else {
                this.router.navigate(['/education']);
            }
        }
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <!-- <h4 class=\"text-center\">\n        Made with <i class=\"fa fa-heart heart\" style=\"color:#f48260;\"></i> by <a href=\"https://www.cc28tech.com\" target=\"_blank\">Cathy Wun</a>. Check out the tutorials <a href=\"https://www.cc28tech.com/angular-multi-step-part-1\" target=\"_blank\">here.</a>\n    </h4> -->\n    <!-- <p class=\"narrow text-center\">\n        Here is a copy of the information you have entered:\n    </p> -->\n    <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n           <!--  <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"name\">Name: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    \n                </div>\n            </div>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email\">Email: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                   \n                </div>\n           </div>     \n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"work\">Work: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    \n                </div>\n           </div>     \n           <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"education\">Education: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    \n                    <br/>\n                    \n                </div>\n            </div> -->\n        </div>\n    </div>\n    <div class=\"text-center\">\n        <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Your are Just One Click Away From Submitting the Data!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('You Have Successfully Submitted Your Data');
    };
    ResultComponent.prototype.submit = function () {
        alert('You Have Successfully Submitted Your Data');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"])
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html")
        }),
        __metadata("design:paramtypes", [_data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/shared/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.API_URL = this.baseUrl + "/api";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    LoginService.prototype.getlogin = function (credentials) {
        return this.http.post(this.API_URL + "/users/userLogin", credentials);
    };
    LoginService.prototype.logout = function (token) {
        return this.http.get(this.API_URL + "/users/userlogout/" + token, { headers: this.headers });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/profile.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/profile.service.ts ***!
  \*******************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    // private accessToken:string = sessionStorage.getItem('token');
    // private headers = new HttpHeaders().set('Content-Type','application/json');
    function ProfileService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.API_URL = this.baseUrl + "/api";
    }
    ProfileService.prototype.initRequestOptions = function () {
        var token = sessionStorage.getItem('token');
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'access_token': token
        };
        var headersConfig = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
        return headersConfig;
    };
    ProfileService.prototype.readProfile = function (id) {
        var options = this.initRequestOptions();
        return this.http.get(this.API_URL + "/personals/getPersonal/" + id, { headers: options });
    };
    ProfileService.prototype.createProfile = function (id, personal) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/personals/postPersonal/" + id, personal, { headers: options });
    };
    ProfileService.prototype.readWork = function (id) {
        var options = this.initRequestOptions();
        return this.http.get(this.API_URL + "/works/getWork/" + id, { headers: options });
    };
    ProfileService.prototype.createWork = function (id, work) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/works/postWork/" + id, work, { headers: options });
    };
    ProfileService.prototype.readSpouse = function (id) {
        var options = this.initRequestOptions();
        return this.http.get(this.API_URL + "/spouses/getSpouse/" + id, { headers: options });
    };
    ProfileService.prototype.createSpouse = function (id, spouse) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/spouses/postSpouse/" + id, spouse, { headers: options });
    };
    ProfileService.prototype.readEducation = function (id) {
        var options = this.initRequestOptions();
        return this.http.get(this.API_URL + "/education/getEducation/" + id, { headers: options });
    };
    ProfileService.prototype.createEducation = function (userId, education) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/education/postEducation/" + userId, education, { headers: options });
    };
    ProfileService.prototype.readDependants = function (id) {
        var options = this.initRequestOptions();
        return this.http.get(this.API_URL + "/dependants/getDependants/" + id, { headers: options });
    };
    ProfileService.prototype.createDependants = function (id, dependants) {
        var options = this.initRequestOptions();
        return this.http.post(this.API_URL + "/dependants/postDependants/" + id, dependants, { headers: options });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/spouse/spouse.component.html":
/*!**********************************************!*\
  !*** ./src/app/spouse/spouse.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <msw-navbar></msw-navbar>\n            <form #spouseForm=\"ngForm\" class=\"editForm\" novalidate>\n                <div class=\"tab-pane fade in active\">\n                    <h6 class=\"head text-center\">{{title}}</h6>\n                    <br/>\n                    <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n                            <div class=\"row clearfix text-center\">\n                                <div class=\"form-group\">\n                                     <input id=\"image\" type=\"file\" name=\"profile_photo\" placeholder=\"Photo\" class=\"profilePicEditorClass\" id = \"file\" (change)=\"handleFileInput($event)\">\n                                    <!-- <img src=\"../../assets/images/Avatar.jpg\" class=\"img-circle\" alt=\"car\" width=\"150\" height=\"130\"> -->\n                                     <img src= \"{{img_url}}\" class=\"img-circle\" alt=\"ProfPicture\" width=\"150\" height=\"130\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spousePrefix\">Prefix</label>\n                                        <select class=\"form-control input-md\" id=\"spousePrefix\" required name=\"spousePrefix\" #spousePrefix=\"ngModel\" [(ngModel)]=\"spouse.spousePrefix\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let pre of Prefix\" [id]=\"pre.id\" [value]=\"pre.prefix\">{{pre.prefix}}</option>\n                                        </select>\n                                        <div *ngIf=\"spousePrefix?.touched || spousePrefix?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spousePrefix.errors?.required\">Prefix Status Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseFullName\">spouse Full Name</label>\n                                        <input class=\"form-control input-md\" #spouseFullName=\"ngModel\" required id=\"spouseFullName\" name=\"spouseFullName\" type=\"text\"\n                                            placeholder=\"spouse Full Name\" [(ngModel)]=\"spouse.spouseFullName\">\n                                        <div *ngIf=\"spouseFullName?.touched || spouseFullName?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseFullName.errors?.required\">full name is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseGender\">spouse Gender</label>\n                                        <select class=\"form-control input-md\" id=\"spouseGender\" required name=\"spouseGender\" #spouseGender=\"ngModel\" [(ngModel)]=\"spouse.spouseGender\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let gen of Gender\" [id]=\"gen.id\" [value]=\"gen.gender\">{{gen.gender}}</option>\n                                        </select>\n                                        <div *ngIf=\"spouseGender?.touched || spouseGender?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseGender.errors?.required\">Gender is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseDateOfBirth\">Date Of Birth</label>\n                                        <input class=\"form-control input-md\" #spouseDateOfBirth=\"ngModel\" required id=\"spouseDateOfBirth\" name=\"spouseDateOfBirth\"\n                                            type=\"date\" placeholder=\"Date Of Birth\" [(ngModel)]=\"spouse.spouseDateOfBirth\">\n                                        <div *ngIf=\"spouseDateOfBirth?.touched || spouseDateOfBirth?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseDateOfBirth.errors?.required\">Gender is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseAdhaarNumber\">Adhaar Number</label>\n                                        <input class=\"form-control input-md\" #spouseAdhaarNumber=\"ngModel\" required minlength=\"12\" maxlength=\"12\" pattern=\"[0-9]{12}\"\n                                            id=\"spouseAdhaarNumber\" name=\"spouseAdhaarNumber\" type=\"text\" placeholder=\"Adhaar Number\"\n                                            [(ngModel)]=\"spouse.spouseAdhaarNumber\">\n                                        <div *ngIf=\"spouseAdhaarNumber?.touched || spouseAdhaarNumber?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseAdhaarNumber.errors?.required\">Adhaar Numberis Required</div>\n                                            <div *ngIf=\"spouseAdhaarNumber.errors?.pattern\">Should have 16 Digit valid Number</div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseNationality\">Nationality</label>\n                                        <input class=\"form-control input-md\" #spouseNationality=\"ngModel\" required id=\"spouseNationality\" name=\"spouseNationality\"\n                                            type=\"text\" placeholder=\"Nationality\" [(ngModel)]=\"spouse.spouseNationality\">\n                                        <div *ngIf=\"spouseNationality?.touched || spouseNationality?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseNationality.errors?.required\">Nationality is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseEmail\">Email</label>\n                                        <input class=\"form-control input-md\" #spouseEmail=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"spouseEmail\"\n                                            name=\"spouseEmail\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"spouse.spouseEmail\">\n                                        <div *ngIf=\"spouseEmail?.touched || spouseEmail?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseEmail.errors?.required\">Email is Required</div>\n                                            <div *ngIf=\"spouseEmail.errors?.pattern\">Invalid email</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseMobile\">Mobile Number</label>\n                                        <input class=\"form-control input-md\" #spouseMobile=\"ngModel\" required minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]{10}\" id=\"spouseMobile\"\n                                            name=\"spouseMobile\" type=\"text\" placeholder=\"Mobile Number\" [(ngModel)]=\"spouse.spouseMobile\">\n                                        <div *ngIf=\"spouseMobile?.touched || spouseMobile?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseMobile.errors?.required\">MobileNumberis Required</div>\n                                            <div *ngIf=\"spouseMobile.errors?.pattern\">Should have 10 Digit valid Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <!-- <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spousePhoto\">Photo</label>\n                                        <input class=\"form-control input-md\" #spousePhoto=\"ngModel\" required id=\"spousePhoto\" name=\"spousePhoto\" type=\"file\" placeholder=\"Photo\"\n                                            [(ngModel)]=\"spouse.spousePhoto\">\n                                        <div *ngIf=\"spousePhoto?.touched || spousePhoto?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spousePhoto.errors?.required\">Photo is Required</div>\n                                        </div>\n                                    </div>\n                                </div> -->\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseEmployment\">Employment</label>\n                                        <select class=\"form-control input-md\" id=\"spouseEmployment\" required name=\"service\" (change)=\"selectChangeHandler($event)\"\n                                            #spouseEmployment=\"ngModel\" [(ngModel)]=\"spouse.spouseEmployment\">\n                                            <option value=\"\" disabled>Select Employment</option>\n                                            <option value=\"Constitutional posts\">Constitutional posts</option>\n                                            <option value=\"Employed\">Employed</option>\n                                            <option value=\"Retired\">Retired</option>\n                                            <option value=\"Not employed\">Not employed</option>\n                                        </select>\n                                        <div *ngIf=\"spouseEmployment?.touched || spouseEmployment?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseEmployment.errors?.required\">Employment is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- if Constitutional Employed -->\n                            <div class=\"row\" *ngIf=\"constitutional\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseConstitutionalPost\">Spouse post</label>\n                                        <select class=\"form-control input-md\" id=\"spouseConstitutionalPost\" required name=\"spouseConstitutionalPost\" #spouseConstitutionalPost=\"ngModel\"\n                                            [(ngModel)]=\"spouse.spouseConstitutionalPost\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option value=\"Minister\">Minister</option>\n                                            <option value=\"MP\">MP</option>\n                                            <option value=\"MLA\">MLA</option>\n                                            <option value=\"IFS\">Judges</option>\n                                            <option value=\"IFS\">IFS</option>\n                                        </select>\n                                        <div *ngIf=\"spouseConstitutionalPost?.touched || spouseConstitutionalPost?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseConstitutionalPost.errors?.required\">Service is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- if Constitutional Employed -->\n                            <div class=\"row\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6' *ngIf=\"employed\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseEmploymentType\">Employment Type</label>\n                                        <select class=\"form-control input-md\" id=\"spouseEmploymentType\" required name=\"spouseEmploymentType\" (change)=\"jobTypeHandler($event)\"\n                                            #spouseEmploymentType=\"ngModel\" [(ngModel)]=\"spouse.spouseEmploymentType\">\n                                            <option value=\"\" disabled>Select Employment Type</option>\n                                            <option value=\"AIS\">AIS</option>\n                                            <option value=\"Central GovernmentOrPSU\">Central Government/PSU</option>\n                                            <option value=\"State GovernmentOrPSU\">State Government/PSU</option>\n                                            <option value=\"PrivateInIndia\">Private (in India) </option>\n                                            <option value=\"Self Employed\">Self Employed </option>\n                                            <option value=\"PrivateOutSide\">Private (outside India) </option>\n                                        </select>\n                                        <div *ngIf=\"spouseEmploymentType?.touched || spouseEmploymentType?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseEmploymentType.errors?.required\">Employment type is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6' *ngIf=\"aisService\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseService\">Spouse Service</label>\n                                        <select class=\"form-control input-md\" id=\"spouseService\" required name=\"spouseService\" #spouseService=\"ngModel\" [(ngModel)]=\"spouse.spouseService\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let ser of Service\" [id]=\"ser.id\" [value]=\"ser.service\">{{ser.service}}</option> \n                                        </select>    \n                                        <div *ngIf=\"spouseService?.touched || spouseService?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseService.errors?.required\">Service is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- if AIS Employed Compleated -->\n                            <div class=\"row\" *ngIf=\"aisService\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseCadre\">Cadre</label>\n                                        <select class=\"form-control input-md\" id=\"spouseCadre\" required name=\"spouseCadre\" #spouseCadre=\"ngModel\" [(ngModel)]=\"spouse.spouseCadre\">\n                                            <option value=\"\" disabled>Cadre</option>\n                                            <option value=\"Kerala\">Kerala</option>\n                                            <option value=\"Other\">Other</option>\n                                        </select>\n                                        <div *ngIf=\"spouseCadre?.touched || spouseCadre?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseCadre.errors?.required\">Cadre is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseBatch\">Batch</label>\n                                        <input class=\"form-control input-md\" #spouseBatch=\"ngModel\" required id=\"spouseBatch\" name=\"spouseBatch\" type=\"text\" placeholder=\"Batch\"\n                                            [(ngModel)]=\"spouse.spouseBatch\">\n                                        <div *ngIf=\"spouseBatch?.touched || spouseBatch?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseBatch.errors?.required\">Batch is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"aisService\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseDateOfAllotment\">Date of allotment of service</label>\n                                        <input class=\"form-control input-md\" #spouseDateOfAllotment=\"ngModel\" required id=\"spouseDateOfAllotment\" name=\"spouseDateOfAllotment\"\n                                            type=\"date\" placeholder=\"Date of allotment of service\" [(ngModel)]=\"spouse.spouseDateOfAllotment\">\n                                        <div *ngIf=\"spouseDateOfAllotment?.touched || spouseDateOfAllotment?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseDateOfAllotment.errors?.required\">Date of allotment is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseIdentityNumber\">Identity Number</label>\n                                        <input class=\"form-control input-md\" #spouseIdentityNumber=\"ngModel\" required id=\"spouseIdentityNumber\" name=\"spouseIdentityNumber\"\n                                            type=\"text\" placeholder=\"Identity Number\" [(ngModel)]=\"spouse.spouseIdentityNumber\">\n                                        <div *ngIf=\"spouseIdentityNumber?.touched || spouseIdentityNumber?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseIdentityNumber.errors?.required\">Identity Numberis Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- if AIS Employed Compleated -->\n                            <!-- if Employed Central -->\n                            <div class=\"row\" *ngIf=\"central\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spousePost\">Post</label>\n                                        <input class=\"form-control input-md\" #spousePost=\"ngModel\" required id=\"spousePost\" name=\"spousePost\" type=\"text\" placeholder=\"Post\"\n                                            [(ngModel)]=\"spouse.spousePost\">\n                                        <div *ngIf=\"spousePost?.touched || spousePost?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spousePost.errors?.required\">Post is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseMinistry\">Ministry</label>\n                                        <input class=\"form-control input-md\" #spouseMinistry=\"ngModel\" required id=\"spouseMinistry\" name=\"spouseMinistry\" type=\"text\"\n                                            placeholder=\"Ministry\" [(ngModel)]=\"spouse.spouseMinistry\">\n                                        <div *ngIf=\"spouseMinistry?.touched || spouseMinistry?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseMinistry.errors?.required\">Ministry is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"central\">\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseDepartment\">Department</label>\n                                        <input class=\"form-control input-md\" #spouseDepartment=\"ngModel\" required id=\"spouseDepartment\" name=\"spouseDepartment\" type=\"text\"\n                                            placeholder=\"Department\" [(ngModel)]=\"spouse.spouseDepartment\">\n                                        <div *ngIf=\"spouseDepartment?.touched || spouseDepartment?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseDepartment.errors?.required\">Department is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseOrganization\">Organization</label>\n                                        <input class=\"form-control input-md\" #spouseOrganization=\"ngModel\" required id=\"spouseOrganization\" name=\"spouseOrganization\"\n                                            type=\"text\" placeholder=\"Organization\" [(ngModel)]=\"spouse.spouseOrganization\">\n                                        <div *ngIf=\"spouseOrganization?.touched || spouseOrganization?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseOrganization.errors?.required\">Organization is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseIdentityNumberRetired\">Identity Number</label>\n                                        <input class=\"form-control input-md\" #spouseIdentityNumberRetired=\"ngModel\" required id=\"spouseIdentityNumberRetired\" name=\"spouseIdentityNumberRetired\"\n                                            type=\"text\" placeholder=\"Identity Number\" [(ngModel)]=\"spouse.spouseIdentityNumberRetired\">\n                                        <div *ngIf=\"spouseIdentityNumberRetired?.touched || spouseIdentityNumberRetired?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseIdentityNumberRetired.errors?.required\">Identity Number is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- if Employed Central -->\n                            <!-- if Employed State -->\n                            <div class=\"row\" *ngIf=\"state\">\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spousePostState\">Post</label>\n                                        <input class=\"form-control input-md\" #spousePostState=\"ngModel\" required id=\"spousePostState\" name=\"spousePostState\" type=\"text\"\n                                            placeholder=\"Post\" [(ngModel)]=\"spouse.spousePostState\">\n                                        <div *ngIf=\"spousePostState?.touched || spousePostState?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spousePostState.errors?.required\">Post is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseMinistryState\">Ministry</label>\n                                        <input class=\"form-control input-md\" #spouseMinistryState=\"ngModel\" required id=\"spouseMinistryState\" name=\"spouseMinistryState\"\n                                            type=\"text\" placeholder=\"Ministry\" [(ngModel)]=\"spouse.spouseMinistryState\">\n                                        <div *ngIf=\"spouseMinistryState?.touched || spouseMinistryState?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseMinistryState.errors?.required\">Ministry is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"state\">\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseDepartmentState\">Department</label>\n                                        <input class=\"form-control input-md\" #spouseDepartmentState=\"ngModel\" required id=\"spouseDepartmentState\" name=\"spouseDepartmentState\"\n                                            type=\"text\" placeholder=\"Department\" [(ngModel)]=\"spouse.spouseDepartmentState\">\n                                        <div *ngIf=\"spouseDepartmentState?.touched || spouseDepartmentState?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseDepartmentState.errors?.required\">Department is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spouseOrganizationState\">Organization</label>\n                                        <input class=\"form-control input-md\" #spouseOrganizationState=\"ngModel\" required id=\"spouseOrganizationState\" name=\"spouseOrganizationState\"\n                                            type=\"text\" placeholder=\"Organization\" [(ngModel)]=\"spouse.spouseOrganizationState\">\n                                        <div *ngIf=\"spouseOrganizationState?.touched || spouseOrganizationState?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spouseOrganizationState.errors?.required\">Organization is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"spousePen\">PEN </label>\n                                        <input class=\"form-control input-md\" #spousePen=\"ngModel\" required id=\"spousePen\" name=\"spousePen\" type=\"text\" placeholder=\"Organization\"\n                                            [(ngModel)]=\"spouse.spousePen\">\n                                        <div *ngIf=\"spousePen?.touched || spousePen?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"spousePen.errors?.required\">PEN is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- if Employed State -->\n                            <div class=\"form-group text-center\">\n                                <!-- <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(spouseForm)\">\n                        <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button> -->\n                                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!spouseForm.valid\" (click)=\"goToNext(spouseForm)\"> Submit\n                                    <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/spouse/spouse.component.ts":
/*!********************************************!*\
  !*** ./src/app/spouse/spouse.component.ts ***!
  \********************************************/
/*! exports provided: SpouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpouseComponent", function() { return SpouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpouseComponent = /** @class */ (function () {
    function SpouseComponent(router, _profileService, http) {
        this.router = router;
        this._profileService = _profileService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.title = 'Spouse Info';
        this.spouse = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Spouse"]();
        this.selectedFile = null;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.img_url = "../.." + this.baseUrl + "/assets/images/Avatar.jpg";
        this.selectedPrefix = '';
        this.selectedValue = '';
        this.constitutional = false;
        this.employed = false;
        this.aisService = false;
        this.central = false;
        this.state = false;
    }
    SpouseComponent.prototype.ngOnInit = function () {
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readSpouse(id);
        this.getSpousePic(id);
        this.getPrefixCombo();
        this.getGenderCombo();
        this.getServiceCombo();
    };
    SpouseComponent.prototype.getPrefixCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Prefixes", { headers: this.headers })
            .subscribe(function (res) {
            _this.Prefix = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    SpouseComponent.prototype.getGenderCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Genders", { headers: this.headers })
            .subscribe(function (res) {
            _this.Gender = res;
        }, function (err) {
            alert('error while getiing Gender');
        });
    };
    SpouseComponent.prototype.getServiceCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Services", { headers: this.headers })
            .subscribe(function (res) {
            _this.Service = res;
        }, function (err) {
            alert('error while getiing Gender');
        });
    };
    SpouseComponent.prototype.handleFileInput = function (event) {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        var fd = new FormData();
        this.selectedFile = event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        // this.http.post<File>(`/api/users/${id}/uploadDisplayPic`, fd)
        // this.http.post<File>(`${this.baseUrl}/api/containers/spouse-${id}/upload`,fd)
        //     .subscribe(res =>{
        //         console.log(res);
        //         this.getSpousePic(id);
        //     });
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post(this.baseUrl + "/api/containers/spouse-" + id + "/upload", fd)
                .subscribe(function (res) {
                console.log(res);
                _this.getSpousePic(id);
            });
        }
        else {
            alert("upload valid jpg/png");
        }
    };
    SpouseComponent.prototype.getSpousePic = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/containers/spouse-" + id + "/files", { headers: this.headers })
            .subscribe(function (res) {
            var arr = res;
            if (arr.length == 0) {
                _this.img_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
            }
            else {
                var file_id = arr[arr.length - 1]._id;
                _this.img_url = _this.baseUrl + "/api/containers/spouse-" + id + "/download/" + file_id;
            }
        }, function (err) {
            _this.img_url = "../.." + _this.baseUrl + "/assets/images/Avatar.jpg";
        });
        console.log('img url set:' + this.img_url);
    };
    SpouseComponent.prototype.readSpouse = function (id) {
        var _this = this;
        this._profileService
            .readSpouse(id)
            .subscribe(function (data) {
            if (!data) {
                _this.spouse = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Spouse"]();
            }
            else {
                _this.spouse = data;
            }
        }, function (err) {
            alert('failed');
        });
    };
    SpouseComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        var id = sessionStorage.getItem('userId');
        this._profileService.createSpouse(id, this.spouse).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        return true;
    };
    SpouseComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/education']);
        }
    };
    SpouseComponent.prototype.selectChangeHandler = function (event) {
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'Constitutional posts') {
            this.constitutional = true;
            this.employed = false;
        }
        else if (this.selectedPrefix == 'Employed') {
            this.employed = true;
            this.constitutional = false;
        }
        else if (this.selectedPrefix == 'Retired') {
            this.constitutional = false;
            this.employed = true;
        }
        else if (this.selectedPrefix == 'Not Employed') {
            this.constitutional = false;
            this.employed = false;
        }
    };
    SpouseComponent.prototype.jobTypeHandler = function (event) {
        this.selectedValue = event.target.value;
        /* alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') {
            this.aisService = true;
            this.central = false;
            this.employed = false;
        }
        if (this.selectedValue == 'Central GovernmentOrPSU') {
            this.central = true;
            this.state = false;
            this.aisService = false;
        }
        if (this.selectedValue == 'State GovernmentOrPSU') {
            this.state = true;
            this.aisService = false;
            this.central = false;
        }
    };
    SpouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-spouse',
            template: __webpack_require__(/*! ./spouse.component.html */ "./src/app/spouse/spouse.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SpouseComponent);
    return SpouseComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-aislogo></app-aislogo>\n<div class=\"container\">\n    <div class=\"board\">\n        <div class=\"tab-content\">\n            <msw-navbar></msw-navbar>\n            <form #workForm=\"ngForm\" class=\"editForm\" novalidate>\n                <div class=\"tab-pane fade in active\">\n                    <h4 class=\"head text-center\">{{title}}</h4>\n                    <br/>\n                    <div class='row'>\n                        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10'>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"workService\">Service</label>\n                                        <select class=\"form-control input-md\" id=\"workService\" required name=\"workService\"\n                                         #workService=\"ngModel\" [(ngModel)]=\"work.workService\"  (change)=\"selectComboHandler($event)\">\n                                         <option value=\"\" disabled>Select Option</option>\n                                        <option *ngFor=\"let ser of Service\" [id]=\"ser.id\" [value]=\"ser.service\">{{ser.service}}</option>\n                                        </select>\n                                        <div *ngIf=\"workService?.touched || workService?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"workService.errors?.required\">Service Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"cadre\">Cadre</label>\n                                        <select class=\"form-control input-md\" id=\"cadre\" required name=\"cadre\" \n                                        #cadre=\"ngModel\" [(ngModel)]=\"work.cadre\">\n                                        <option value=\"\" disabled>Select Option</option>\n                                        <option *ngFor=\"let cad of Cadre\" [id]=\"cad.id\" [value]=\"cad.cadre\">{{cad.cadre}}</option>\n                                        </select>\n                                        <div *ngIf=\"cadre?.touched || cadre?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"cadre.errors?.required\">Cadre Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"batch\">Batch</label>\n                                        <input class=\"form-control input-md\" #batch=\"ngModel\" required id=\"batch\" name=\"batch\" type=\"text\" placeholder=\"Batch\" [(ngModel)]=\"work.batch\">\n                                        <div *ngIf=\"batch?.touched || batch?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"batch.errors?.required\">Batch Required</div>\n                                            <div *ngIf=\"batch.errors?.pattern\">Invalid Batch</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"dateOfAllotment\">Date of allotment of service</label>\n                                        <input class=\"form-control input-md\" #dateOfAllotment=\"ngModel\" required id=\"dateOfAllotment\" name=\"dateOfAllotment\" type=\"date\"\n                                            placeholder=\"Date of allotment of service\" [(ngModel)]=\"work.dateOfAllotment\">\n                                        <div *ngIf=\"dateOfAllotment?.touched || dateOfAllotment?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"dateOfAllotment.errors?.required\">Date Of Allotment Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"identityNumber\">Identity Number</label>\n                                        <input class=\"form-control input-md\" #identityNumber=\"ngModel\" required maxlength=\"10\" pattern=\"[0-9]{6,10}\" id=\"identityNumber\"\n                                            name=\"identityNumber\" minlength=\"6\" max-length=\"10\" type=\"text\" placeholder=\"Identity Number\"\n                                            [(ngModel)]=\"work.identityNumber\">\n                                        <div *ngIf=\"identityNumber?.touched || identityNumber?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"identityNumber.errors?.required\">Identity Number Required</div>\n                                            <div *ngIf=\"identityNumber.errors?.pattern\">Should have 6 to 10 Digits</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"modeOfRecruitment\">Mode of recruitment</label>\n                                        <select class=\"form-control input-md\" id=\"modeOfRecruitment\" required name=\"modeOfRecruitment\" #modeOfRecruitment=\"ngModel\"\n                                            [(ngModel)]=\"work.modeOfRecruitment\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let rec of isRecruitment\" [id]=\"rec.id\" [value]=\"rec.recruitment\">{{rec.recruitment}}</option>\n\n                                        </select>\n                                        <div *ngIf=\"modeOfRecruitment?.touched || modeOfRecruitment?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"modeOfRecruitment.errors?.required\">Mode Of Recruitment Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"state\">State</label>\n                                        <select class=\"form-control input-md\" id=\"state\" required name=\"state\" #state=\"ngModel\" [(ngModel)]=\"work.state\">\n                                                <option value=\"\" disabled>Select Option</option>\n                                                <option *ngFor=\"let sta of State\" [id]=\"sta.id\"\n                                                 [value]=\"sta.state\">{{sta.state}}</option>\n                                        </select>\n                                        <div *ngIf=\"state?.touched || state?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"state.errors?.required\">State Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"district\">District</label>\n                                        <input class=\"form-control input-md\" #district=\"ngModel\" required id=\"district\" name=\"district\" type=\"text\" placeholder=\"Districte\"\n                                            [(ngModel)]=\"work.district\">\n                                        <div *ngIf=\"district?.touched || district?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"district.errors?.required\">District Required </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"hometown\">Home Town</label>\n                                        <input class=\"form-control input-md\" #hometown=\"ngModel\" required id=\"hometown\" name=\"hometown\" type=\"text\" placeholder=\"Home Town\"\n                                            [(ngModel)]=\"work.hometown\">\n                                        <div *ngIf=\"hometown?.touched || hometown?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"hometown.errors?.required\">Home Town Required </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"motherTongue\">Mother Tongue</label>  \n                                <input class=\"form-control input-md\" #motherTongue=\"ngModel\" required id=\"motherTongue\" name=\"motherTongue\" type=\"text\" placeholder=\"Mother Tongue\" [(ngModel)]=\"work.motherTongue\">   \n                                <div *ngIf = \"motherTongue?.touched || motherTongue?.dirty\" class=\"alert alert-danger\">\n                                    <div *ngIf = \"motherTongue.errors?.required\">Mother Tongue Required </div>\n                                </div>\n                            </div>\n                        </div>   -->\n                                <!-- <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"scaleOfPay\">Grade/Scale of Pay</label> leave\n                                <input class=\"form-control input-md\" #scaleOfPay=\"ngModel\" required id=\"sleavealeOfPay\" name=\"scaleOfPay\" type=\"text\" placeholder=\"Grade/Scale of Pay\" [(ngModel)]=\"work.scaleOfPay\">   \n                                <div *ngIf = \"scaleOfPay?.touched || scaleOfPay?.dirty\" class=\"alert alert-danger\">\n                                    <div *ngIf = \"scaleOfPay.errors?.required\">Scale Of Pay Required</div>\n                                </div>\n                            </div>\n                        </div> -->\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"specialPay\">Special Pay</label>\n                                        <input class=\"form-control input-md\" #specialPay=\"ngModel\" required id=\"specialPay\" name=\"specialPay\" type=\"text\" placeholder=\"Special Pay\"\n                                            [(ngModel)]=\"work.specialPay\">\n                                        <div *ngIf=\"specialPay?.touched || specialPay?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"specialPay.errors?.required\">Special Pay Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"scaleOfPay\">Grade/Scale of Pay</label>\n                                        <select class=\"form-control input-md\" #scaleOfPay=\"ngModel\" required id=\"scaleOfPay\" name=\"scaleOfPay\" type=\"text\" placeholder=\"Grade/Scale of Pay\"\n                                            [(ngModel)]=\"work.scaleOfPay\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let scale of isGrade\" [id]=\"scale.id\" [value]=\"scale.grade\">{{scale.grade}}</option>\n                                        </select>\n                                        <div *ngIf=\"scaleOfPay?.touched || scaleOfPay?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"scaleOfPay.errors?.required\">Scale Of Pay Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"position\">Position</label>\n                                        <select class=\"form-control input-md\" id=\"position\" required name=\"position\" #position=\"ngModel\" [(ngModel)]=\"work.position\"\n                                            (change)=\"selectChangeHandler($event)\">\n                                            <option value=\"\" disabled>Select Option</option>\n                                            <option *ngFor=\"let pos of Position\" [id]=\"pos.id\" [value]=\"pos.position\">{{pos.position}}</option>\n                                        </select>\n                                        <div *ngIf=\"position?.touched || position?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"position.errors?.required\">Position Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='workState'>\n                                <h4>for 1 and 2</h4>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"nameOfPost\">Name of Post</label>\n                                        <input class=\"form-control input-md\" #nameOfPost=\"ngModel\" required id=\"nameOfPost\" name=\"nameOfPost\" type=\"text\" placeholder=\"Name of Post\"\n                                            [(ngModel)]=\"work.nameOfPost\">\n                                        <div *ngIf=\"nameOfPost?.touched || nameOfPost?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"nameOfPost.errors?.required\">Name Of Post Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"departmentOrPsu\">Department/PSU</label>\n                                        <input class=\"form-control input-md\" #departmentOrPsu=\"ngModel\" required id=\"departmentOrPsu\" name=\"departmentOrPsu\" type=\"text\"\n                                            placeholder=\"Department/PSU\" [(ngModel)]=\"work.departmentOrPsu\">\n                                        <div *ngIf=\"departmentOrPsu?.touched || departmentOrPsu?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"departmentOrPsu.errors?.required\">Department/Psu Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"pinCode\">Postal Address-PIN</label>\n                                        <input class=\"form-control input-md\" #pinCode=\"ngModel\" required pattern=\"[0-9]{6}\" id=\"pinCode\" name=\"pinCode\" type=\"text\"\n                                            placeholder=\"Pin Code\" [(ngModel)]=\"work.pinCode\">\n                                        <div *ngIf=\"pinCode?.touched || pinCode?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"pinCode.errors?.required\">Pin-Code Required</div>\n                                            <div *ngIf=\"pinCode.errors?.pattern\">Invalid Pin-Code</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='workState'>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"officeTel\">Office Tel</label>\n                                        <input class=\"form-control input-md\" #officeTel=\"ngModel\" required pattern=\"[0-9]{11}\" id=\"officeTel\" name=\"officeTel\" type=\"text\"\n                                            placeholder=\"Office Tel\" [(ngModel)]=\"work.officeTel\">\n                                        <div *ngIf=\"officeTel?.touched || officeTel?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"officeTel.errors?.required\">officeTel Required</div>\n                                            <div *ngIf=\"officeTel.errors?.pattern\">Invalid Office Tel. Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"workMobile\">Mobile</label>\n                                        <input class=\"form-control input-md\" #workMobile=\"ngModel\" required minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]{10}\" id=\"workMobile\"\n                                            name=\"workMobile\" type=\"text\" placeholder=\"Mobile\" [(ngModel)]=\"work.workMobile\">\n                                        <div *ngIf=\"workMobile?.touched || workMobile?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"workMobile.errors?.required\">Mobile Required</div>\n                                            <div *ngIf=\"workMobile.errors?.pattern\">Should have 10 Digits</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"workEmail\">Email</label>\n                                        <input class=\"form-control input-md\" #workEmail=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"workEmail\"\n                                            name=\"workEmail\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"work.workEmail\">\n                                        <div *ngIf=\"workEmail?.touched || workEmail?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"workEmail.errors?.required\">Email Required</div>\n                                            <div *ngIf=\"workEmail.errors?.pattern\">Invalid Email</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='workState'>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"officeFax\">Office Fax</label>\n                                        <input class=\"form-control input-md\" #officeFaxStateEx=\"ngModel\" required id=\"officeFaxStateEx\" name=\"officeFaxStateEx\" type=\"text\"\n                                            placeholder=\"Office Fax\" [(ngModel)]=\"work.officeFaxStateEx\">\n                                        <div *ngIf=\"officeFax?.touched || officeFax?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"officeFax.errors?.required\">officeFax Required</div>\n                                            <div *ngIf=\"officeFax.errors?.pattern\">Invalid Office Fax.</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"residencePh\">Residence Ph</label>\n                                        <input class=\"form-control input-md\" #residencePh=\"ngModel\" required pattern=\"[0-9]{11}\" id=\"residencePh\" name=\"residencePh\"\n                                            type=\"text\" placeholder=\"Residence Ph\" [(ngModel)]=\"work.residencePh\">\n                                        <div *ngIf=\"residencePh?.touched || residencePh?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"residencePh.errors?.required\">Residence Phone Required</div>\n                                            <div *ngIf=\"residencePh.errors?.pattern\">Invalid Phone Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"residenceAddress\">Residence Address</label>\n                                        <textarea class=\"form-control input-md\" #residenceAddress=\"ngModel\" id=\"residenceAddress\" name=\"residenceAddress\" type=\"text\"\n                                            placeholder=\"Residence Address\" [(ngModel)]=\"work.residenceAddress\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='central'>\n                                <h4>for Central Deputation</h4>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"startCentralDeputation\">Date of starting the Central Deputation</label>\n                                        <input class=\"form-control input-md\" #startCentralDeputation=\"ngModel\" required id=\"startCentralDeputation\" name=\"startCentralDeputation\"\n                                            type=\"date\" placeholder=\"Starting Date\" [(ngModel)]=\"work.startCentralDeputation\">\n                                        <div *ngIf=\"startCentralDeputation?.touched || startCentralDeputation?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"startCentralDeputation.errors?.required\">start Central Deputation Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"ministryOrDepartmentOrPsu\">Ministry/Department/PSU</label>\n                                        <input class=\"form-control input-md\" #ministryOrDepartmentOrPsu=\"ngModel\" required id=\"ministryOrDepartmentOrPsu\" name=\"ministryOrDepartmentOrPsu\"\n                                            type=\"text\" placeholder=\"Department/PSU\" [(ngModel)]=\"work.ministryOrDepartmentOrPsu\">\n                                        <div *ngIf=\"ministryOrDepartmentOrPsu?.touched || ministryOrDepartmentOrPsu?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"ministryOrDepartmentOrPsu.errors?.required\">ministry/Department/Psu Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='central'>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"nameOfPostCentral\">Name of Post</label>\n                                        <input class=\"form-control input-md\" #nameOfPostCentral=\"ngModel\" required id=\"nameOfPostCentral\" name=\"nameOfPostCentral\"\n                                            type=\"text\" placeholder=\"Name of Post\" [(ngModel)]=\"work.nameOfPostCentral\">\n                                        <div *ngIf=\"nameOfPostCentral?.touched || nameOfPostCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"nameOfPostCentral.errors?.required\">Name Of Post Central is Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"pinCodeCentral\">Postal Address-PIN</label>\n                                        <input class=\"form-control input-md\" #pinCodeCentral=\"ngModel\" required pattern=\"[0-9]{6}\" id=\"pinCode\" name=\"pinCodeCentral\"\n                                            type=\"text\" placeholder=\"Pin Code\" [(ngModel)]=\"work.pinCodeCentral\">\n                                        <div *ngIf=\"pinCodeCentral?.touched || pinCodeCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"pinCodeCentral.errors?.required\">Pin-Code Required</div>\n                                            <div *ngIf=\"pinCodeCentral.errors?.pattern\">Invalid Pin-Code</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='central'>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"officeTelCentral\">Office Tel</label>\n                                        <input class=\"form-control input-md\" #officeTelCentral=\"ngModel\" required id=\"officeTelCentral\" name=\"officeTelCentral\" type=\"text\"\n                                            placeholder=\"Office Tel\" [(ngModel)]=\"work.officeTelCentral\">\n                                        <div *ngIf=\"officeTelCentral?.touched || officeTelCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"officeTelCentral.errors?.required\"> office Tel Required</div>\n                                            <div *ngIf=\"officeTelCentral.errors?.pattern\">Invalid office Tel</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"mobileCentral\">Mobile</label>\n                                        <input class=\"form-control input-md\" #mobileCentral=\"ngModel\" required minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]{10}\"\n                                            id=\"mobileCentral\" name=\"mobileCentral\" type=\"text\" placeholder=\"Mobile\" [(ngModel)]=\"work.mobileCentral\">\n                                        <div *ngIf=\"mobileCentral?.touched || mobileCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"mobileCentral.errors?.required\">Mobile Required</div>\n                                            <div *ngIf=\"mobileCentral.errors?.pattern\">Should have 10 Digits</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"emailCentral\">Email</label>\n                                        <input class=\"form-control input-md\" #emailCentral=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"emailCentral\"\n                                            name=\"emailCentral\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"work.emailCentral\">\n                                        <div *ngIf=\"emailCentral?.touched || emailCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"emailCentral.errors?.required\">Email Required</div>\n                                            <div *ngIf=\"emailCentral.errors?.pattern\">Invalid Email Address</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='InterState'>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"officeFaxCentral\">Office Fax</label>\n                                        <input class=\"form-control input-md\" #officeFaxCentral=\"ngModel\" required id=\"officeFaxCentral\" name=\"officeFaxCentral\" type=\"text\"\n                                            placeholder=\"Office Fax\" [(ngModel)]=\"work.officeFaxCentral\">\n                                        <div *ngIf=\"officeFaxCentral?.touched || officeFaxCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"officeFaxCentral.errors?.required\">Office Fax Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"residencePhCentral\">Residence Ph</label>\n                                        <input class=\"form-control input-md\" #residencePhCentral=\"ngModel\" required pattern=\"[0-9]{11}\" id=\"residencePhCentral\" name=\"residencePhCentral\"\n                                            type=\"text\" placeholder=\"Residence Ph\" [(ngModel)]=\"work.residencePhCentral\">\n                                        <div *ngIf=\"residencePhCentral?.touched || residencePhCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"residencePhCentral.errors?.required\">Resident Phone Number Required</div>\n                                            <div *ngIf=\"residencePhCentral.errors?.pattern\">Invalid Phone Number</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"residenceAddressCentral\">Residence Address</label>\n                                        <textarea class=\"form-control input-md\" #residenceAddressCentral=\"ngModel\" required id=\"residenceAddressCentral\" name=\"residenceAddressCentral\"\n                                            type=\"text\" placeholder=\"Residence Address\" [(ngModel)]=\"work.residenceAddressCentral\"></textarea>\n                                        <div *ngIf=\"residenceAddressCentral?.touched || residenceAddressCentral?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"residenceAddressCentral.errors?.required\">Resident Address Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='training'>\n                                <h4>Training</h4>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"nameOfTraining\">Name of Training</label>\n                                        <input class=\"form-control input-md\" #nameOfTraining=\"ngModel\" required id=\"nameOfTraining\" name=\"nameOfTraining\" type=\"text\"\n                                            placeholder=\"Name of Training\" [(ngModel)]=\"work.nameOfTraining\">\n                                        <div *ngIf=\"nameOfTraining?.touched || nameOfTraining?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"nameOfTraining.errors?.required\"> Name Of Training Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"trainingDuration\">Training Duration</label>\n                                        <input class=\"form-control input-md\" #trainingDuration=\"ngModel\" required id=\"trainingDuration\" name=\"trainingDuration\" type=\"text\"\n                                            placeholder=\"Duration\" [(ngModel)]=\"work.trainingDuration\">\n                                        <div *ngIf=\"trainingDuration?.touched || trainingDuration?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"trainingDuration.errors?.required\">Training Duration Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"trainingPlace\">Training Place</label>\n                                        <input class=\"form-control input-md\" #trainingPlace=\"ngModel\" required id=\"trainingPlace\" name=\"trainingPlace\" type=\"text\"\n                                            placeholder=\"Place\" [(ngModel)]=\"work.trainingPlace\">\n                                        <div *ngIf=\"trainingPlace?.touched || trainingPlace?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"trainingPlace.errors?.required\">Training PlaceRequired</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf='leave'>\n                                <h4>Leave</h4>\n                                <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"dateOfStartingLeave\">Date of starting leave</label>\n                                        <input class=\"form-control input-md\" #dateOfStartingLeave=\"ngModel\" required id=\"dateOfStartingLeave\" name=\"dateOfStartingLeave\"\n                                            type=\"date\" placeholder=\"Date of starting leave\" [(ngModel)]=\"work.dateOfStartingLeave\">\n                                        <div *ngIf=\"dateOfStartingLeave?.touched || dateOfStartingLeave?.dirty\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"dateOfStartingLeave.errors?.required\">Date of starting leave Required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group text-center space-20\">\n                        <!-- <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button> -->\n                        <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!workForm.valid\" (click)=\"goToNext(workForm)\"> Submit\n                            <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkComponent = /** @class */ (function () {
    function WorkComponent(router, _profileService, http) {
        this.router = router;
        this._profileService = _profileService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.title = 'Work';
        this.work = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Work"]();
        this.selectedPrefix = '';
        this.selectedCombo = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.workState = false;
        this.central = false;
        this.InterState = false;
        this.training = false;
        this.leave = false;
        var id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readWork(id);
        this.getGradeCombo();
        this.getServiceCombo();
        this.getPositionCombo();
        this.getRecruitmentCombo();
        this.getStateCombo();
        this.getCadreCombo();
    };
    WorkComponent.prototype.getCadreCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Cadres", { headers: this.headers })
            .subscribe(function (res) {
            _this.Cadre = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.getStateCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/States", { headers: this.headers })
            .subscribe(function (res) {
            _this.State = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.getGradeCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Grades", { headers: this.headers })
            .subscribe(function (res) {
            _this.Grade = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.getServiceCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Services", { headers: this.headers })
            .subscribe(function (res) {
            _this.Service = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.getPositionCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Positions", { headers: this.headers })
            .subscribe(function (res) {
            _this.Position = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.getRecruitmentCombo = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/api/Recruitments", { headers: this.headers })
            .subscribe(function (res) {
            _this.Recruitment = res;
        }, function (err) {
            alert('error while getiing prefix');
        });
    };
    WorkComponent.prototype.readWork = function (id) {
        var _this = this;
        this._profileService
            .readWork(id)
            .subscribe(function (data) {
            if (!data) {
                _this.work = new _data_formData_model__WEBPACK_IMPORTED_MODULE_2__["Work"]();
            }
            else {
                _this.work = data;
            }
        }, function (err) {
            alert('failed');
        });
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        var id = sessionStorage.getItem('userId');
        this._profileService.createWork(id, this.work).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        return true;
    };
    WorkComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/dependants']);
        }
    };
    WorkComponent.prototype.selectComboHandler = function (event) {
        this.selectedCombo = event.target.value;
        if (this.selectedCombo == 'IAS') {
            this.isRecruitment = [];
            this.isGrade = [];
            for (var i = 0; i < 3; i++) {
                this.isRecruitment.push(this.Recruitment[i]);
            }
            for (var i = 0; i < 7; i++) {
                this.isGrade.push(this.Grade[i]);
            }
        }
        else if (this.selectedCombo == 'IPS') {
            this.isRecruitment = [];
            this.isGrade = [];
            this.isRecruitment.push(this.Recruitment[0]);
            this.isRecruitment.push(this.Recruitment[3]);
            for (var i = 0; i < 12; i++) {
                if (i == 4 || i == 5 || i == 6) { }
                else {
                    this.isGrade.push(this.Grade[i]);
                }
            }
        }
        else if (this.selectedCombo == 'IFS') {
            this.isRecruitment = [];
            this.isGrade = [];
            this.isRecruitment.push(this.Recruitment[0]);
            this.isRecruitment.push(this.Recruitment[4]);
            for (var i = 0; i < 17; i++) {
                if (i == 4 || i == 5 || i == 6 || i == 7
                    || i == 8 || i == 9 || i == 10 || i == 11) { }
                else {
                    this.isGrade.push(this.Grade[i]);
                }
            }
        }
    };
    WorkComponent.prototype.selectChangeHandler = function (event) {
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'Cadre') {
            this.central = false;
            this.InterState = false;
            this.training = false;
            this.leave = false;
            this.workState = true;
        }
        else if (this.selectedPrefix == 'Central Deputation') {
            this.central = true;
            this.InterState = false;
            this.training = false;
            this.leave = false;
            this.workState = false;
        }
        else if (this.selectedPrefix == 'Ex-cadre') {
            this.workState = true;
            this.central = false;
            this.InterState = false;
            this.training = false;
            this.leave = false;
        }
        else if (this.selectedPrefix == 'Inter-cadre Deputation') {
            this.workState = false;
            this.central = false;
            this.InterState = true;
            this.training = false;
            this.leave = false;
        }
        else if (this.selectedPrefix == 'Foreign Assignment') {
            this.InterState = true;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        }
        else if (this.selectedPrefix == 'Training') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = true;
            this.leave = false;
        }
        else if (this.selectedPrefix == 'State Deputation') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        }
        else if (this.selectedPrefix == 'Constitutional') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        }
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/workflow/workflow-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/workflow/workflow-guard.service.ts ***!
  \****************************************************/
/*! exports provided: WorkflowGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowGuard", function() { return WorkflowGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow.service */ "./src/app/workflow/workflow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = /** @class */ (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    WorkflowGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], WorkflowGuard);
    return WorkflowGuard;
}());



/***/ }),

/***/ "./src/app/workflow/workflow.model.ts":
/*!********************************************!*\
  !*** ./src/app/workflow/workflow.model.ts ***!
  \********************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    education: 'education',
    spouse: 'spouse',
    dependants: 'dependants',
};


/***/ }),

/***/ "./src/app/workflow/workflow.service.ts":
/*!**********************************************!*\
  !*** ./src/app/workflow/workflow.service.ts ***!
  \**********************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].personal, valid: true },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work, valid: true },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].education, valid: true },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].spouse, valid: true },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].dependants, valid: true },
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: ''
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gofreelab/CDIT Project/hrms/hrms-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map