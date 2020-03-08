import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import CurrentUserReducer from './CurrentUserReducer'


export const allReducers = combineReducers({
    userReducer: userReducer,
    CurrentUserReducer: CurrentUserReducer
})