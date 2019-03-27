import React from 'react';
import { Link } from "react-router-dom";



export default function (props) {
	
	return (
		<div className="btn back">
			<Link to={props.backUrl} >
				<div>Back</div> 
			</Link>
		</div>
		);
}