import React, { Component } from 'react';
import Backbone from 'backbone';
import Header from './header';
import Footer from './footer';
import Router from './router';
import actions from '../../actions/app';
import app from '../../orchestrations/app';
import room from '../../orchestrations/room';

export class App extends Component {
  componentDidMount() {
    actions.appStarted();
  }

  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}
