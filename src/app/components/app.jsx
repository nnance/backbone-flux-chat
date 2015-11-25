import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Body from './body';
import actions from '../../actions/app';
import router from '../../stores/router';

export class App extends Component {
  componentDidMount() {
    actions.appStarted();
  }

  render() {
    return (
      <div>
        <Header />
        <Body model={router}/>
        <Footer />
      </div>
    );
  }
}
