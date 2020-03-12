import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Stock from '../Components/Stock';

class WatchlistContainer extends Component {
    render(){
        return(
            <div className="container">
                <h1>This is the Stock Watchlist page</h1>
                <div className="row">
                    <table className="table col-9">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Stock />
                        </tbody>
                    </table>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default WatchlistContainer;