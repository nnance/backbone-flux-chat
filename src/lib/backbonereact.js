import React from 'react';

var events = 'add remove reset change';

var BackboneReact = ComposedComponent => class extends React.Component {
  componentDidMount() {
    if (this.props.model) {
      this.props.model.on(events, () => this.forceUpdate(), this);
    }
    if (this.props.collection) {
      this.props.collection.on(events, () => this.forceUpdate(), this);
    }
  }

  componentWillUnmount() {
    if (this.props.model) {
      this.props.model.off(null, null, this);
    }
    if (this.props.collection) {
      this.props.collection.off(null, null, this);
    }
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
};

export default BackboneReact;
