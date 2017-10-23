import React, { Component } from 'react';
import './timeline.css'

export default class Timeline extends Component {
  render() {
    let circles = this.props.circles.map((circle, index) => {
        return <circle key={index} {...circle} />
    })
    return (
      <div id="timeline">
        <svg id="timeline-svg" height={this.props.height}>
          <line {...this.props.line} />
          {circles}
        </svg>
      </div>
    )
  }
}
