const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'first': path.resolve(__dirname, 'src/index.js'),
    'second': path.resolve(__dirname, 'src/index2.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
