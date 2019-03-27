import React, { Component } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link ,match} from "react-router-dom";

import * as action from "../../_redux/actions.js";

import Menu from '../../Components/Menu';
import CardBlock from '../../Components/CardBlock';
import Header from '../../Components/Header';
import AdminMenu from '../AdminMenu';
import AddProject from '../AdminMenu/AddProject.js';
import UpdateProject from '../AdminMenu/UpdateProject';
import Info from '../AdminMenu/Info.js';

const Home = () => {
 
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class Admin extends Component {
    constructor(props) {
      super(props);
      }
  
  
      render() {          
        
        return (
          <div>
            <Header backUrl = {"/"}/>
            <AdminMenu />

           
              <Switch>
                <Route exact path="/admin/" component={ AddProject } />
                <Route path="/admin/update-prod" component={ UpdateProject } />
                <Route path="/admin/info" component={ Info } />
              </Switch>
            
            
          </div>
        );
      }
  }

  export default connect(
    (store) => {return {
      index: store,
    }},
    (dispatch) => {return {
      changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },
    }}
    
    )(Admin);