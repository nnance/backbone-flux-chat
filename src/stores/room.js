import Backbone from 'backbone';

class SessionModel extends Backbone.Model {
  get roomFilter() {
    return this.get('roomFilter') || '';
  }

  set roomFilter(value) {
    this.set('roomFilter', value);
  }

  get activeRoom() {
    return this.get('activeRoom');
  }

  set activeRoom(room) {
    this.set('activeRoom', room);
  }
}

class RoomModel extends Backbone.Model {
  get title() {
    return this.get('title');
  }
}

class RoomCollection extends Backbone.Collection {

  get model() {
    return RoomModel;
  }

  get url() {
    return 'api/rooms';
  }

  filteredByTitle(filter) {
    if (filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.title.indexOf(filter) >= 0);
    }
  }
}

module.exports = {
  session: new SessionModel(),
  rooms: new RoomCollection()
};
