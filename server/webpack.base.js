module.exports = {
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
}