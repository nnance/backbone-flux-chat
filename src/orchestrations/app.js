import Backbone from 'backbone';
import actions from '../actions/app';
import router from '../stores/router';
import Home from '../home/components/container';

class AppOrchestrations extends Backbone.Router {
  routes() {
    return {
      '': 'showHome'
    }
  }

  initialize() {
    this.listenTo(Backbone, actions.APP_STARTED, this.startApp);
  }

  startApp(room) {
    router.visibleComponent = Home;
    Backbone.history.start({ pushState: true });
  }

  showHome() {
    router.visibleComponent = Home;
  }

}

module.exports = new AppOrchestrations();
