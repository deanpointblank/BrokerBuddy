import React, { Component } from 'react';
// import CanvasJS from 'canvasjs';
import * as V from 'victory';

export default class StockChart extends Component{
    
    getDate = (date) =>{
        //console.log(`${Number.parseInt(date.slice(0,4), 10)}, ${Number.parseInt(date.slice(5,7), 10)}, ${Number.parseInt(date.slice(8,10, 10))}`)
        return (`${Number.parseInt(date.slice(0,4), 10)}, ${Number.parseInt(date.slice(5,7), 10)}, ${Number.parseInt(date.slice(8,10, 10))}`)
    }

    // formatDate = (date) =>{
    //     return `${date.slice(5,7)}/${date.slice(8,10, 10)}`
    // }

    render(){
        return(
            <div className='w-80 p-3 container'>
                <V.VictoryChart
                    theme={V.VictoryTheme.material}
                    domainPadding={{ x: 15}}
                    scale={{ x: "time" }}
                    minDomain={{ y: 0 }}
                >
                    <V.VictoryAxis 
                        // tickFormat={(t) => {this.formatDate(t)}}
                        tickValues={this.props.data.map(data => new Date(this.getDate(data.date)))}
                        style={{
                            ticks: {stroke: "grey", size: 5},
                            tickLabels: {fontSize: 5, padding: 1, angle: 45}
                        }}
                        fixLabelOverlap
                    />
                    <V.VictoryAxis dependentAxis/>
                    <V.VictoryCandlestick
                        candleColors={{ positive: "#50C878", negative: "#c43a31" }}
                        data={this.props.data.map(data => {
                                return {x: new Date(this.getDate(data.date)), open: data.open, close: data.close, high: data.high, low: data.low}
                                    })
                                }
                    />
                    {/* <V.VictoryLine
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
                    /> */}
                </V.VictoryChart>
            </div>
        )
    }
}
