class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('login successfull');
        sessionStorage.setItem('authenticatedUser', username, password);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    userLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null)
        return false
        return true
    }
}

export default new AuthenticationService()