import { combineReducers } from 'redux';
import reducerActiveUser from './reducer-active-user'


export const allReducers = combineReducers({
    activeUser: reducerActiveUser
})