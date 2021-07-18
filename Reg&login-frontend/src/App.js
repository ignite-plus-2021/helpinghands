
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import login from './Components/login';
import home from './Components/home';
function App() {
  return (
   
      //<Register></Register>
      <Router>
    <Switch>
	  <Route exact path='/Register'  component={Register}/>
		<Route exact path='/' component={login} />
    <Route exact path='/home'  component={home}/>
		</Switch>
    </Router>

      );
   
  }

export default App;
