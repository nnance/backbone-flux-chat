import React from 'react';
import Header from './header';
import Footer from './footer';
import Body from './body';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body {...this.props} {...this.state}/>
        <Footer />
      </div>
    );
  }
}
