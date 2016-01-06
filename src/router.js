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
  constructor(session, rooms, users, chats) {
    super();

    this.session = session;
    this.rooms = rooms;
    this.users = users;
    this.chats = chats;

    this.route('', '', this.showHome.bind(this));
    this.route('detail/:id', 'room#showDetail', this.showDetail.bind(this));
    this.route('user', 'user#showList', this.showUserList.bind(this));
    this.route('chat/:id', 'chat#showChat', this.showChat.bind(this));
  }

  showHome() {
    ReactDOM.render(<Home session={this.session} rooms={this.rooms}/>, document.getElementById('body'));
    this.rooms.fetch();
  }

  showDetail(id) {
    RoomActions.roomTransition(id);
    ReactDOM.render(<Detail session={this.session}/>, document.getElementById('body'));
  }

  showUserList() {
    ReactDOM.render(<UserContainer session={this.session} users={this.users}/>, document.getElementById('body'));
    this.users.fetch();
  }

  showChat(id) {
    this.chats.fetch({data: {room: id}});
    RoomActions.roomTransition(id);
    ReactDOM.render(<ChatContainer chats={this.chats} users={this.users}/>, document.getElementById('body'));
  }
}
