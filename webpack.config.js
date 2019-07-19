const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool:'eval-source-map',
    entry: __dirname + '/index.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.js',
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                include:/hash/,
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'hash/hash.html',
            filename:'hash.html'
        }),
        new HtmlWebpackPlugin({
            template:'history/history.html',
            filename:'history.html'
        })
    ]
}