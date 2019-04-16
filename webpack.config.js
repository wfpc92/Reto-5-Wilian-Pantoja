const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  mode: "development",
  entry: {
    index: path.join(__dirname, "src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "./[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Factura',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html'
    },
    hot: true,
    index: 'index.html'
  }
}

module.exports = config;