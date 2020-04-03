import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn = AuthenticationService.userLoggedIn();
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Todo Application</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item ">
                        {isUserLoggedIn && <Link className="nav-link" to="welcome/mehtabismail" >Home</Link>}<span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        {!isUserLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link>}
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;