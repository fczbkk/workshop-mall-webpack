const path = require('path')
const autoprefixer = require('autoprefixer')

const styleLoaders = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: { plugins: [autoprefixer] }
  }
]

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
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loaders: [
          'file-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: styleLoaders
      },
      {
        test: /\.scss$/,
        loaders: [
          ...styleLoaders,
          'sass-loader'
        ]
      }
    ]
  }
}
