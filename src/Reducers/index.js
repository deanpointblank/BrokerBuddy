import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import CurrentUserReducer from './CurrentUserReducer'
import RegistrationsStatusReducer from './RegistrationStatusReducer'
import StockReducer from './StockReducer'


export const allReducers = combineReducers({
    userReducer: userReducer,
    CurrentUserReducer: CurrentUserReducer,
    RegistrationsReducer: RegistrationsStatusReducer,
    StockReducer: StockReducer
})