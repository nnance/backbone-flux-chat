import Backbone from 'backbone';
import actions from '../actions/app';
import router from '../stores/router';
import Home from '../home/components/container';


class AppController {
  constructor() {
    Backbone.on(actions.APP_STARTED, this.startApp, this);
  }

  startApp(room) {
    Backbone.history.start({ pushState: true });
  }

  showHome() {
    router.visibleComponent = Home;
  }

}

module.exports = new AppController();
