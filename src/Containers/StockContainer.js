import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStockInfo } from '../Actions/StockActions';
import { NewsItem } from '../Components/StockContainerComponents/StockNews';
import StockChart from '../Components/StockContainerComponents/StockChart'

class StockConainer extends Component {

    componentDidMount(){
        this.props.fetchStockInfo(this.props.match.params.stock)
    }

    addStockButton = () => {
        if(this.props.loggedIn){
            return (
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add Stock to watchlist
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={(event)=> console.log(event.target)} >Action</a>
                        <a className="dropdown-item" href="#" onClick={(event)=> console.log(event.target)} >Another action</a>
                        <a className="dropdown-item" href="#" onClick={(event)=> console.log(event.target)} >Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={(event)=> console.log(event.target)} >Separated link</a>
                    </div>
                </div>
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
        stockInfo: state.StockReducer.stockInfo,
        infoLoading: state.StockReducer.infoLoading,
        watchlists: state.WatchlistsReducer.watchlists,
        loggedIn: state.CurrentUserReducer.logged_in
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStockInfo: (stock) => dispatch(fetchStockInfo(stock))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockConainer);