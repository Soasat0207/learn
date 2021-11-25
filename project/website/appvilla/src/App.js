import './App.css';
import './assets/css/grid.css'
import './assets/css/rest.css'
import './assets/css/base.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './page'

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} extra></Route>
     </Switch>
   </Router>
  );
}

export default App;
