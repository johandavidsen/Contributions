var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    contributions: './src/Contributions.js',
    contributionsChart: './src/ContributionsChart.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    react: 'react',
    ReactDOM: 'react-dom'
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
