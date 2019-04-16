import React, { Component } from 'react';


import { connect } from 'react-redux';

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";

import Mail from "./Mail";
import './AdminMail.css';
import BtnHome from '../Common/Btn/BtnHome.js';

class AdminMail extends Component {
  constructor(props) {
    super(props);
    }

    componentDidMount() {

      if (!this.props.mail.length) {
          this.props.getMail( 'auth/get-mail',
                                { method:'get' },
                                action.GET_MAIL_SUCCESS
          );
      }
    }
  

	render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if ( this.props.isLoading )  {
        return <p>Loading…</p>;
    }
    
		return (
		<div className="admin-mail">
      <h2 className="admin-mail-head">Admin mail</h2>

      <BtnHome />

      <div className="admin-mail-block">
          <ul className="admin-mail-list">

            {this.props.mail.map((item) => (
                <Mail item={item} key={item._id} />
            ))}
          </ul>
        </div>
    </div>
	)}
}

export default connect(
  (store) => {return {
    mail: store.admin.mail,
    hasErrored: store.admin.itemsHasErrored,
    isLoading: store.admin.itemsIsLoading
  }},
  (dispatch) => {return {
        getMail: (url,options,effect)     => { dispatch(acyncActions.fetchApi(url,options,effect)); }
  }}
  )(AdminMail);