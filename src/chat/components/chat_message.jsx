import React from 'react';

export default class ChatMessage extends React.Component {

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
