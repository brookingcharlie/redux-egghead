// Need Sinon 2 to avoid this issue: https://github.com/sinonjs/sinon/issues/830
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-webpack'
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'intro/test/**/*.spec.js',
      'counter/test/**/*.spec.js',
      'todo/test/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'intro/src/**/*.js': ['webpack'],
      'intro/test/**/*.spec.js': ['webpack'],
      'counter/src/**/*.js': ['webpack'],
      'counter/test/**/*.spec.js': ['webpack'],
      'todo/src/**/*.js': ['webpack'],
      'todo/test/**/*.spec.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
	    test: /\.js$/,
	    exclude: /node_modules/,
	    loaders: ['babel']
	  },
          // Needed due to errors, e.g. Module parse failed: .../*.json Unexpected token (1:4)
          // Discussion on this issue: https://github.com/webpack/webpack/issues/965
          {
            test: /\.json$/,
            loader: "json-loader"
          }
	]
      },
      // Needed based on this issue: https://github.com/airbnb/enzyme/issues/47
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
