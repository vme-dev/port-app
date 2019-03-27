import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

import './LinkedList.css';

export default function (props) {
	return (
		<ul className="linked-list">
            
            <li className="linked-item">
                <Link to="/">About me</Link>
            </li>
            <li className="linked-item">
                <Link to="/work">My work</Link>
            </li>
            <li className="linked-item">
                <Link to="/contact">Contact me</Link>
            </li>

		</ul>
		);
}