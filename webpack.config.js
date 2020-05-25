const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const env = process.env.BUILD_MODE

const defineEnv = new webpack.DefinePlugin({
  'process.env': {
    REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV),
  },
})

module.exports = {
  mode: env || 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@images': path.resolve(__dirname, './static/images'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    defineEnv,
    new Dotenv({
      path: `./src/envs/.env.${process.env.REACT_APP_ENV}`,
    }),
  ],
  devtool: env === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
}
