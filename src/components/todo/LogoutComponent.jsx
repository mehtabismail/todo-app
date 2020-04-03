import React, {Component} from 'react'

class LogoutComponent extends Component{
    render() {
        return(
            <div className="Logout">  
                <h1>
                    <strong>You are Logged Out !</strong>
                </h1>
                <span>
                    Thank you for using our component...
                </span>
            </div>
        );
    }
}

export default LogoutComponent;