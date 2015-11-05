import React from 'react';

module.exports = React.createClass({
  render: function() {
    return <li key={this.props.model.cid}>{this.props.model.title}</li>
  }
});
