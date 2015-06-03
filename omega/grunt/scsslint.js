module.exports = {
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
  }
}
