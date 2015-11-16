import Backbone from 'backbone';
import actions from '../actions/app';
import router from '../stores/router';
import Home from '../home/components/container';

class AppOrchestrations extends Backbone.Model {
  initialize() {
    this.listenTo(Backbone, actions.APP_STARTED, this.startApp);
  }

  startApp(room) {
    router.visibleComponent = Home;
    Backbone.history.start();
  }

}

module.exports = new AppOrchestrations();
