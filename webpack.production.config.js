var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, // Only .css files
        exclude: /node_modules/,
        loader: 'style!css' // Run both loaders
      }
    ]
  }
};

module.exports = config;
