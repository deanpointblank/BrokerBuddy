import { combineReducers } from 'redux';
import userReducer from './UserReducer'


export const allReducers = combineReducers({
    userReducer: userReducer
})