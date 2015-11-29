import Backbone from 'backbone';
import actions from '../actions/room';
import app from '../actions/app';
import {rooms, session} from '../stores/room';
import Home from './components/container';
import Detail from './components/detail';

class RoomController {
  constructor() {
    Backbone.on(actions.ROOM_ADD, this.addRoom, this);
    Backbone.on(actions.ROOM_SELECTED, this.selectRoom, this);
    Backbone.on(actions.ROOM_START_CHAT, this.startChat, this);
    Backbone.on(actions.ROOM_FILTER, this.setFilter, this);
  }

  addRoom(room) {
    rooms.add(room);
  }

  selectRoom(msg) {
    session.activeRoom = msg.room;
    Backbone.history.navigate('detail', {trigger: true});
  }

  startChat(msg) {
    session.activeRoom = msg.room;
    Backbone.history.navigate('chat', {trigger: true});
  }

  setFilter(msg) {
    session.roomFilter = msg.filter;
  }

  showHome() {
    app.showComponent(Home);
    rooms.fetch();
  }

  showDetail() {
    app.showComponent(Detail);
  }
}

module.exports = new RoomController();
