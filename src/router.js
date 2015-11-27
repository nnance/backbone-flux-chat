import Backbone from 'backbone';
import app from './app/app_controller';
import room from './home/room_controller';
import chat from './chat/chat_controller';


class Router extends Backbone.Router {
  initialize() {
    app.router = this;
    this.route('', '', room.showHome.bind(app));
    this.route('detail', 'room#showDetail', room.showDetail.bind(room));
    this.route('chat', 'chat#showChat', chat.showChat.bind(chat));
  }
}

module.exports = new Router();
