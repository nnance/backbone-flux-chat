var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var devRoutes = require('./devRoutes');

var app = express();
var compiler = webpack(config);

// load socket.io and setup socket routes
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var router = require('socket.io-events')();
devRoutes.ioRoutes(io);
// io.use(router);

// setup webpack dev server components
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// setup serving of static resources
app.use('/design', express.static('design'));
app.use('/img', express.static('img'));

// load dev routes for dev end points
app.use(require('body-parser').json());
devRoutes.expressRoutes(app, io);

// if no other routes match serve index by default
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
