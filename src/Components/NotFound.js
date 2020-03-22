import React, { Component } from 'react';
import Rocket from '../CSS/Images/Rocket_Explosion.png';

export default class NotFound extends Component {

    render(){

        return(
            <div className="text-center">
                <img src={Rocket} className="w-50 p-3"/>
                <h3>Whoops, looks like the page you're looking for doesn't exist </h3>
                <p>If you came from our stock search, we are constanly adding new stock to our site. Be sure to check in again later.</p>
            </div>
        )
    }
}