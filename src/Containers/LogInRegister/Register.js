import React, { Component } from 'react';

class Register extends Component{
    render(){
        return(
            <form>
                <label>Email</label>
                <input type='text' />
                <br />
                <label>First Name</label>
                <input type='text' />
                <label>Last Name</label>
                <input type='text' />
                <br/>
                <label>Password</label>
                <input type='text' />
                <label>Comfirm Password</label>
                <input type='text' />
                <br />
                <input type='submit' />
            </form>
        )
    }
}

export default Register;