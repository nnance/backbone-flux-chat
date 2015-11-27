import Backbone from 'backbone';
import app from './app/app_controller';
import room from './home/room_controller';


class Router extends Backbone.Router {
  initialize() {
    app.router = this;
    this.route('', '', room.showHome.bind(app));
    this.route('detail', 'room#showDetail', room.showDetail.bind(room));
  }
}

module.exports = new Router();
