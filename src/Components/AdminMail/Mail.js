import React from 'react';

export default function (props) {
	
	return (
		<li className="mail-item">
            <div className="mail-item-wrap">
                <div className="mail-head">
                    <div className="mail-name">Name: {props.item.name}</div>
                    <div className="mail-email">Email: {props.item.email}</div>
                </div>

                <p className="mail-text">{props.item.text}</p>

                <div className="mail-time">Time: {props.item.date}</div>
                <div className="mail-del"><span className="mail-del-icon">X</span></div>
            </div> 
		</li>
		);
}
