var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var DEV = (process.env.NODE_ENV == 'development');
var PROD = (process.env.NODE_ENV == 'production');

module.exports = {
  devtool: DEV ? '#inline-source-map' : '',
  debug: true,
  entry: [
    path.join(__dirname, '../app/index.js'),
    path.join(__dirname, '../styles/index.scss')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  devServer: {
    quiet: false,
    noInfo: DEV,
    stats: {
      colors: true
    }
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
