import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../../Actions/UserActions'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        console.log("Submit!")
        this.props.login(this.state.email, this.state.password)
    }

    render(){
        return(
            <form onSubmit={event => this.handleOnSubmit(event)}>
                <label>Email</label>
                <input type='email' name='email' value={this.state.email} onChange={event => this.handleOnChange(event)}/>
                <br />
                <label>Password</label>
                <input type='password' name='password' value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                <br />
                <input type='submit'/>
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return {
        state
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);