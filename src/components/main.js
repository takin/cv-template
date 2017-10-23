import React, { Component } from 'react';
import Header from  './header';
import Content from './content';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div id="main-container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Main;
