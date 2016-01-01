import React from 'react';
import Header from '../components/app_header';
import Footer from '../components/app_footer';
import Body from '../components/app_body';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
