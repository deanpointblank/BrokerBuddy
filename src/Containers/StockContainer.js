import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStockInfo } from '../Actions/StockActions';
import { fetchWatchlists } from '../Actions/WatchlistActions';
import { NewsItem } from '../Components/StockContainerComponents/StockNews';
import StockChart from '../Components/StockContainerComponents/StockChart';

import { Dropdown, Spinner } from 'react-bootstrap'

class StockConainer extends Component {

    componentDidMount(){
        this.props.fetchStockInfo(this.props.match.params.stock)
        this.props.fetchWatchlists(this.props.userEmail, this.props.userToken)

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
                            return(
                                <Dropdown.Item href="#" onClick={(event)=> console.log(event.target)} >{watchlist.name}</Dropdown.Item>
                            )
                        })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }



    render(){

        const stockInfo = {...this.props.stockInfo}
        const stock = this.props.match.params.stock

        if(this.props.infoLoading === true){
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else {
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
        loggedIn: state.CurrentUserReducer.logged_in
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStockInfo: (stock) => dispatch(fetchStockInfo(stock)),
        fetchWatchlists: (userEmail, userKey) => dispatch(fetchWatchlists(userEmail, userKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockConainer);