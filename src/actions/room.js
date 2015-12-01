import Backbone from 'backbone';

const showRooms = 'SHOW_ROOMS';
const roomFilter = 'ROOM_FILTER';
const roomSelected = 'ROOM_SELECTED';
const roomStartChat = 'ROOM_START_CHAT';
const roomAdd = 'ROOM_ADD';

module.exports = {
  SHOW_ROOMS: showRooms,
  ROOM_FILTER: roomFilter,
  ROOM_SELECTED: roomSelected,
  ROOM_START_CHAT: roomStartChat,
  ROOM_ADD: roomAdd,

  showRooms: function() {
    Backbone.trigger(showRooms);
  },

  setFilter: function(value) {
    Backbone.trigger(roomFilter, {
      filter: value
    });
  },

  selectRoom: function(room) {
    Backbone.trigger(roomSelected, {
      room: room
    });
  },

  startChat: function(room) {
    Backbone.trigger(roomStartChat, {
      room: room
    });
  },

  addRoom: function(title) {
    Backbone.trigger(roomAdd, {
      title: title
    });
  }

};
