import React from 'react';
import ChatDiscussion from '../components/chat_discussion';
import ChatUsers from '../components/chat_users';
import ChatMessage from '../components/chat_message';
import { users } from '../stores/user';
import { chats } from '../stores/chat';


export default class Detail extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ibox chat-view">
                    <div className="ibox-title">
                        <small className="pull-right text-muted">Last message:  Mon Jan 26 2015 - 18:39:23</small>
                         Chat room panel
                    </div>
                    <div className="ibox-content">
                        <div className="row">
                            <div className="col-md-9 ">
                                <ChatDiscussion collection={chats}/>
                            </div>
                            <div className="col-md-3">
                                <ChatUsers collection={users}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ChatMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}