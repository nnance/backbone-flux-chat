import React, { Component } from 'react';
import Backbone from 'backbone';
import Header from './header';
import Footer from './footer';
import Home from '../../home/components/container';
import room from '../../orchestrations/room';

export class App extends Component {
  componentDidMount() {
    Backbone.history.start();
  }

  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
