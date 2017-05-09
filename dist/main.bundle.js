webpackJsonp([1,5],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClasesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClasesService = (function () {
    function ClasesService(http) {
        this.http = http;
    }
    ClasesService.prototype.getClases = function () {
        return this.http.get("https://apimegbot.herokuapp.com/api/clases/ ")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ClasesService;
}());
ClasesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClasesService);

var _a;
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/clases.service.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_service__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Clase = (function () {
    function Clase() {
    }
    return Clase;
}());
var ClasesComponent = (function () {
    function ClasesComponent(clasesService) {
        this.clasesService = clasesService;
        //Obtener el data de ClasesService:
    }
    ClasesComponent.prototype.ngOnInit = function () {
        this.getAllClases();
    };
    ClasesComponent.prototype.getAllClases = function () {
        var _this = this;
        this.clasesService.getClases()
            .subscribe(
        //data => console.log(JSON.stringify(data)),
        function (data) { console.log(data); _this.clases = data["clases"]; }, //this.clases = data["clases"],
        function (//this.clases = data["clases"],
            error) { return console.log('Server Error' + error); });
    };
    return ClasesComponent;
}());
ClasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'clases',
        template: __webpack_require__(450),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__clases_service__["a" /* ClasesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__clases_service__["a" /* ClasesService */]) === "function" && _a || Object])
], ClasesComponent);

var _a;
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/clases.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(451),
        styles: [__webpack_require__(442), __webpack_require__(443), __webpack_require__(444), __webpack_require__(445)]
    })
], DashboardComponent);

//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/dashboard.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 264;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(282);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Super Título';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(449),
        styles: [__webpack_require__(440)]
    })
], AppComponent);

