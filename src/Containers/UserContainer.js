import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../Actions/RegisterActions';
import { Button } from 'react-bootstrap'
import { NavLink, Redirect } from 'react-router-dom';

class UserContainer extends Component {

    deleteAccount = (event) =>{
        event.preventDefault()
        this.props.deleteAccount(this.props.userEmail, this.props.userToken)
    }

    render(){
        if(this.props.loggedIn === false){
            return <Redirect to={`/`} />
        }

        return(
            <div>
                <h1>This is the Users main page</h1>
                <Button onClick={event =>this.deleteAccount(event)}>DELETE ACCOUNT</Button>
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
        deleteAccount: (userEmail, userKey) => dispatch(deleteUser(userEmail, userKey)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);