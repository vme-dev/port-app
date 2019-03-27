import React from 'react';
import logo from '../../logo.svg';

export default function (props) {
	return (
		<div className="card">
		<div className="card-wrap">
		<div className="card-wrap_inner">
			{props.data.name}
			<p>{props.data.description}</p>
			<p>{props.data.date}</p>
			{/* <img src={logo} className="card-img" alt="logo" /> */}
		</div>
		</div>
		</div>
		);
}