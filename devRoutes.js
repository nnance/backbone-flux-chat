var rooms = require('./test/stores/data/room').rooms;
var users = require('./test/stores/data/user').users;

var routes = function(app) {
  app.get('/api/rooms', getRooms);
  app.post('/api/rooms', addRoom);
  app.get('/api/users', getUsers);
};

var getRooms = function(req, res, next) {
  res.send(rooms);
};

var addRoom = function(req, res, next) {
  var nextId = function() {
    var sorted = rooms.sort((a,b) => a.id - b.id);
    return sorted[sorted.length-1].id + 1;
  };

  var room = req.body;
  room.id = nextId();
  rooms.push(room);
  res.send(room);
}

var getUsers = function(req, res, next) {
  res.send(users);
};

module.exports = routes;
