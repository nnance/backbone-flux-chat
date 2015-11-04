import Backbone from 'backbone';

class CallModel extends Backbone.Model {

  get defaults() {
    return {
      currentState: 'CALL_ONHOOK'
    }
  }

  get isActive() {
    return this.get('currentState') != 'CALL_ONHOOK';
  }

  set isActive(value) {
    if (value) {
      this.set('currentState', 'CALL_OFFHOOK');
    } else {
      this.set('currentState', 'CALL_ONHOOK');
    }
  }

}

module.exports = new CallModel();
