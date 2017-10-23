import React, { Component } from 'react';
import LeftSide from './left-side';
import RightSide from './right-side';
import './content.css';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <LeftSide />
                <RightSide />
            </div>
        );
    }
}

export default Content;
