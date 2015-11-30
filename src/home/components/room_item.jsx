import React from 'react';
import BackboneReact from '../../lib/backbonereact';
import actions from '../../actions/room';

class RoomItem extends React.Component {
  roomId() {
    return this.props.model.id;
  }

  view(e) {
    e.preventDefault();
    actions.selectRoom(this.props.model);
  }

  selected(e) {
    e.preventDefault();
    actions.startChat(this.props.model);
  }

  render() {
    var progressStyle = {
      width: '48%'
    }
    return (
      <tr key={this.roomId()}>
        <td className="project-status">
          <span className="label label-primary">Active</span>
        </td>
        <td className="project-title">
          <a href="#" onClick={this.view.bind(this)}>{this.props.model.title}</a>
          <br/>
          <small>Created 14.08.2014</small>
        </td>
        <td className="project-actions">
          <a href="#" className="btn btn-white btn-sm" onClick={this.view.bind(this)}><i className="fa fa-folder"></i>View</a>
          <a href="#" className="btn btn-white btn-sm" onClick={this.selected.bind(this)}><i className="fa fa-pencil"></i>Join</a>
        </td>
      </tr>
    );
  }
}

export default BackboneReact(RoomItem);
