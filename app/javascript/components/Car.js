import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Car extends Component {
	getStyle = () => {
		return {
			backgroundColor: this.props.car.color
		}
	}


	render() {
		return (
			<div style={this.getStyle()}>
				<p> {this.props.car.title} </p>
			</div>
		);
	}
}

// PropTypes
 Car.propTypes = {
 	car: PropTypes.object.isRequired
 }

// Unused inline style. Must use single curly braces when calling variables for inline styling
const carStyle = {
	backgroundColor: 'yellow'
}
export default Car
