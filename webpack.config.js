/*eslint-env es6, node*/
"use strict";
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    entry: ["./src/index.tsx","./src/styles/master.scss"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        hot:true,
        watchContentBase: true
    },
    resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".json"] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules:[
            {test:/\.tsx?$/, use:"ts-loader"},
            {test: /\.s?css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader?sourceMap", "sass-loader?sourceMap"]})},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ],
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      //{ test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
