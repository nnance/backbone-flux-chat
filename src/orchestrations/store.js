import Backbone from 'backbone';
import constants from '../constants/room';
import roomStore from '../stores/room';

class RoomOrchestrations extends Backbone.Model {
  initialize() {
    this.listenTo(Backbone, constants.ROOM_ADD, this.addRoom);
  }

  addRoom(room) {
    roomStore.rooms.add(room);
  }
}

module.exports = new RoomOrchestrations();
