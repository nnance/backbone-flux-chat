import Backbone from 'backbone';
import Dispatcher from '../dispatcher';

const showRooms = 'SHOW_ROOMS';
const roomFilter = 'ROOM_FILTER';
const roomSelected = 'ROOM_SELECTED';
const roomStartChat = 'ROOM_START_CHAT';
const roomAdd = 'ROOM_ADD';
const addChatMessage = 'ADD_CHAT_MSG';

module.exports = {
  SHOW_ROOMS: showRooms,
  ROOM_FILTER: roomFilter,
  ROOM_SELECTED: roomSelected,
  ROOM_START_CHAT: roomStartChat,
  ROOM_ADD: roomAdd,
  ADD_CHAT_MSG: addChatMessage,

  showRooms: function() {
    Backbone.history.navigate('', {trigger: true});
  },

  setFilter: function(value) {
    Dispatcher.dispatch({
      type: roomFilter,
      filter: value
    });
  },

  selectRoom: function(room) {
    Dispatcher.dispatch({
      type: roomSelected,
      room: room
    });
    Backbone.history.navigate('detail', {trigger: true});
  },

  startChat: function(room) {
    Dispatcher.dispatch({
      type: roomStartChat,
      room: room
    });
    Backbone.history.navigate('chat/' + room.id, {trigger: true});
  },

  addRoom: function(title) {
    Dispatcher.dispatch({
      type: roomAdd,
      title: title
    });
  },

  addChatMessage: function(msg) {
    Dispatcher.dispatch({
      type: addChatMessage,
      msg: msg
    });
  }

};
