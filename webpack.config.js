const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.BUILD_MODE || 'development'
const env = process.env.REACT_APP_ENV || 'local'

module.exports = {
  mode,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
  devtool: env === 'production' ? false : 'inline-source-map',
  entry: {
    main: {
      import: ['./src/main.tsx'],
    },
  },
  experiments: {},
  externals: {},
  externalsPresets: {},
  infrastructureLogging: {},
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
      },
    ],
  },
  node: {},
  optimization: {},
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js',
    assetModuleFilename: 'images/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new Dotenv({
      path: `./src/envs/.env.${env}`,
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  resolveLoader: {},
  snapshot: {},
  stats: {},
  target: ['web', 'es5'],
  watchOptions: {},
}
