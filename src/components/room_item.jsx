import React from 'react';
import actions from '../actions/room';


class RoomItem extends React.Component {
  view(e) {
    e.preventDefault();
    actions.selectRoom(this.props.room);
  }

  selected(e) {
    e.preventDefault();
    actions.startChat(this.props.room);
  }

  render() {
    var progressStyle = {
      width: '48%'
    }
    return (
      <tr>
        <td className="room-status">
          <span className="label label-primary">Active</span>
        </td>
        <td className="room-title">
          <a href="#" onClick={this.view.bind(this)}>{this.props.room.title}</a>
          <br/>
          <small>Created 14.08.2014</small>
        </td>
        <td className="room-actions">
          <a href="#" className="btn btn-default btn-sm" style={{marginRight:5}} onClick={this.view.bind(this)}><i className="fa fa-folder"></i> View</a>
          <a href="#" className="btn btn-default btn-sm" onClick={this.selected.bind(this)}><i className="fa fa-pencil"></i> Join</a>
        </td>
      </tr>
    );
  }
}

export default RoomItem;
