import Backbone from 'backbone';
import app from '../../actions/app';
import Container from './container';
import session from '../../stores/session';
import { chats } from '../../stores/chat';
import actions from '../../actions/room';


class ChatController {
  constructor() {
    Backbone.on(actions.ADD_CHAT_MSG, this.addChatMessage, this);
  }

  showChat(room_id) {
    chats.fetch({data: {room: room_id}});
    session.activeRoom = rooms.get(room_id);
    app.showComponent(Container);
  }

  addChatMessage(chat) {
    var msg = {
      text: chat.msg,
      user: users.at(0).id,
      room: session.activeRoom.id
    };
    chats.add(msg);
  }

}

module.exports = new ChatController();
