module.exports = {
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
  },
  build: {
    files: ['<%= path.source.js %>/**/*.js', '<%= path.source.sass %>/**/*.scss'],
    tasks: ['scsslint', 'compass:dev', 'uglify:dev', 'jshint']
  }
}
