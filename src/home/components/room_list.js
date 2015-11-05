import React from 'react';

module.exports = React.createClass({
  render: function() {
    return <ul className='list-unstyled'>
      {this.props.collection.map(function (room) {
        return <li></li>
        // return <li key={room.cid}><RoomItem model={room} /></li>
      }.bind(this))}
    </ul>
  }
});
