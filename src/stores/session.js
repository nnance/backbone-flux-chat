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

  get roomFilter() {
    return this.get('roomFilter') || '';
  }

  set roomFilter(value) {
    this.set('roomFilter', value);
  }

  get userFilter() {
    return this.get('userFilter') || '';
  }

  set userFilter(value) {
    this.set('userFilter', value);
  }

  get activeRoom() {
    return this.get('activeRoom');
  }

  set activeRoom(room) {
    this.set('activeRoom', room);
  }

}

export default new SessionModel();
