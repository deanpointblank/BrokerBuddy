const WatchlistsReducer = (state = {watchlists: [], loading: false}, action) =>{
    switch(action.type){
        case 'LOADING_WATCHLISTS':
            return {
                ...state,
                watchlists: [...state.watchlists],
                loading: true
            }
        case 'ADD_WATCHLISTS':
            return {
                ...state,
                watchlists: action.watchlists,
                loading: false
            }
        case 'DELETE_WATCHLISTS':
            return {
                ...state,
                watchlists: action.watchlists,
                loading: false
            }
        default:
            return state;
    }
}

export default WatchlistsReducer