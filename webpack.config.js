const path = require('path');
const HTMLwebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLwebpackplugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        secure: false,
      },
    },
  },
};
