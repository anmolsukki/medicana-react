/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Client_App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Client_Containers_HomePage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Client_Containers_NotFoundPage__ = __webpack_require__(24);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ([_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_0__Client_App__["a" /* default */]), {}, {
  routes: [_objectSpread(_objectSpread({
    path: '/'
  }, __WEBPACK_IMPORTED_MODULE_1__Client_Containers_HomePage__["a" /* default */]), {}, {
    exact: true
  }), _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2__Client_Containers_NotFoundPage__["a" /* default */])]
})]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_FAILED; });
var USER_INIT = 'USER_INIT';
var USER_SUCCESS = 'USER_SUCCESS';
var USER_FAILED = 'USER_FAILED';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_http_proxy__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Helpers_renderer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_store__ = __webpack_require__(25);








var bodyParser = __webpack_require__(30); // const basicAuth = require('express-basic-auth');


var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
app.use('/api', __WEBPACK_IMPORTED_MODULE_2_express_http_proxy___default()('https://medicana-app.herokuapp.com/', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.get('/dist.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static('public'));
/* app.use(
  basicAuth({
    users: { admin: 'scbank' },
    challenge: true,
  })
); */

app.get('*', function (req, res) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_6__Helpers_store__["a" /* default */])(req);
  var promises = Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_5__Helpers_router__["a" /* default */], req.path).map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;
    return route.loadData ? route.loadData(store, match) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(__WEBPACK_IMPORTED_MODULE_4__Helpers_renderer__["a" /* default */])(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  }).catch(function (err) {
    return console.log(err);
  });
});
app.listen(, function () {
  console.log("server is up and running");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__(4);








/* harmony default export */ __webpack_exports__["a"] = (function (req, store, context) {
  var content = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
    store: store
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"], {
    location: req.path,
    context: context
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, Object(__WEBPACK_IMPORTED_MODULE_4_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_7__router__["a" /* default */])))));
  var helmet = __WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"].renderStatic();
  return "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        ".concat(helmet.title.toString(), "\n        ").concat(helmet.meta.toString(), "\n        ").concat(helmet.link.toString(), "\n        <meta charset=\"utf-8\">\n        <meta name=\"theme-color\" content=\"#000000\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n        <meta name=\"description\" content=\"India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at Medicana medicine store in 100+ cities like - Patna, Bihar etc. with free home delivery and exciting offers. Check Now!\">\n        <meta name=\"keywords\" content=\"online pharmacy, online medicine, medicine online, online medical store, buy medicine online, online pharmacy India, buy medicine online India, online chemist, online medicine purchase\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n        <meta data-react-helmet=\"true\" name=\"robots\" content=\"INDEX, FOLLOW\" />\n        <meta data-react-helmet=\"true\" name=\"googlebot\" content=\"INDEX, FOLLOW\">\n\n        <!-- Safari -->\n        <meta name=\"apple-mobile-web-app-apable\" content=\"yes\" />\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n        <meta name=\"apple-mobile-web-app-title\" content=\"ReactJS SSR\" />\n\n        <!-- Internate Explorer -->\n        <meta name=\"msapplication-TileColor\" content=\"#fff\" />\n        <meta name=\"theme-color\" content=\"#000000\" />\n\n        <link data-react-helmet=\"true\" rel=\"canonical\" href=\"https://medicana.co.in/\"/>\n        <link rel=\"icon\" type=\"image/x-icon\" rel=\"icon\" href=\"/assets/images/favicon.ico\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/css/main.css?v=1.1\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/css/LottieComponent.css\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/css/notFound.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/blue.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/owl.carousel.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/owl.transitions.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/animate.min.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/rateit.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/bootstrap-select.min.css\">\n        <link rel=\"stylesheet\" href=\"/assets/css/font-awesome.css\">\n\n        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>\n        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>\n        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n\n        <!-- Global site tag (gtag.js) - Google Analytics -->\n        <script async src=\"https://www.googletagmanager.com/gtag/js?id=GA_CODE_HERE\"></script>\n        <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'GA_CODE_HERE');\n        </script>\n\n\t\t  </head>\n    <body>\n      <div id=\"root\">").concat(content, "</div>\n      <script>\n          window.INITIAL_STATE = ").concat(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default()(store.getState()), "\n      </script>\n\n      <script src=\"/dist.js\"></script>\n      <script src=\"/assets/js/custom.js\"></script>\n\n      <script>\n        if ('serviceWorker' in navigator) {\n          window.addEventListener('load', function() {\n            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {\n              return null;\n            }, function(err) {\n              return null;\n            });\n          });\n        }\n      </script>\n\n\t  </body>\n    </html>\n  ");
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Util_HelmetTag__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_MainComponent_Headers__ = __webpack_require__(22);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('cnt-home');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Util_HelmetTag__["a" /* HelmetTag */], {
        title: "Medicana - Online Pharmacy India",
        description: "Medicana - Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: Medicana"
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_MainComponent_Headers__["a" /* default */], null), Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["renderRoutes"])(this.props.route.routes));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
  return {
    userData: state.global.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserAction: function getUserAction() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__["a" /* getUserAction */])());
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  component: Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App),
  loadData: loadData
});
function loadData(_ref) {
  var dispatch = _ref.dispatch;
  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__["a" /* getUserAction */])());
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionType__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helpers_endpoints__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util_GlobalFuntion__ = __webpack_require__(20);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getUserAction = function getUserAction() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var token, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__["b" /* userInit */]());
              token = __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('token');
              _context.next = 4;
              return api.get(__WEBPACK_IMPORTED_MODULE_2__Helpers_endpoints__["a" /* default */].UserApi, Object(__WEBPACK_IMPORTED_MODULE_3__Util_GlobalFuntion__["a" /* authHeaders */])(token));

            case 4:
              response = _context.sent;

              if (response.status === 200) {
                dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__["c" /* userSuccess */](response.data));
              } else {
                dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__["a" /* userFailed */](response));
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = userInit;
/* harmony export (immutable) */ __webpack_exports__["c"] = userSuccess;
/* harmony export (immutable) */ __webpack_exports__["a"] = userFailed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionConstant__ = __webpack_require__(5);

