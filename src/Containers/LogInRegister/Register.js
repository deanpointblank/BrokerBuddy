import React, { Component } from 'react';

import { connect } from 'react-redux';
import { register } from '../../Actions/RegisterActions'


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
        this.props.register(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
    }

    render(){
        return(
            <form onSubmit={event => this.handleOnSubmit(event)}>
                <div className='form-group'>
                <label for='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={event => this.handleOnChange(event)}
                    id="email"
                    className='form-control'
                />
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for='firstName'>First Name</label>
                        <input 
                            type='text' 
                            name='firstName' 
                            value={this.state.firstName} 
                            onChange={event => this.handleOnChange(event)}
                            id="firstName"
                            className='form-control'
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label for='lastName'>Last Name</label>
                        <input 
                            type='text' 
                            name='lastName' 
                            value={this.state.lastName} 
                            onChange={event => this.handleOnChange(event)}
                            id="lastName"
                            className='form-control'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for='password'>Password</label>
                        <input 
                            type='password' 
                            name='password' 
                            value={this.state.password} 
                            onChange={event => this.handleOnChange(event)}
                            id="password"
                            className='form-control'
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label for='confirmPassowrd'>Comfirm Password</label>
                        <input 
                            type='password' 
                            name='confirmedPassword' 
                            value={this.state.confirmedPassword} 
                            onChange={event => this.handleOnChange(event)}
                            id="confirmPassowrd"
                            className='form-control'
                        />
                    </div>
                </div>
                <input type='submit' className="btn btn-primary" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        register: (email, password, firstName, lastName) => dispatch(register(email, password, firstName, lastName))
    }
}

export default connect(null, mapDispatchToProps)(Register);