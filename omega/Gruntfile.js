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

    scsslint: {
      allFiles: [
        '<%= path.source.sass %>**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      },
    },

    watch: {
      css: {
        files: '<%= path.source.sass %>**/*.scss',
        tasks: ['compass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('buildProd',['compass:prod']);
}