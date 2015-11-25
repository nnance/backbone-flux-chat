import Backbone from 'backbone';
import actions from '../actions/room';
import {rooms, session} from '../stores/room';

class RoomOrchestrations extends Backbone.Router {
  initialize() {
    this.listenTo(Backbone, actions.ROOM_ADD, this.addRoom);
    this.listenTo(Backbone, actions.ROOM_SELECTED, this.selectRoom);
    this.listenTo(Backbone, actions.ROOM_FILTER, this.setFilter);
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
