import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import PastEvents from './Components/PastEvents';
import EditEvents from './Components/EditEvents';
import LeaderRR from './Components/LeaderRR';
//import home from './Components/home';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path = '/pastevents' component = {PastEvents} />
		        	<Route exact path = '/editevents' component = {EditEvents} />
        			<Route exact path = '/leaderrr' component = {LeaderRR} />
		    </Switch>
		</Router>
	);
}

export default App;
