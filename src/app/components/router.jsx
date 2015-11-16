import React from 'react';
import backboneReact from 'backbone-react-component';
import router from '../../stores/router';

module.exports = React.createClass({
  componentWillMount: function() {
    backboneReact.on(this, {
      models: {
        router: router
      }
    });
  },

  componentWillUnmount: function() {
    backboneReact.off(this);
  },

  render: function() {
    var EmptyDiv = React.createClass({
      render: function() {
        return <div/>
      }
    });
    var Component = this.state.router.visibleComponent || EmptyDiv;

    return <Component />
  }
});
