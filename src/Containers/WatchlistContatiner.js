import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Stock from '../Components/WatchlistContainerComponents/Stock';
import Watchlists from '../Components/WatchlistContainerComponents/Watchlists';


import { connect } from 'react-redux';

import { addWatchlist } from '../Actions/WatchlistActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';
import { deleteWatchlist } from '../Actions/WatchlistActions';
import { removeStock } from '../Actions/AddRemoveStockAction';
import { fetchStockInfo } from '../Actions/StockActions'

class WatchlistContainer extends Component {
    constructor(){
        super()
        this.state = {
            watchlistName: '',
            currentWatchlist: [],
            stock: '',
            fetched: false
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

    remove = (stock) =>{
        let watchlistReset = this.state.currentWatchlist.stocks.filter(watchlistStock => watchlistStock !== stock)
        this.setState({
            currentWatchlist: {
                ...this.state.currentWatchlist,
                stocks: watchlistReset
            }
        })
    }

    setCurrentWatchlist = (list) =>{

        this.setState({
            currentWatchlist: list
        })
    }

    fetch = (event, stock) =>{
        event.preventDefault()
        this.setState({
            stock: stock,
            fetched: true
        })
        this.props.fetchStockInfo(stock)
    }




    render(){

        let header = this.state.currentWatchlist.name ||  'Watchlists'
        let stocks = this.state.currentWatchlist.stocks || []

        if (this.state.fetched === true){          
            this.setState({
                fetched: false
            })

            return <Redirect to={`/stock/${this.state.stock}`} />
        }

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
                <h1>{header}</h1>
                <div className="row">
                    <table className="table col-8">
                        <thead>
                            <tr>
                            <th scope="col">Symbol</th>
                            <th scope="col">Name</th>
                            <th scope="col">Stock Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            { stocks.map(stock => 
                            <Stock
                                stock={stock}
                                removeStock={this.props.removeStock}
                                watchlist={this.state.currentWatchlist}
                                user={this.props.userEmail}
                                token={this.props.userToken}
                                key={stock.id}
                                remove={this.remove}
                                fetch={this.fetch}
                            />
                             ) }
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
                        currentWatchlist={this.state.currentWatchlist}

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
        fetchStockInfo: (stock) => dispatch(fetchStockInfo(stock)),
        deleteWatchlist: (userEmail, userKey, watchlistId) => dispatch(deleteWatchlist(userEmail, userKey, watchlistId)),
        removeStock: (userEmail, userKey, watchlistId, stockId) => dispatch(removeStock(userEmail, userKey, watchlistId, stockId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);