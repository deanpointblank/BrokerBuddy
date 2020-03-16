import React, { Component } from 'react';

import { connect } from 'react-redux';
import { logout } from '../../Actions/UserActions'

class Logout extends Component{

    checklogin = user =>{
        if(!user){
            this.props.history.push('/')
        } else {
            this.props.logout(this.props.userEmail, this.props.userToken)
            this.props.history.push('/')
        }
    }


    render(){
        {this.checklogin(this.props.loggedIn)}
        return(
            <div>
                <h1>This is the log out page</h1>
            </div>
        
        )
    }
}


const mapStateToProps = state =>{
    return {
        userEmail: state.CurrentUserReducer.email,
        userToken: state.CurrentUserReducer.authentication_token,
        loggedIn: state.CurrentUserReducer.logged_in
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        logout: (email, password) => dispatch(logout(email, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);