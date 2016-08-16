var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    counter: ['babel-polyfill', './src/main-counter.js'],
    todo: ['babel-polyfill', './src/main-todo.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
