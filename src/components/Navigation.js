import {AppBar,Toolbar, Typography,makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyles=makeStyles({
   header:{
       background:'#111111'
   },
   tabs:{
          color:'#ffffff',
          textDecoration:'none',
          marginRight:20,
          fontSize:20
   }
})
const Navbar=()=>{
    const classes=useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
             <NavLink className={classes.tabs} to="./" exact> Home  </NavLink>
             <NavLink className={classes.tabs}to="/about" exact>About  </NavLink>
             <NavLink className={classes.tabs}to="/contact" exact> Contact  </NavLink>
             <NavLink className={classes.tabs}to="/userlogin" exact> UserLogin  </NavLink>
             <NavLink className={classes.tabs}to="/allusers" exact> All users  </NavLink>
            
                 
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;

