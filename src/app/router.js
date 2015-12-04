import Backbone from 'backbone';


class Router extends Backbone.Router {
  constructor(room, user, chat) {
    super();

    this.route('', '', room.showHome.bind(room));
    this.route('detail', 'room#showDetail', room.showDetail.bind(room));
    this.route('user', 'user#showList', user.showList.bind(user));
    this.route('chat/:id', 'chat#showChat', chat.showChat.bind(chat));
  }

}

export default Router;
