module.exports = {

  options: {
    img: '<%= dest.images %>', // Path to put the image
    namespace: ' ', // Include a space to overide the default
    scss: true,
    scssTemplate: '<%= source.sass %>template.scss',
    spriteNamespace: ' ', // Include a space to overide the default
    retina: true
  },
  icons: {
    options: {
      retina: false
    },
    files: {
      // Path to put the scss file : path of source images
      '<%= source.sass %>': '<%= source.images %>icons' // Custom source path
    }
  },
  flags: {
    files: {
      // Path to put the scss file : path of source images
      '<%= source.sass %>': '<%= source.images %>flags' // Custom source path
    }
  }
}
