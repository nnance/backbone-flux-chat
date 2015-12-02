import React from 'react';
import BackboneReact from '../lib/backbonereact';


class ChatDiscussion extends React.Component {
  listenTo() {
    return this.props.chats;
  }
  
  render() {
    return (
      <div className="chat-discussion">
        {this.props.chats.map((chat, index) =>
          <div className={'chat-message ' + (index % 2 ? 'right' : 'left')}>
              <img className="message-avatar" src={chat.user.imageURL} alt=""/>
              <div className="message">
                  <a className="message-author" href="#">{chat.user.name}</a>
                  <span className="message-date">{chat.date}</span>
                  <span className="message-content">{chat.text}</span>
              </div>
          </div>
        )}
      </div>
    );
  }
}

export default BackboneReact(ChatDiscussion);
