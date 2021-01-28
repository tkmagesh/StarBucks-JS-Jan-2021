const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.[contenthash].js',
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
            filename : 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            title : 'A new App',
            templateContent : `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body>
                    <div id="root"></div>
                </body>
                </html>
            `
        })
    ]
}