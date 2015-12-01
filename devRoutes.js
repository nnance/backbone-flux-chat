var rooms = require('./test/stores/data/room').rooms;
var users = require('./test/stores/data/user').users;
var chats = require('./test/stores/data/chat').chats;

var routes = function(app) {
  app.get('/api/rooms', (req, res, next) => res.send(rooms));
  app.get('/api/users', (req, res, next) => res.send(users));
  app.get('/api/chats', (req, res, next) => res.send(chats));
  app.post('/api/rooms', addRoom);
};

var nextId = function(models) {
  var sorted = models.sort((a,b) => a.id - b.id);
  return sorted[sorted.length-1].id + 1;
};

var addRoom = function(req, res, next) {
  var room = req.body;
  room.id = nextId(rooms);
  rooms.push(room);
  res.send(room);
}

module.exports = routes;
