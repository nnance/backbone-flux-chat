// import globals
import 'babel-polyfill';
import './lib/backbonefetch';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

// styles
import '../styles/index.scss';

import roomStore from './stores/room';
import userStore from './stores/user';
import Router from './router';
import App from './components/app_container';

/*eslint-disable no-unused-vars*/
var router = new Router();
/*eslint-enable no-unused-vars*/

ReactDOM.render(<App/>, document.getElementById('root'));
// prefetch data before starting the router.  this will also allow for
// signing on the user when needed
Promise
  .all([roomStore.fetch(), userStore.fetch()])
  .then(() => {
    Backbone.history.start({ pushState: true });
  });
