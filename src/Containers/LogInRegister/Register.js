import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmedPassword: ''
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
                <label>First Name</label>
                <input type='text' name='firstName' value={this.state.firstName} onChange={event => this.handleOnChange(event)}/>
                <label>Last Name</label>
                <input type='text' name='lastName' value={this.state.lastName} onChange={event => this.handleOnChange(event)}/>
                <br/>
                <label>Password</label>
                <input type='password' name='password' value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                <label>Comfirm Password</label>
                <input type='password' name='confirmedPassword' value={this.state.confirmedPassword} onChange={event => this.handleOnChange(event)}/>
                <br />
                <input type='submit' />
            </form>
        )
    }
}

export default Register;