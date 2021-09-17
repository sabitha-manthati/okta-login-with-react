import React from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import '../App.css'


const HomePage = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push('/login');

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button onClick={login}>Login</button>;

  return (
    <div className="home">
     
     {/* <Link to='/'>Home</Link><br/>
      <Link to='/userlogin'>userlogin</Link><br/>
      {button} */}
      <h1>welcome to okta</h1>
     
    </div>
  );
};
export default HomePage;

// import React from 'react'

// export default function HomePage() {
//     return (
//         <div>
//             <h1>HomePage Page</h1>
//             <p>this is the Home page</p>
//         </div>
//     )
// }


