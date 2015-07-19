'use strict';

var _                   = require('lodash'),
    webpack             = require('webpack'),
    ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    defaultConfig       = require('./../../frontend.config');

module.exports = _.merge(defaultConfig, {
  devtool: false,
  output: {
    filename: '[name]-[chunkhash].bundle.js',
    chunkFilename: '[id]-[chunkhash].bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"', '__DEV__': false }),
    new ChunkManifestPlugin({
      filename: 'webpack-common-manifest.json',
      manfiestVariable: 'webpackBundleManifest'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}, function(obj1, obj2) {
  return _.isArray(obj2) ? obj2.concat(obj1) : undefined;
});