import React from 'react';
import BackboneReact from '../lib/backbonereact';
import RoomItem from './room_item';


class RoomList extends React.Component {
  bindings() {
    return [this.props.session, this.props.rooms];
  }

  render() {
    const filter = this.props.session.roomFilter;
    return (
      <table className="table table-hover table-room">
        <tbody>
          {this.props.rooms.filteredByTitle(filter).map((room) =>
            <RoomItem room={room} key={room.id}/>
          )}
        </tbody>
      </table>
    );
  }
}

export default BackboneReact(RoomList);
