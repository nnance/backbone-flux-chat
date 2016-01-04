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
import Session from './stores/session';
import Router from './router';
import App from './components/app_container';

var session = new Session();
var rooms = new Rooms();
var users = new Users();
var chats = new Chats(session, rooms);

var router = new Router(session, rooms, users, chats);

(function(){
  ReactDOM.render(<App session={session}/>, document.getElementById('root'));
  // prefetch data before starting the router.  this will also allow for
  // signing on the user when needed
  Promise.all([rooms.fetch(), users.fetch()])
    .then(() => {
      Backbone.history.start({ pushState: true })
      var socket = io();
      socket.on('connect', () => console.log('connected'));
    });
})();
