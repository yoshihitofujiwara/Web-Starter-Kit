// const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

// リリースモード判定フラグ
const IS_PRODUCTION = !!(process.argv[2] && process.argv[2].indexOf("-pro") != -1);

const MODE = IS_PRODUCTION ? "production" : "development";
console.log(`webpack mode: ${MODE}`);

// js file path
const JS = `${__dirname}/src/js/`;


/*--------------------------------------------------------------------------
  module
--------------------------------------------------------------------------*/
module.exports = {
	watch: true,
	mode: MODE,

	entry: {
		scripts: `${JS}/scripts/index.js`
	},

	output: {
		filename: "[name].js"
	},

	module: {
		rules: [
			// js
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							// {
							// 	targets: "last 2 versions, ie >= 11, Android >= 4.4"
							// }
						]
					}
				}],
				exclude: /node_modules/,
			},

			// shader
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glslify-import-loader",
				// exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "raw-loader",
				// exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glslify-loader",
				// exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glsl-strip-comments",
				// exclude: /node_modules/
			}
		]
	},


	optimization: {
		minimizer: IS_PRODUCTION ? [
			new UglifyJSPlugin({
				uglifyOptions: {
					output: {
						comments: /^\**!|@preserve|@license|@cc_on/
					},
					compress: {
						drop_console: true
					}
				}
			})
		] : []
	}
};
