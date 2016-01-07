import React from 'react';
import BackboneReact from '../lib/backbonereact';

import sessionStore from '../stores/session';
import roomStore from '../stores/room';
import FilterInput from './filter_input';
import RoomList from './room_list';
import actions from '../actions/room';


class Container extends React.Component {
  bindings() {
    return [sessionStore.getSession(), roomStore.getRooms()];
  }

  render() {
    return (
      <div className="fh-content fh-fixed-nav fh-fixed-footer">
        <div className="container fh-container">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-8 m-t-xs">
                  <h4>Chat Rooms</h4>
                </div>
                <div className="col-xs-4 m-t-sm">
                  <FilterInput filterAction={actions.setFilter} addText='Add Room' addAction={actions.addRoom}/>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <RoomList
                sessionStore={sessionStore}
                roomStore={roomStore}
                selectAction={actions.selectRoom}
                chatAction={actions.startChat}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackboneReact(Container);
