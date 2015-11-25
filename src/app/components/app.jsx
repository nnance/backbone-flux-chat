import React, { Component } from 'react';
import Backbone from 'backbone';
import Header from './header';
import Footer from './footer';
import Router from './router';
import actions from '../../actions/app';
import app from '../../orchestrations/app';
import room from '../../orchestrations/room';
import router from '../../stores/router';

export class App extends Component {
  componentDidMount() {
    actions.appStarted();
  }

  render() {
    return (
      <div>
        <Header />
        <Router model={router}/>
        <Footer />
      </div>
    );
  }
}
