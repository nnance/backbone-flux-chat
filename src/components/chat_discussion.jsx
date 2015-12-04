import React from 'react';
import ReactDOM from 'react-dom';
import BackboneReact from '../lib/backbonereact';


class ChatDiscussion extends React.Component {
  bindings() {
    return this.props.chats;
  }

  componentDidUpdate() {
    var elem = ReactDOM.findDOMNode(this.refs.discussion);
    elem.scrollTop = elem.scrollHeight;
  }

  getUser(chat) {
    return this.props.users.get(chat.user);
  }

  render() {
    return (
      <div className="chat-discussion" ref="discussion">
        {this.props.chats.map((chat, index) =>
          <div className={'chat-message ' + (index % 2 ? 'right' : 'left')} key={chat.id}>
              <img className="message-avatar" src={this.getUser(chat).imageURL} alt=""/>
              <div className="message">
                  <a className="message-author" href="#">{this.getUser(chat).name}</a>
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
