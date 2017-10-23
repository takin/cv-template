import React, { Component } from 'react';
import Timeline from './timeline';
import History from './history';
import './left-side.css';

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: window.innerHeight,
            lineSettings: {
              x1: 180,
              x2: 180,
              y1: 10,
              y2: window.innerHeight,
              strokeWidth: 2,
              stroke: "rgb(180,180,180)",
            },
            circles: [
              {
                cx: 180,
                cy: 75,
                r: 5,
                fill: "rgb(120,85,180)"
              },{
                cx: 180,
                cy: 180,
                r: 5,
                fill: "rgb(120,155,190)"
              },{
                cx: 180,
                cy: 290,
                r: 5,
                fill: "rgb(120,55,190)"
              },
            ],
            data:[{
                section:{
                    name:'Experience',
                    icon:'star'
                },
                data: [{
                    title:'Chief Technology Officer',
                    company:'PT Nusantara Sukses Teknologi',
                    roles:[
                        "Designing Product Infrastructure",
                        "Design and Managing Apps Development",
                        "Recruiting IT Talent"
                    ],
                    year:{
                        start:2017,
                        end:null
                    }
                }, {
                    title:'Chief Technology Officer',
                    company:'CV Vector Inti Persada',
                    roles:[
                        "Managing IT Infrastructure",
                        "Design and Create Apps"
                    ],
                    year:{
                        start:2015,
                        end:2016
                    }
                }]},{
                    section:{
                        name:'Achivement',
                        icon:'star'
                    },
                    data:[{}],
                }, {
                    section:{
                        name:'Education',
                        icon:'star'
                    },
                    data:[{}]
                }
            ]
        }
    }
    render() {
        let history = this.state.data.map((item, index) => {
            return <History section={item.section} data={item.data} />
        });
        return (
            <div id="left-side">
                <div>
                    <Timeline line={this.state.lineSettings} circles={this.state.circles} height={this.state.windowHeight} />
                    <div id="history">
                        {history}
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSide;
