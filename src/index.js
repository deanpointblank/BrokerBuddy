import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { allReducers } from './Reducers/index'

import Navbar from './Components/Navbar'
import UserContainer from './Containers/UserContainer';
import Login from './Containers/LogInRegister/LogIn'
import Register from './Containers/LogInRegister/Register'
import WatchlistContainer from './Containers/WatchlistContatiner'

const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/user" component={UserContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/watchlist" component={WatchlistContainer} />
        </Router>
    </Provider>, 
    document.getElementById('root'));
























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
