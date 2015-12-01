import Backbone from 'backbone';
import app from '../../actions/app';
import actions from '../../actions/user';
import Container from './container';
import { users } from '../../stores/user';


class UserController {
  constructor() {
    Backbone.on(actions.SHOW_USERS, this.showUsers, this);
  }

  showUsers() {
    Backbone.history.navigate('/user', {trigger: true});
  }

  showList() {
    app.showComponent(Container);
    users.fetch();
  }

}

module.exports = new UserController();
