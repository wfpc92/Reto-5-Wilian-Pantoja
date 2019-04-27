const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
      test: /\.vue$/,
      loader: 'vue-loader'
    }, 
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue'
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
  /*
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
    hot: true
  }*/
}

module.exports = config;