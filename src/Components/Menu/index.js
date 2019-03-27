import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as action from "../../_redux/actions.js";
import Photo from './Photo';
import LinkedList from './LinkedList';

import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    }
	render () {
    
		return (
		<div className="menu">
            <div className="menu_wrap">
                <h2 className="menu-head">JavaScript Developer</h2>
                
                <Photo />

                <h2 className="menu-my_name"><span className="my_name-first">Вадим</span><span className="my_name-second">Малёваный</span></h2>
                
                <LinkedList />

                <Link to="/admin">
                  <div className="admin-login_btn">Log In</div>
                </Link>
            </div>
        </div>
		)}
}

export default connect(
  (store) => {return {
    index: store,
  }},
  (dispatch) => {return {
    changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },
  }}
  
  )(Menu);