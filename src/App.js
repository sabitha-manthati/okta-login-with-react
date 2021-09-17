
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


function App() {
  return (
    <div className="App">
      
      {/* <Router>
    <AppWithRouterAccess/>
  </Router> */}
  <AppWithRouterAccess/>
    </div>
  );
}

export default App;
