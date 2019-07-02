import React, { Component } from 'react';
import Car from './Car';
import PropTypes from 'prop-types';
class Cars extends Component {
	render () {
		return this.props.cars.map((car) => (
			<Car key={car.id} car={car} />
			));
	}
}


// PropTypes
Cars.propTypes = {
	cars: PropTypes.array.isRequired
}

export default Cars;