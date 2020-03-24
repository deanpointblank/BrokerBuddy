import React, { Component } from 'react';

export default class Watchlists extends Component{

    render(){

        
        if(this.props.loading){

           return(
                <ul className="nav flex-column">
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </ul>
            ) 
        } else {

            return(
                <ul className="nav flex-column">
                    <li className="input-group mb-3 nav-item">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Watchlist name" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" 
                            value = {this.props.watchlistName}
                            onChange={event => this.props.handleChange(event)}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button" 
                                id="button-addon2" 
                                onClick={(event) => this.props.addWatchlist(event)}>
                                 Add Watchlist
                            </button>
                        </div>
                    </li>
                    {
                        this.props.watchlists.map(list => 
                            <li key={list.id} className="nav-item">
                                <a 
                                    className="nav-link active"
                                    onClick={() => this.props.setWatchlist(list)}>
                                        {list.name}
                                        <button 
                                        type="button" 
                                        className="close" 
                                        aria-label="Close" 
                                        onClick={() =>this.props.deleteList(list.id)}>
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                </a>
                            </li>
                        )
                    }
                </ul>
            )
        }
    }
}