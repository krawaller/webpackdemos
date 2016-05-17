module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out/bundle.js'       
  },
  module: {
    loaders: [
      {
        loader: 'eslint',
        test: /\.js$/,
        exclude: /\.spec\.js|node_modules/
      }
    ]
  },
  'eslint': {
    failOnWarning: true,
    configFile: './.eslintrc'
  }
}