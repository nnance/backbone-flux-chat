import Backbone from 'backbone';
import { BaseModel } from './base';
import RoomActions from '../actions/room';

export default class SessionModel extends BaseModel {
  initialize() {
    this.actionHandlers = [
      {type: RoomActions.ROOM_FILTER, handler: this.setFilter},
      {type: RoomActions.ROOM_SELECTED, handler: this.setRoom},
      {type: RoomActions.ROOM_START_CHAT, handler: this.setRoom}
    ];
    super.initialize();
  }

  setFilter(action) {
    this.set('roomFilter', action.filter);
  }

  setRoom(action) {
    this.set('activeRoom', action.room);
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

  set userFilter(value) {
    this.set('userFilter', value);
  }

  get activeRoom() {
    return this.get('activeRoom');
  }

}
