/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import Home from './room/container';
import Detail from './room/detail';

export default class Router extends Backbone.Router {
  constructor(session, rooms, user, chat) {
    super();

    this.session = session;
    this.rooms = rooms;

    this.route('', '', this.showHome.bind(this));
    this.route('detail', 'room#showDetail', this.showDetail.bind(this));
    this.route('user', 'user#showList', user.showList.bind(user));
    this.route('chat/:id', 'chat#showChat', chat.showChat.bind(chat));
  }

  showHome() {
    ReactDOM.render(<Home session={this.session} rooms={this.rooms}/>, document.getElementById('body'));
    // this.rooms.fetch();
  }

  showDetail() {
    ReactDOM.render(<Detail session={this.session}/>, document.getElementById('body'));
  }
}
