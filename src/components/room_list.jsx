import React from 'react';
import RoomItem from './room_item';


export default class RoomList extends React.Component {
  render() {
    const filter = this.props.sessionStore.getSession().roomFilter;
    return (
      <table className="table table-hover table-room">
        <tbody>
          {this.props.roomStore.filteredByTitle(filter).map((room) =>
            <RoomItem
              room={room}
              key={room.id}
              selectAction={this.props.selectAction}
              chatAction={this.props.chatAction}
            />
          )}
        </tbody>
      </table>
    );
  }
}
