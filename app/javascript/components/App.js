import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import Home2 from './Home2';

class App extends React.Component {
	
	render () {
		return (
			<div> 
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route exact path="/home2" component={Home2} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/signin" component={SignIn} />
				</BrowserRouter>
			 </div>
		)
	}
}
 
export default App