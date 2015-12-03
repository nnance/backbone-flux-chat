import React from 'react';
import actions from '../actions/room';


class ChatMessage extends React.Component {
  addChatMessage(event) {
    actions.addChatMessage(this.refs.message.value);
    this.refs.message.value = '';
  }

  render() {
    return (
      <div className="chat-message-form">
        <div className="input-group">
          <textarea className="form-control" ref="message" placeholder="Enter message text"></textarea>
          <span className="input-group-addon">
              <button type="button" className="btn btn-primary" onClick={this.addChatMessage.bind(this)}>Send</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
