const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    // TODO: `chunkhash` instead of `hash` for non-HMR build
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'app',
      template: './src/template/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'eslint-loader',

        options: {
          cache: true, // ./node_modules/.cache
        },
      },
      {
        test: /.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',

        options: {
          plugins: [
            'syntax-dynamic-import',
          ],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              }
            ],
            [
              '@babel/preset-react',
            ],
          ],
        },
      },
    ],
  },

  resolve: {
    extensions: [
      // Using this overrides the default extensions!

      // Defaults:
      // '.wasm',
      // '.mjs',
      '.js',
      // '.json',

      // React:
      '.jsx',
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },

  devServer: {
    open: true,
    // TODO: check if mode is development
    hot: true,
  },
};
