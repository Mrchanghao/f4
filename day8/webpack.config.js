const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [/*{
      loader: 'eslint-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre'
    }, */{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};