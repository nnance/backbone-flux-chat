import Backbone from 'backbone';
import actions from '../actions/app';


class AppController {
  constructor() {
    Backbone.on(actions.APP_STARTED, this.startApp, this);
  }

  setRouter(router) {
    this._router = router;
  }

  startApp() {
    Backbone.history.start({ pushState: true });
  }

}

module.exports = new AppController();
