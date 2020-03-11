import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStocks } from '../Actions/StockActions'
import { Redirect } from 'react-router-dom'


class NavSearch extends Component{
    constructor(){
        super();
        this.state = {
            search: '',
            suggestions: [],
            completeSearch: false
        }
    }


    componentDidMount(){
        this.props.fetchStocks()
    }

    handleChange(event){
        let suggestions = []
        if(event.target.value.length > 0){
            const regex = new RegExp(`^${this.state.search}`, 'i')
            const symb = this.props.stocks.sort().filter(stock => regex.test(stock.symb))
            const name = this.props.stocks.sort().filter(stock => regex.test(stock.name))
            suggestions = symb.concat(name)
        }
        this.setState({
            search: event.target.value,
            suggestions: suggestions
        })
    }

    isLoading(){
        if(this.props.loading === true){
            return(
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            )
        }
    }

    handleOnSubmit(event){
        event.preventDefault()
        this.setState({
            completeSearch: true
        })
    }

    render(){

        if (this.state.completeSearch === true){
            const stock = this.state.search
            this.setState({
                search: "",
                suggestions: [],
                completeSearch: false
            })
            return <Redirect to={`/stock/${stock}`} />
        }

        return (
            <form onSubmit={event => this.handleOnSubmit(event)} className="form-inline" autoComplete='off'>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Stocks"
                    aria-label="Search"
                    value = {this.state.search}
                    onChange={event => this.handleChange(event)}
                    list = "stocks"
                />
                <datalist id="stocks">
                    {this.state.suggestions.slice(0, 4).map( (stock) =>
                        <option key={stock.id} value={stock.symb}>{stock.name}</option>
                    )}
                </datalist>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                {this.isLoading()}
                    Search
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        stocks: state.StockReducer.stocks,
        loading: state.StockReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch)