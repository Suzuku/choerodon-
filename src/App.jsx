import React, { Component,Fragment } from 'react';

import Header from './Components/Header/index.jsx';
import Banner from "./Components/Banner/index.jsx";
import Content from'./Components/Content/index.jsx'
import Footer from "./Components/Footer/index.jsx";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}
