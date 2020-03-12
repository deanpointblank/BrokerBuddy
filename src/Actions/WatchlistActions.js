export const fetchWatchlists = (userEmail, userKey) => {
    return(dispatch) => {
        //dispatch({ type: 'LOADING_STOCKS' })
        fetch('http://localhost:3001/watchlist')
        .then(resp => {
            console.log(resp.status)
            return resp.json()})
        .then(resp => console.log(resp))
    }

}

export const addWatchlist = (userEmail, userKey, watchlistName) => {
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
    .then(resp => console.log(resp))
}