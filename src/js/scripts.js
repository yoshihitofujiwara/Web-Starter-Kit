/**
 * scripts.js エントリポイント
 */

// libs
// npm moduleで配布されていないライブラリの場合は、requireでバンドル化
// コード参考用 jQuery
// window.$ = window.jQuery = require("./libs/jquery-3.1.0.min.js");
// console.log(jQuery);
import $ from "jquery";

// import INK from "ink-javascript";
// require("ink-javascript/dist/ink-0.0.1.min.js");


// app-es
import Base from './app-es/class/Base';
import Child from './app-es/class/Child';
import * as utils from './app-es/utils/utils';


// import glsl from "glslify";
// const myFragShader = glsl(`
// void main () {
//   gl_FragColor = vec4(1.);
// }
// `);
// console.log(myFragShader);
// var shader = require("../shader/common/default.frag");
// console.log(shader);



/*==========================================================================
	init call
==========================================================================*/
$(function($){
	var base = new Base('Base');
	var child = new Child('Child', 999);

	utils.template();

	console.log(INK.queryHashMap());


	console.log('-----------');
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	base.setup();

	console.log('-----------');
	child.setup();
});
