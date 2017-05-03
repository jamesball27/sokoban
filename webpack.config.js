var path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/sokoban.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '*']
  },
};
