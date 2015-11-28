import app from '../actions/app';
import Container from './components/container';

class ChatController {
  showChat() {
    app.showComponent(Container);
  }

}

module.exports = new ChatController();
