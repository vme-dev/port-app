import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import * as action from "./_redux/actions.js";

import Menu from './Components/Menu';
//import CardBlock from './Components/CardBlock';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';


class App extends Component {
 
  render() {
    console.log(this.props.store)
    return (
      
      <div className="App">

        <div className="content">
          <Menu />

          <div className="left-block">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
                  
            <Route component={NoMatch} />
          </Switch> 
          </div>
        </div>
       
      </div>
      
      
    );
  }
}

export default connect(
  (store) => {return {
    appStste: store.appStste,
    store: store
  }},
  (dispatch) => {return {
    onTudaClick: (e)     => { dispatch(action.CHANGE_STOPS(e)); },
  }}
  
  )(App);