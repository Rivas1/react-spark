import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import SignIn from './SignIn'


class App extends React.Component {
	render () {
		return (
			<div> 
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/signin" component={SignIn} />
				</BrowserRouter>
			 </div>
		)
	}
}
 
export default App