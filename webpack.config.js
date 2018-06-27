const path=require('path');

module.exports={
    mode: 'production',
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                loaders: "babel-loader",
                test: /\.js?$/
            }
        ]
    },

    devServer:{
        port: 3000,
        contentBase: './src',
        historyApiFallback: true,
        inline: true
    },

    performance: {
        hints: false
    }
}