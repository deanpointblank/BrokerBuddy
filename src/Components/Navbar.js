import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../CSS/Images/rocket-19706.png';
import NavSearch from './NavSearch';

class Navbar extends Component {
    render(){
        if(this.props.user.logged_in === false){
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/" exact className="navbar-brand">
                        <img src={require("../CSS/Images/rocket-19706.png")} width="30" height="30" alt="logo" />
                        BrokerBuddy
                    </NavLink>
                    <div className="nav-item"><NavLink to="/watchlist" exact className="nav-link">Watch Lists</NavLink></div>
                    <div className="nav-item"><NavLink to="/login" exact className="nav-link">Log in</NavLink></div>
                    <div className="nav-item"><NavLink to="/signup" exact className="nav-link">Sign Up</NavLink></div>
                    <NavSearch />
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/" exact className="navbar-brand">
                        <img src={require("../CSS/Images/rocket-19706.png")} width="30" height="30" alt="logo" />
                        BrokerBuddy
                    </NavLink>
                    <div className="nav-item"><NavLink to="/user" exact className="nav-link">User</NavLink></div>
                    <div className="nav-item"><NavLink to="/watchlist" exact className="nav-link">Watch Lists</NavLink></div>
                    <div className="nav-item"><NavLink to="/logout" exact className="nav-link">Log Out</NavLink></div>
                    <NavSearch />
                </nav>
            )
        }
    }
}

const mapStateToProps = state => {
    return{
        user: state.CurrentUserReducer
    }
}

export default connect(mapStateToProps)(Navbar);