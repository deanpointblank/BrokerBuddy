export const addStock = (userEmail, userKey, watchlistId, stockSymb) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_WATCHLISTS' })
        fetch('http://localhost:3001//watchlist_stocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-User-Email': userEmail,
                'X-User-Token': userKey
            },
            body: JSON.stringify({
                watchlistId: watchlistId,
                stockSymb: stockSymb
            })
        })
        .then(resp => {
            console.log(resp.status)
            return resp.json()
        })
        .then(resp => dispatch({type: 'ADD_WATCHLISTS', watchlists: resp}))
    }
}

export const removeStock = (userEmail, userKey, watchlistStockId) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_WATCHLISTS' })
        fetch('http://localhost:3001/watchlists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-User-Email': userEmail,
                'X-User-Token': userKey
            },
            body: JSON.stringify({
                watchlistStock: watchlistStockId
            })
        })
        // .then(resp => {
        //     console.log(resp.status)
        //     return resp.json()
        // })
        // .then(resp => dispatch({type: 'ADD_WATCHLISTS', watchlists: resp}))
    }
}