import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Navbar extends Component {
    render(){
        if(this.props.user.authentication_token === ''){
            return (
                <nav>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/watchlist" exact>Watch Lists</NavLink>
                    <NavLink to="/login" exact>Log in</NavLink>
                    <NavLink to="/signup" exact>Sign Up</NavLink>
                </nav>
            )
        } else {
            return (
                <nav>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/user" exact>User</NavLink>
                    <NavLink to="/watchlist" exact>Watch Lists</NavLink>
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