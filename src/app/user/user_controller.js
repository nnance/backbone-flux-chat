import Backbone from 'backbone';
import app from '../../actions/app';
import actions from '../../actions/user';
import Container from './container';
import { users } from '../../stores/user';
import session from '../../stores/session';


class UserController {
  constructor() {
    Backbone.on(actions.SHOW_USERS, this.showUsers, this);
    Backbone.on(actions.FILTER_USERS, this.setFilter, this);
  }

  showUsers() {
    Backbone.history.navigate('/user', {trigger: true});
  }

  setFilter(msg) {
    session.userFilter = msg.filter;
  }

  showList() {
    app.showComponent(Container);
    users.fetch();
  }

}

module.exports = new UserController();
