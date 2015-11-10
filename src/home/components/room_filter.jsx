import React from 'react';
import Backbone from 'backbone';
import actions from '../../actions/room';

module.exports = React.createClass({
  filterList: function(event) {
    actions.setFilter(event.target.value);
  },

  addRoom: function() {
    actions.addRoom(this.refs.filter.value);
  },

  render: function() {
    return <div className="row m-b-sm m-t-sm">
        <div className="col-md-1">
            <button type="button" id="loading-example-btn" className="btn btn-white btn-sm" ><i className="fa fa-refresh"></i> Refresh</button>
        </div>
        <div className="col-md-11">
            <div className="input-group">
              <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList} ref="filter"></input>
                <span className="input-group-btn">
                  <button type="button" className="btn btn-sm btn-primary" onClick={this.addRoom}>Add Room</button>
                </span>
            </div>
        </div>
    </div>
  }
});
