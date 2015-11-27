import Backbone from 'backbone';

const appStarted = 'APP_STARTED';

module.exports = {
  APP_STARTED: appStarted,

  appStarted: function() {
    Backbone.trigger(appStarted);
  }

};
