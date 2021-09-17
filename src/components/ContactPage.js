import React from 'react'

import { useOktaAuth } from '@okta/okta-react';
import { Route, useHistory, Switch } from 'react-router-dom';
 import { Security,  LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { oktaAuthConfig, oktaSignInConfig } from '../config';
import UserLogin from './UserLogin'


// import AppWithRouterAccess from '../AppWithRouterAccess';
 const oktaAuth1 = new OktaAuth(oktaAuthConfig);

export default function ContactPage() {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    const customAuthHandler = () => {
        history.push('/login');
    };
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
       history.replace(toRelativeUrl(originalUri, window.location.origin));
        // history.push('/login')
    }
    
    
    if (!authState) return null;

    const login = async () => history.push('/login');

    const logout = async () =>
    {
        oktaAuth.signOut();
        // history.push('/contact')

    }
    // {
    //     // sessionStorage.setItem("userToken", '');
    //     // sessionStorage.clear();
    //     // history.push("/contact");
        
    // }
    // eslint-disable-next-line no-const-assign
    // logout= oktaAuth.signInWithRedirect({originalUri: '/contact'});

    const button = authState.isAuthenticated ?
        <button onClick={logout} className="btn-primary">Logout</button> :
        <button onClick={login} className="btn-primary">Login</button>;

    return (
        <div className="contact">
            <h1>Contact Page</h1>
            <p>this is the contact page</p>
            {button}
           
            {/* <Redirect to={{ pathname: '/contactpage' }}/>  */}
            {/* <AppWithRouterAccess1 /> */}
              <Security
              oktaAuth={oktaAuth1}
                onAuthRequired={customAuthHandler}
                restoreOriginalUri={restoreOriginalUri}
            >
                <Switch>
                    {/* <Route path='/contact' exact={true} component={ContactPage} /> */}
                    
                    <Route path='/login' render={() => <UserLogin config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                    
                    
                </Switch>
                
            </Security>
        </div>
     )


    
}
