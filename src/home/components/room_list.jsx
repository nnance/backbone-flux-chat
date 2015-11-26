import React from 'react';
import BackboneReact from '../../lib/backbonereact';
import RoomItem from './room_item';

class RoomList extends React.Component {

  render() {
    const filter = this.props.model.roomFilter;
    return (
      <div className="project-list">
        <table className="table table-hover">
          <tbody>
            {this.props.collection.filteredByTitle(filter).map((room) =>
              <RoomItem model={room} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BackboneReact(RoomList);
