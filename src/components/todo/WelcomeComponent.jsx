import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    render() {
        return(
            <div>
                <div className="container">
                </div>
                <div>
                    <h1>Welcome</h1>
                </div>
                <div>{this.props.match.params.name} if you want to set Todo List <Link to="/todo">click Here</Link></div>
            </div>
        );
    }
}

export default WelcomeComponent;