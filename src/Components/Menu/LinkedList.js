import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/icomoon/menu';


import './LinkedList.css';

export default function (props) {
	return (
        <React.Fragment>
        {props.active?<div className="linked-list-switch" onClick={props.listSwitch}>
                        <span className="linked-list-icon"><Icon size={20} icon={menu} /></span>
                      </div>:
                      <div className="linked-list-switch active" onClick={props.listSwitch}>
                        <span className="linked-list-icon"><Icon size={20} icon={menu} /></span>
                      </div>}
        
        {props.active?<ul className="linked-list">
            
            <li className="linked-item">
                <Link to="/">About me</Link>
            </li>
            <li className="linked-item">
                <Link to="/work">My work</Link>
            </li>
            <li className="linked-item">
                <Link to="/contact">Contact me</Link>
            </li>

            <li className="">
                <Link to="/admin">
            <div className="admin-login_btn">Log In</div>
        </Link>
            </li>
		</ul>:null}
        
        </React.Fragment>
		);
}