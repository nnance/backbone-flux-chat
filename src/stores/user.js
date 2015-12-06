import Backbone from 'backbone';


class UserModel extends Backbone.Model {
  defaults() {
    return {
      online: false
    }
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

export default class UserCollection extends Backbone.Collection {

  get model() {
    return UserModel;
  }

  get url() {
    return '/api/users';
  }

  filteredByName(filter) {
    if (filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.name.indexOf(filter) >= 0);
    }
  }
}
