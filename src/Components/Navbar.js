import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/user" exact>User</NavLink>
                <NavLink to="/" exact>Watch Lists</NavLink>
                <NavLink to="/" exact>News</NavLink>
            </nav>
        )
    }
}

export default Navbar;