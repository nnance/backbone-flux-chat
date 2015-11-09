import React, { Component } from 'react';
import Backbone from 'backbone';
import Header from './header';
import Footer from './footer';


export class App extends Component {
  componentDidMount() {
    Backbone.history.start();
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
