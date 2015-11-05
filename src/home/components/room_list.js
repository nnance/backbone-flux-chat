import React from 'react';
import RoomItem from './room_item';

module.exports = React.createClass({
  render: function() {
    const filter = this.props.model.roomFilter;
    return <ul className='list-unstyled'>
      {this.props.collection.filteredByTitle(filter).map((room) =>
        <RoomItem model={room} />
      )}
    </ul>
  }
});
