import Backbone from 'backbone';

const roomFilter = 'ROOM_FILTER';
const roomSelected = 'ROOM_SELECTED';
const roomAdd = 'ROOM_ADD';

module.exports = {
  ROOM_FILTER: roomFilter,
  ROOM_SELECTED: roomSelected,
  ROOM_ADD: roomAdd,

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

  addRoom: function(title) {
    Backbone.trigger(roomAdd, {
      title: title
    });
  }

};
