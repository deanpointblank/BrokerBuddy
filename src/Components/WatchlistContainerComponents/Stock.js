import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as I from 'react-icons/md'

export default class Stock extends Component{
    render(){
        return (
            <tr>
                <th scope="row">{this.props.stock.symb}</th>
                <td>{this.props.stock.name}</td>
                <td><Button onClick={event => this.props.fetch(event, this.props.stock.symb)}>See More</Button></td>
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