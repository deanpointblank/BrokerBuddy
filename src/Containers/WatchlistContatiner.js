import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Stock from '../Components/Stock';

import { connect } from 'react-redux';

import { addWatchlist } from '../Actions/WatchlistActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';

class WatchlistContainer extends Component {
    constructor(){
        super()
        this.state = {
            watchlist: ''
        }
    }



    addWatchlist = (event) =>{
        event.preventDefault()
        console.log(this.state.watchlist)
        this.props.addWatchlist(this.props.userEmail, this.props.userToken, this.state.watchlist)
    }

    handleChange = (event) =>{
        this.setState({
            watchlist: event.target.value
        })
    }


    render(){
        return(
            <div className="container">
                <h1>This is the Stock Watchlist page</h1>
                <div className="row">
                    <table className="table col-8">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Stock />
                        </tbody>
                    </table>

                    <ul className="nav flex-column">
                        <li className="input-group mb-3 nav-item">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Watchlist name" 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2" 
                                value = {this.state.watchlist}
                                onChange={event => this.handleChange(event)}
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
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        userEmail: state.CurrentUserReducer.email,
        userToken: state.CurrentUserReducer.authentication_token,
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        addWatchlist: (userEmail, userKey, watchlistName) => dispatch(addWatchlist(userEmail, userKey, watchlistName)),
        fetchWatchlists: (userEmail, userKey) => dispatch(fetchWatchlists(userEmail, userKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);