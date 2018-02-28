const webpack = require("webpack");

// リリースモード判定フラグ
const IS_REL = !!(process.argv[2] && process.argv[2].indexOf("-rel") != -1);
console.log(`webpack: ${IS_REL}`);


/*--------------------------------------------------------------------------
  config
--------------------------------------------------------------------------*/
const JS = `${__dirname}/develop/assets/js/`;

module.exports = {
  entry: {
    libs: `${JS}libs/index.js`,
    app: `${JS}app-es/index.js`
  },

  output: {
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["env", {
                targets: { browsers: ["last 2 versions"] },
                modules: false
              }]
            ]
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-import-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glsl-strip-comments",
        exclude: /node_modules/
      }
    ]
  },

  // externals: [
  //   {
  //     jquery: "jQuery",
  //     $: "jQuery"
  //   }
  // ],

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { drop_console: IS_REL}
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
};
