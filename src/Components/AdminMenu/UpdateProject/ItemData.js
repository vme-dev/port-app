import React from 'react';

export default function (props) {
	return (
		<li className="item-data_inner">
                    <p>{props.data.name}</p>
                    <p>{props.data.description}</p>
                    <p>{props.data.date}</p>
                    <p>{props.data._id}</p>
                    {/* <img src={logo} className="card-img" alt="logo" /> */}
                    <span onClick={ () => props.toDelete(props.data._id)}>Delete</span>
                    <span>  </span>
                    <span>Updata</span>
        </li>
		);
}