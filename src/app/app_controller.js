/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import App from './container';
import actions from '../actions/app';


class AppController {
  constructor(router, session, rooms, users) {
    this.router = router;
    this.session = session;
    this.rooms = rooms;
    this.users = users;
    Backbone.on(actions.APP_SHOW_COMPONENT, this.showComponent, this);
  }

  remove() {
    Backbone.off(null, null, this);
  }

  showApp() {
    this.appComponent = ReactDOM.render(<App session={this.session}/>, document.getElementById('root'));
    // prefetch data before starting the router.  this will also allow for
    // signing on the user when needed
    Promise.all([this.rooms.fetch(), this.users.fetch()])
      .then(() => Backbone.history.start({ pushState: true }));
  }

}

export default AppController;
