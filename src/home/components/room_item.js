import React from 'react';
import Backbone from 'backbone';

module.exports = React.createClass({
  roomId: function() {
    return this.props.model.id;
  },

  selected: function() {
    Backbone.history.navigate('#room/' + this.roomId());
  },

  render: function() {
    return <li key={this.roomId()}><a href="#" onClick={this.selected}>{this.props.model.title}</a></li>
  }
});
