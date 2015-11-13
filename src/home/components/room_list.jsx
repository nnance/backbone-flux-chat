import React from 'react';
import Backbone from 'backbone';
import ReactBackbone from 'react.backbone';
import RoomItem from './room_item';

module.exports = React.createBackboneClass({
  render: function() {
    const filter = this.props.model.roomFilter;
    return <div className="project-list">
      <table className="table table-hover">
        <tbody>
          {this.props.collection.filteredByTitle(filter).map((room) =>
            <RoomItem model={room} />
          )}
        </tbody>
      </table>
    </div>
  }
});
