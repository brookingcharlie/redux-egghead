var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    counter: ['babel-polyfill', './counter/src/main.js'],
    todo: ['babel-polyfill', './todo/src/main.js']
  },
  output: {
    path: path.join(__dirname),
    filename: '[name]/build/main.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'counter/src'),
        path.join(__dirname, 'todo/src')
      ]
    }]
  }
};
