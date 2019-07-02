import React, { Component } from 'react';
import Cars from './Cars';

class Home2 extends Component {
	state = {
		cars: [
			{
				id: 1,
				title: '2004 FORD MUSTANG COBRA',
				price: '25,000',
				rating: '5 OUT OF 5',
				description: 'One of the most powerful Mustangs ever made, 390HP/390TQ',
				color: 'red',
			},
			{
				id: 2,
				title: '2017 FORD MUSTANG GT',
				price: '36,000',
				rating: '5 OUT OF 5',
				description: 'With the DOHC design, Ford squeezed out 435HP/400TQ from a 5.0L',
				color: 'green',
			},
			{
				id: 3,
				title: '2017 CHEVROLET CAMARO SS',
				price: '41,000',
				rating: '5 OUT OF 5',
				description: 'Old-schoool push-rod design making 455HP/455TQ from its 6.2L',
				color: 'blue',
			},
		]
	}

render () {
	return (
		<div className="Home2">
			<Cars cars={this.state.cars} />
		</div>
		);
	}

}

export default Home2;