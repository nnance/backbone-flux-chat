import Backbone from 'backbone';

class CallModel extends Backbone.Model {

  get defaults() {
    return {
      currentState: 'CALL_ONHOOK'
    }
  }

  isActive() {
    return this.get('currentState') != 'CALL_ONHOOK';
  }

}

module.exports = new CallModel();
