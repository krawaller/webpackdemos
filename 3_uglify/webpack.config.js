module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out/bundle.js'       
  },
  module: {
    loaders: [
      {
        loader: 'uglify',
        test: /\.js$/,
        exclude: /\.spec\.js|node_modules/,
      }
    ]
  },
  'uglify-loader': {
    mangle: true
  }
}