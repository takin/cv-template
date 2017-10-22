import React, { Component } from 'react';
import Timeline from './timeline';
import Header from  './header';
import Content from './content';
import RightSide from './right-side';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    let windowHeight = ( window.innerHeight > 600 ) ? window.innerHeight - 4 : 600;
    this.state = {
      windowHeight,
      lineSettings: {
        x1: 150,
        x2: 150,
        y1: 10,
        y2: windowHeight,
        strokeWidth: 2,
        stroke: "rgb(180,180,180)",
      },
      circles: [
        {
          cx: 150,
          cy: 40,
          r: 5,
          fill: "rgb(120,85,180)"
        },{
          cx: 150,
          cy: 180,
          r: 5,
          fill: "rgb(120,155,190)"
        },{
          cx: 150,
          cy: 290,
          r: 5,
          fill: "rgb(120,55,190)"
        },
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('resize', e => {
      let newWindowHeight = window.innerHeight;
      let newHeight = ( newWindowHeight > 600 ) ? newWindowHeight - 4 : 600;
      let lineSettings = this.state.lineSettings;
      lineSettings.y2 = newHeight;
      this.setState({
        windowHeight: newHeight,
        lineSettings
      });
    });
  }
  
  render() {
    return (
      <div>
        <Header />
        <div id="main-container">
          <Content />
          <RightSide />
        </div>
        <Timeline 
          height={this.state.windowHeight} 
          line={this.state.lineSettings} 
          circles={this.state.circles} />
      </div>
    );
  }
}

export default Main;
