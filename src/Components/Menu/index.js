import React, { Component } from 'react';


import { connect } from 'react-redux';

import * as action from "../../_redux/actions.js";
import Photo from './Photo';
import LinkedList from './LinkedList';

import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listSwitch: true,
      
    };
    
    this.onListSwitch = this.onListSwitch.bind(this);
    }

    onListSwitch () {
      
      this.setState({listSwitch:!this.state.listSwitch});
      
    }

    componentWillMount() { 
      let winW = document.documentElement.clientWidth;
      if (winW < 991) {
        this.setState({listSwitch:false});
      }
    }

	render () {
    
		return (
		<div className="menu">
            <div className="menu_wrap">
            <div className="menu-left-block clearfix">
                <h2 className="menu-head">JavaScript Developer</h2>

                <Photo />

                <h2 className="menu-my_name"><span className="my_name-first">Вадим</span><span className="my_name-second">Малёваный</span></h2>
            </div>

                <LinkedList active={this.state.listSwitch} listSwitch={this.onListSwitch}/>

            </div>
        </div>
		)}
}

export default connect(
  (store) => {return {
    index: store,
  }},
  (dispatch) => {return {   }}
  )(Menu);