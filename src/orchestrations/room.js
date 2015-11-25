import Backbone from 'backbone';
import actions from '../actions/room';
import {rooms, session} from '../stores/room';
import router from '../stores/router';
import Detail from '../home/components/detail';

class RoomOrchestrations extends Backbone.Router {
  routes() {
    return {
      'detail': 'showDetail'
    }
  }

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
    Backbone.history.navigate('detail', {trigger: true});
  }

  setFilter(msg) {
    session.roomFilter = msg.filter;
  }

  showDetail() {
    router.visibleComponent = Detail;
  }
}

module.exports = new RoomOrchestrations();
