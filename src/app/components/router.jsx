import React from 'react';
import backboneMixin from 'backbone-react-component';

module.exports = React.createClass({
  mixins: [backboneMixin],

  render: function() {
    var EmptyDiv = React.createClass({
      render: function() {
        return <div/>
      }
    });
    var Component = this.props.model && this.props.model.visibleComponent || EmptyDiv;

    return <Component />
  }
});
