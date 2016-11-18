var path = require('path');
var webpack = require('webpack');

module.exports ={
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
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
                loader: "style!css"
            },
            {
                test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/,
                loader: "file-loader"
            },
        ]
    },
    plugins: [ 
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
            ],
    resolve: {
        root: [path.resolve('./src/')],
        extensions: ['', '.js', '.css']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallBack: true
    }
}
