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
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@images': path.resolve(__dirname, './static/images'),
    },
    extensions: ['.js', '.ts', '.tsx', '.gif', '.jpg', '.png'],
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
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
}
