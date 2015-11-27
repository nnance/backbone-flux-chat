import Backbone from 'backbone';
import actions from '../actions/room';
import {rooms, session} from '../stores/room';
import router from '../stores/router';
import Home from '../home/components/container';
import Detail from './components/detail';

class RoomController {
  constructor() {
    Backbone.on(actions.ROOM_ADD, this.addRoom, this);
    Backbone.on(actions.ROOM_SELECTED, this.selectRoom, this);
    Backbone.on(actions.ROOM_FILTER, this.setFilter, this);
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

  showHome() {
    router.visibleComponent = Home;
  }

  showDetail() {
    router.visibleComponent = Detail;
  }
}

module.exports = new RoomController();
