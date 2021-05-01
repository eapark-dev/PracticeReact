const path = require('path');
process.env.NODE_EVN  = "production" ; //production 모드
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { AutomaticPrefetchPlugin } = require('webpack');

module.exports = {
  name: 'randomLotto-Check-dev',
  mode: 'production',
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
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};