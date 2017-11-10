module.exports = function (config) {
    'use strict';
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
          // karma watches the test entry points
          // (you don't need to specify the entry option)
          // webpack watches dependencies

          // webpack configuration
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

    });
};