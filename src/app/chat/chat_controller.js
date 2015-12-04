/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import actions from '../../actions/room';
import Container from './container';


export default class ChatController {
  constructor(session, chats, rooms, users) {
    this.session = session;
    this.chats = chats;
    this.rooms = rooms;
    this.users = users;

    Backbone.on(actions.ADD_CHAT_MSG, this.addChatMessage, this);
  }

  showChat(room_id) {
    this.chats.fetch({data: {room: room_id}});
    this.session.activeRoom = this.rooms.get(room_id);
    ReactDOM.render(<Container chats={this.chats} users={this.users}/>, document.getElementById('body'));
  }

  addChatMessage(chat) {
    var msg = {
      text: chat.msg,
      user: this.users.at(0).id,
      room: this.session.activeRoom.id
    };
    this.chats.add(msg);
  }

}
