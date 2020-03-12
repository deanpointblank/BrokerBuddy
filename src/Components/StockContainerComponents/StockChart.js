import React, { Component } from 'react';
import * as V from 'victory';

export default class StockChart extends Component{  

    data = () => {
        this.props.data.map(data => {
            console.log({x: data.close, y: data.date})
            return  {x: data.date, y: data.close}
        })
    }

    render(){

        console.log(this.data)

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
