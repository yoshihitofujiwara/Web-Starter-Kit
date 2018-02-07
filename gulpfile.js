/*--------------------------------------------------------------------------
	load modules
--------------------------------------------------------------------------*/
var $ = {
	fs         : require('fs'),
	browserify : require('browserify'),
	browserSync: require('browser-sync'),
	buffer     : require('vinyl-buffer'),
	source     : require('vinyl-source-stream'),
	gulp       : require('gulp'),
	plugins    : require('gulp-load-plugins')()
};


/*--------------------------------------------------------------------------
	config
--------------------------------------------------------------------------*/
// フォルダパス設定
var PATH = {
	develop: 'develop/', // 開発用ディレクトリ
	htdocs : 'htdocs/'   // 公開用ディレクトリ
};

// 対象外ファイル
var filterFiles = [
	'!' + PATH.develop + '**/*コピー*.*',
	'!' + PATH.develop + '**/_*.*'
];

// リリースモード判定フラグ
var isRelease = (function(){
	var _arg = process.argv.slice(1)[1];
	return _arg && _arg.indexOf('-rel') !== -1;
}());


/*--------------------------------------------------------------------------
	default
--------------------------------------------------------------------------*/
$.gulp.task('default', [
	'sass',
	'js',
	'browserSync',
	'watch'
]);


/*--------------------------------------------------------------------------
	watch
--------------------------------------------------------------------------*/
$.gulp.task('watch', function(){
	// browserSync
	$.gulp.watch([
		PATH.htdocs + '**/*.html',
		PATH.htdocs + 'assets/**/*.css'
	])
	.on('change', function(file){
		$.browserSync.reload();
	});

	// sass
	$.gulp.watch([PATH.develop + '**/*.scss'], ['sass']);

	// js
	$.gulp.watch([PATH.develop + 'assets/**/*.js'], ['js']);
});


/*--------------------------------------------------------------------------
	browserSync
--------------------------------------------------------------------------*/
$.gulp.task('browserSync', function(){
	$.browserSync.init({
		server: {
			baseDir: PATH.htdocs
		}
	});
});


/*--------------------------------------------------------------------------
	css
--------------------------------------------------------------------------*/
$.gulp.task('sass', function(){
	$.plugins.rubySass(PATH.develop + '**/*.scss', {
		style: isRelease ? 'compressed' : 'expanded'
	})
	.pipe($.plugins.plumber())
	.pipe($.plugins.pleeease({
		browsers  : ['last 2 version', 'Android 4.4'],
		minifier  : false,
		sourcemaps: false,
		mqpacker  : false
	}))
	.pipe($.gulp.dest(PATH.htdocs));
});


/*--------------------------------------------------------------------------
	js
--------------------------------------------------------------------------*/
$.gulp.task('js', function(){
	var dev = PATH.develop + 'assets/js/',
	dest = PATH.htdocs + 'assets/js/';

	// concat
	jsConcat([
		dev + 'libs/core/*.js',
		dev + 'libs/plugins/*.js'
	], dest, 'libs.js');

	// JS用: js compile
	// jsCompile([
	// 	dev + 'app/*.js',
	// 	dev + 'app/utils/*.js',
	// 	dev + 'app/class/*.js'
	// ], dest, 'app.js');

	// Babel用: es compile
	// esCompile(dev + 'app-es/index.js', dest, 'app.js');
});


// esCompile: Babel to ES -> min -> dest
function esCompile(src, dest, fileName){
	$.browserify(src)
	.transform('babelify', {presets: ['es2015']})
	.bundle()
	.on('error', function (err) { console.log('Error : ' + err.message); })
	.pipe($.source(fileName))
	.pipe($.buffer())
	.pipe($.plugins.plumber())
	.pipe($.plugins.if(isRelease, $.plugins.uglify()))
	.pipe($.gulp.dest(dest));
};

// jsConcat: concat -> dest
function jsConcat(src, dest, fileName){
	if(typeof src === 'string'){
		src = [src];
	}
	$.gulp.src(filterFiles.concat(src))
	.pipe($.plugins.plumber())
	.pipe($.plugins.concat(fileName))
	.pipe($.gulp.dest(dest));
};

// jsCompile: concat -> min -> dest
function jsCompile(src, dest, fileName){
	if(typeof src === 'string'){
		src = [src];
	}
	$.gulp.src(filterFiles.concat(src))
	.pipe($.plugins.plumber())
	.pipe($.plugins.jshint())
	.pipe($.plugins.jshint.reporter('jshint-stylish'))
	.pipe($.plugins.concat(fileName))
	.pipe($.plugins.if(isRelease, $.plugins.uglify()))
	.pipe($.gulp.dest(dest));
};