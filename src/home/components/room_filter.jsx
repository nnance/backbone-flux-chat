import React from 'react';
import actions from '../../actions/room';

export default class RoomFilter extends React.Component {

  filterList(event) {
    actions.setFilter(event.target.value);
  }

  addRoom() {
    actions.addRoom(this.refs.filter.value);
  }

  render() {
    return (
      <div className="row m-b-sm m-t-sm">
        <div className="col-md-1">
            <button type="button" id="loading-example-btn" className="btn btn-white btn-sm" ><i className="fa fa-refresh"></i> Refresh</button>
        </div>
        <div className="col-md-11">
            <div className="input-group">
              <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList} ref="filter"></input>
                <span className="input-group-btn">
                  <button type="button" className="btn btn-sm btn-primary" onClick={this.addRoom.bind(this)}>Add Room</button>
                </span>
            </div>
        </div>
      </div>
    );
  }
}
