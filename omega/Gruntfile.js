'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    path : {
      source : {
        sass : "sass"
      },
      dest : {
        sass : "css"
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
        config: 'node_modules/grunt-scss-lint/.scss-lint.yml',
        colouriseOutput: true,
        colorizeOutput: true,
        compact: false,
        force: true,
        maxBuffer: 300 * 1024,
        reporterOutput: 'node_modules/grunt-scss-lint/scss-lint-report.xml'
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

    watch: {
      css: {
        files: '<%= path.source.sass %>/**/*.scss',
        tasks: ['compass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-strip-css-comments');
  grunt.loadNpmTasks('grunt-scss-lint');
  //grunt.loadNpmTasks('grunt-sprite-glue');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('buildProd',['compass:prod']);
  grunt.registerTask('default', ['stripCssComments']);
  grunt.registerTask('default', ['scsslint']);
  //grunt.registerTask('default', ['spglue:dev']);

}
