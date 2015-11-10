import React from 'react';
import RoomItem from './room_item';

module.exports = React.createClass({
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
