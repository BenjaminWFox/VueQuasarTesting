var path = require('path')

module.exports = function (config) {
  'use strict'

  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'src/**/*.test.js',
      'test/**/*.test.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.test.js': ['webpack'],
      'test/**/*.test.js': ['webpack']
    },

    webpack: {
      module: {
        // module.rules is the same as module.loaders in 1.x
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [path.resolve(__dirname, './node_modules')],
        alias: {
          quasar: 'quasar-framework/dist/quasar.esm.js'
        }
      },
      resolveLoader: {
        modules: [path.join(__dirname, './node_modules')]
      }
    },

    reporters: ['mocha'],

    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  })
}
