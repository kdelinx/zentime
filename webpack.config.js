const
  webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src', 'index.html')}),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};