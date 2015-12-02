import React from 'react';

var getListenToItems = function(bbreact) {
  var results = [];
  if (bbreact.listenTo) {
    let listenToFunc = bbreact.listenTo.bind(bbreact);
    results = Array.isArray(listenToFunc()) ? listenToFunc() : [listenToFunc()];
  }
  return results;
}

var BackboneReact = BackboneReactComponent => class extends React.Component {
  componentDidMount() {
    getListenToItems(this.refs.bbreact).forEach((store) => {
      store.on('add remove reset change', () => this.forceUpdate(), this);
      store.on('sync request', () => this.setState({isRequesting: true, hasErrors: false}), this);
      store.on('error', (store, err) => this.setState({isRequesting: false, hasErrors: true, error: err}), this);
      store.on('sync', () => this.setState({isRequesting: false, hasErrors: false}), this);
    });
  }

  componentWillUnmount() {
    getListenToItems(this.refs.bbreact).forEach((store) => {
      store.off(null, null, this);
    });
  }

  render() {
    return <BackboneReactComponent ref="bbreact" {...this.props} {...this.state} />;
  }
};

export default BackboneReact;
