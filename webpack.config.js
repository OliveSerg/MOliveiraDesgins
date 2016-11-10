var path = require('path');
var webpack = require('webpack');

module.exports ={
    context: path.join(__dirname, 'src'),
    entry: {
        javascript: './index.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/,
                loader: "file-loader"
            },
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}
