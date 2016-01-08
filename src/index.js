// import globals
import 'babel-polyfill';
import './lib/backbonefetch';
// styles
import '../styles/index.scss';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import dispatcher from './dispatcher';
import Backbone from 'backbone';

import UserActions from './actions/user';
import sessionStore from './stores/session';
import roomStore from './stores/room';
import userStore from './stores/user';
import Router from './router';
import App from './components/app_container';
import Login from './components/login_container';

/*eslint-disable no-unused-vars*/
var router = new Router();
/*eslint-enable no-unused-vars*/

var dispatchHandler = function(action) {
  dispatcher.waitFor([userStore.dispatchToken]);
  if (action.type === UserActions.LOGIN_USER) {
    startApp();
  }
};

// prefetch data before starting the router.  this will also allow for
// signing on the user when needed
var startApp = function() {
  Promise
  .all([roomStore.fetch(), userStore.fetch()])
  .then(() => {
    Backbone.history.start({ pushState: true });
  });
};

dispatcher.register(dispatchHandler);
ReactDOM.render(<App/>, document.getElementById('root'));
if (!sessionStore.getSession().isLoggedIn) {
  ReactDOM.render(<Login/>, document.getElementById('body'));
} else {
  startApp();
}
