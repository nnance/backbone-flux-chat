import app from '../actions/app';
import Container from './container';
import session from '../stores/session';
import { users } from '../stores/user';
import { chats } from '../stores/chat';


class ChatController {
  showChat() {
    app.showComponent(Container);
    users.fetch();
    chats.fetch({data: {room: session.activeRoom.id}});
  }

}

module.exports = new ChatController();
