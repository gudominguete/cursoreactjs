var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var Webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
    	javascript: "./app.js",
    	html: "./index.html"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "app.js"
    },    
    resolve: {
        alias: {
            "aula01": __dirname,
            "jquery.ui.widget": "./vendor/jquery.ui.widget.js"
        }
    },
    plugins: [
              new Webpack.ProvidePlugin({
                  $: "jquery",
                  jQuery: "jquery"
              })
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: "babel-loader",
            query: {
                presets: ['es2015','react']
            }
        },{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },{
        	test: /\.css$/,
        	loader: "style-loader!css-loader"
        },{
        	test: /\.html$/,
        	loader: "file?name=[name].[ext]"
        },{
        	test: /\.(woff|woff2)$/,
        	loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },{
        	test: /\.ttf$/,
        	loader: "file-loader"
        },{
        	test: /\.eot$/,
        	loader: "file-loader"
        },{
        	test: /\.svg$/,
        	loader: "file-loader"
        }]
    }
}