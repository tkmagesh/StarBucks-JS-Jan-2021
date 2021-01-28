const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, './dist')
    },
    mode : 'production', // 'none' , 'development', 'production'
    module : {
        rules : [
            {
                test : /\.(png|jpg)$/,
                use : [ 'file-loader' ]
            },
            {
                test : /\.css$/,
                use : [  MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test : /\.(js|jsx)$/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets  : [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                }
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'style.css'
        }),
        new CleanWebpackPlugin()
    ]
}