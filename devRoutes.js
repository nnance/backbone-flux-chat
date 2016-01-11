var rooms = require('./test/stores/data/room').rooms;
var users = require('./test/stores/data/user').users;
var chats = require('./test/stores/data/chat').chats;

var expressRoutes = function(app, io) {
  app.get('/api/rooms', (req, res) => res.send(rooms));
  app.get('/api/users', (req, res) => res.send(users));
  app.get('/api/chats', (req, res) => res.send(chats.filter((chat) => chat.room == req.query.room)));
  app.post('/api/rooms', addRoom);
  app.post('/api/users', addUser.bind(io));
  app.post('/api/chats', addChat.bind(io));
  app.put('/api/users/:id', updateUser.bind(io));
};

var ioRoutes = function(io) {
  io.on('connection', (socket, args) => {
    socket.on('disconnect', (socket, args) => setUser(findUser('socketId', socket.id), {online: false}, io));
    socket.on('user:connecttion', (id, user) => user.socket = socket);
    console.log('user connected with id: ' + socket.id);
  });
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
};

var addUser = function(req, res, next) {
  var user = req.body;
  existing = findUser('name', user.name);
  if (existing) {
    setUser(user, {online: true}, this);
  } else {
    user.id = nextId(users);
    user.online = true;
    users.push(user);
    this.emit('users:added', user);
  }
  res.send(user);
};

var findUser = function(property, value) {
  var existing = users.filter((u) => u[property] === value);
  return (existing.length > 0) ? existing[0] : null;
}

var updateUser = function(req, res, next) {
  var user = req.body;
  console.dir(user);
  var existing = findUser('name', user.name);
  if (existing) {
    // setUser(existing, user, this);
  }
  res.send(user);
}

var setUser = function(user, props, io) {
  user = Object.assign(user, props);
  io.emit('users:change', user);
  return user;
}

var addChat = function(req, res, next) {
  var chat = req.body;
  chat.id = nextId(chats);
  chats.push(chat);
  res.send(chat);
  this.emit('chats:added', chat);
}

module.exports = {
  expressRoutes: expressRoutes,
  ioRoutes: ioRoutes
};
