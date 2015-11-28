import React from 'react';


export default class Body extends React.Component {
  render() {
    var Component = this.props && this.props.visibleComponent ? this.props.visibleComponent : () => <div/>;
    return <Component />
  }
}
