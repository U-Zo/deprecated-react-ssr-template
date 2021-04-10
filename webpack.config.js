const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appIndex = path.resolve(__dirname, 'src', 'index.tsx');
const appHtml = path.resolve(__dirname, 'public', 'index.html');
const appPath = path.resolve(__dirname, '/');
const appBuild = path.resolve(__dirname, 'build');

module.exports = (webpackEvn) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const isEnvProduction = process.env.NODE_ENV === 'production';

  return {
    mode: 'development',
    entry: appIndex,
    output: {
      path: appBuild,
      filename: 'static/js/bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)?$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: appHtml,
      }),
    ],
    devServer: {
      historyApiFallback: true,
      inline: true,
      port: 3000,
      hot: true,
      publicPath: appPath,
    },
  };
};
