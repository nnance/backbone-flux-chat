// import globals
import 'babel-polyfill';
import './lib/backbonefetch';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import io from 'socket.io-client';

// styles
import '../styles/index.scss';

import Rooms from './stores/room';
import Users from './stores/user';
import Chats from './stores/chat';
import Router from './router';
import App from './components/app_container';

var rooms = new Rooms();
var users = new Users();
var chats = new Chats(rooms);

var router = new Router(rooms, users, chats);

ReactDOM.render(<App/>, document.getElementById('root'));
// prefetch data before starting the router.  this will also allow for
// signing on the user when needed
Promise
  .all([rooms.fetch(), users.fetch()])
  .then(() => {
    Backbone.history.start({ pushState: true })
    var socket = io();
    socket.on('connect', () => console.log('connected'));
  });
