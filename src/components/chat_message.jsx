import React from 'react';


class ChatMessage extends React.Component {
  addChatMessage(event) {
    this.props.chatAction.call(this, this.refs.message.value);
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
