module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: ['test/*test.js'],
    preprocessors: {
      'test/*.js': ['webpack']
    },
    webpack: {},
    reporters: ['spec'],
    webpackMiddleware: {
      stats: 'errors-only'
    },
  });
};