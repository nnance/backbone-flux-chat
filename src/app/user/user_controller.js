/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import actions from '../../actions/user';
import Container from './container';


export default class UserController {
  constructor(session, users) {
    this.session = session;
    this.users = users;

    Backbone.on(actions.SHOW_USERS, this.showUsers, this);
    Backbone.on(actions.FILTER_USERS, this.setFilter, this);
  }

  showUsers() {
    Backbone.history.navigate('/user', {trigger: true});
  }

  setFilter(msg) {
    this.session.userFilter = msg.filter;
  }

  showList() {
    ReactDOM.render(<Container session={this.session} users={this.users}/>, document.getElementById('body'));
    this.users.fetch();
  }

}
