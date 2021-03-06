const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: MiniCssExtractPlugin } = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, './src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    static: [PUBLIC_PATH],
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://moma-v1.herokuapp.com',
      },
    },
  },
  entry: {
    style: path.resolve(SRC_PATH, './index.css'),
    main: path.resolve(SRC_PATH, './index.tsx'),
  },
  output: {
    path: DIST_PATH,
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@apis': path.resolve(SRC_PATH, './apis'),
      '@components': path.resolve(SRC_PATH, './components'),
      '@containers': path.resolve(SRC_PATH, './containers'),
      '@pages': path.resolve(SRC_PATH, './pages'),
      '@hooks': path.resolve(SRC_PATH, './hooks'),
      '@styles': path.resolve(SRC_PATH, './styles'),
      '@utils': path.resolve(SRC_PATH, './utils'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new RemoveEmptyScriptsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, './index.html'),
      publicPath: '/',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: ['web', 'es5'],
};
