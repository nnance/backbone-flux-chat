import Backbone from 'backbone';
import dispatcher from '../dispatcher';

import RoomActions from '../actions/room';
import sessionStore from './session';
import userStore from './user';

class ChatModel extends Backbone.Model {
  get date() {
    return this.get('date');
  }

  get text() {
    return this.get('text');
  }

  set text(value) {
    this.set('text', value);
  }

  get user() {
    return this.get('user');
  }

  set user(id) {
    this.set('user', id);
  }
}

class ChatCollection extends Backbone.Collection {
  get model() {
    return ChatModel;
  }

  get url() {
    return '/api/chats';
  }

}

class ChatStore {
  constructor() {
    this.dispatchToken = dispatcher.register(this.dispatchHandler.bind(this));
  }

  dispatchHandler(action) {
    switch(action.type) {
      case RoomActions.ADD_CHAT_MSG:
        this.addChatMessage(action);
        break;
      case RoomActions.ROOM_TRANSITION:
        dispatcher.waitFor([sessionStore.dispatchToken]);
        this.getChats().fetch({data: {room: sessionStore.getSession().activeRoom.id}});
        break;
      case RoomActions.RECEIVED_MSG:
        this.getChats().add(action.msg);
        break;
      default:
        // do nothing
    }
  }

  addChatMessage(action) {
    var session = sessionStore.getSession();
    var msg = {
      text: action.msg,
      user: userStore.filteredByName(session.userName)[0].id,
      room: session.activeRoom.id
    };
    this.getChats().create(msg, {wait: true});
  }

  filteredByUser(filter) {
    if (!filter || filter.length === 0) {
      return this.getChats().models;
    } else {
      return this.getChats().filter((item) => item.user === filter);
    }
  }

  getChats() {
    if (!this.chats) {
      this.chats = new ChatCollection();
    }
    return this.chats;
  }

  clear() {
    this.chats.off();
    this.chats = null;
  }
}

module.exports = new ChatStore();
