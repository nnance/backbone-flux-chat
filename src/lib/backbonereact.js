import React from 'react';

var getBindings = function(bbreact) {
  var results = [];
  if (bbreact.bindings) {
    let bindingsFunc = bbreact.bindings.bind(bbreact);
    results = Array.isArray(bindingsFunc()) ? bindingsFunc() : [bindingsFunc()];
  }
  return results;
}

var BackboneReact = BackboneReactComponent => class extends React.Component {
  componentDidMount() {
    getBindings(this.refs.bbreact).forEach((store) => {
      store.on('add remove reset change', () => this.forceUpdate(), this);
      store.on('sync request', () => this.setState({isRequesting: true, hasErrors: false}), this);
      store.on('error', (store, err) => this.setState({isRequesting: false, hasErrors: true, error: err}), this);
      store.on('sync', () => this.setState({isRequesting: false, hasErrors: false}), this);
    });
  }

  componentWillUnmount() {
    getBindings(this.refs.bbreact).forEach((store) => {
      store.off(null, null, this);
    });
  }

  render() {
    return <BackboneReactComponent ref="bbreact" {...this.props} {...this.state} />;
  }
};

export default BackboneReact;
