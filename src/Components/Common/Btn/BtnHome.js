import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default function (props) {
	
	return (
		<div className="btn-home">
            <Link to="/">{"< Home page"}</Link>
        </div>
		);
}