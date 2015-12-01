var rooms = require('./test/stores/data/room').rooms;

var routes = function(app) {
  // Account
  app.get('/api/rooms', getRooms);
  app.post('/api/rooms', addRoom);
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

rooms.forEach((room,index) => room.id = index+1);
module.exports = routes;
