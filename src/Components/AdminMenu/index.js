import React, { Component } from 'react';


import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link, match } from "react-router-dom";



import * as action from "../../_redux/actions.js";
import AddProject from './AddProject.js';


class AdminMenu extends Component {
  constructor(props) {
    super(props);
    }

	render() {
        return (

      <div>
        <ul>
          <li>
            <Link to="/admin/" >Home</Link>
          </li>
          <li>
            <Link to="/admin/update-prod" >About</Link>
          </li>
          <li>
            <Link to="/admin/info">Info</Link>
          </li>
        </ul>

        <hr />
        
        
      </div>

        );
    }
}

export default connect(
  (store) => {return {
    adminMenuItems: store.appState["admin-menu-items"]
  }},
  (dispatch) => {return {
    changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },
  }}
  
  )(AdminMenu);