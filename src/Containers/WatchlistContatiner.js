import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Stock from '../Components/WatchlistContainerComponents/Stock';
import Watchlists from '../Components/WatchlistContainerComponents/Watchlists';

import { connect } from 'react-redux';

import { addWatchlist } from '../Actions/WatchlistActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';
import { deleteWatchlist } from '../Actions/WatchlistActions'

class WatchlistContainer extends Component {
    constructor(){
        super()
        this.state = {
            watchlistName: '',
            currentWatchlist: []
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
            this.props.addWatchlist(this.props.userEmail, this.props.userToken, this.state.watchlistName)
        }
        this.setState({
            watchlistName: ''
        })
    }

    deleteList = (id) =>{
        if(this.props.loggedIn){
            this.props.deleteWatchlist(this.props.userEmail, this.props.userToken, id)
        }
    }

    handleChange = (event) =>{
        this.setState({
            watchlistName: event.target.value
        })
    }

    setCurrentWatchlist = (list) =>{
        this.setState({
            currentWatchlist: list
        })
    }

    // seeWatchlist = () => {
    //    if(this.props.loggedIn && this.props.watchlists.length !== 0 ){
    //        return(
    //            {}
    //        )
    //    } else {
    //        return(
    //            {}
    //        )
    //    }
    // }


    render(){


        if(this.props.WatchlistLoading){

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
                    <Watchlists
                        loading={this.props.WatchlistLoading}
                        watchlistName={this.state.watchlistName}
                        handleChange={this.handleChange}
                        watchlists={this.props.watchlists}
                        addWatchlist={this.addWatchlist}
                        deleteList={this.deleteList}
                        setWatchlist={this.setCurrentWatchlist}
                    />

                </div>
            </div>
        )}
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
        fetchWatchlists: (userEmail, userKey) => dispatch(fetchWatchlists(userEmail, userKey)),
        deleteWatchlist: (userEmail, userKey, watchlistId) => dispatch(deleteWatchlist(userEmail, userKey, watchlistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);