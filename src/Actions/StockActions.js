export const fetchStocks = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_STOCKS' })
        fetch('http://localhost:3001/stocks')
        .then(resp => resp.json())
        .then(resp => dispatch({ type: 'ADD_STOCKS', stocks: resp }))
        .catch(error => {
            dispatch({type: 'STOCK_ERROR', status: 'ERROR'})
        })
    }
}

export const fetchStockInfo = (stock) => {
    const url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${stock}&types=quote,news,company,logo,chart&range=1m&last=5&token=Tpk_a0285ceff1fd4669b85e61034145750f`
    return(dispatch) => {
        dispatch({ type: 'GETTING_INFO' })
        fetch(url)
        .then(resp => resp.json())
        .then(resp => dispatch({ type: 'ADD_STOCK_INFO', stockInfo: resp }))
        .catch(error => {
            dispatch({type: 'STOCK_ERROR', status: 'ERROR'})
        })
    }
}