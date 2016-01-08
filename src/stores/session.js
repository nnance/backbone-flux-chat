import Backbone from 'backbone';
import dispatcher from '../dispatcher';
import userStore from './room';
import roomStore from './room';
import RoomActions from '../actions/room';
import UserActions from '../actions/user';


class SessionModel extends Backbone.Model {
  get defaults() {
    return {
      currentState: 'idle'
    };
  }

  get userName() {
    return this.get('userName');
  }

  get isLoggedIn() {
    return this.userName && this.userName.length > 0;
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

  get userFilter() {
    return this.get('userFilter') || '';
  }

  get activeRoom() {
    return this.get('activeRoom');
  }

}

class SessionStore {
  constructor() {
    this.dispatchToken = dispatcher.register(this.dispatchHandler.bind(this));
  }

  dispatchHandler(action) {
    switch(action.type) {
      case UserActions.LOGIN_USER:
        this.loginUser(action);
        break;
      case UserActions.LOGOUT_USER:
        localStorage.removeItem('userName');
        break;
      case RoomActions.ROOM_FILTER:
        this.getSession().set('roomFilter', action.filter);
        break;
      case RoomActions.ROOM_TRANSITION:
        this.setRoom(action);
        break;
      case RoomActions.ROOM_START_CHAT:
        this.setRoom(action);
        break;
      case UserActions.FILTER_USERS:
        this.getSession().set('userFilter', action.filter);
        break;
      default:
        // do nothing
    }
  }

  loginUser(action) {
    dispatcher.waitFor([userStore.dispatchToken]);
    this.getSession().set('userName', action.name);
    if (action.remember) {
      localStorage.setItem('userName', action.name);
    } else {
      localStorage.removeItem('userName');
    }
  }

  setRoom(action) {
    var room = action.roomId ? roomStore.getRooms().get(action.roomId) : action.room;
    this.getSession().set('activeRoom', room);
  }

  getSession() {
    if (!this.session) {
      this.session = new SessionModel({
        userName: localStorage.getItem('userName')
      });
    }
    return this.session;
  }

  clear() {
    if (this.session) {
      this.session.off();
      this.session = null;
    }
  }
}

module.exports = new SessionStore();
