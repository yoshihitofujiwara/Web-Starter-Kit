/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"test": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/test.js","libs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app-es/class/Base.js":
/*!*************************************!*\
  !*** ./src/js/app-es/class/Base.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * @class Base\r\n */\nvar Base = function () {\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Base(name) {\n    _classCallCheck(this, Base);\n\n    // props\n    this.name = name;\n  }\n\n  /**\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Base, [{\n    key: 'setup',\n    value: function setup() {\n      console.log('super : ' + this.name);\n    }\n\n    /**\r\n     * update\r\n     * @return {[type]} [description]\r\n     */\n\n  }, {\n    key: 'update',\n    value: function update() {}\n  }]);\n\n  return Base;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack:///./src/js/app-es/class/Base.js?");

/***/ }),

/***/ "./src/js/app-es/class/Child.js":
/*!**************************************!*\
  !*** ./src/js/app-es/class/Child.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/js/app-es/class/Base.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n/**\r\n * @class Child\r\n * @extend Base\r\n */\n\nvar Child = function (_Base) {\n  _inherits(Child, _Base);\n\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @param  {[type]} num [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Child(name, num) {\n    _classCallCheck(this, Child);\n\n    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));\n\n    _this.num = num;\n    return _this;\n  }\n\n  /**\r\n   * @override\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Child, [{\n    key: 'setup',\n    value: function setup() {\n      _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'setup', this).call(this);\n      console.log('child : ' + this.name + this.num);\n    }\n  }]);\n\n  return Child;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Child);\n\n//# sourceURL=webpack:///./src/js/app-es/class/Child.js?");

/***/ }),

/***/ "./src/js/app-es/utils/utils.js":
/*!**************************************!*\
  !*** ./src/js/app-es/utils/utils.js ***!
  \**************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/**\r\n * ES6テスト\r\n * template\r\n * @return {[type]} [description]\r\n */\nvar template = function template() {\n\t// テンプレート文字列は「`」バッククォート\n\tvar str = '\\u3042\\n\\t\\u3044\\n\\t\\u3046';\n\tconsole.log(str);\n\n\t// 変数の文字列への埋め込み\n\tvar name = '1-10';\n\tvar age = 20;\n\tvar greeting = '\\u79C1\\u306E\\u540D\\u524D\\u306F' + name + '\\u3067\\u3059\\u3002' + age + '\\u6B73\\u3067\\u3059';\n\tconsole.log(greeting);\n\n\t// 分割代入\n\tvar name = '1-10',\n\t    age = 20;\n\n\tconsole.log(name, age);\n\n\t// 可変長引数\n\tvar array = [1, 5, 3];\n\tvar max = Math.max.apply(Math, array);\n\tconsole.log(max); // 5\n\n\tfunction show1() {\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\tconsole.log(args);\n\t}\n\tshow1(1, 2, 3); // [1, 2, 3]\n\n\n\t// 初期値代入\n\tfunction show2() {\n\t\tvar name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';\n\n\t\tconsole.log(name);\n\t}\n\tshow2('1-10 design');\n\tshow2();\n\n\t// アロー関数\n\tvar show3 = function show3(text) {\n\t\tconsole.log(text);\n\t};\n\n\t// 引数が一つの時には()を省略可能\n\tvar show4 = function show4(text) {\n\t\tconsole.log(text);\n\t};\n\n\t// また一文の場合、{}とreturnの省略も可能。\n\tvar show5 = function show5(text) {\n\t\treturn text + ' さようなら';\n\t};\n\n\tvar text = show5('こんにちは');\n\tconsole.log(text); // こんにちは さようなら\n\n\n\t// thisを束縛\n\tvar counter = {\n\t\tcount: 0,\n\n\t\tstart: function start() {\n\t\t\tvar _this = this;\n\n\t\t\tsetTimeout(function () {\n\t\t\t\tconsole.log(_this.count++);\n\t\t\t}, 1000);\n\t\t}\n\t};\n\tcounter.start();\n};\n\n//# sourceURL=webpack:///./src/js/app-es/utils/utils.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_es_class_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-es/class/Base */ \"./src/js/app-es/class/Base.js\");\n/* harmony import */ var _app_es_class_Child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-es/class/Child */ \"./src/js/app-es/class/Child.js\");\n/* harmony import */ var _app_es_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-es/utils/utils */ \"./src/js/app-es/utils/utils.js\");\n/**\r\n * scripts.js エントリポイント\r\n */\n\n// libs\n// npm moduleで配布されていないライブラリの場合は、requireでバンドル化\n// コード参考用 jQuery\n// window.$ = window.jQuery = require(\"./libs/jquery-3.1.0.min.js\");\n// console.log(jQuery);\n\n\n// import INK from \"ink-javascript\";\n\n// app-es\n\n\n\n\n// import glsl from \"glslify\";\n// const myFragShader = glsl(`\n// void main () {\n//   gl_FragColor = vec4(1.);\n// }\n// `);\n// console.log(myFragShader);\n// var shader = require(\"../shader/common/default.frag\");\n// console.log(shader);\n\n\n/*==========================================================================\r\n\tinit call\r\n==========================================================================*/\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function ($) {\n\tvar base = new _app_es_class_Base__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Base');\n\tvar child = new _app_es_class_Child__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Child', 999);\n\n\t_app_es_utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"template\"]();\n\n\tconsole.log(INK.queryHashMap());\n\n\tconsole.log('-----------');\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\tbase.setup();\n\n\tconsole.log('-----------');\n\tchild.setup();\n});\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ })

/******/ });