import React from 'react';
import BackboneReact from '../../lib/backbonereact';


class Body extends React.Component {
  render() {
    var EmptyDiv = React.createClass({
      render: function() {
        return <div/>
      }
    });
    var Component = this.props.model && this.props.model.visibleComponent || EmptyDiv;

    return <Component />
  }
}

export default BackboneReact(Body);
