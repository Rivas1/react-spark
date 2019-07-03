import React, { Component } from 'react';
import Car from './Car';
import PropTypes from 'prop-types';
class Cars extends Component {
	render () {
		return (
			
				<div className='container-fluid d-flex justify-content-center'>
					<div className='row'>
						{this.props.cars.map((car) => (
							<div className='col-md-4'>
							<Car key={car.id} car={car} />
							</div>
						))}
					</div>
				</div>
				
		
		);
	}
}


// PropTypes
Cars.propTypes = {
	cars: PropTypes.array.isRequired
}

export default Cars;