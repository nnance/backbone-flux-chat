import React from 'react';
import sessionStore from '../stores/session';
import FilterInput from './filter_input';
import RoomList from './room_list';
import actions from '../actions/room';


export default class Container extends React.Component {
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
              <RoomList session={sessionStore.getSession()} rooms={this.props.rooms}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
