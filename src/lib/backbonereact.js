import React from 'react';

var BackboneReact = ComposedComponent => class extends React.Component {
  componentDidMount() {
    [this.props.model, this.props.collection].forEach((store) => {
      if (store) {
        store.on('add remove reset change', () => this.forceUpdate(), this);
        store.on('sync request', () => this.setState({isRequesting: true, hasErrors: false}), this);
        store.on('error', (store, err) => this.setState({isRequesting: false, hasErrors: true, error: err}), this);
        store.on('sync', () => this.setState({isRequesting: false, hasErrors: false}), this);
      }
    });
  }

  componentWillUnmount() {
    [this.props.model, this.props.collection].forEach((store) => {
      if (store) {
        store.off(null, null, this);
      }
    });
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
};

export default BackboneReact;
