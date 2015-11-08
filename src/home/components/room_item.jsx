import React from 'react';
import Backbone from 'backbone';
import actions from '../../actions/room';

module.exports = React.createClass({
  roomId: function() {
    return this.props.model.id;
  },

  selected: function() {
    actions.selectRoom(this.props.model);
  },

  render: function() {
    return <li key={this.roomId()}><a href="#" onClick={this.selected}>{this.props.model.title}</a></li>
  }
});
