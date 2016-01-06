import Backbone from 'backbone';
import { BaseModel } from './base';
import RoomActions from '../actions/room';
import UserActions from '../actions/user';

class SessionModel extends BaseModel {
  initialize() {
    this.actionHandlers = [
      {type: RoomActions.ROOM_FILTER, handler: this.setRoomFilter},
      {type: RoomActions.ROOM_TRANSITION, handler: this.setRoom},
      {type: RoomActions.ROOM_START_CHAT, handler: this.setRoom},
      {type: UserActions.FILTER_USERS, handler: this.setUserFilter}
    ];
    // if (options.rooms) {
    //   this.rooms = options.rooms;
    // }
    super.initialize();
  }

  setRoomFilter(action) {
    this.set('roomFilter', action.filter);
  }

  setRoom(action) {
    var room;
    if (action.roomId) {
      room = this.rooms.get(action.roomId);
    } else {
      room = action.room;
    }
    this.set('activeRoom', room);
  }

  setUserFilter(action) {
    this.set('userFilter', action.filter);
  }

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

  get userFilter() {
    return this.get('userFilter') || '';
  }

  get activeRoom() {
    return this.get('activeRoom');
  }

}

class SessionStore {
  getSession() {
    if (!this.session) {
      this.session = new SessionModel();
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
