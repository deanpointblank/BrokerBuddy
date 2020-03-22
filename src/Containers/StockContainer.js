import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchStockInfo } from '../Actions/StockActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';
import { addStock } from '../Actions/AddRemoveStockAction';
import { removeStock } from '../Actions/AddRemoveStockAction';
import { NewsItem } from '../Components/StockContainerComponents/StockNews';
import { Redirect } from 'react-router-dom';
import StockChart from '../Components/StockContainerComponents/StockChart';

import { Dropdown, Spinner, Button } from 'react-bootstrap'
import * as I from 'react-icons/md'

class StockConainer extends Component {

    componentDidMount(){
        // this.props.fetchStockInfo(this.props.match.params.stock)
        if(this.props.loggedIn === true){
            this.props.fetchWatchlists(this.props.userEmail, this.props.userToken)
        }
    }

    addRemoveStock = (watchlist) => {
        const stock = this.props.match.params.stock
        
        if(!!watchlist.stocks.find(stockItem => stockItem.symb === stock)){
            
            return (
                <Button variant="outline-danger" onClick={event => this.removeStockFromWatchlist(event, watchlist.id, stock)}><I.MdClear/></Button>
            )
        } else {
            
            return (
                <Button variant="outline-success" onClick={event => this.addStockToWatchlist(event, watchlist.id, stock)}><I.MdAdd/></Button>
            )
        }
    }

    addStockToWatchlist = (event, watchlist, stock) => {
        event.preventDefault()
        console.log('clicked-add')
        this.props.addStock(this.props.userEmail, this.props.userToken, watchlist, stock)
    }
    removeStockFromWatchlist = (event, watchlist, stock) => {
        event.preventDefault()
        console.log('clicked-remove')
        this.props.removeStock(this.props.userEmail, this.props.userToken, watchlist, stock)
    }

    addStockButton = () => {
        if(this.props.watchlistLoading){
            return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )

        } else if(this.props.loggedIn && this.props.watchlists.length !== 0 && !this.props.watchlistLoading){
            
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Add Stock to watchlist
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.watchlists.map(watchlist => {
                            console.log(watchlist)
                            return(
                            <Dropdown.Item>{watchlist.name}{this.addRemoveStock(watchlist)} </Dropdown.Item>
                            )
                        })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }


    // if(!this.props.stocks.includes(stock)){
    //     return <Redirect to={'/404'} />
    // }



    render(){

        const stockInfo = {...this.props.stockInfo}
        const stock = this.props.match.params.stock


        if(this.props.infoLoading === true && this.props.status !== 'ERROR'){
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else if (stockInfo !== {} && this.props.status !== 'ERROR') {
            return(
                <div>
                    <h1>{stockInfo[stock].quote.symbol}
                        <img src={stockInfo[stock].logo.url}/>
                        <span />
                        {this.addStockButton()}
                    </h1>
                    <h3>{stockInfo[stock].quote.companyName}</h3>
                    <ul>
                        <li>stock price: {stockInfo[stock].quote.iexRealtimePrice}</li>
                        <li>percent change during day: {stockInfo[stock].chart[19].changePercent}%</li>
                        <li>percent change after hours</li>
                    </ul>
                    <StockChart data={stockInfo[stock].chart}/>
                    <p>{stockInfo[stock].company.description}</p>
                    <div>
                        <ul className="list-unstyled">
                            { stockInfo[stock].news.map(news => <NewsItem key={news.datetime} news={news}/>) }
                        </ul>
                    </div>
                </div>
            )
        } else if (this.props.status === 'ERROR'){
            return <Redirect to={'/404'} />
        }
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.CurrentUserReducer.email,
        userToken: state.CurrentUserReducer.authentication_token,
        stockInfo: state.StockReducer.stockInfo,
        infoLoading: state.StockReducer.infoLoading,
        watchlists: state.WatchlistsReducer.watchlists,
        watchlistLoading: state.WatchlistsReducer.loading,
        loggedIn: state.CurrentUserReducer.logged_in,
        status: state.StockReducer.status,
        stocks: state.StockReducer.stocks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //fetchStockInfo: (stock) => dispatch(fetchStockInfo(stock)),
        fetchWatchlists: (userEmail, userKey) => dispatch(fetchWatchlists(userEmail, userKey)),
        addStock: (userEmail, userKey, watchlistId, stockSymb) => dispatch(addStock(userEmail, userKey, watchlistId, stockSymb)),
        removeStock: (userEmail, userKey, watchlistId, stockSymb) => dispatch(removeStock(userEmail, userKey, watchlistId, stockSymb))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockConainer);