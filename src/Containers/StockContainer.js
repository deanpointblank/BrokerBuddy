import React, { Component } from 'react';
import { connect } from 'react-redux'

class StockConainer extends Component {

    componentDidMount(){

        //this.props.fetchStocksInfo()

    }


    render(){
        return(
            <div>
                <h1>{this.props.match.params.stock}</h1>
                <ul>
                    <li>stock price</li>
                    <li>percent change during day</li>
                    <li>percent change after hours</li>
                </ul>
                <h1>Graph Component</h1>
                <p>About</p>
                <div>
                    <h2>News Component</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStocksInfo: () => dispatch()
    }
}

export default connect(null, null)(StockConainer);