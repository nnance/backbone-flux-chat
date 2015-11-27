import Backbone from 'backbone';

class SessionModel extends Backbone.Model {

  get defaults() {
    return {
      currentState: 'idle'
    };
  }

  get isActive() {
    return this.get('currentState') != 'idle';
  }

  set isActive(value) {
    if (value) {
      this.set('currentState', 'active');
    } else {
      this.set('currentState', 'idle');
    }
  }

}

module.exports = new SessionModel();
