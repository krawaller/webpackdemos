module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out/bundle.js'       
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js/,
        query: {
          presets: ['es2015','stage-0']
        }
      }
    ]
  }
}