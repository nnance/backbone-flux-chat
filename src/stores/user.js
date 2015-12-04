import Backbone from 'backbone';


class UserModel extends Backbone.Model {
  get name() {
    return this.get('name');
  }

  get isOnline() {
    return this.get('online');
  }

  get imageURL() {
    return this.get('imageURL');
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
