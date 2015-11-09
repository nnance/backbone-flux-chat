var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.IgnorePlugin(/^jquery$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /backbone\.js$/, loader: 'imports?define=>false'},
      {test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass']},
      {test: /\.js|x$/, loader: 'babel', include: path.join(__dirname, 'src')},
      {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
      {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
      {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json'] 
  }
};
