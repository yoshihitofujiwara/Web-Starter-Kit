/*--------------------------------------------------------------------------
	load modules
--------------------------------------------------------------------------*/
const $ = {
	browserSync: require("browser-sync"),
	gulp: require("gulp"),
	plugins: require("gulp-load-plugins")(),
	webpack: require("webpack"),
	webpackStream: require("webpack-stream"),
	webpackConfig: require("./webpack.config")
};


/*--------------------------------------------------------------------------
	config
--------------------------------------------------------------------------*/
// フォルダパス設定
const PATH = {
	src: "src/", // 開発コード
	htdocs: "htdocs/" // 公開コード
};

// 公開モードフラグ
const IS_PRODUCTION = !!(
	process.argv[2] && process.argv[2].indexOf("-pro") != -1
);


/*--------------------------------------------------------------------------
	watch
--------------------------------------------------------------------------*/
$.gulp.task("watch", () => {
	$.gulp.watch([PATH.src + "css/**/*.scss"], $.gulp.parallel("sass"));
	$.gulp.watch([PATH.src + "js/libs/**/*.js"], $.gulp.parallel("libs"));
	// $.gulp.watch([PATH.src + "js/scripts/**/*.js"], $.gulp.parallel("scripts"));

	$.gulp
		.watch([PATH.htdocs + "**/*.html", PATH.htdocs + "assets/css/**/*.css"])
		.on("change", () => {
			$.browserSync.reload();
		});
});


/*--------------------------------------------------------------------------
	browserSync
--------------------------------------------------------------------------*/
$.gulp.task("browserSync", () => {
	return $.browserSync.init({
		server: {
			baseDir: PATH.htdocs
		}
	});
});


/*--------------------------------------------------------------------------
	css
--------------------------------------------------------------------------*/
$.gulp.task("sass", (done) => {
	return $.gulp.src(PATH.src + "css/**/*.scss")
		.pipe($.plugins.sass({
			outputStyle: IS_PRODUCTION ? "compressed" : "expanded"
		}))
		.pipe($.plugins.plumber())
		.pipe($.plugins.cssnano({
			autoprefixer: {
				browsers: [
					"last 2 versions"
				],
				add: true
			}
		}))
		.pipe($.gulp.dest(PATH.htdocs + "assets/css/"));
});


/*--------------------------------------------------------------------------
	js
--------------------------------------------------------------------------*/
// scripts
$.gulp.task("scripts", () => {
	return $.gulp.src([PATH.src + "js/scripts/**/*.js"])
		.pipe($.plugins.plumber())
		.pipe($.webpackStream($.webpackConfig, $.webpack))
		.pipe($.gulp.dest(PATH.htdocs + "assets/js/"));
});

// libs
$.gulp.task("libs", () => {
	return $.gulp.src([PATH.src + "js/libs/**/*.js"])
		.pipe($.plugins.plumber())
		.pipe($.plugins.concat("libs.js"))
		.pipe($.gulp.dest(PATH.htdocs + "assets/js/"));
});


/*--------------------------------------------------------------------------
	default
--------------------------------------------------------------------------*/
$.gulp.task("default", $.gulp.parallel("browserSync", "watch"));
