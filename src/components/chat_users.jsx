import React from 'react';
import Avatar from 'react-avatar';


export default class ChatUsers extends React.Component {
  render() {
    return (
      <div className="chat-users">
          <div className="users-list">
            {this.props.userStore.getUsers().map((user) =>
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
