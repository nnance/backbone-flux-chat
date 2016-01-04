import Backbone from 'backbone';
import { BaseCollection } from './base';
import RoomActions from '../actions/room';

class RoomModel extends Backbone.Model {
  get title() {
    return this.get('title');
  }
}

export default class RoomCollection extends BaseCollection {
  initialize() {
    this.actionHandlers = [
      {type: RoomActions.ROOM_ADD, handler: this.createRoom}
    ];
    super.initialize();
  }

  get model() {
    return RoomModel;
  }

  get url() {
    return '/api/rooms';
  }

  createRoom(action) {
    this.create(action.attributes);
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
