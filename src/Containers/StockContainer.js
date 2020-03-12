import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStockInfo } from '../Actions/StockActions';
import { NewsItem } from '../Components/StockContainerComponents/StockNews';
import StockChart from '../Components/StockContainerComponents/StockChart'

class StockConainer extends Component {

    componentDidMount(){
        this.props.fetchStockInfo(this.props.match.params.stock)
    }


    render(){

        const stockInfo = {...this.props.stockInfo}
        const stock = this.props.match.params.stock
        if(this.props.infoLoading === true){
            return(
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>{stockInfo[stock].quote.symbol} <img src={stockInfo[stock].logo.url}/> <button type="button" className="btn btn-outline-primary" onClick={(event)=> console.log(event.type)}>Add Stock to watchlist</button></h1>
                    <h3>{stockInfo[stock].quote.companyName}</h3>
                    <ul>
                        <li>stock price: {stockInfo[stock].quote.iexRealtimePrice}</li>
                        <li>percent change during day: {stockInfo[stock].chart[19].changePercent}%</li>
                        <li>percent change after hours</li>
                    </ul>
                    <StockChart data={stockInfo[stock].chart}/>
                    <p>{stockInfo[stock].company.description}</p>
                    <div>
                        <ul class="list-unstyled">
                            { stockInfo[stock].news.map(news => <NewsItem news={news}/>) }
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
        infoLoading: state.StockReducer.infoLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStockInfo: (stock) => dispatch(fetchStockInfo(stock))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockConainer);