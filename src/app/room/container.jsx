import React from 'react';
import FilterInput from '../../components/filter_input';
import RoomList from '../../components/room_list';
import actions from '../../actions/room';


export default class Container extends React.Component {

  render() {
    return (
      <div className="fh-content fh-fixed-nav fh-fixed-footer">
        <div className="container fh-container">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row" style={{borderBottom: "1px solid #ddd", paddingBottom: 10}}>
                <div className="col-xs-8" style={{paddingTop: 5}}>
                  <h4>Chat Rooms</h4>
                </div>
                <div className="col-xs-4" style={{paddingTop: 10}}>
                  <FilterInput filterAction={actions.setFilter} addText='Add Room' addAction={actions.addRoom}/>
                </div>
              </div>
              <RoomList session={this.props.session} rooms={this.props.rooms}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
