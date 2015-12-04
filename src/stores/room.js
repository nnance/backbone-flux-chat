import Backbone from 'backbone';


class RoomModel extends Backbone.Model {
  get title() {
    return this.get('title');
  }
}

export default class RoomCollection extends Backbone.Collection {

  get model() {
    return RoomModel;
  }

  get url() {
    return '/api/rooms';
  }

  filteredByTitle(filter) {
    if (filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.title.indexOf(filter) >= 0);
    }
  }

  getById(id) {
    return this.fetch().then(() => this.get(id));
  }
}
