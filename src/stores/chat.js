import Backbone from 'backbone';
import { BaseCollection } from './base';
import RoomActions from '../actions/room';

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

export default class ChatCollection extends BaseCollection {
  constructor(session, users) {
    super();

    this.session = session;
    this.users = users;
  }

  initialize() {
    this.actionHandlers = [
      {type: RoomActions.ADD_CHAT_MSG, handler: this.addChatMessage}
    ];
    super.initialize();
  }

  get model() {
    return ChatModel;
  }

  get url() {
    return '/api/chats';
  }

  addChatMessage(action) {
    var msg = {
      text: action.msg,
      user: this.users.at(0).id,
      room: this.session.activeRoom.id
    };
    this.add(msg);
  }

  filteredByUser(filter) {
    if (!filter || filter.length === 0) {
      return this.models;
    } else {
      return this.filter((item) => item.user === filter);
    }
  }

}
