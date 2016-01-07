import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'react-avatar';


export default class ChatDiscussion extends React.Component {
  componentDidUpdate() {
    var elem = ReactDOM.findDOMNode(this.refs.discussion);
    elem.scrollTop = elem.scrollHeight;
  }

  render() {
    return (
      <div className="chat-discussion" ref="discussion">
        {
          this.props.chatStore.getChats().map((chat, index) => {
            var user = this.props.userStore.getUsers().get(chat.user);
            return (
              <div className={'chat-message ' + (index % 2 ? 'right' : 'left')} key={chat.id}>
                  <div className="message-avatar">
                    <Avatar name={user.name}  color={user.color} size={46} round={true}/>
                  </div>
                  <div className="message">
                      <a className="message-author" href="#">{user.name}</a>
                      <span className="message-date">{chat.date}</span>
                      <span className="message-content">{chat.text}</span>
                  </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
