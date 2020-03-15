import React, { Component } from 'react';

export default class Watchlists extends Component{
    render(){
        return(
            <ul className="nav flex-column">
                <li className="input-group mb-3 nav-item">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Watchlist name" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2" 
                        value = {this.props.watchlist}
                        onChange={event => this.props.handleChange(event)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(event) => this.addWatchlist(event)}>Add Watchlist</button>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        )
    }
}