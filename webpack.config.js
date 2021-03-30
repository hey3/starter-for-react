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
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    // hot: true,
    // hotOnly: true,
    open: true,
  },
  devtool: env === 'production' ? false : 'inline-source-map',
  entry: {
    main: {
      import: ['./src/main.tsx'],
    },
  },
  experiments: {},
  // FIXME: assetModulesを使うように修正
  // experiments: {
  //   asset: true,
  // },
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
        loader: 'file-loader',
      },
      // FIXME: assetModulesを使うように修正
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   type: 'asset',
      // },
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
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@images': path.resolve(__dirname, './static/images'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  resolveLoader: {},
  snapshot: {},
  stats: {},
  target: 'web',
  watchOptions: {},
}
