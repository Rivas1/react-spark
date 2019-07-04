import React, { Component } from 'react';
import Cars from './Cars';

import "../stylesheets/home2-style.css";

class Home2 extends Component {
	state = {
		cars: [
			{
				id: 1,
				title: '2004 FORD MUSTANG',
				price: '25,000.00',
				rating: '5 OUT OF 5',
				description: 'One of the most powerful Mustangs ever made, 390HP/390TQ',
				color: 'red',
				image: '../../assets/images/2004_ford_mustang_cobra_yellow',
			},
			{
				id: 2,
				title: '2017 FORD MUSTANG',
				price: '36,000.00',
				rating: '5 OUT OF 5',
				description: 'With the DOHC design, Ford squeezed out 435HP/400TQ from a 5.0L',
				color: 'green',
				image: '../../assets/images/2019_ford_mustang_gt_white',
			},
			{
				id: 3,
				title: '2017 CHEVROLET CAMARO',
				price: '$41,000.00',
				rating: '5 OUT OF 5',
				description: 'Old-schoool push-rod design making 455HP/455TQ from its 6.2L',
				color: 'blue',
				image: '../../assets/images/2018_chevy_camaro_ss_blue',
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