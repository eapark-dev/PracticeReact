const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { AutomaticPrefetchPlugin } = require('webpack');

module.exports = {
  name: 'number-baseball-dev',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {"chrome": "88"},
          }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    publicPath: '/dist',
    hot: true
  }
};