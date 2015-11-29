/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import App from './components/app';
import actions from '../actions/app';


class AppController {
  constructor() {
    Backbone.on(actions.APP_SHOW_COMPONENT, this.showComponent, this);
  }

  remove() {
    Backbone.off(null, null, this);
  }

  showApp() {
    this.appComponent = ReactDOM.render(<App />, document.getElementById('root'));
    Backbone.history.start({ pushState: true });
  }

  showComponent(component) {
    this.appComponent.setState({visibleComponent: component});
  }

}

module.exports = new AppController();
