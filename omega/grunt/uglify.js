//Task: ugligy
module.exports = {
  uglify: {
    dev: {
      options: {
        mangle: false,
        beautify: true,
        compress: false,
        sourceMap: false
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
  }
}
