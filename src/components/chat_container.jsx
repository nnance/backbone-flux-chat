import React from 'react';
import BackboneReact from '../lib/backbonereact';

import actions from '../actions/room';
import userStore from '../stores/user';
import chatStore from '../stores/chat';
import ChatDiscussion from './chat_discussion';
import ChatUsers from './chat_users';
import ChatMessage from './chat_message';


class Container extends React.Component {
  bindings() {
    return [userStore.getUsers(), chatStore.getChats()];
  }

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
        <ChatDiscussion chatStore={chatStore} userStore={userStore}/>
        <ChatMessage chatAction={actions.addChatMessage}/>
        <ChatUsers userStore={userStore}/>
      </div>
    );
  }
}

export default BackboneReact(Container);
