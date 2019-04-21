import React, { Component } from 'react';

import { connect } from 'react-redux';

import Photo from './Photo';
import LinkedList from './LinkedList';

import './Menu.css';


let NavMenu = (
    <div className="menu">
      <div className="menu_wrap">
        <div className="menu-left-block clearfix">

            <h2 className="menu-head">JavaScript Developer</h2>
            <Photo />
            <h2 className="menu-my_name"><span className="my_name-first">Вадим</span><span className="my_name-second">Малёваный</span></h2>
        
        </div>
          <LinkedList />
      </div>
    </div>
  );
let Header = (
    <div className="header">
      <div className="header_wrap">
        <div className="header-left-block clearfix">

            <Photo />
            <h2 className="header-head">JavaScript Developer</h2>
            <h2 className="header-my_name"><span className="my_name-first">Вадим</span><span className="my_name-second">Малёваный</span></h2>
        
        </div>
          <LinkedList/>
      </div>
    </div>
);



class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listSwitch: true,
      isAdaptive: false,
      
    };
    
    this.onListSwitch = this.onListSwitch.bind(this);
    }

    onListSwitch () {
      
      this.setState({listSwitch:!this.state.listSwitch});
      
    }
    componentDidMount() {
      var resize = function(e){
          console.log(document.documentElement.clientWidth);
        };
        (function(){
        var time;
        window.onresize = function(e){
          if (time)
            clearTimeout(time);
          time = setTimeout(function(){
            resize(e);
          },100);
        }
        })();
        
    }

    componentWillMount() { 
      let winW = document.documentElement.clientWidth;
      if (winW < 991) {
        this.setState({listSwitch:false});
      }
    }

	render () {
		return (
      <div>
		    { this.state.isAdaptive?NavMenu:Header  }
      </div>
		)}
}

export default connect(
  (store) => {return {
    index: store,
  }},
  (dispatch) => {return {   }}
  )(Menu);