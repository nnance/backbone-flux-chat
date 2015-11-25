import React from 'react';
import backboneMixin from 'backbone-react-component';
import actions from '../../actions/room';

module.exports = React.createClass({
  mixins: [backboneMixin],

  roomId: function() {
    return this.props.model.id;
  },

  selected: function(e) {
    e.preventDefault();
    actions.selectRoom(this.props.model);
  },

  render: function() {
    var progressStyle = {
      width: '48%'
    }
    return <tr key={this.roomId()}>
      <td className="project-status">
        <span className="label label-primary">Active</span>
      </td>
      <td className="project-title">
        <a href="project_detail.html">{this.props.model.title}</a>
        <br/>
        <small>Created 14.08.2014</small>
      </td>
      <td className="project-actions">
        <a href="#" className="btn btn-white btn-sm"><i className="fa fa-folder"></i>View</a>
        <a href="#" className="btn btn-white btn-sm" onClick={this.selected}><i className="fa fa-pencil"></i>Join</a>
      </td>
    </tr>
  }
});
