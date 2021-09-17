import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';


export default function AllUsers() {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
  
    if (!authState) return null;
  
    const login = async () => history.push('/login');
  
    const logout = async () => oktaAuth.signOut();
  
    const button = authState.isAuthenticated ?
      <button onClick={logout} className="btn-primary">Logout</button> :
      <button onClick={login} className="btn-primary">Login</button>;
   
    return (
        <div>
            <h1>All Users</h1>
            <table className='table'>
               <thead >
                   <tr>
                       <th>S.NO</th>
                       <th>Name</th>
                       <th>Email</th>   
                   </tr>
               </thead>
                 <tbody>
                     <tr>
                         <td>1</td>
                         <td>sabitha</td>
                         <td>sabithamanthati@gmail.com</td>
                     </tr>
                     <tr>
                         <td>2</td>
                         <td>premkumar</td>
                         <td>premkumar@gmail.com</td>
                     </tr>
                     <tr>
                         <td>3</td>
                         <td>Ram</td>
                         <td>ram@gmail.com</td>
                     </tr>
                     <tr>
                         <td>4</td>
                         <td>Hari</td>
                         <td>hari@gmail.com</td>
                     </tr>
                 </tbody>
                </table>
            <div>
            {button}
         
           
            </div>
        </div>
    )
}
