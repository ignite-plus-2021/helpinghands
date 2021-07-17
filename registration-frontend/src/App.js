
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import login from './Components/login';

function App() {
  return (
   
      //<Register></Register>
      <Router>
    <Switch>
	  <Route exact path='/'  component={Register}/>
		<Route exact path='/login' component={login} />
		</Switch>
    </Router>

      );
   
  }

export default App;

