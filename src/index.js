//////
//
// Main application that imports all core components, renders application shell
// and manages login and logout
//
//////

// import globals
import 'babel-polyfill';
import './lib/backbonefetch';
// styles
import '../styles/index.scss';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import Backbone from 'backbone';
import dispatcher from './dispatcher';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';

import App from './components/app_container';
import Login from './components/login_container';
import RoomActions from './actions/room';
import roomStore from './stores/room';
import Router from './router';
import sessionStore from './stores/session';
import UserActions from './actions/user';
import userStore from './stores/user';

/*eslint-disable no-unused-vars*/
var router = new Router();
/*eslint-enable no-unused-vars*/

// handle rendering for login and logout
var dispatchHandler = function(action) {
  switch (action.type) {
    case UserActions.LOGIN_USER:
      dispatcher.waitFor([userStore.dispatchToken]);
      startApp();
      break;
    case UserActions.LOGOUT_USER:
      dispatcher.waitFor([sessionStore.dispatchToken]);
      location.reload();
      break;
    default:
      // do nothing
  }
};

// start the app by initializing stores and setup listener for socket events
var startApp = function() {
  // prefetch data before starting the router.  this will also allow for
  // signing on the user when needed
  Promise
  .all([roomStore.fetch(), userStore.fetch()])
  .then(() => {
    var manager = io();
    manager.on('connect', () => UserActions.userConnected(manager.id));
    manager.on('chats:added', (msg) => RoomActions.receivedMessage(msg));
    manager.on('users:added', (user) => UserActions.userReceived(user));
    manager.on('users:updated', (user) => UserActions.userUpdated(user));

    Backbone.history.start({ pushState: true });
  });
};

// Render the application shell and body container and show login if user isn't
// stored in local storage
dispatcher.register(dispatchHandler);
ReactDOM.render(<App/>, document.getElementById('root'));
if (!sessionStore.getSession().isLoggedIn) {
  ReactDOM.render(<Login/>, document.getElementById('body'));
} else {
  startApp();
}
