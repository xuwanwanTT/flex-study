const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader"
        })
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {presets: "es2015"}
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}