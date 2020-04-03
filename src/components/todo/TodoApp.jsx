import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './TodoApp.css'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodosComponent from './TodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
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
export default TodoApp;