import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img1 from "../../assets/images/2019_ford_mustang_gt_white.jpg";
import "../stylesheets/card-style.css";


export class Car extends Component {
	getStyle = () => {
		return {
			// backgroundColor: this.props.car.color
			backgroundColor: '#f4f4f4',
			borderLeft: '15px solid',
			borderLeftColor: this.props.car.color
		}
	}


	render() {
		return (
			<div style={this.getStyle()} className="card text-center">
				
				<div className='overflow'>
					<img src={img1} alt='Image 1' className="card-img-top"/>
				</div>
				<div className='card-body text-dark'>
					<h4 className="card-title">{this.props.car.title}</h4>
					<p className='card-text text-secondary'>
						{this.props.car.description}
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
