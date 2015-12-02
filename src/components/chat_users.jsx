import React from 'react';
import BackboneReact from '../lib/backbonereact';


class ChatUsers extends React.Component {
  bindings() {
    return this.props.users;
  }

  render() {
    return (
      <div className="chat-users">
          <div className="users-list">
            {this.props.users.map((room) =>
              <div className="chat-user">
                  <span className="pull-right label label-primary">{room.isOnline ? 'Online' : ''}</span>
                  <img className="chat-avatar" src={room.imageURL} alt=""/>
                  <div className="chat-user-name">
                      <a href="#">{room.name}</a>
                  </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}

export default BackboneReact(ChatUsers);
