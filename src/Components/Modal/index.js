import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";
import './Modal.css';

class Modal extends Component {
    
  constructor(props) {
    super(props);
      
      this.onHandlerClick = this.onHandlerClick.bind(this);
    }
   
    onHandlerClick() {
      
    }

	render () {

		return (
        <div className="modal-wrap">
		<div className="modal">

            <h3 className="modal-head">Login error</h3>

            <div className="modal-text">
                <p>{this.props.errorText}</p>
            </div>

            <div className="btn-group clearfix">
                <div onClick={this.props.onError} className="modal-btn submit">OK</div>
            </div>
                        
        </div>
        </div>
		)}
}

export default connect(
  (store) => {return {
    hasErrored: store.appState.loginHasErrored,
  }},
  (dispatch) => {return {
    authAction: (url,options,effect)     => { dispatch(acyncActions.Auth(url,options,effect)); },
  }}
  
  )(Modal);