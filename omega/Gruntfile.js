'use strict';

module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    config: {
      'source': {
        'images': 'images/',
        'sass': 'sass/'
      },
      'dest': {
        'images': 'images/generated/'
      }
    }
  });

};
