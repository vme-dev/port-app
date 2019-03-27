import React from 'react';

import BtnBack from '../Btn/Back';


export default function (props) {
	return (
		<div className="header">
            	<BtnBack backUrl = {props.backUrl}/>
		<div className="header-wrap">
			<h2>Admin Panel</h2>
		</div>
		</div>
		);
}