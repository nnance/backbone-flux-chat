/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import App from './container';
import actions from '../actions/app';
import {rooms} from '../stores/room';
import {users} from '../stores/user';


class AppController {
  constructor() {
    Backbone.on(actions.APP_SHOW_COMPONENT, this.showComponent, this);
  }

  remove() {
    Backbone.off(null, null, this);
  }

  showApp() {
    this.appComponent = ReactDOM.render(<App />, document.getElementById('root'));
    // prefetch data before starting the router.  this will also allow for
    // signing on the user when needed
    Promise.all([rooms.fetch(), users.fetch()])
      .then(() => Backbone.history.start({ pushState: true }));
  }

  showComponent(component) {
    this.appComponent.setState({visibleComponent: component});
  }

}

module.exports = new AppController();
