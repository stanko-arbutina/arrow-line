const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        watchContentBase: true
    },
    output: {
        filename: 'arrow-line.js'
    }
});