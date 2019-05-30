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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts/class/Base.js":
/*!**************************************!*\
  !*** ./src/js/scripts/class/Base.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * @class Base\r\n */\nvar Base =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Base(name) {\n    _classCallCheck(this, Base);\n\n    // props\n    this.name = name;\n  }\n  /**\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Base, [{\n    key: \"setup\",\n    value: function setup() {\n      console.log('super : ' + this.name);\n    }\n    /**\r\n     * update\r\n     * @return {[type]} [description]\r\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return Base;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/scripts/class/Base.js?");

/***/ }),

/***/ "./src/js/scripts/class/Child.js":
/*!***************************************!*\
  !*** ./src/js/scripts/class/Child.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Child; });\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/js/scripts/class/Base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\r\n * @class Child\r\n * @extend Base\r\n */\n\nvar Child =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Child, _Base);\n\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @param  {[type]} num [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Child(name, num) {\n    var _this;\n\n    _classCallCheck(this, Child);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));\n    _this.num = num;\n    return _this;\n  }\n  /**\r\n   * @override\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Child, [{\n    key: \"setup\",\n    value: function setup() {\n      _get(_getPrototypeOf(Child.prototype), \"setup\", this).call(this);\n\n      console.log('child : ' + this.name + this.num);\n    }\n  }]);\n\n  return Child;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/scripts/class/Child.js?");

/***/ }),

/***/ "./src/js/scripts/index.js":
/*!*********************************!*\
  !*** ./src/js/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Base */ \"./src/js/scripts/class/Base.js\");\n/* harmony import */ var _class_Child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Child */ \"./src/js/scripts/class/Child.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/js/scripts/utils/utils.js\");\n/**\r\n * scripts.js エントリポイント\r\n */\n// libs\n// npm moduleで配布されていないライブラリの場合は、requireでバンドル化\n// コード参考用 jQuery\n// window.$ = window.jQuery = require(\"./libs/jquery-3.1.0.min.js\");\n// console.log(jQuery);\n// import $ from \"jquery\";\n// import INK from \"ink-javascript\";\n// require(\"ink-javascript/dist/ink-0.0.1.min.js\");\n// app-es\n\n\n // import glsl from \"glslify\";\n// const myFragShader = glsl(`\n// void main () {\n//   gl_FragColor = vec4(1.);\n// }\n// `);\n// console.log(myFragShader);\n// var shader = require(\"../shader/common/default.frag\");\n// console.log(shader);\n\n/*==========================================================================\r\n\tinit call\r\n==========================================================================*/\n\n$(function ($) {// var base = new Base('Base');\n  // var child = new Child('Child', 999);\n  // utils.template();\n  // console.log(INK.queryHashMap());\n  // console.log('-----------');\n  // // alert(\"2000000000000000000\");\n  // // alert(\"2000000000000000000\");\n  // // alert(\"2000000000000000000\");\n  // // alert(\"2000000000000000000\");\n  // base.setup();\n  // console.log('-----------');\n  // child.setup();\n});\n\n//# sourceURL=webpack:///./src/js/scripts/index.js?");

/***/ }),

/***/ "./src/js/scripts/utils/utils.js":
/*!***************************************!*\
  !*** ./src/js/scripts/utils/utils.js ***!
  \***************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/**\r\n * ES6テスト\r\n * template\r\n * @return {[type]} [description]\r\n */\nvar template = function template() {\n  // テンプレート文字列は「`」バッククォート\n  var str = \"\\u3042\\n\\t\\u3044\\n\\t\\u3046\";\n  console.log(str); // 変数の文字列への埋め込み\n\n  var name = '1-10';\n  var age = 20;\n  var greeting = \"\\u79C1\\u306E\\u540D\\u524D\\u306F\".concat(name, \"\\u3067\\u3059\\u3002\").concat(age, \"\\u6B73\\u3067\\u3059\");\n  console.log(greeting); // 分割代入\n\n  var name = '1-10',\n      age = 20;\n  console.log(name, age); // 可変長引数\n\n  var array = [1, 5, 3];\n  var max = Math.max.apply(Math, array);\n  console.log(max); // 5\n\n  function show1() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    console.log(args);\n  }\n\n  show1(1, 2, 3); // [1, 2, 3]\n  // 初期値代入\n\n  function show2() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';\n    console.log(name);\n  }\n\n  show2('1-10 design');\n  show2(); // アロー関数\n\n  var show3 = function show3(text) {\n    console.log(text);\n  }; // 引数が一つの時には()を省略可能\n\n\n  var show4 = function show4(text) {\n    console.log(text);\n  }; // また一文の場合、{}とreturnの省略も可能。\n\n\n  var show5 = function show5(text) {\n    return text + ' さようなら';\n  };\n\n  var text = show5('こんにちは');\n  console.log(text); // こんにちは さようなら\n  // thisを束縛\n\n  var counter = {\n    count: 0,\n    start: function start() {\n      var _this = this;\n\n      setTimeout(function () {\n        console.log(_this.count++);\n      }, 1000);\n    }\n  };\n  counter.start();\n};\n\n//# sourceURL=webpack:///./src/js/scripts/utils/utils.js?");

/***/ })

/******/ });