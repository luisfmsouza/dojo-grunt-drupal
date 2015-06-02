'use strict';

module.exports = function(grunt) {

  // Load time plugin
  require('time-grunt')(grunt);

  // -- Fist example
  // require('load-grunt-tasks')(grunt);

  // -- Second example
  // Load all taks faster
  // require('jit-grunt')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    path : {
      source : {
        sass : "sass",
        js : "js_source"
      },
      dest : {
        sass : "css",
        js : "js"
      }
    },

    compass: {
      options: {
        outputStyle: 'expanded'
      },
      dev: {
        options: {
          environment: 'development',
          noLineComments: true,
          outputStyle:"expanded",
          sassDir: '<%= path.source.sass %>',
          cssDir: '<%= path.dest.sass %>'
        }
      },
      prod: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          sassDir: '<%= path.source.sass %>',
          cssDir: '<%= path.dest.sass %>'
        }
      }
    },

    clean: ["css/*"],

    scsslint: {
      allFiles: [
        '<%= path.source.sass %>/**/*.scss',
      ],
      options: {
        bundleExec: false,
        config: '.scss-lint.yml',
        colouriseOutput: true,
        colorizeOutput: true,
        compact: false,
        force: true,
        maxBuffer: 1000 * 1024
      },
    },
    
    spglue: {
      dev: {
        options: {
            project: true,
            scss: true,
            img: 'images/generated'
        },
        files: {
            'sass/abstractions': 'images/sprites'
        }
      }
    },

    stripCssComments: {
      dist: {
        files: {
          'css/tedx.hacks.css': 'css/tedx.hacks.css',
          'css/tedx.no-query.css': 'css/tedx.no-query.css',
          'css/tedx.normalize.css': 'css/tedx.normalize.css',
          'css/tedx.styles.css': 'css/tedx.styles.css'
        }
      }
    },

    // Task: Ugligy
    // ---------------------------------
    uglify: {
      dev: {  
        options: {
          mangle: false, 
          beautify: true, 
          compress : false,
          sourceMap: false // Fix the error when set to true
        }, 
        files: {
          '<%= path.dest.js %>/generated.min.js': ['<%= path.source.js %>/*.js']
        }
      },

      prod: { 
        options: {
          mangle: true,
          compress : true,
          sourceMap: false
        }, 
        files: {
          '<%= path.dest.js %>/generated.min.js': ['<%= path.source.js %>/*.js']
        }
      }
    },

    jshint: {
      /*options: {
        jshintrc: '.jshintrc'
      },*/
      all: ['<%= path.source.js %>/*.js']
    },

    watch: {
      css: {
        files: '<%= path.source.sass %>/**/*.scss',
        tasks: ['compass:dev']
      },
      css_lint: {
        files: '<%= path.source.sass %>/**/*.scss',
        tasks: [ 'scsslint', 'compass:dev']
      },
      js: {
        files: '<%= path.source.js %>/**/*.js',
        tasks: [ 'uglify:dev', 'jshint']
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-strip-css-comments');
  // grunt.loadNpmTasks('grunt-scss-lint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-sprite-glue');
  // grunt.loadNpmTasks('grunt-csscomb');
  // grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Watch css and lint
  grunt.registerTask('watch_css', ['watch:css_lint']);

  // Watch js and lint
  grunt.registerTask('watch_js', ['watch:js']);

  grunt.registerTask('css_dev', ['compass:dev']);
  grunt.registerTask('css_prod', ['compass:prod']);
  grunt.registerTask('default', ['stripCssComments']);
  //grunt.registerTask('default', ['spglue:dev']);

}
