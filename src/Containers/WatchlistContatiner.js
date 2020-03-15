import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Stock from '../Components/WatchlistContainerComponents/Stock';
import Watchlists from '../Components/WatchlistContainerComponents/Watchlists';

import { connect } from 'react-redux';

import { addWatchlist } from '../Actions/WatchlistActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';

class WatchlistContainer extends Component {
    constructor(){
        super()
        this.state = {
            watchlistName: ''
        }
    }

    componentDidMount(){
        if(this.props.loggedIn){
            this.props.fetchWatchlists(this.props.userEmail, this.props.userToken)
        }
    }

    addWatchlist = (event) =>{
        event.preventDefault()
        console.log(this.state.watchlistName)
        if(this.props.loggedIn){
            this.props.addWatchlist(this.props.userEmail, this.props.userToken, this.state.watchlist)
        }
    }

    handleChange = (event) =>{
        this.setState({
            watchlistName: event.target.value
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
                            <th scope="col">Symbol</th>
                            <th scope="col">Name</th>
                            <th scope="col">Share Price</th>
                            <th scope="col">MovementToday</th>
                            <th scope="col">MarketCap</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Stock />
                        </tbody>
                    </table>
                    <Watchlists loading={this.props.WatchlistLoading} watchlistsName={this.state.watchlistName} handleChange={this.handleChange} watchlists={this.props.watchlists} addWatchlist={this.addWatchlist}/>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        userEmail: state.CurrentUserReducer.email,
        userToken: state.CurrentUserReducer.authentication_token,
        loggedIn: state.CurrentUserReducer.logged_in,
        watchlists: state.WatchlistsReducer.watchlists,
        watchlistLoading: state.WatchlistsReducer.loading
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        addWatchlist: (userEmail, userKey, watchlistName) => dispatch(addWatchlist(userEmail, userKey, watchlistName)),
        fetchWatchlists: (userEmail, userKey) => dispatch(fetchWatchlists(userEmail, userKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);