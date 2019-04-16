import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import * as action from "./_redux/actions.js";

import Menu from './Components/Menu';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';


class App extends Component {
 
  render() {
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
  (dispatch) => {return {  }}
  )(App);