const StockReducer = (state = {stocks: [], loading: false, stockInfo: [], infoLoading: true}, action) =>{
    switch(action.type){
        case 'LOADING_STOCKS':
            return {
                ...state,
                stocks: [...state.stocks],
                loading: true
            }
        case 'ADD_STOCKS':
            return {
                ...state,
                stocks: action.stocks,
                loading: false
            }
        case 'GETTING_INFO':
            return {
                ...state,
                stockInfo: [...state.stockInfo],
                infoLoading: true
            }
        case 'ADD_STOCK_INFO':
            return {
                ...state,
                stockInfo: action.stockInfo,
                infoLoading: false
            }
        default:
            return state;
    }
}

export default StockReducer

