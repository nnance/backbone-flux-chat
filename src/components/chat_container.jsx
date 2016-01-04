import React from 'react';
import ChatDiscussion from './chat_discussion';
import ChatUsers from './chat_users';
import ChatMessage from './chat_message';


export default class Detail extends React.Component {

  render() {
    return (
      <div className="fh-content fh-fixed-nav">
        <div className="container-fluid">
          <div className="row container-header">
            <div className="col-xs-8 m-t-xs">
              <h4>Chat Room</h4>
            </div>
            <div className="col-xs-4 m-t-sm">
              <div className="ibox-title">
                <small className="pull-right text-muted">Last message:  Mon Jan 26 2015 - 18:39:23</small>
              </div>
            </div>
          </div>
        </div>
        <ChatDiscussion chats={this.props.chats} users={this.props.users}/>
        <ChatMessage />
        <ChatUsers users={this.props.users}/>
      </div>
    );
  }
}
