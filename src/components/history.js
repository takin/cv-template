import React, { Component } from 'react';
import './history.css';
import FontAwesome from 'react-fontawesome';

class History extends Component {
    render() {
        let itemData = this.props.data.map((data, index) => {
            return(
                <div></div>
            )
        })
        return (
            <div class="history-item">
                <div className="section-container">
                    <div className="section-icon">
                        <FontAwesome name={this.props.section.icon} />
                    </div>
                    <div className="section-title">
                        {this.props.section.name}
                    </div>
                </div>
                <div className="history-container">
                    {itemData}
                </div>
            </div>
        );
    }
}

export default History;
