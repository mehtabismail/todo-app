import React, {Component} from 'react'
import './TodoApp.css'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor()
    {
        super();
        this.state = {
            username: 'mehtabismail',
            password: '',
            loginfailed: false,
            loginsuccess: false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange=this.handleChange.bind(this)   
        this.loginClicked=this.loginClicked.bind(this) 
    }

    loginClicked() {
        if(this.state.username==='mehtabismail' && this.state.password==='dummy')
        {
            // this.setState({loginsuccess: true});
            // this.setState({loginfailed: false})
            //prompt("successfull Login")
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        }    
        else
        {
            this.setState({loginsuccess: false});
            this.setState({loginfailed: true});
            //prompt("Login Faied")
        }
            
    }


    handleChange(event) {
        //console.log(event.target.value);
        this.setState({[event.target.name]:event.target.value});
    }

    // handleUsernameChange(event) {
    //     //console.log(event.target.value);
    //     this.setState({username:event.target.value});
    // }

    // handlePasswordChange(event) {
    //     //console.log(event.target.value);
    //     this.setState({password:event.target.value});
    // }
    

    render() {
        return(
            <div className="LoginPanel">
                <ShowInvalidLoginMessage loginfailed={this.state.loginfailed}/>
                {/* {this.state.loginsuccess && <div>Login successfull</div>} */}
                <div>
                    Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br></br>
                    Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="PanelButton">
                    <button className="LoginButton" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

function ShowInvalidLoginMessage(props) {
    if(props.loginfailed)
    {
        return <div className="alert alert-warning">Login Failed</div>
    }
    return null;
}

// function ShowSuccessLoginMessage(props) {
//     if(props.loginsuccess)
//     {
//         return <div>Login successfull</div>
//     }
//     return null;
// }

export default LoginComponent;