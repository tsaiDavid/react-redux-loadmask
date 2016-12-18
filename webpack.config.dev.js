'use strict'

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV
var path = require('path')

var devConfig = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css-loader'
        ]
      }
    ]
  },
  entry: path.resolve(__dirname, './examples/index.js'),
  output: {
    library: 'ReactReduxLoadmask',
    libraryTarget: 'umd',
    output: {
      filename: 'bundle.js',
      publicPath: '/static/'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Loadmask Demo',
      template: path.resolve(__dirname, './examples/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3001
  }
}

module.exports = devConfig
