import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    render() {
        let content = ["CTO PT NST", "CTO PlayfulDev"].map(item => {
            return <li>{item}</li>
        })
        return (
            <div id="content">
                <div class="time-container">2017 - present</div>
                <div class="content-container">
                    <ul>{content}</ul>
                </div>
            </div>
        );
    }
}

export default Content;
