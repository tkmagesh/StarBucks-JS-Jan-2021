const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.[contenthash].js',
        path : path.resolve(__dirname, './dist')
    },
    mode : 'development', // 'none' , 'development', 'production'
    module : {
        rules : [
            {
                test : /\.(png|jpg)$/,
                use : [ 'file-loader' ]
            },
            {
                test : /\.css$/,
                use : [  'style-loader', 'css-loader' ]
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
        new CleanWebpackPlugin()
    ]
}