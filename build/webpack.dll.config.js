/**
 * webpack通过dll抽离模块打包
 * 将静态资源文件（运行依赖包）与源文件分开打包，先使用DllPlugin给静态资源打包，再使用DllReferencePlugin让源文件引用资源文件。
 * 并且根据配置动态输出chunk
 */
'use strict';
const ora = require('ora');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const dllConfig = require('../config/dll');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = require('../config/prod.env');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

let spinner = ora('building for production...').start();

const webpackConfig = {
  // 想要打包的模块的数组
  entry: dllConfig.entry,
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: path.join(__dirname, dllConfig.output), // 打包后文件输出的位置
    filename: '[name].[chunkhash].js',
    library: '[name]_library'
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.DllPlugin({
      // 输出依赖关系
      path: path.join(__dirname, dllConfig.output, '[name]_manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      parallel: true
    }),
    // 通过模版文件动态输出chunk并生成html文件
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../', config.dev.index),
      template: 'index.ejs',
      inject: false
    })
  ]
};

if (dllConfig.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

module.exports = webpackConfig;
