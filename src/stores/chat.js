import Backbone from 'backbone';

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
    return this.get('user');
  }

  set user(id) {
    this.set('user', id);
  }
}

export default class ChatCollection extends Backbone.Collection {

  get model() {
    return ChatModel;
  }

  get url() {
    return '/api/chats';
  }

  filteredByUser(filter) {
    if (!filter || filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.user === filter);
    }
  }

}
