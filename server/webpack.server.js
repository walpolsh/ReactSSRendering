const path = require('path');//The path module provides utilities for working with file and directory paths. 
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
 
const config = { //inform webpack that we're building a bundle for nodeJs, rather than for the browser.
  target: 'node', //the root file of our server application
  entry: './src/index.js', //where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
    //resolve is part of nodeJS runtime, __dirname is the current directory
    //'build' is the folder we want to create to put our bundle.js file in, automatically created when webpack runs
  }, //chain object, don't forget the comma

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config); 