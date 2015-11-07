import React from 'react';
import Backbone from 'backbone';
import constants from '../../constants/room';

module.exports = React.createClass({
  roomId: function() {
    return this.props.model.id;
  },

  selected: function() {
    Backbone.trigger(constants.ROOM_SELECTED, this.props.model);
  },

  render: function() {
    return <li key={this.roomId()}><a href="#" onClick={this.selected}>{this.props.model.title}</a></li>
  }
});
