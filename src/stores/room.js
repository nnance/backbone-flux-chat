import Backbone from 'backbone';
import dispatcher from '../dispatcher';
import RoomActions from '../actions/room';

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
    return '/api/rooms';
  }

  createRoom(attributes) {
    this.create(attributes);
  }

  getById(id) {
    return this.fetch().then(() => this.get(id));
  }
}

class RoomStore {
  constructor() {
    this.dispatchToken = dispatcher.register(this.dispatchHandler.bind(this));
  }

  dispatchHandler(action) {
    switch(action.type) {
      case RoomActions.ROOM_ADD:
        this.getRooms().createRoom(action.attributes);
        break;

      default:
        // do nothing
    }
  }

  filteredByTitle(filter) {
    if (filter.length === 0) {
      return this.getRooms().models;
    } else {
      return this.getRooms().filter((item) => item.title.indexOf(filter) >= 0);
    }
  }

  fetch() {
    return this.getRooms().fetch();
  }

  getRooms() {
    if (!this.rooms) {
      this.rooms = new RoomCollection();
    }
    return this.rooms;
  }

  clear() {
    this.rooms.off();
    this.rooms = null;
  }
}

module.exports = new RoomStore();
