import Backbone from 'backbone';
import dispatcher from '../dispatcher';
import UserActions from '../actions/user';

class UserModel extends Backbone.Model {
  defaults() {
    return {
      online: false
    };
  }

  get name() {
    return this.get('name');
  }

  set name(value) {
    this.set('name', value);
  }

  get isOnline() {
    return this.get('online');
  }

  get imageURL() {
    return this.get('imageURL');
  }

  get color() {
    if (!this._color) {
      var colors = ['#d73d32', '#7e3794', '#4285f4', '#67ae3f', '#d61a7f', '#ff4080'];
      var index = Math.floor(Math.random()*colors.length);
      this._color = colors[ index ];
    }
    return this._color;
  }

  get title() {
    return this.get('title');
  }

  get company() {
    return this.get('company');
  }
}

class UserCollection extends Backbone.Collection {
  get model() {
    return UserModel;
  }

  get url() {
    return '/api/users';
  }

}

class UserStore {
  constructor() {
    this.dispatchToken = dispatcher.register(this.dispatchHandler.bind(this));
  }

  dispatchHandler(action) {
    switch(action.type) {
      case UserActions.SHOW_USERS:
        this.fetch();
        break;
      case UserActions.LOGIN_USER:
        this.login(action);
        break;

      default:
        // do nothing
    }
  }

  login(action) {
    this.getUsers().create({name: action.name}, {wait: true});
  }

  fetch() {
    return this.getUsers().fetch();
  }

  getUsers() {
    if (!this.users) {
      this.users = new UserCollection();
    }
    return this.users;
  }

  filteredByName(filter) {
    if (filter.length === 0) {
      return this.getUsers().models;
    } else {
      return this.getUsers().filter((item) => item.name.indexOf(filter) >= 0);
    }
  }

  clear() {
    this.users.off();
    this.users = null;
  }
}

module.exports = new UserStore();
