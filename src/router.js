import Backbone from 'backbone';
import app from './controllers/app';
import room from './controllers/room';


class Router extends Backbone.Router {
  initialize() {
    this.route('', '', app.showHome.bind(app));
    this.route('detail', 'room#showDetail', room.showDetail.bind(room));
  }
}

module.exports = new Router();
