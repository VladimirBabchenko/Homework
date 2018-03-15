var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractSass = new ExtractTextPlugin({
  filename: "[name].styles.css",
  disable: process.env.NODE_ENV === "development"
});
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var config = require("./main");

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor"
  }),
  new HTMLWebpackPlugin({
    template: "src/index.html"
  }),
  extractSass,
  // new UglifyJsPlugin({
  //     sourceMap: true,
<<<<<<< HEAD
  //     exclude: process.env.NODE_ENV === "development" ? "/../src/app.js": false
=======
  //     exclude: process.env.NODE_ENV === "development" ? false: "/../src/app.js"
>>>>>>> 268f9b87abe8246c5517d47b129c1b3ef7175300
  // })
];
