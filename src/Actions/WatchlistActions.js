export const fetchWatchlists = (userEmail, userKey) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_WATCHLISTS' })
        fetch('http://localhost:3001/watchlists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-User-Email': userEmail,
                'X-User-Token': userKey
            }
        })
        .then(resp => {
            console.log(resp.status)
            return resp.json()})
        .then(resp => dispatch({type: 'ADD_WATCHLISTS', watchlists: resp}))
    }

}

export const addWatchlist = (userEmail, userKey, watchlistName) => {
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
                name: watchlistName
            })
        })
        .then(resp => {
            console.log(resp.status)
            return resp.json()
        })
        .then(resp => dispatch({type: 'ADD_WATCHLISTS', watchlists: resp}))
    }
}

export const deleteWatchlist = (userEmail, userKey, watchlistId) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_WATCHLISTS' })
        fetch(`http://localhost:3001/watchlists/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-User-Email': userEmail,
                'X-User-Token': userKey
            },
            body: JSON.stringify({
                id: watchlistId
            })
        })
        .then(resp => {
            console.log(resp.status)
            return resp.json()
        })
        .then(resp => dispatch({type: 'DELETE_WATCHLISTS', watchlists: resp}))
        .catch((error) =>console.log(error))
    }
}