//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clases_clases_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clases_service__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__clases_clases_component__["a" /* ClasesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__clases_service__["a" /* ClasesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_clases_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'horario',
        component: __WEBPACK_IMPORTED_MODULE_1__clases_clases_component__["a" /* ClasesComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/app.routing.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/environment.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = ".left {\n  background-color: #242424;\n  width: 15.5%;\n  height: 100em;\n  margin: 0;\n  box-shadow: 2px 0px 20px #101010;\n  float: left;\n}\n.right {\n  background-color: rgba(238, 238, 238, 0.2);\n  width: 84.5%;\n  height: 135%;\n  margin: 0;\n  float: right;\n}\n.right header {\n  width: 100%;\n  height: 45px;\n  background-color: rgba(255, 255, 255, 0.82);\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  position: fixed;\n  z-index: 20;\n  line-height: 30px;\n  color: #999;\n  font-size: 18px;\n  box-shadow: 2px 0px 20px #101010;\n}\n.right header h3 {\n  margin-left: 10px;\n}\n.separador {\n  border-top: 10px solid #378fc3;\n}\n.left img {\n  width: 135px;\n  margin: 0px auto 10px auto;\n  display: block;\n}\n.fotoPerfil {\n  width: 60px!important;\n  margin-top: -20px!important;\n  margin-bottom: 10px!important;\n  border-radius: 100%;\n  border: solid 3px white;\n}\n.left h3 {\n  color: white;\n}\n.logo {\n  margin: 20px 0 10px 15px !important;\n  padding: 3px;\n}\n.logoHead {\n  width: 100%;\n  border-bottom: 1px solid #5d5c5c;\n}\n.navbar-brand {\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.nombre {\n  color: white;\n  font-family: Roboto;\n  text-align: center;\n}\nul {\n  text-decoration: none!important;\n  width: 100%;\n}\n.elements {\n  text-align: left;\n  color: gray;\n  font-family: Roboto;\n  border-top: 1px solid #2d2d2d;\n  padding: 10px;\n}\n.elements a {\n  text-decoration: none!important;\n  color: #aaa;\n}\n.active {\n  border-top: 1px solid #2d2d2d!important;\n  background-color: #111111;\n  border-left: 5px solid #378fc3\n}\n.nav>li>a:focus, .nav>li>a:hover {\n  text-decoration: none;\n  background-color: #212121!important;\n}\n\n/*** Table Styles **/\n\n.table-fill {\n  background: white;\n  border-radius:3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\n\nth {\n  color:#D5DDE5;;\n  background:#1b1e24;\n  border-bottom:4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size:23px;\n  font-weight: 100;\n  padding:24px;\n  text-align:left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align:middle;\n}\n\nth:first-child {\n  border-top-left-radius:3px;\n}\n\nth:last-child {\n  border-top-right-radius:3px;\n  border-right:none;\n}\n\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  color:#666B85;\n  font-size:16px;\n  font-weight:normal;\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n}\n\ntr:hover td {\n  background:#4E5066;\n  color:#FFFFFF;\n  border-top: 1px solid #22262e;\n  border-bottom: 1px solid #22262e;\n}\n\ntr:first-child {\n  border-top:none;\n}\n\ntr:last-child {\n  border-bottom:none;\n}\n\ntr:nth-child(odd) td {\n  background:#EBEBEB;\n}\n\ntr:nth-child(odd):hover td {\n  background:#4E5066;\n}\n\ntr:last-child td:first-child {\n  border-bottom-left-radius:3px;\n}\n\ntr:last-child td:last-child {\n  border-bottom-right-radius:3px;\n}\n\ntd {\n  background:#FFFFFF;\n  padding:20px;\n  text-align:left;\n  vertical-align:middle;\n  font-weight:300;\n  font-size:18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\nth.text-left {\n  text-align: left;\n}\n\nth.text-center {\n  text-align: center;\n}\n\nth.text-right {\n  text-align: right;\n}\n\ntd.text-left {\n  text-align: left;\n}\n\ntd.text-center {\n  text-align: center;\n}\n\ntd.text-right {\n  text-align: right;\n}\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "/*\n * jQuery FlexSlider v2.6.3\n * http://www.woothemes.com/flexslider/\n *\n * Copyright 2012 WooThemes\n * Free to use under the GPLv2 and later license.\n * http://www.gnu.org/licenses/gpl-2.0.html\n *\n * Contributing author: Tyler Smith (@mbmufffin)\n *\n */\n/* ====================================================================================================================\n * FONT-FACE\n * ====================================================================================================================*/\n@font-face {\n  font-family: 'flexslider-icon';\n  src: url('fonts/flexslider-icon.eot');\n  src: url('fonts/flexslider-icon.eot?#iefix') format('embedded-opentype'), url('fonts/flexslider-icon.woff') format('woff'), url('fonts/flexslider-icon.ttf') format('truetype'), url('fonts/flexslider-icon.svg#flexslider-icon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* ====================================================================================================================\n * RESETS\n * ====================================================================================================================*/\n.flex-container a:hover,\n.flex-slider a:hover {\n  outline: none;\n}\n.slides,\n.slides > li,\n.flex-control-nav,\n.flex-direction-nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.flex-pauseplay span {\n  text-transform: capitalize;\n}\n/* ====================================================================================================================\n * BASE STYLES\n * ====================================================================================================================*/\n.flexslider {\n  margin: 0;\n  padding: 0;\n}\n.flexslider .slides > li {\n  display: none;\n  -webkit-backface-visibility: hidden;\n}\n.flexslider .slides img {\n  width: 100%;\n  display: block;\n}\n.flexslider .slides:after {\n  content: \"\\0020\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\nhtml[xmlns] .flexslider .slides {\n  display: block;\n}\n* html .flexslider .slides {\n  height: 1%;\n}\n.no-js .flexslider .slides > li:first-child {\n  display: block;\n}\n/* ====================================================================================================================\n * DEFAULT THEME\n * ====================================================================================================================*/\n.flexslider {\n  margin: 0 0 60px;\n  background: #fff;\n  border: 2px solid black;\n  position: relative;\n  zoom: 1;\n  border-radius: 4px;\n  -o-box-shadow: '' 0 1px 4px rgba(0, 0, 0, 0.2);\n  box-shadow: '' 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n.flexslider .slides {\n  zoom: 1;\n}\n.flexslider .slides img {\n  height: auto;\n  -moz-user-select: none;\n}\n.flex-viewport {\n  max-height: 2000px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.loading .flex-viewport {\n  max-height: 300px;\n}\n.carousel li {\n  margin-right: 5px;\n}\n.flex-direction-nav {\n  *height: 0;\n}\n.flex-direction-nav a {\n  text-decoration: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin: -20px 0 0;\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n  overflow: hidden;\n  opacity: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.flex-direction-nav a:before {\n  font-family: \"flexslider-icon\";\n  font-size: 40px;\n  display: inline-block;\n  content: '\\f001';\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n}\n.flex-direction-nav a.flex-next:before {\n  content: '\\f002';\n}\n.flex-direction-nav .flex-prev {\n  left: -50px;\n}\n.flex-direction-nav .flex-next {\n  right: -50px;\n  text-align: right;\n}\n.flexslider:hover .flex-direction-nav .flex-prev {\n  opacity: 0.7;\n  left: 10px;\n}\n.flexslider:hover .flex-direction-nav .flex-prev:hover {\n  opacity: 1;\n}\n.flexslider:hover .flex-direction-nav .flex-next {\n  opacity: 0.7;\n  right: 10px;\n}\n.flexslider:hover .flex-direction-nav .flex-next:hover {\n  opacity: 1;\n}\n.flex-direction-nav .flex-disabled {\n  opacity: 0!important;\n  filter: alpha(opacity=0);\n  cursor: default;\n  z-index: -1;\n}\n.flex-pauseplay a {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n  opacity: 0.8;\n  z-index: 10;\n  overflow: hidden;\n  cursor: pointer;\n  color: #000;\n}\n.flex-pauseplay a:before {\n  font-family: \"flexslider-icon\";\n  font-size: 20px;\n  display: inline-block;\n  content: '\\f004';\n}\n.flex-pauseplay a:hover {\n  opacity: 1;\n}\n.flex-pauseplay a.flex-play:before {\n  content: '\\f003';\n}\n.flex-control-nav {\n  width: 100%;\n  position: absolute;\n  bottom: -40px;\n  text-align: center;\n}\n.flex-control-nav li {\n  margin: 0 6px;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.flex-control-paging li a {\n  width: 11px;\n  height: 11px;\n  display: block;\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  text-indent: -9999px;\n  -o-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n}\n.flex-control-paging li a:hover {\n  background: #333;\n  background: rgba(0, 0, 0, 0.7);\n}\n.flex-control-paging li a.flex-active {\n  background: #000;\n  background: rgba(0, 0, 0, 0.9);\n  cursor: default;\n}\n.flex-control-thumbs {\n  margin: 5px 0 0;\n  position: static;\n  overflow: hidden;\n}\n.flex-control-thumbs li {\n  width: 25%;\n  float: left;\n  margin: 0;\n}\n.flex-control-thumbs img {\n  width: 100%;\n  height: auto;\n  display: block;\n  opacity: .7;\n  cursor: pointer;\n  -moz-user-select: none;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.flex-control-thumbs img:hover {\n  opacity: 1;\n}\n.flex-control-thumbs .flex-active {\n  opacity: 1;\n  cursor: default;\n}\n/* ====================================================================================================================\n * RESPONSIVE\n * ====================================================================================================================*/\n@media screen and (max-width: 860px) {\n  .flex-direction-nav .flex-prev {\n    opacity: 1;\n    left: 10px;\n  }\n  .flex-direction-nav .flex-next {\n    opacity: 1;\n    right: 10px;\n  }\n}\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background: #532F8C;\n  color: white;\n  padding-bottom: 80px; }\n  .jumbotron .btn-primary {\n    background: #845ac7;\n    border-color: #845ac7; }\n    .jumbotron .btn-primary:hover {\n      background: #7646c1; }\n  .jumbotron p {\n    color: #d9ccee;\n    max-width: 75%;\n    margin: 1em auto 2em; }\n  .navbar + .jumbotron {\n    margin-top: -20px; }\n  .jumbotron .lang-logo {\n    display: block;\n    background: #B01302;\n    border-radius: 50%;\n    overflow: hidden;\n    width: 100px;\n    height: 100px;\n    margin: auto;\n    border: 2px solid white; }\n    .jumbotron .lang-logo img {\n      max-width: 100%; }\n\n@font-face {\n    font-family: \"Beyond The Mountains\";\n    src: url(http://dl.dafont.com/dl/?f=beyond_the_mountains/beyond_the_mountains.otf);\n}\n\n.headerBG {\n    background: url(../../img/background-header.jpg) no-repeat center center fixed;\n    height: 100vh;\n    background-size: cover;\n}\n\n.headerBGThanks {\n    background: white;\n    height: 100vh;\n    background-size: cover;\n    font-family: 'Roboto', serif;\n}\n\n.centerElem {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border:none;\n}\n\n.logoPrincipal .navbar-brand {\n    height: 80px;\n}\n\n.propuestaValor{\n    margin-top: 40vh;\n    margin-bottom: 400px;\n}\n\n.pb{\n    color: white;\n    font-family: 'Roboto';\n    font-size: 45px;\n}\n\n.lineaTexto {\n    color: white;\n    font-family: 'Roboto';\n    font-size: 20px;\n    line-height: 35px;\n}\n\n.btn-round-lg{\n    border-radius: 22.5px;\n    background: transparent;\n    border: solid 1px white;\n}\n.btn-round{\n    border-radius: 17px;\n}\n\n.btn-demo {\n    width: 280px;\n    margin-top: 20px;\n    font-family: 'Roboto';\n}\n\n.btn-demo:hover {\n    background-color: 7592D3;\n    border: none;\n}\n\n.btn-download {\n    width: 280px;\n    margin-top: 5em;\n    font-family: 'Roboto';\n    background-color: 7592D3;\n    color: white;\n}\n\n.btn-download:hover {\n    background-color: transparent;\n    color: white;\n    border: solid 1px white;\n}\n\n.segundaSeccion{\n    background: #7592D3;\n    width: 100%;\n    height: 35vh;\n}\n\n.segundaSeccion .titulo {\n    color: white;\n    font-family: \"Roboto\";\n    text-align: center;\n    margin: 0;\n    padding-top: 40px;\n    font-size: 40px;\n}\n\n.segundaSeccion .subtitulo {\n    color: white;\n    font-family: \"Raleway\";\n    text-align: center;\n    margin: 0;\n    padding-top: 20px;\n    font-size: 20px;\n    width: 750px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border:none;\n    line-height: 40px;\n}\n\n.customFont {\n    font-family: \"Beyond The Mountains\";\n}\n\n.tercerSeccion {\n    background: url(https://s27.postimg.org/kelcxdko3/Couple.jpg) no-repeat center center fixed;\n    height: 370vh!important;\n    background-size: cover;\n    padding: 10px;\n    height: 75vh;\n}\n\n.tercerSeccion .titulo {\n    text-align: center;\n    color: white;\n    padding-top: 80px;\n    font-family: 'Raleway';\n    font-size: 45px;\n    letter-spacing: 5px;\n}\n\n.tercerSeccion .pasos {\n    color: 7592D3;\n}\n\n.tercerSeccion h3 {\n    color: white;\n    font-family: Roboto;\n    padding-right: 15px;\n}\n\ndiv.bhoechie-tab-menu div.list-group>a.active, div.bhoechie-tab-menu div.list-group>a.active .glyphicon, div.bhoechie-tab-menu div.list-group>a.active .fa {\n    color: white;\n    text-decoration: underline;\n}\n\n.cuartaSeccion {\n    background: white;\n    height: 100vh;\n    background-size: cover;\n    padding: 10px;\n}\n\n.cuartaSeccion .titulo {\n    color: gray;\n    padding-top: 40px;\n    font-family: 'Raleway';\n    font-size: 45px;\n    letter-spacing: 5px;\n    margin-bottom: 60px;\n}\n\n.cuartaSeccion h3,h4 {\n    font-family: Roboto;\n    color: darkgray;\n}\n\n.separacion {\n    height: 60px!important;\n}\n\n.centrado {\n    text-align: center;\n}\n\n.quintaseccion{\n    background: rgba(188,152,222,1);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(188,152,222,1)), color-stop(100%, rgba(124,181,208,1)));\n    background: -webkit-linear-gradient(45deg, rgba(188,152,222,1) 0%, rgba(124,181,208,1) 100%);\n    background: linear-gradient(45deg, rgba(188,152,222,1) 0%, rgba(124,181,208,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc98de', endColorstr='#7cb5d0', GradientType=1 );\n    width: 100%;\n    height: 70vh;\n    position: relative;\n}\n\n.quintaseccion .titulo {\n    color: white;\n    font-family: \"Roboto\";\n    text-align: center;\n    margin: 0;\n    padding-top: 40px;\n    font-size: 45px;\n}\n\n.btn-pregunta {\n    color: white;\n    width: 50%;\n    margin-top: 80px;\n    font-family: Roboto;\n    background-color: rgba(245, 245, 245, 0.419608);\n    font-size: 22px;\n    border-width: initial;\n    border-style: none;\n    border-color: initial;\n    -o-border-image: initial;\n       border-image: initial;\n    display: block;\n    margin-top: 35px;\n    margin-left: auto;\n    margin-right: auto;\n    border:none;\n    text-align: center;\n    border-radius: 20px;\n    box-shadow: 10px 13px 30px rgba(86, 86, 86, 0.28);\n}\n\n.btn-option {\n    width: 280px;\n    margin-top: 30px;\n    font-family: 'Roboto';\n}\n\n.btn-option:hover {\n    background-color: 7592D3;\n    border: solid 1px 7592D3;\n}\n\n.btn-download-demo {\n    width: 280px;\n    margin-top: 80px;\n    font-family: 'Roboto';\n    background-color: black;\n    color: white;\n}\n\nfooter {\n    background: #424141;\n    width: 100%;\n    height: 45vh;\n    position: absolute;\n    text-align: center;\n}\n\nfooter p {\n    color: white;\n    font-family: 'Raleway';\n    margin-top: 5px;\n}\n\nfooter a {\n    color: white;\n    margin: 25px;\n    text-decoration: none;\n    font-family: 'Raleway';\n}\n\nfooter a:hover {\n    color: 7592D3;\n    text-decoration: none;\n}\n\n.logoFooter {\n    margin-top: 20px;\n}\n\n\n/*  bhoechie tab */\ndiv.bhoechie-tab-container{\n    z-index: 10;\n    /* background-color: #ffffff; */\n    padding: 0 !important;\n    /* border-radius: 4px; */\n    -moz-border-radius: 4px;\n    /* border: 1px solid #ddd; */\n    margin-top: 20px;\n    margin-left: 50px;\n    /* opacity: 0.97; */\n    filter: alpha(opacity=97);\n}\n\ndiv.bhoechie-tab-menu div.list-group>a {\n    margin-bottom: 30px!important;\n    text-align: left;\n    font-weight: bold;\n    font-family: Raleway;\n}\ndiv.bhoechie-tab-menu{\n    padding-right: 0;\n    padding-left: 0;\n    padding-bottom: 0;\n}\ndiv.bhoechie-tab-menu div.list-group{\n    margin-bottom: 0;\n}\ndiv.bhoechie-tab-menu div.list-group>a{\n    margin-bottom: 0;\n}\ndiv.bhoechie-tab-menu div.list-group>a .glyphicon,\ndiv.bhoechie-tab-menu div.list-group>a .fa {\n    /*color: #5A55A3;*/\n}\ndiv.bhoechie-tab-menu div.list-group>a:first-child{\n    border-top-right-radius: 0;\n    -moz-border-top-right-radius: 0;\n}\ndiv.bhoechie-tab-menu div.list-group>a:last-child{\n    border-bottom-right-radius: 0;\n    -moz-border-bottom-right-radius: 0;\n}\ndiv.bhoechie-tab-menu div.list-group>a.active,\ndiv.bhoechie-tab-menu div.list-group>a.active .glyphicon,\ndiv.bhoechie-tab-menu div.list-group>a.active .fa{\n    /*background-color: #5A55A3;\n    background-image: #5A55A3;*/\n    color: #ffffff;\n}\ndiv.bhoechie-tab-menu div.list-group>a.active:after{\n    content: '';\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    margin-top: -13px;\n    border-left: 0;\n    border-bottom: 13px solid transparent;\n    border-top: 13px solid transparent;\n    /*border-left: 10px solid #5A55A3;*/\n}\n\ndiv.bhoechie-tab-content{\n   /* background-color: #ffffff;*/\n    /* border: 1px solid #eeeeee; */\n    padding-left: 20px;\n    padding-top: 10px;\n}\n\ndiv.bhoechie-tab div.bhoechie-tab-content:not(.active){\n    display: none;\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n    z-index: 2;\n    color: #fff;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.list-group-item {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    background-color: transparent;\n    border: none;\n}\n\n.a.list-group-item:focus, a.list-group-item:hover {\n    background-color: transparent;\n}\n\n.a.list-group-item:focus, h4.list-group-item:hover {\n    color: white;\n}\n\n.mensaje {\n    font-size: 21px;\n    color: white;\n    font-family: \"Raleway\";\n    margin-top: 45px;\n}\n\n.mensajeDos {\n    font-size: 26px;\n    color: white;\n    font-family: \"Raleway\";\n    margin-top: 10px;\n}\n\n.modal-header {\n    border-bottom: none;\n}\n\n.modal input {\n    border-radius: 15px;\n    width: 50%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid gray;\n}\n\n.btnModal {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n    margin-bottom: 20px;\n    border-radius: 20px;\n    border: 1px solid gray;\n    background: transparent;\n    padding: 8px 15px;\n}\n\n.btnModalfocus {\n    outline:0px;\n}\n\n\n/* Styles R */\n.text-content {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    margin: 0 auto;\n    margin-top: 20px;\n    width: 98%;\n}\n\n.features-slider{\n    vertical-align: middle;\n    margin-top: 48px;\n}\n\nul.tab-list{\n    border: none;\n    margin: 0 0 20px 0;\n}\n\nul.tab-list li{\n    margin: 0 96px 0 0;\n    display: inline;\n    margin: 0 50px 0 0;\n}\n\nul.tab-list li a.flex-active{\n    border:none;\n}\n\nul.tab-list li a{\n    text-align: center;\n    text-decoration: none;\n\n    color: #292929;\n    display: inline-block;\n    font-size: 18px;\n    line-height: 48px;\n    -webkit-transition: color 0.2s ease-in-out 0s;\n    transition: color 0.2s ease-in-out 0s;\n}\n\nul.tab-list li a img{\n    margin-bottom: 18px;\n}\n\nul.tab-list li a.flex-active i{\n    color: #337ab7;\n}\n\nul.tab-list li a i{\n    font-size: 60px;\n    color: #bbb;\n\n    -webkit-transition: color 0.4s ease-in-out 0s;\n    transition: color 0.4s ease-in-out 0s;\n}\n\nul.tab-list li a.flex-active span{\n    background: -webkit-linear-gradient(#b99add,#9ba8d7);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    color: #a7a1d9;\n}\n\nul.tab-list li a span{\n    color: #337ab7;\n\n    display: block;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: normal;\n    color: #aaa;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n\n    -webkit-transition: color 0.4s ease-in-out 0s;\n    transition: color 0.4s ease-in-out 0s;\n}\n\n.tab-slider-container .flexslider{\n    -webkit-transition: opacity 0.4s ease-in-out;\n    transition: opacity 0.4s ease-in-out;\n    z-index: 2;\n}\n\n.tab-slider-container .flexslider {\n    background: transparent;\n    padding: 0;\n    max-width: 100%;\n    position: relative;\n    zoom: 1;\n}\n\n.tab-slider-container .flexslider {\n    margin: 0;\n    padding: 0;\n\n    border:none;\n}\n\n.sixcol {\n    float: left;\n    display: block;\n    margin-right: 3.44828%;\n    width: 48.27586%;\n\n    min-height: 1px;\n}\n\n.big {\n    font-size: 20px;\n    font-family: Roboto;\n    line-height: 34px;\n    font-weight: 300;\n    color: #333;\n}\n\n.last {\n    font-family: Roboto;\n    margin-right: 0;\n    font-size: 18px;\n}\n\n.iphone-slider-container {\n    max-width: 300px;\n    position: relative;\n    margin: 0 auto;\n    z-index: 2;\n}\n\n.iphone-slider-container .iphone {\n    max-width: 100%;\n}\n\n.flex-slider-container {\n    width: 80%;\n    height: auto;\n    top: 13.1%;\n    left: 9.3%;\n\n    position: absolute;\n    overflow: hidden;\n}\n\n.iphone-slider-container .flexslider{\n    max-height: 100%;\n\n    webkit-transition: opacity 0.4s ease-in-out;\n    -webkit-transition: opacity 0.4s ease-in-out;\n    transition: opacity 0.4s ease-in-out;\n    z-index: 2;\n\n    background: transparent;\n    padding: 0;\n    max-width: 100%;\n    position: relative;\n    zoom: 1;\n\n    margin: 0;\n    padding: 0;\n}\n\n.circulo-respondido {\n    background: rgb(245, 245, 245);\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin: 40px 5px 0 5px;\n    border: 1px solid rgb(245, 245, 245);\n}\n\n.circulo {\n    background: transparent!important;\n    border-radius: 50%;\n    border: 1px solid rgb(245, 245, 245);\n    width: 20px;\n    height: 20px;\n    margin: 40px 5px 0 5px;\n}\n.respuesta {\n    padding: 15px 20px;\n}\n\n.footerNav {\n    margin-top: 30px;\n}\n.respuestaConImagen{\n    cursor: pointer;\n    height: 165px;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n.botonesSiNo {\n    padding: 0!important;\n}\n\n/*Auth0 Styles */\n\n.auth0-lock.auth0-lock .auth0-lock-header-logo {\n    width: 100px!important;\n    height: 93px!important;\n}\n\n@media screen and (max-width: 480px){\n    .auth0-lock.auth0-lock.auth0-lock-opened {\n        position: fixed!important;\n    }\n}\n.auth0-lock.auth0-lock .auth0-lock-header {\n   color: rgba(255, 255, 255, 0.85)!important\n}\n.auth0-lock.auth0-lock .auth0-lock-close-button, .auth0-lock.auth0-lock .auth0-lock-back-button {\n    background: white!important;\n}\n\n\n\n.bg-inverse: #7592D3!important;\n\n\n\n/*.logoP {\n    width: 400px;\n    display: block;\n    margin-left: 182px;\n    margin-right: auto;\n    margin-top: 50px;\n    border: none;\n}\n.pb {\n    font-size: 138px;\n    margin-top: -200px;\n    text-align: center;\n    text-shadow: 6px 6px 16px #333;\n}\n.lineaTexto {\n    font-size: 57px;\n    line-height: 63px;\n    margin-top: 50px;\n    text-align: center;\n    text-shadow: 6px 6px 16px #333;\n}*/\n\n/*==================================================\n=            Bootstrap 3 Media Queries             =\n==================================================*/\n\n@media (max-device-width: 481px) {\n    .logoP {\n        width: 150px;\n    }\n    .pb {\n        font-size: 49px;\n        margin-top: -148px;\n        text-shadow: 3px 1px 4px #333;\n    }\n    .lineaTexto {\n        font-size: 27px;\n        line-height: 27px;\n        text-align: center;\n        text-shadow: 3px 1px 4px #333;\n    }\n    .btn-responsivo {\n        width: 100% !important;\n        height: 7vh!important;\n        margin-top: 5px;\n        font-family: 'Roboto';\n        font-size: 20px;\n        box-shadow: 1px 2px 6px #333;\n    }\n    .btn-DemoRes {\n        text-shadow: 1px 1px 1px #333;\n    }\n    .btn-responsivo2 {\n        width: 85% !important;\n        height: 7vh!important;\n        margin-top: 90px;\n        font-family: 'Roboto';\n        font-size: 22px;\n    }\n    .btn-responsivo3 {\n        width: 80% !important;\n        height: 7vh!important;\n        margin-top: 90px;\n        font-family: 'Roboto';\n        font-size: 33px;\n    }\n    .segundaSeccion .titulo {\n        font-size: 38px;\n    }\n    .segundaSeccion .subtitulo {\n        font-size: 20px;\n        text-align: center;\n        line-height: 22px;\n        width: 100%;\n    }\n    .tercerSeccion {\n        height: 140vh;\n    }\n    .col-centered{\n        float: none;\n        margin: 0 auto;\n    }\n    .iphone-slider-container {\n        margin-top: 0!important;\n    }\n    .cfTitulo {\n        font-size: 28px;\n        text-align: center;\n        font-family: 'Roboto';\n        margin-top: -40px!important;\n    }\n    ul.tab-list {\n        margin-left: -88px;\n        margin-top: -40px;\n        margin-bottom: 0;\n        width: 385px;\n    }\n    ul.tab-list li a {\n        border: none;\n        margin-right: -37px;\n    }\n    ul.tab-list li a img {\n        width: 50px;\n    }\n    ul.tab-list li a span {\n        font-size: 13px;\n    }\n\n    .last {\n        margin-right: 1px!important;\n    }\n    .big {\n        font-size: 23px;\n        line-height: 26px;\n    }\n    .last {\n        font-size: 23px;\n        line-height: 26px;\n    }\n    .sixcol {\n        width: 100%;\n        text-align: center;\n    }\n    .flex-slider-container {\n        top: 45.1%;\n    }\n    .cuartaSeccion .titulo {\n        font-size: 28px;\n        margin-bottom: 5px!important;\n        margin-top: 65px;\n    }\n    .imgPQW {\n        width: 80px;\n    }\n    .PQW {\n        margin-bottom: 0!important;\n    }\n    .cuartaSeccion {\n        height: 280vh;\n    }\n    .btn-download {\n        margin-top: 35%;\n    }\n    .quintaseccion {\n        height: 650px;\n    }\n    .btn-pregunta {\n        width: 90%;\n        height: 93px;\n        padding: 18px;\n        font-size: 23px;\n        background-color: rgba(245, 245, 245, 0.419608)!important;\n    }\n    .respuesta {\n        padding: 7px;\n    }\n    .respuestaConImagen {\n        height: auto;\n    }\n    .btnAQ {\n        margin-top: 50px!important;\n    }\n    .headerBG {\n        position: relative;\n    }\n    footer {\n        height: 70vh;\n    }\n}\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "body {\n    background: rgba(188,152,222,1);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(188,152,222,1)), color-stop(100%, rgba(124,181,208,1)));\n    background: -webkit-linear-gradient(45deg, rgba(188,152,222,1) 0%, rgba(124,181,208,1) 100%);\n    background: linear-gradient(45deg, rgba(188,152,222,1) 0%, rgba(124,181,208,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc98de', endColorstr='#7cb5d0', GradientType=1 );\n    width: 100%;\n    height: 70vh;\n    position: relative;\n}\n\n.page-header {\n    padding-bottom: 9px;\n    margin: 40px 0 20px;\n    border-bottom: none;\n}\n\n.btn-round-lg{\n    border-radius: 22.5px;\n    background: transparent;\n    border: solid 1px white;\n}\n.btn-round{\n    border-radius: 17px;\n}\n\n.btn-download {\n    width: 280px;\n    font-family: 'Roboto';\n    background-color: #4264A0;\n    color: white;\n}\n\n.progreso {\n    text-align: center;\n}\n\n.titulo {\n    text-align: center;\n}\n\n.btn-empezarQuiz {\n    width: 180px;\n    height: 45px;\n    padding: 5px;\n    font-size: 18px;\n    border-radius: 20px;\n    background: #46e8d9;\n    border: solid 1px white;\n    margin-top: 40px;\n}\n\n.respuesta:hover {\n    cursor: pointer;\n}\n.respuestaConImagen img{\n    width: 100%;\n    height: auto;\n}\n\n.imagen-seleccionada {\n    border: 3px solid #56afdc;\n}\n\n.respuestaConImagen.bg-success {\n    border: 3px solid #5ea640;\n}\n\n.respuestaConImagen.bg-danger {\n    border: 3px solid #b74848;\n}\n\n/* centered columns styles */\n.row-centered {\n    text-align:center;\n}\n.col-centered {\n    display:inline-block;\n    float:none;\n    /* reset the text-align */\n    text-align:left;\n    /* inline-block space fix */\n    margin-right:-50px;\n}\n\n.glyphicon-question-sign:before {\n    content: \"\\e085\";\n    color: transparent;\n}\n\n.btn-option {\n    width: 280px;\n    margin-top: 30px;\n    font-family: Roboto;\n}\n\n.botonesSiNo {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.botonesSiNo:hover {\n    background: rgba(51, 122, 183, 0.48);\n    border: none;\n}\n\n.botonesSiNo.dange:hover {\n    background: rgba(255, 0, 0, 0.18);\n    border: none;\n}\n\n.dropdown-menu {\n    background-color: transparent!important;\n}\n\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    background-color: rgba(245, 245, 245, 0.42)!important;\n}\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 0\">\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\" style=\"height: 90px;\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"../../img/meg-logo.png\" class=\"logo-img\"></a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n        <li class=\"nav-item\">\n\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/horario\">Dashboard</a>\n          </li>\n          <li>\n            <button class=\"btn btn-outline-success\" type=\"submit\">Empezar</button>\n          </li>\n        </ul>\n      </form>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n\n<!--{{titulo}}\n<div class=\"left\">\n  <div class=\"separador\">\n    <a href=\"\" class=\"logo\">\n          <span class=\"logoHead\">\n            <img src=\"http://i68.tinypic.com/o0nns8.png\">\n          </span>\n    </a>\n    <nav>\n      <div>\n        <div>\n          <a href=\"\" class=\"logo\">\n            <img src=\"\" alt=\"\" class=\"fotoPerfil\">\n            <h4 class=\"nombre\">Nombre y Apellido</h4>\n          </a>\n        </div>\n      </div>\n    </nav>\n    <ul class=\"nav nav-pills-pull-right\">\n      <li class=\"elements\">\n        <a routerLink=\"/horario\">Horario</a>\n      </li>\n      <li class=\"elements\">\n        <a href=\"/todos\">ToDo's</a>\n      </li>\n      <li class=\"elements\">\n        <a href=\"/goals\">Goals</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"right\">\n  <header>\n    <h3>Título</h3>\n  </header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <router-outlet></router-outlet>\n      &lt;!&ndash;h3 class=\"secondItem\">\n        users[0].firstName\n      </h3&ndash;&gt;\n    </div>\n  </div>\n</div>-->\n\n"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<!--<h1 class=\"firstItem\">{{titulo}}</h1>\n{{'Tengo ' + clases.length + ' clases'}}\n<ul *ngIf=\"clases.length >= 1\">\n  <li class=\"secondItem\" *ngFor=\"let clase of clases\">\n    {{clase}}\n  </li>\n</ul>\n\n<div [ngSwitch]=\"market\">\n  <div *ngSwitchCase=\"'NYSE'\">New York Stock E.</div>\n  <div *ngSwitchCase=\"'LSE'\">London Stock E.</div>\n  <div *ngSwitchDefault>No se encontro Match</div>\n</div>-->\n\n<div class=\"left\">\n  <div class=\"separador\">\n    <nav>\n      <div>\n        <div>\n          <a href=\"\" class=\"logo\">\n\n          </a>\n        </div>\n      </div>\n    </nav>\n    <ul>\n      <li class=\"elements active\">\n        <a href=\"/horario\">Horaio</a>\n      </li>\n      <li class=\"elements\">\n        <a href=\"/ToDo's\">ToDo's</a>\n      </li>\n      <li class=\"elements\">\n        <a href=\"/logros\">Logros</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"right\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"m-x-auto p-a-2\">\n          <ul style=\"margin-top: 50px \">\n            <table class=\"table-fill\">\n              <thead>\n                <tr>\n                  <th class=\"text-left\">Hora</th>\n                  <th class=\"text-left\">Clase</th>\n                </tr>\n              </thead>\n              <tr *ngFor=\"let clase of clases\">\n                <td> 00:00</td>\n                <td class=\"text-left\">{{clase.name}}</td>\n              </tr>\n            </table>\n          </ul>\n        </div>\n    </div>\n  </div>\n  <!--<table class=\"table-fill\">\n    <thead>\n    <tr>\n      <th class=\"text-left\">Hora</th>\n      <th class=\"text-left\">Clase</th>\n    </tr>\n    </thead>\n    <tbody class=\"table-hover\">\n    <tr>\n      <td class=\"text-left\">January</td>\n      <td class=\"text-left\">$ 50,000.00</td>\n    </tr>\n    <tr>\n      <td class=\"text-left\">February</td>\n      <td class=\"text-left\">$ 10,000.00</td>\n    </tr>\n    <tr>\n      <td class=\"text-left\">March</td>\n      <td class=\"text-left\">$ 85,000.00</td>\n    </tr>\n    <tr>\n      <td class=\"text-left\">April</td>\n      <td class=\"text-left\">$ 56,000.00</td>\n    </tr>\n    <tr>\n      <td class=\"text-left\">May</td>\n      <td class=\"text-left\">$ 98,000.00</td>\n    </tr>\n    </tbody>\n  </table>\n</div>-->\n\n\n\n<!--Código Clase: <input #newClasCode>\nNombre de la clase: <input #newName>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createClase(newClasCode.value, newName.value)\">Crear clase</button>-->\n<!--<table class=\"table table-striped table-hover table-sm center\">\n  <thead class=\"thead-inverse\">\n  <tr>\n\t<th>Nombre</th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let clase of clases\">\n\t<td>{{clase}}</td>\n  </tr>\n</table>-->\n"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container-fluid\" style=\"padding: 0\">\n  <div class=\"BGimage img-fluid\">\n    <div style=\"height: 700px\">\n      <div class=\"container\" style=\"bottom: -400px\">\n        <h1 style=\"color: white\">Se más productivo!</h1>\n      </div>\n    </div>\n  </div>\n  <div style=\"height: 200px; background: black\">\n    <h3 style=\"text-align: center; padding-top: 15px; color: #00daff\">¿Qué es Meg?</h3>\n    <p style=\"margin-left: auto; margin-right: auto; width: 600px; text-align: center; color:white; margin-top:20px\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at, debitis ea facilis ipsam ipsum iure laboriosam laborum libero nisi, odio odit perferendis quam sequi vero vitae voluptas voluptatibus. Pariatur.</p>\n  </div>\n  <div style=\"height: 800px; background: gray\">\n\n  </div>\n  <div class=\"footer\">\n    <div style=\"margin-left: auto; margin-right: auto; width: 0\"><img src=\"img/meg-logo.png\" class=\"logo-img-footer\"></div>\n  </div>\n</div>\n-->\n<div class=\"headerBG\">\n  <div class=\"logoPrincipal\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-3 col-md-3\">\n\n        </div>\n        <div class=\"col-xs-6 col-md-6\"></div>\n        <div class=\"col-xs-3 col-md-3\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"propuestaValor\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n          <h1 class=\"pb\">¡Seamos Productivos!</h1>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"btn btn-default btn-round-lg btn-lg btn-download\" style=\"margin-top: 20px;\" data-toggle=\"modal\" data-target=\"#modalInicio\">COMENZAR A CONECTAR</button>-->\n              <button type=\"button\" class=\"btn btn-round-lg btn-lg btn-download\" style=\"margin-top: 20px;\">Empezar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--div class=\"modal fade\" id=\"modalInicio\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModallabel\" aria-hidden=\"true\">\n\t  <div class=\"modal-dialog\">\n\t\t  <div class=\"modal-content\">\n\t\t\t  <div class=\"modal-header\">\n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" style=\"border: 2px solid black; border-radius: 15px;width: 25px;height: 25px;\">&times;</button>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-body\">\n\t\t\t\t  <h3 style=\"text-align: center; font-family: 'Raleway'; color: gray; margin-bottom: 30px;\">Crea una cuenta y empieza a conectar.</h3>\n\t\t\t\t  <form>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"nombre\" aria-describedby=\"emailHelp\" placeholder=\"Nombre\">\n\t\t\t\t\t\t  <!--small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small-->\n    <!--/div>\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" id=\"mail\" placeholder=\"Mail\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"tel\" class=\"form-control\" id=\"telefono\" placeholder=\"Teléfono\">\n\t</div>\n\t<button type=\"submit\" class=\"btn btnModal btn-login\">Comenzar</button>\n</form>\n</div>\n</div>\n</div>\n</div-->\n\n  </div>\n  <div class=\"container\">\n    <!--button type=\"button\" class=\"btn btn-primary btn-round-lg btn-lg btn-demo\">DEMO</button-->\n    <i class=\"fa fa-angle-down fa-5x\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n<div class=\"segundaSeccion\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"titulo\">¿ Qué es Meg ?</h1>\n        <p class=\"subtitulo\">Un ChatBot asistente que conoce tus actividades y encuentra los\n          tiempos muertos para aprovecharlos en el cumplimiento de alguna\n          actividad. Además, Meg te ayuda a conseguir cualquier producto o\n          servicio on demand.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"tercerSeccion\" style=\"background: none; background-color:#F4F4F4;\">\n  <div class=\"container\">\n    <h1 class=\"cfTitulo\" style=\"text-align: center; margin: 40px 0 40px 0;\">¿Cómo funciona?</h1>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"iphone-slider-container\">\n          <img src=\"../../img/slider/ss-1.png\" alt=\"\" class=\"iphone\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <br><br><br><br>\n        <h2>Crea tu horario:</h2>\n        <p>\n          Lo primero es decirle a Meg cuales son tus clases indicandole la hora y el nombre de estas. <br>\n          <strong>Puedes crear clases en tu horario con el comando: \"Crear clase + Hora de tu clase + Nombre de tu clase\". </strong>\n        </p>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -110px\">\n        <br><br><br><br><br><br><br><br>\n        <h2>Crear ToDo's</h2>\n        <p>\n          Puedes decirle a Meg tus actividades pendientes y estas se verán reflejadas en tu Dashboard a manera de una lista. <br>\n          <strong>Puedes crear ToDo's con el comando \"Recuerdame + Tu actividad + el número 1, 2 o 3 según el nivel de prioridad que esta tenga\".</strong>\n        </p>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <div class=\"iphone-slider-container\">\n          <img src=\"../../img/slider/ss-2.png\" alt=\"\" class=\"iphone\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <div class=\"iphone-slider-container\">\n          <img src=\"../../img/slider/ss-5.png\" alt=\"\" class=\"iphone\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <br><br><br><br><br><br><br><br>\n        <h2>¡Pide a Meg lo que necesites!</h2>\n        <p>No salgas de casa si no es necesario o si tienes algo mejor que hacer, en lugar de eso, escríbele a Meg que necesitas y lo tendrás en la puerta de tu casa.</p>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -110px\">\n        <br><br><br><br><br><br><br><br>\n        <h2>Categorías de fácil acceso:</h2>\n        <p>\n          Dentro de este servicio puedes ver el proceso de tus pedidos, desde que lo pides, hasta que ya te fue entregado, además puedes ver tus pedidos más comunes y los pedidos <i>trending</i> que los demás usuarios están haciendo.\n          <strong>Puedes hacer un pedido con el comando \"Necesito + lo que necesitas que Meg te lleve\".</strong>\n        </p>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <div class=\"iphone-slider-container\">\n          <img src=\"../../img/slider/ss-3.png\" alt=\"\" class=\"iphone\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <div class=\"iphone-slider-container\">\n          <img src=\"../../img/slider/ss-4.png\" alt=\"\" class=\"iphone\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\"margin-top: -100px\">\n        <br><br><br><br><br><br><br><br>\n        <h2>Define tus metas y mira tus avances:</h2>\n        <p>Dile a Meg qué es eso que tantas ganas tienes de lograr y mira en tu Dashboar que tan cerca o lejos estás de cumplir tu meta.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--div class=\"tercerSeccion\">\n\t<div class=\"container\">\n\t\t<h1 class=\"titulo\">¿Cómo funciona?</h1>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-8 col-xs-9 bhoechie-tab-container\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu\">\n\t\t\t\t\t\t<div class=\"list-group\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item active text-center\">\n\t\t\t\t\t\t\t\t<h3 class=\"pasos\">1. CREA</h3>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center\">\n\t\t\t\t\t\t\t\t<h3 class=\"pasos\">2. ARROJA</h3>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center\">\n\t\t\t\t\t\t\t\t<h3 class=\"pasos\">3. TEJE</h3>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center\">\n\t\t\t\t\t\t\t\t<h3 class=\"pasos\">4. CHAT</h3>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center\">\n\t\t\t\t\t\t\t\t<h3 class=\"pasos\">5. CONECTA</h3>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab\">\n\t\t\t\t\t\t<!-- flight section -->\n<!--div class=\"bhoechie-tab-content active\">\n\t<center style=\"border-right: 22px solid #215C92\">\n\t\t<h3 style=\"margin-top: 0;\">Crea tu perfil al ir contestando\n\t\t\tdiferentes preguntas y quizzes.\n\t\t\t<br><br>\n\t\t\tLas preguntas aparecerán día con día. Entre más contestes, más completo estará tu perfil.\n\t\t</h3>\n\t</center>\n</div>\n<!-- train section -->\n<!--div class=\"bhoechie-tab-content\">\n\t<center style=\"margin-top: 120px;border-right: 22px solid #3B669D\">\n\t\t<h3 style=\"margin-top: 0;\">\n\t\t\tPregunta aquello que te gustaría saber sobre esa persona especial.\n\t\t\t<br><br>\n\t\t\tSeleccionamos a 3 weavers diferentes para que la contesten.\n\t\t</h3>\n\t</center>\n</div>\n\n<!-- hotel search -->\n<!--div class=\"bhoechie-tab-content\">\n\t<center style=\"margin-top: 240px;border-right: 22px solid #5670A9\">\n\t\t<h3 style=\"margin-top: 0;\">\n\t\t\tElige las respuestas que más te gusten y comienza a tejer hilos que te acerquen a esa persona especial.\n\t\t\t<br><br>\n\t\t\tConózcanse de una forma más\n\t\t\tprofunda y honesta.</h3>\n\t</center>\n</div>\n<div class=\"bhoechie-tab-content\">\n\t<center style=\"margin-top: 330px;border-right: 22px solid #8680BC\">\n\t\t<h3 style=\"margin-top: 0;\">\n\t\t\tCuando hayas elegido a esa persona especial podrán hablar directamente.\n\t\t\t<br><br>\n\t\t\tAl fin podrás ver  con quién has estado compartiendo todo este tiempo.</h3>\n\t</center>\n</div>\n<div class=\"bhoechie-tab-content\">\n\t<center style=\"margin-top: 440px;border-right: 22px solid #BB98D8\">\n\t\t<h3 style=\"margin-top: 0;\">Disfruta de una promoción pensada\n\t\t\texclusivamente para ustedes dos.\n\t\t\t<br><br>\n\t\t\tLos invitamos a que se conozcan en un lugar donde sabemos que lo disfrutarán.</h3>\n\t</center>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div-->\n\n<!--<div class=\"cuartaSeccion\">\n  <div class=\"container\">\n    <h1 class=\"titulo\">¿Por qué <span class=\"customFont\">weaver</span> ?</h1>\n  </div>\n  <div class=\"container centrado\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12 PQW\" style=\"margin-bottom: 40px\">\n        <img class=\"imgPQW\" src=\"https://s28.postimg.org/ocpy48h1p/icono1.png\" alt=\"\">\n        <h3>Preguntas interesantes</h3>\n        <h4 style=\"color: black\" class=\"separacion\">No gastes tiempo llenando interminables perfiles que en realidad no pueden expresar quien realmente eres.</h4>\n        <p class=\"separacion segundoT\">Nuestras preguntas y quizzes descubren lo mejor de ti, nos ayudan a saber lo que estás buscando.</p>\n      </div>\n      <div class=\"col-md-4 col-sm-12 PQW\" style=\"margin-bottom: 40px\">\n        <img class=\"imgPQW\" src=\"https://s27.postimg.org/pavf84qgz/icono2.png\" alt=\"\">\n        <h3>Como una cita a ciegas</h3>\n        <h4 style=\"color: black\" class=\"separacion\">Solo sé tú mismo, conecta de una manera auténtica y natural.</h4>\n        <p class=\"separacion segundoT\">Vive una verdadera experiencia de cita a ciegas. Comparte y ve más allá con alguien sin ningún prejuicio.</p>\n      </div>\n      <div class=\"col-md-4 col-sm-12 PQW\" style=\"margin-bottom: 40px\">\n        <img class=\"imgPQW\" src=\"https://s23.postimg.org/xd1950biz/icono3.png\" alt=\"\">\n        <h3>No más swiping</h3>\n        <h4 style=\"color: black\" class=\"separacion\">Deja de coleccionar “matches” y enfócate en personas que realmente les importa.</h4>\n        <p class=\"separacion segundoT\">Lo mejor de cada persona está en su interior, toma el tiempo de descubrirlo.</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12 PQW\">\n        <img class=\"imgPQW\" src=\"https://s30.postimg.org/777aho69d/icono4.png\" alt=\"\">\n        <h3>Cerca de ti</h3>\n        <h4 style=\"color: black\" class=\"separacion\">Conoce gente a tu alrededor, esta vez sin ningún filtro.</h4>\n        <p class=\"separacion segundoT\">Nunca sabrás lo que encontrarás. Un excelente amigo o algo más. Te sorprenderás.</p>\n      </div>\n      <div class=\"col-md-4 col-sm-12 PQW\">\n        <img class=\"imgPQW\" src=\"https://s29.postimg.org/cacx7o0qv/icono5.png\" alt=\"\">\n        <h3>Llévalo al mundo real</h3>\n        <h4 style=\"color: black\" class=\"separacion\">Disfruta de ofertas especiales en lugares cerca de ustedes para una primer cita.</h4>\n        <p class=\"separacion segundoT\">Es nuestra manera de celebrar que se conocieron.</p>\n      </div>\n      <div class=\"col-md-4 col-sm-12 PQW\">\n        <img class=\"imgPQW\" src=\"https://s24.postimg.org/t71px265h/icono6.png\" alt=\"\">\n        <h3>Evita atención innecesaria</h3>\n        <h4 style=\"color: black\" class=\"separacion\">La interacción de Weaver evitará que conozcas gente que no busca una relación más honesta.</h4>\n        <p class=\"separacion segundoT\">Recuerda que lo bueno, toma tiempo.</p>\n      </div>\n    </div>\n  </div>\n</div>-->\n<footer>\n  <br>\n  <br>\n  <img class=\"logoFooter\" src=\"../../img/meg-logo.png\" style=\"width: 200px\">\n  <div class=\"container footerNav\">\n    <a href=\"\">BLOG</a>\n    <a href=\"\">CONTACTO</a>\n  </div>\n</footer>\n\n<script>\n  $(document).ready(function() {\n    $(\"div.bhoechie-tab-menu>div.list-group>a\").click(function(e) {\n      e.preventDefault();\n      $(this).siblings('a.active').removeClass(\"active\");\n      $(this).addClass(\"active\");\n      var index = $(this).index();\n      $(\"div.bhoechie-tab>div.bhoechie-tab-content\").removeClass(\"active\");\n      $(\"div.bhoechie-tab>div.bhoechie-tab-content\").eq(index).addClass(\"active\");\n    });\n  });\n</script>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(265);


/***/ })

},[712]);
//# sourceMappingURL=main.bundle.map