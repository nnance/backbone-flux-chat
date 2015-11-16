import Backbone from 'backbone';

class RouterModel extends Backbone.Model {

  get visibleComponent() {
    return this.get('visibleComponent');
  }

  set visibleComponent(value) {
    this.set('visibleComponent', value);
  }

}

module.exports = new RouterModel();
