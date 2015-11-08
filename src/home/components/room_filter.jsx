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
    return <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." onChange={this.filterList} ref="filter"/>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.addRoom}>Add</button>
      </span>
    </div>
  }
});
