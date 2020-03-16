import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component{

    checklogin = user =>{
        if(!user){
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
        loggedIn: state.CurrentUserReducer.logged_in,
        watchlists: state.WatchlistsReducer.watchlists,
        watchlistLoading: state.WatchlistsReducer.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);