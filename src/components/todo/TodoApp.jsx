import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './TodoApp.css'

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todo" component={TodosComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                    
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
            
        );
    }
}

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
                <ShowSuccessLoginMessage loginsuccess={this.state.loginsuccess}/>
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


class WelcomeComponent extends Component{
    render() {
        return(
            <div>
                <NavBarComponent></NavBarComponent>
                <div>Welcome {this.props.match.params.name} if you want to set Todo List <Link to="/todo">click Here</Link></div>
            </div>
        );
    }
}

class TodosComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            todos : [
                        { id : 1, description : 'expert in react', done: false, date: new Date()},
                        { id : 2, description : 'expert in java', done: false, date: new Date()},
                        { id : 3, description : 'expert in C++', done: false, date: new Date()}
                    ]
            
           
        }

    }
    render() {
        return(
            <div>
                <NavBarComponent></NavBarComponent>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>is completed</th>
                                <th>target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.date.toString()}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

class NavBarComponent extends Component{
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Todo Application</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item ">
                        <Link class="nav-link" to="welcome/mehtabismail" >Home</Link><span class="sr-only">(current)</span>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/logout">Logout</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

class FooterComponent extends Component{
    render() {
        return(
            <div className="Footer">
                <span className="text-muted">
                    All Rights reserved 2020 @mehtabismail
                </span>
            </div>
        );
    }
}

function ShowInvalidLoginMessage(props) {
    if(props.loginfailed)
    {
        return <div>Login Failed</div>
    }
    return null;
}

function ShowSuccessLoginMessage(props) {
    if(props.loginsuccess)
    {
        return <div>Login successfull</div>
    }
    return null;
}

function ErrorComponent(){
    return(
        <div className="Error">Error Occoured</div>
    );
}

export default TodoApp;