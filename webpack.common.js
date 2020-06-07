const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'arrowLine',
    libraryTarget: 'umd'
  },
  plugins: [new ESLintPlugin({
    context: './src/'
  })],
  resolve: {
    alias: {
      lodash: path.resolve(__dirname, 'src/lib/vendor/lodash')
    }
  }
};
