import React, { Component } from 'react';

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

export default Login;