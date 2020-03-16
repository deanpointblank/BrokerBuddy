import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../../Actions/UserActions'

import Background from '../../CSS/Images/Gold_background.png'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    sectionStyle = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    checklogin = user =>{
        if(user){
            this.props.history.push('/')
        }
    }

    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        this.props.login(this.state.email, this.state.password)
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){

        {this.checklogin(this.props.loggedIn)}

        return(
            <section>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-sm-5 my-auto">
                            <form onSubmit={event => this.handleOnSubmit(event)} className='justify-content-center'>
                                <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input 
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={this.state.email}
                                    onChange={event => this.handleOnChange(event)}
                                    className="form-control"
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    value={this.state.password}
                                    onChange={event => this.handleOnChange(event)}
                                    className="form-control"
                                />
                                </div>
                                <input type='submit' className='btn btn-primary'/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.CurrentUserReducer.logged_in
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);