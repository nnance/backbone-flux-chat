import app from '../actions/app';
import Container from './components/container';
import session from '../stores/session';
import { users } from '../stores/user';
import { chats } from '../stores/chat';

class ChatController {
  showChat() {
    // app.showComponent(Container);
    users.fetch();
    chats
      .fetch({data: {room: session.activeRoom.id}})
      .then(() => app.showComponent(Container));
  }

}

module.exports = new ChatController();
