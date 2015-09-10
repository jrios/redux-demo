'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  contentBase: 'src',
  historyApiFallback: false
}).listen(8000, 'localhost', function serverStart (err) {
  if(err) {
    console.log(err);
  }

  console.log('Listening at localhost:8000');
});