import React from 'react';
import RoomItem from './room_item';

module.exports = React.createClass({
  render: function() {
    return <ul className='list-unstyled'>
      {this.props.collection.map((room) =>
        <RoomItem model={room} />
      )}
    </ul>
  }
});
