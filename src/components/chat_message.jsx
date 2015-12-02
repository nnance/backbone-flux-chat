import React from 'react';


class ChatMessage extends React.Component {

  render() {
    return (
      <div className="chat-message-form">
          <div className="form-group">
              <textarea className="form-control message-input" name="message" placeholder="Enter message text"></textarea>
          </div>
      </div>
    );
  }
}

export default ChatMessage;
