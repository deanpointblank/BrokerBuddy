import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { allReducers } from './Reducers/index'

import Navbar from './Components/Navbar'
import UserContainer from './Containers/UserContainer';
import Login from './Containers/LogInRegister/LogIn';
import Logout from './Containers/LogInRegister/Logout';
import Register from './Containers/LogInRegister/Register';
import WatchlistContainer from './Containers/WatchlistContatiner';
import StockConainer from './Containers/StockContainer';
import NotFound from './Components/NotFound';

const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/user" component={UserContainer} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/watchlist" component={WatchlistContainer} />
                <Route exact strict path="/stock/:stock" component={StockConainer} />
                <Route exact path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));
























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