function userInit() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["b" /* USER_INIT */]
  };
}
function userSuccess(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["c" /* USER_SUCCESS */],
    payload: payload
  };
}
function userFailed(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["a" /* USER_FAILED */],
    payload: payload
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  UserApi: '/users'
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authHeaders;
function authHeaders(token) {
  var header = {
    headers: {
      'x-api-key': token ? token : null
    }
  };
  return header;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelmetTag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var HelmetTag = /*#__PURE__*/function (_Component) {
  _inherits(HelmetTag, _Component);

  var _super = _createSuper(HelmetTag);

  function HelmetTag() {
    _classCallCheck(this, HelmetTag);

    return _super.apply(this, arguments);
  }

  _createClass(HelmetTag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          image = _this$props.image,
          keywords = _this$props.keywords;
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
        title: title,
        meta: [{
          name: 'description',
          content: description
        }, {
          name: 'keywords',
          content: keywords
        }, {
          name: 'og:title',
          content: title
        }, {
          name: 'og:description',
          content: description
        }, {
          name: 'twitter:title',
          content: title
        }, {
          name: 'twitter:description',
          content: description
        }, {
          name: 'twitter:site',
          contant: '@anmolsukki'
        }, {
          name: 'twitter:card',
          contant: 'summary'
        }, {
          name: 'og:site_name',
          contant: 'Zarves'
        }, {
          name: 'og:image',
          content: image
        }]
      });
    }
  }]);

  return HelmetTag;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Headers = function Headers() {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "header-style-1"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "top-bar animate-dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header-top-inner"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cnt-account"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Lab Tests ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    style: {
      color: '#fded01'
    },
    className: "fa fa-spinner fa-spin"
  }))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Ask Doctor ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "bc"
  }, "FREE"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "AYURVEDA")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Need Help?")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "QUICK BUY! Save 15%"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "btn btn-primary"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-bolt inner-right-vs"
  }), " Upload"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon fa fa-shopping-cart"
  }), "My Cart")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "signin.php"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon fa fa-sign-in "
  }), " Sign Up")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "signin.php"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "icon fa fa-lock"
  }), " Login")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cnt-block"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix"
  })))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "main-header"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-3 logo-holder"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "index.php"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/assets/images/logo.png",
    alt: "Medicana"
  })))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-7 top-search-holder"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "search-area"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "control-group",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "categories-filter animate-dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    href: "#"
  }, "Categories ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    className: "caret"
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "menu-header"
  }, "- Coronavirus Prevention"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    role: "menuitem",
    tabIndex: "-1",
    href: "#"
  }, "- Protein Supplements")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    role: "menuitem",
    tabIndex: "-1",
    href: "#"
  }, "- Blood Glucose Monitors")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    role: "menuitem",
    tabIndex: "-1",
    href: "#"
  }, "- Test Strips & Lancets")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    role: "menuitem",
    tabIndex: "-1",
    href: "#"
  }, "- Accu-Chek"))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "search-field",
    placeholder: "Search here..."
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "search-button",
    href: "#"
  }))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-8 col-sm-12 col-md-2 animate-dropdown top-cart-row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "dropdown dropdown-cart"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle lnk-cart",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "items-cart-inner"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "basket"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "glyphicon glyphicon-shopping-cart"
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "basket-item-count"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "count"
  }, "1")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "total-price-basket"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "lbl"
  }, "cart -"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "total-price"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sign"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-rupee"
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "value"
  }, "600.00"))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cart-item product-summary"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-4"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/assets/images/c1.png",
    alt: ""
  })))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-7"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "name"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Aiqura AD801 Forehead Infra")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "price"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-rupee"
  }), " 4299")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-1 action"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-trash"
  }))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix cart-total"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "pull-right"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "text"
  }, "Sub Total :"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "price"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-rupee"
  }), " 4299")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "cart.php",
    className: "btn btn-upper btn-primary btn-block m-t-20"
  }, "Checkout"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header-nav animate-dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm navbar navbar-default",
    role: "navigation"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-header"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    "data-target": "#mc-horizontal-menu-collapse",
    "data-toggle": "collapse",
    className: "navbar-toggle collapsed",
    type: "button"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), " ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar"
  }), " ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar"
  }), " ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon-bar"
  }))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav-bg-className"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "navbar-collapse collapse",
    id: "mc-horizontal-menu-collapse"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav-outer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "nav navbar-nav"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "active dropdown yamm mega-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    "data-hover": "dropdown",
    className: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, "All Medicines"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu container"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content "
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-6 col-md-2 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "title"
  }, "All Medicines"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "product.php"
  }, " All Medicines"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-hover": "dropdown",
    "data-toggle": "dropdown"
  }, "Coronavirus Prevention"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu pages"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Boost Your Immunity")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Sanitizers & Handwash Products")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Masks")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Thermometer")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Disinfectants")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Chyawanprash"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-hover": "dropdown",
    "data-toggle": "dropdown"
  }, "Featured"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu pages"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Medicana Health Products")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Explore Something New")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Top Brands")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Organic India")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Accu-Chek")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Himalaya Products")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " OneTouch")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Abbott Nutrition"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown mega-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    "data-hover": "dropdown",
    className: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, "Fitness & Supplements"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu container"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-2 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Protein Supplements"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Whey Protein")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Mass Gainers")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Workout Essential")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Fat Burners"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Immunity Boosters"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Chyawanprasha")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Vitamin C")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Herbal Teas")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Antioxidant Supplements")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Ayurvedic Supplements")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-2 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Health Food & Drinks"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Green Tea & Herbal Tea")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Superfoods")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Herbal Juice")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Apple Cider Vinegar")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Seeds")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Healthy Snacks"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Vita. & Supplements"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Multivitamins")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Vitamins A-Z")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Calcium & Minerals")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-2 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Family Nutrition"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " For Adults")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " For Children")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " For Women"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Specialty Supplements"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Green Supplements")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Beauty Supplements")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Probiotics")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Glucosamine")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Collagen")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Antioxidants")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Biotin")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-2 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Amino Acids"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Arginine")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " BCAA")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Glutathione")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Carnitine")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Glutamine")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Creatine"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Omega & Fish Oil"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Fish Oil")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Cod Liver Oil")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Flax Seed Oil")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    alt: "",
    src: "/assets/images/banner-side.jpg"
  })))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-hover": "dropdown",
    "data-toggle": "dropdown"
  }, "Diabetes"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu pages"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-md-6  col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Devices"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Blood Glucose Monitors")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Test Strips & Lancets")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Syringes & Pens"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Diabetic Medicines"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Vitamins, Minerals & Antioxidants")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Homeopathy Medicines")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Ayurvedic Medicines")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-md-6  col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Sugar Substitutes"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Diabetic Diet")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Juices & Vinegars")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Superfoods")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Diabetic Foot Health"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-hover": "dropdown",
    "data-toggle": "dropdown"
  }, "Healthcare Devices"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu pages"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-md-6  col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Masks (N95, Surgical and more)"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " N95 Masks")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Anti Pollution Masks"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Supports & Braces"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Neck & Shoulder Support")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Knee & Leg Support")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Back & Abdomen Support")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Ankle & Foot Support")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Hand & Wrist Braces")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Arm & Elbow Support")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Cervical Pillows")))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-md-6  col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Daily Living Aids"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Hearing Aid Devices")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Mosquito Repellents")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Mobility Equipments"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "title"
  }, "Doctor's Corner"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Stethoscopes")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Tapes & Bandages")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, " Clinical Diagnostic Equipments"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-hover": "dropdown",
    "data-toggle": "dropdown"
  }, "Personal Care"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "dropdown-menu pages"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "yamm-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-xs-12 col-menu"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Home")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Category")), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Detail"))))))))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "dropdown hidden-sm"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "Health Conditions"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "clearfix"
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Headers);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var HomePage = function HomePage() {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "App"
  }, "Test Container");
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: HomePage
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "notFound"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "error"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
    className: "snow",
    id: "snow"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "main-text"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "We couldn\u2019t find the page you\u2019re looking for."), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "subtext"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "subtextsub"
  }, "You may have clicked the wrong link or mistyped the address. Please use the links below."))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button",
    href: "/"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Go Back to Home"))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "ground"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mound"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mound_text"
  }, "404"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mound_spade"
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: NotFoundPage
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootReducer__ = __webpack_require__(28);




/* harmony default export */ __webpack_exports__["a"] = (function (req) {
  var axiosInstance = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      cookie: req.get('cookie') || ''
    }
  });
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__rootReducer__["a" /* default */], {}, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(axiosInstance)));
  return store;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Redux_Global_Reducer__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  global: __WEBPACK_IMPORTED_MODULE_1__Redux_Global_Reducer__["a" /* default */]
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionConstant__ = __webpack_require__(5);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  user: []
};

function GlobalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["b" /* USER_INIT */]:
      return _objectSpread({}, state);

    case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["c" /* USER_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__["a" /* USER_FAILED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GlobalReducer);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);