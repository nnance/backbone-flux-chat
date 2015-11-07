import Backbone from 'backbone';
import constants from '../constants/room';
import {rooms, session} from '../stores/room';

class RoomOrchestrations extends Backbone.Model {
  initialize() {
    this.listenTo(Backbone, constants.ROOM_ADD, this.addRoom);
    this.listenTo(Backbone, constants.ROOM_SELECTED, this.selectRoom);
    this.listenTo(Backbone, constants.ROOM_FILTER, this.setFilter);
  }

  addRoom(room) {
    rooms.add(room);
  }

  selectRoom(msg) {
    session.activeRoom = msg.room;
  }

  setFilter(msg) {
    session.roomFilter = msg.filter;
  }
}

module.exports = new RoomOrchestrations();
