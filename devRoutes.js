var rooms = require('./test/stores/data/room').rooms;

var routes = function(app) {
  // Account
  app.get('/api/rooms', getRooms);
};

var getRooms = function(req, res, next) {
  res.send(rooms);
};

module.exports = routes;
