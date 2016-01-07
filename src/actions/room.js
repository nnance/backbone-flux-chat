import Backbone from 'backbone';
import dispatcher from '../dispatcher';

const showRooms = 'SHOW_ROOMS';
const roomFilter = 'ROOM_FILTER';
const roomSelected = 'ROOM_SELECTED';
const roomStartChat = 'ROOM_START_CHAT';
const roomAdd = 'ROOM_ADD';
const roomTransition = 'ROOM_TRANSITION';
const addChatMessage = 'ADD_CHAT_MSG';

module.exports = {
  SHOW_ROOMS: showRooms,
  ROOM_FILTER: roomFilter,
  ROOM_SELECTED: roomSelected,
  ROOM_START_CHAT: roomStartChat,
  ROOM_ADD: roomAdd,
  ROOM_TRANSITION: roomTransition,
  ADD_CHAT_MSG: addChatMessage,

  showRooms: function() {
    Backbone.history.navigate('', {trigger: true});
  },

  setFilter: function(value) {
    dispatcher.dispatch({
      type: roomFilter,
      filter: value
    });
  },

  selectRoom: function(room) {
    dispatcher.dispatch({
      type: roomSelected,
      room: room
    });
    Backbone.history.navigate('detail/' + room.id, {trigger: true});
  },

  roomTransition: function(roomId) {
    dispatcher.dispatch({
      type: roomTransition,
      roomId: roomId
    });
  },

  startChat: function(room) {
    dispatcher.dispatch({
      type: roomStartChat,
      room: room
    });
    Backbone.history.navigate('chat/' + room.id, {trigger: true});
  },

  addRoom: function(title) {
    dispatcher.dispatch({
      type: roomAdd,
      title: title
    });
  },

  addChatMessage: function(msg) {
    dispatcher.dispatch({
      type: addChatMessage,
      msg: msg
    });
  }

};
