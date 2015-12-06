import React from 'react';
import BackboneReact from '../lib/backbonereact';
import Avatar from 'react-avatar';


class ChatUsers extends React.Component {
  bindings() {
    return this.props.users;
  }

  render() {
    return (
      <div className="chat-users">
          <div className="users-list">
            {this.props.users.map((user) =>
              <div className="chat-user" key={user.id}>
                  <span className="pull-right label label-primary">{user.isOnline ? 'Online' : ''}</span>
                  <div className="chat-avatar">
                    <Avatar name={user.name}  color={user.color} size={36} round={true}/>
                  </div>
                  <div className="chat-user-name">
                      <a href="#">{user.name}</a>
                  </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}

export default BackboneReact(ChatUsers);
