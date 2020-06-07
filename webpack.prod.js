const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: 'arrow-line.min.js'
    },
    mode: 'production'
});