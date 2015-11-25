import Backbone from 'backbone';
import actions from '../actions/app';
import router from '../stores/router';
import Home from '../home/components/container';
import Detail from '../home/components/detail';

class AppOrchestrations extends Backbone.Router {
  routes() {
    return {
      '': 'showHome',
      'detail': 'showDetail'
    }
  }

  initialize() {
    this.listenTo(Backbone, actions.APP_STARTED, this.startApp);
  }

  startApp(room) {
    router.visibleComponent = Home;
    Backbone.history.start();
  }

  showHome() {
    router.visibleComponent = Home;
  }

  showDetail() {
    router.visibleComponent = Detail;
  }

}

module.exports = new AppOrchestrations();
