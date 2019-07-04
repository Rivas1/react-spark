import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "../stylesheets/card-style.css";
import img1 from '../../assets/images/2004_ford_mustang_cobra_yellow.jpg';
import img2 from '../../assets/images/2018_chevy_camaro_ss_blue.jpg';
import img3 from '../../assets/images/2019_ford_mustang_gt_white.jpg';


export class Car extends Component {
	getStyle = () => {
		return {
			// backgroundColor: this.props.car.color
			backgroundColor: 'inherit',
			borderLeft: '8px solid',
			borderLeftColor: this.props.car.color
		}
	}


	render() {
		return (
			<div style={this.getStyle()} className="card text-center">
				<div className='overflow'>
					<img src={img1}  alt='Image' className="card-img-top"/>
				</div>
				<div className='card-body'>
					<h4 className="card-title">{this.props.car.title}</h4>
					<p className='card-text'>
						{this.props.car.price}
					</p>
					<a href="#" className='btn btn-outline-success'>Go Anywhere</a>
				</div>
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
