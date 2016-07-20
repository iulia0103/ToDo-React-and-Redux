var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/todoapp'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style!css!less' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style!css' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
    ]
  }
};
