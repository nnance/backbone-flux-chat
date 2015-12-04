import React from 'react';
import FilterInput from '../../components/filter_input';
import RoomList from '../../components/room_list';
import actions from '../../actions/room';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper wrapper-content animated fadeInUp">
                <div className="ibox">
                  <div className="ibox-title">
                      <h5>All available rooms</h5>
                  </div>
                  <div className="ibox-content">
                    <FilterInput filterAction={actions.setFilter} addText='Add Room' addAction={actions.addRoom}/>
                    <RoomList session={this.props.session} rooms={this.props.rooms}/>
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
