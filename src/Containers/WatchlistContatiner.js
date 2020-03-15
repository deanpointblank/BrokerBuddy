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
            watchlist: ''
        }
    }

    componentDidMount(){
        if(!!this.props.userEmail){
            this.props.fetchWatchlists(this.props.userEmail, this.props.userToken)
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
                    <Watchlists watchlists={this.state.watchlist} handleChange={this.handleChange}/>

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