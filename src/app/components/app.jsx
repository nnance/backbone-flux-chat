import React from 'react';
import Header from './header';
import Footer from './footer';
import Body from './body';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body {...this.state}/>
        <Footer />
      </div>
    );
  }
}
