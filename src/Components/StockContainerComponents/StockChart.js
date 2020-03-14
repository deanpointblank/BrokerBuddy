import React, { Component } from 'react';
import * as V from 'victory';

export default class StockChart extends Component{  

    render(){
        return(
            <div>
                <h1>CHART IN PROG</h1>
                <V.VictoryChart
                minDomain={{ y: 0 }}
                >
                    <V.VictoryLine
                        interpolation='linear'
                        data={this.props.data.map(data => {
                            return {x: data.date, y: data.close}
                            })
                        }
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                          }}
                    />
                    <V.VictoryScatter
                        data={this.props.data.map(data => {
                            return {x: data.date, y: data.close}
                            })
                        }
                        size={1}
                        style={{ data: { fill: "#c43a31" } }}
                    />
                </V.VictoryChart>
            </div>
        )
    }
}
