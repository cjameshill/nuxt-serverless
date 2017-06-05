require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  dev: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    publicPath: 'https://d9atxhbqgexfy.cloudfront.net/dist/',
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(6);




var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])

// Add USERS Routes
();router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])

// Mock Users
();var users = [{ name: 'Alexandre' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
}

/* GET user by ID. */
);router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Bego_Documents_Chris_Web_Nuxt_Serverless_Demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Bego_Documents_Chris_Web_Nuxt_Serverless_Demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Bego_Documents_Chris_Web_Nuxt_Serverless_Demo_node_modules_babel_runtime_regenerator__);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(2);




var start = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_C_Users_Bego_Documents_Chris_Web_Nuxt_Serverless_Demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt, host, port;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Bego_Documents_Chris_Web_Nuxt_Serverless_Demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(1
            // Instanciate nuxt.js
            );
            _context.next = 3;
            return new __WEBPACK_IMPORTED_MODULE_1_nuxt___default.a(config);

          case 3:
            nuxt = _context.sent;

            // Add nuxt.js middleware
            app.use(nuxt.render
            // Build in development
            // if (config.dev) {
            // try {
            //   await nuxt.build()
            // } catch (error) {
            //   console.error(error) // eslint-disable-line no-console
            //   process.exit(1)
            // }
            // }
            // Listen the server
            );if (dev) {
              host = process.env.HOST || '127.0.0.1';
              port = process.env.PORT || 3000;

              app.set('port', port);
              app.listen(port, host);
              console.log('Server is listening on ' + host + ' at ' + port);
            } else console.log('Server is listening on Lambda');

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
var compression = __webpack_require__(4

// app.get('/', (req, res) => {
//   res.json({title: 'Hello', message: 'Hello World'})
// })

);app.disable('x-powered-by');

app.use(compression());

var dev = false;

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]
//
// // Start nuxt.js
);

start();

module.exports = app;

/***/ }
/******/ ]);
//# sourceMappingURL=main.map