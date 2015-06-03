module.exports = {
    options: {
      outputStyle: 'expanded'
    },
    dev: {
      options: {
        environment: 'development',
        noLineComments: true,
        outputStyle:"expanded",
        sassDir: '<%= source.sass %>',
        cssDir: 'css'
      }
    }
}
