
  
 import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";
import Work from '../Work';

class PrivateRoute extends Component {
    
  constructor(props) {
    super(props);
    }

	render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if ( this.props.isLoading )  {
        return <p>Loading…</p>;
    }

    return (
        <Route  render={props =>
                                  this.props.auth ? (
                                    <Work />
                                  ) : (
                                    <Redirect
                                      to={{
                                        pathname: "/login",
                                        state: { from: props.location }
                                      }}
                                    />
                                  )
                                }
                                 />
      )
    }
}

export default connect(
  (store) => {return {
    auth: store.appState.auth,
    hasErrored: store.itemsHasErrored,
    isLoading: store.itemsIsLoading
  }},
  (dispatch) => {return {
    sendMail: (url,options,effect)     => { dispatch(acyncActions.Auth(url,options,effect)); },
  }}
  
  )(PrivateRoute);

  function Protected() {
    return <h3>Protected</h3>;
  }