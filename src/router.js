import Backbone from 'backbone';
import room from './room/room_controller';
import user from './user/user_controller';
import chat from './chat/chat_controller';


class Router extends Backbone.Router {
  initialize() {
    this.route('', '', room.showHome.bind(room));
    this.route('detail', 'room#showDetail', room.showDetail.bind(room));
    this.route('user', 'user#showList', user.showList.bind(user));
    this.route('chat', 'chat#showChat', chat.showChat.bind(chat));
  }
}

module.exports = new Router();
