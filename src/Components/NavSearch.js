import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStocks } from '../Actions/StockActions'

class NavSearch extends Component{
    constructor(){
        super();
        this.state = {
            search: '',
            suggestions: []
        }
    }


    componentDidMount(){
        this.props.fetchStocks()
    }

    handleChange(event){
        this.setState({
            search: event.target.value
        })
        
    }

    render(){
        return(
            <form className="form-inline" autoComplete='off'>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Stocks"
                    aria-label="Search"
                    value = {this.state.search}
                    onChange={event => this.handleChange(event)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        stocks: state.stocks,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch)