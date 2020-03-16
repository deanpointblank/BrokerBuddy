import React, { Component } from 'react';

export default class Stock extends Component{
    render(){
        return (
            <tr>
                <th scope="row">{this.props.stock.symb}</th>
                <td>{this.props.stock.name}</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
            </tr>
        )
    }
}