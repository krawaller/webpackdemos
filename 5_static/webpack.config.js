module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out/bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.png$/,
        loader: 'url?limit=16000'
      }
    ]
  }
}