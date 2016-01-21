/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import RoomActions from './actions/room';
import Home from './components/room_container';
import Detail from './components/room_detail_container';
import UserContainer from './components/user_container';
import ChatContainer from './components/chat_container';

export default class Router extends Backbone.Router {
  get routes() {
    return {
      '':           'showHome',
      'detail/:id': 'showDetail',
      'user':       'showUserList',
      'chat/:id':   'showChat'
    };
  }

  getBody() {
    if (!this._body) {
      this._body = document.getElementById('body');
    }
    return !this._body;
  }

  showHome() {
    ReactDOM.render(<Home/>, this.getBody());
  }

  showDetail(id) {
    RoomActions.roomTransition(id);
    ReactDOM.render(<Detail/>, this.getBody());
  }

  showUserList() {
    ReactDOM.render(<UserContainer/>, this.getBody());
  }

  showChat(id) {
    RoomActions.roomTransition(id);
    ReactDOM.render(<ChatContainer/>, this.getBody());
  }
}
