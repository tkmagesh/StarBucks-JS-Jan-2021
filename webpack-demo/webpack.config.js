const path = require('path');
module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, './dist')
    },
    mode : 'none', // 'none' , 'development', 'production'
    module : {
        rules : [
            {
                test : /\.(png|jpg)$/,
                use : [ 'file-loader' ]
            },
            {
                test : /\.css$/,
                use : [  'style-loader', 'css-loader' ]
            }
        ]
    }
}