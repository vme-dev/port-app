import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

import AdminMail from '../AdminMail';

class PrivateRoute extends Component {
    
  constructor(props) {
    super(props);
    }

	render () {

    return (
        <Route  render={props =>
                                  this.props.auth ? (
                                    <AdminMail />
                                  ) : (
                                    <Redirect to={{pathname: "/login", tate: { from: props.location }}}/>
                                  )
                                }
          />
      )
    }
}

export default connect(
  (store) => {return {
    auth: store.appState.auth
  }},
  (dispatch) => {return {   }}
  )(PrivateRoute);

