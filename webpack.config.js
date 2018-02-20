var path = require("path");
var NODE_ENV = process.env.NODE_ENV ? "development" : "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractSass = new ExtractTextPlugin({
    filename: "[name].styles.css",
    disable: NODE_ENV === "development"
});
var HTMLWebpackPlugin = require("html-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, "./src/app.js")
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {test: /\.hbs$/, use: "html-loader"},
            {
                test: /\.scss$/, use: extractSass.extract({
                use: [
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ],
                fallback: "style-loader"
            })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader',
                options: {name: '[path][name].[ext]'}
            }
        ]
    },

    plugins: [
        extractSass,
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new UglifyJsPlugin()
    ]
};

