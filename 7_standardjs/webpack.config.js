module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out/bundle.js'       
  },
  module: {
    preLoaders: [
      {
        loader: 'standard',
        test: /\.js$/,
        exclude: /\.spec\.js|node_modules/
      }
    ]
  }
}