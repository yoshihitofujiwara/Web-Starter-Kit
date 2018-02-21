// npm moduleで配布されていないライブラリの場合は、requireでバンドル化
// jQueryはnpmではいふされているが、コード参考用
window.$ = window.jQuery = require("./jquery-3.1.0.min.js");
// window.$.easeing = require("./jquery.easing.1.3.min.js");

console.log(jQuery);
