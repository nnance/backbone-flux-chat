import Backbone from 'backbone';
import { users } from './user';

class ChatModel extends Backbone.Model {
  get date() {
    return this.get('date');
  }

  get text() {
    return this.get('text');
  }

  set text(value) {
    this.set('text', value);
  }

  get user() {
    return users.get(this.get('user'));
  }

  set user(id) {
    this.set('user', id);
  }
}

class ChatCollection extends Backbone.Collection {

  get model() {
    return ChatModel;
  }

  get url() {
    return '/api/chats';
  }

  filteredByName(filter) {
    if (filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.user.name.indexOf(filter) >= 0);
    }
  }

}

module.exports = {
  chats: new ChatCollection()
};
