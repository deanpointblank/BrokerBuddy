const StockReducer = (state = {stocks: [], loading: false, stockInfo: [], infoLoading: true, status: ''}, action) =>{
    switch(action.type){
        case 'LOADING_STOCKS':
            return {
                ...state,
                stocks: [...state.stocks],
                loading: true,
                status: null
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
                stockInfo: {},
                infoLoading: true,
                status: null
            }
        case 'LOADING_INFO_TRUE':
            return {
                ...state,
                infoLoading: true
            }
        case 'ADD_STOCK_INFO':
            return {
                ...state,
                stockInfo: action.stockInfo,
                infoLoading: false
            }
        case 'STOCK_ERROR':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default StockReducer

