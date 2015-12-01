import app from '../actions/app';
import Container from './components/container';
import { users } from '../stores/user';
import { chats } from '../stores/chat';

class ChatController {
  showChat() {
    app.showComponent(Container);
    users.fetch();
    chats.fetch();
  }

}

module.exports = new ChatController();
