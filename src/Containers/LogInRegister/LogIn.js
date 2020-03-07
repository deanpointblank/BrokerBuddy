import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <form>
                <label>Email</label>
                <input type='text' />
                <label>Password</label>
                <input type='text' />
            </form>
        )
    }
}

export default Login;