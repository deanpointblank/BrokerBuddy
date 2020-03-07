import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { allReducers } from './Reducers/index'

import Navbar from './Components/Navbar'
import UserContainer from './Containers/UserContainer';

const store = createStore(allReducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/user" component={UserContainer} />
        </Router>
    </Provider>, 
    document.getElementById('root'));
























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
