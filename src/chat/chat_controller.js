import Backbone from 'backbone';
import actions from '../actions/room';
import {rooms, session} from '../stores/room';
import router from '../stores/router';
import Container from './components/container';

class ChatController {
  /*
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
*/
  showChat() {
    router.visibleComponent = Container;
  }

}

module.exports = new ChatController();
