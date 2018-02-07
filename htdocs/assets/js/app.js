(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Base
 */
var Base = function () {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function Base(name) {
    _classCallCheck(this, Base);

    // props
    this.name = name;
  }

  /**
   * setup
   * @return {[type]} [description]
   */


  _createClass(Base, [{
    key: 'setup',
    value: function setup() {
      console.log('super : ' + this.name);
    }

    /**
     * update
     * @return {[type]} [description]
     */

  }, {
    key: 'update',
    value: function update() {}
  }]);

  return Base;
}();

exports.default = Base;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Child
 * @extend Base
 */
var Child = function (_Base) {
  _inherits(Child, _Base);

  /**
   * constructor
   * @param  {[type]} name [description]
   * @param  {[type]} num [description]
   * @return {[type]}      [description]
   */
  function Child(name, num) {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

    _this.num = num;
    return _this;
  }

  /**
   * @override
   * setup
   * @return {[type]} [description]
   */


  _createClass(Child, [{
    key: 'setup',
    value: function setup() {
      _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'setup', this).call(this);
      console.log('child : ' + this.name + this.num);
    }
  }]);

  return Child;
}(_Base3.default);

exports.default = Child;

},{"./Base":1}],3:[function(require,module,exports){
'use strict';

var _Base = require('./class/Base');

var _Base2 = _interopRequireDefault(_Base);

var _Child = require('./class/Child');

var _Child2 = _interopRequireDefault(_Child);

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------
	test
--------------------------------------------------------------------------*/
jQuery(function ($) {
	var base = new _Base2.default('Base');
	var child = new _Child2.default('Child', 999);

	_utils2.default.template();

	console.log('-----------');
	base.setup();

	console.log('-----------');
	child.setup();
});

},{"./class/Base":1,"./class/Child":2,"./utils/utils":4}],4:[function(require,module,exports){
'use strict';

var m = module.exports;

/**
 * ES6テスト
 * template
 * @return {[type]} [description]
 */
m.template = function () {
	// テンプレート文字列は「`」バッククォート
	var str = '\u3042\n\t\u3044\n\t\u3046';
	console.log(str);

	// 変数の文字列への埋め込み
	var name = '1-10';
	var age = 20;
	var greeting = '\u79C1\u306E\u540D\u524D\u306F' + name + '\u3067\u3059\u3002' + age + '\u6B73\u3067\u3059';
	console.log(greeting);

	// 分割代入
	var name = '1-10',
	    age = 20;

	console.log(name, age);

	// 可変長引数
	var array = [1, 5, 3];
	var max = Math.max.apply(Math, array);
	console.log(max); // 5

	function show1() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		console.log(args);
	}
	show1(1, 2, 3); // [1, 2, 3]


	// 初期値代入
	function show2() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';

		console.log(name);
	}
	show2('1-10 design');
	show2();

	// アロー関数
	var show3 = function show3(text) {
		console.log(text);
	};

	// 引数が一つの時には()を省略可能
	var show4 = function show4(text) {
		console.log(text);
	};

	// また一文の場合、{}とreturnの省略も可能。
	var show5 = function show5(text) {
		return text + ' さようなら';
	};

	var text = show5('こんにちは');
	console.log(text); // こんにちは さようなら


	// thisを束縛
	var counter = {
		count: 0,

		start: function start() {
			var _this = this;

			setTimeout(function () {
				console.log(_this.count++);
			}, 1000);
		}
	};
	counter.start();
};

},{}]},{},[3]);
