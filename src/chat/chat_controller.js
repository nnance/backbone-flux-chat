import app from '../actions/app';
import Container from './components/container';
import { users } from '../stores/user';

class ChatController {
  showChat() {
    app.showComponent(Container);
    users.fetch();
  }

}

module.exports = new ChatController();
