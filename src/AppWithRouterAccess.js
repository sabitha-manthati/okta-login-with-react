import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';
import UserLogin from  './components/UserLogin';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import AllUsers from './components/AllUsers';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    // history.replace(toRelativeUrl(originalUri, window.location.origin));
    history.push('/contact')
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
        <Navigation />
      <Switch>
        <Route path='/' exact={true} component={HomePage} />
        <SecureRoute path='/userlogin' component={UserLogin} />
        {/* <SecureRoute path='/contact' component={ContactPage} />  */}
        <Route path='/login' render={() => <UserLogin config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} />
        
        <Route path="/contact"  exact component={ContactPage}/>
        <Route path="/about"  exact component={AboutPage}/> 
        <Route path="/allusers"  exact component={AllUsers}/> 
       
      </Switch>
    </Security>
    
  );
};
export default AppWithRouterAccess;
