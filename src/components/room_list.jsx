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
      <div className="project-list">
        <table className="table table-hover">
          <tbody>
            {this.props.rooms.filteredByTitle(filter).map((room) =>
              <RoomItem room={room}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BackboneReact(RoomList);
