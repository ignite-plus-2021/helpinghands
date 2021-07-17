
import './App.css';
import Register from './Components/Register';

function App() {
  return (
   
     <Router>
    <Switch>
	  <Route exact path='/'  component={Register}/>
		<Route exact path='/login' component={login} />
		</Switch>
    </Router>
      );
   
  }

export default App;
