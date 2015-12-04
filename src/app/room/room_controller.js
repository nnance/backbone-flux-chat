/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import actions from '../../actions/room';
import Home from './container';
import Detail from './detail';

export default class RoomController {
  constructor(session, rooms) {
    this.session = session;
    this.rooms = rooms;

    Backbone.on(actions.SHOW_ROOMS, this.showRooms, this);
    Backbone.on(actions.ROOM_ADD, this.addRoom, this);
    Backbone.on(actions.ROOM_SELECTED, this.selectRoom, this);
    Backbone.on(actions.ROOM_START_CHAT, this.startChat, this);
    Backbone.on(actions.ROOM_FILTER, this.setFilter, this);
  }

  remove() {
    Backbone.off(null, null, this);
  }

  addRoom(attributes) {
    this.rooms.create(attributes);
  }

  showRooms() {
    Backbone.history.navigate('', {trigger: true});
  }

  selectRoom(msg) {
    this.session.activeRoom = msg.room;
    Backbone.history.navigate('detail', {trigger: true});
  }

  startChat(msg) {
    this.session.activeRoom = msg.room;
    Backbone.history.navigate('chat/' + msg.room.id, {trigger: true});
  }

  setFilter(msg) {
    this.session.roomFilter = msg.filter;
  }

  showHome() {
    ReactDOM.render(<Home session={this.session} rooms={this.rooms}/>, document.getElementById('body'));
    this.rooms.fetch();
  }

  showDetail() {
    ReactDOM.render(<Detail session={this.session}/>, document.getElementById('body'));
  }
}
