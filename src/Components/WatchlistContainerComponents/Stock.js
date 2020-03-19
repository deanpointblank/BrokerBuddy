import React, { Component } from 'react';
import * as I from 'react-icons/md'

export default class Stock extends Component{
    render(){
        return (
            <tr>
                <th scope="row">{this.props.stock.symb}</th>
                <td>{this.props.stock.name}</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>
                    <I.MdClear
                        onClick={event => {
                            event.preventDefault()
                            this.props.removeStock(this.props.user, this.props.token, this.props.watchlist.id, this.props.stock.symb)
                            this.props.remove(this.props.stock)
                        }}
                    />
                </td>
            </tr>
        )
    }
}