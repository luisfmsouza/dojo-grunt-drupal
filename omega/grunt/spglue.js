module.exports = {

  options: {
    img: '<%= dest.images %>', // Path to put the image
    scss: true
  },
  dev: {
    files: {
      // Path to put the scss file : path of source images
      '<%= source.sass %>': '<%= source.images %>'
    }
  }
}
