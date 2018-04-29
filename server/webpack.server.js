const path = require('path');//The path module provides utilities for working with file and directory paths. 

module.exports = { //inform webpack that we're building a bundle for nodeJs, rather than for the browser.
  target: 'node', //the root file of our server application
  entry: './src/index.js', //where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
    //resolve is part of nodeJS runtime, __dirname is the current directory
    //'build' is the folder we want to create to put our bundle.js file in, automatically created when webpack runs
  }, //chain object, don't forget the comma

  module: {
    rules: [
      {
        test: /\.js?$/, //run against every filename, only apply babel to javascript files
        loader: 'babel-loader', //when js is found run 'babel-loader'
        exclude: /node_modules/, //regex telling babel to skip the node_modules folder
        options: {
          presets: [
            'react', 
            'stage-0', //handle async code
            ['env', { targets: { browsers: ['last 2 versions'] }}] //use all the transform rules needed to run in the last 2 versions of all popular browsers, helps with transpile
          ]
        }
      }
    ]
  }//run babel on every file it runs through
};