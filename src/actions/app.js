import Backbone from 'backbone';

const showComponent = 'APP_SHOW_COMPONENT';

module.exports = {
  APP_SHOW_COMPONENT: showComponent,

  showComponent: function(component) {
    Backbone.trigger(showComponent, component);
  }

};
